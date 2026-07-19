(() => {
  const LIVE_SIGNAL_ENDPOINT = "/api/live-signal";
  const DIRECT_LIVE_SIGNAL_ENDPOINT = "https://nightmens.com/api/live/signal";
  const STORE_NO = "4";

  const $ = (id) => document.getElementById(id);
  const status = $("live-info-status");
  const roomUpdated = $("live-room-updated");
  const roomCount = $("live-room-count");
  const waitCount = $("live-wait-count");
  const roomDetail = $("live-room-detail");
  const entryCount = $("live-entry-count");
  const entryList = $("live-entry-list");

  if (!status || !roomUpdated || !roomCount || !waitCount || !roomDetail || !entryCount || !entryList) {
    return;
  }

  const unwrapPayload = (payload) => {
    let current = payload;
    for (let depth = 0; depth < 4; depth += 1) {
      if (!current || typeof current !== "object" || Array.isArray(current)) break;
      if (Array.isArray(current.content)) return current;
      if (Array.isArray(current.items)) return { ...current, content: current.items };
      if (Array.isArray(current.list)) return { ...current, content: current.list };
      if (Array.isArray(current.rows)) return { ...current, content: current.rows };
      current = current.data ?? current.result ?? current.body ?? current.payload;
    }
    return { content: [] };
  };

  const getContent = (payload) => unwrapPayload(payload).content;
  const getTotalElements = (payload, fallback) => {
    const normalized = unwrapPayload(payload);
    return normalized.totalElements ?? normalized.totalCount ?? normalized.total ?? normalized.count ?? fallback;
  };
  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  const formatValue = (value) => (value === null || value === undefined || value === "" ? "-" : String(value));
  const toDate = (value) => {
    if (!value) return null;
    const date = new Date(String(value).replace(" ", "T"));
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const formatUpdatedAt = (value) => {
    const date = toDate(value);
    if (!date) return "방금 확인";
    return new Intl.DateTimeFormat("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const formatEntryTime = (value) => {
    const date = toDate(value);
    if (!date) return "출근";
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const parseRoomDetail = (value) => {
    if (!value) return [];

    if (typeof value === "object" && !Array.isArray(value)) {
      return Object.entries(value);
    }

    try {
      const parsed = JSON.parse(String(value));
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return Object.entries(parsed);
      }
    } catch (_error) {
      // The upstream API normally returns JSON text, but keep the raw value visible if it changes.
    }

    return [["상세", value]];
  };

  const normalizeLiveSignal = (data) => ({
    storeNo: data?.storeNo || STORE_NO,
    room: data?.room || { content: [] },
    entry: data?.entry || { content: [] },
  });

  const logLiveSignalPayload = (label, payload) => {
    console.log(`[LiveSignal] ${label} payload:`, payload);
  };

  const buildDirectLiveSignalUrl = (type, limit) => {
    const apiUrl = new URL(DIRECT_LIVE_SIGNAL_ENDPOINT);
    apiUrl.searchParams.set("storeNo", STORE_NO);
    apiUrl.searchParams.set("type", type);
    apiUrl.searchParams.set("limit", String(limit));
    return apiUrl;
  };

  const fetchDirectLiveSignal = async () => {
    const fetchType = async (type, limit) => {
      const apiUrl = buildDirectLiveSignalUrl(type, limit);
      console.log(`[LiveSignal] fetching direct ${type}: ${apiUrl.href}`);

      const response = await fetch(apiUrl, { cache: "no-store" });
      if (!response.ok) throw new Error(`Direct live signal request failed: ${response.status}`);

      const payload = await response.json();
      logLiveSignalPayload(`direct ${type}`, payload);
      return payload;
    };

    const [room, entry] = await Promise.all([fetchType("room", 1), fetchType("entry", 200)]);
    return { storeNo: STORE_NO, room, entry };
  };

  const fetchLiveSignal = async () => {
    try {
      console.log(`[LiveSignal] fetching proxy: ${LIVE_SIGNAL_ENDPOINT}`);
      const response = await fetch(LIVE_SIGNAL_ENDPOINT, { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      logLiveSignalPayload("proxy", data);
      if (!response.ok) throw new Error(data.message || `Live signal request failed: ${response.status}`);
      return normalizeLiveSignal(data);
    } catch (proxyError) {
      console.warn("Live signal proxy failed; retrying direct endpoint:", proxyError);
      return fetchDirectLiveSignal();
    }
  };

  const renderRoomDetails = (room) => {
    const roomEntries = parseRoomDetail(room?.roomDetail);

    if (!roomEntries.length) {
      roomDetail.innerHTML = '<p class="live-empty">룸 상세 정보가 없습니다.</p>';
      return;
    }

    roomDetail.innerHTML = `<div class="room-floor"><div class="room-type-grid">${roomEntries
      .map(([key, value]) => `<div class="room-type"><span>${escapeHtml(formatValue(key))}</span><strong>${escapeHtml(formatValue(value))}</strong></div>`)
      .join("")}</div></div>`;
  };

  const renderEntries = (entries) => {
    if (!entries.length) {
      entryList.innerHTML = '<p class="live-empty">오늘 엔트리 정보가 없습니다.</p>';
      return;
    }

    entryList.innerHTML = entries
      .map((entry) => {
        const name = entry.workerName || entry.name || entry.nickname || "이름 미공개";
        const detail = entry.entryStatus || entry.status || entry.workTime || entry.time || formatEntryTime(entry.createdAt);
        return `<span class="entry-chip"><span>${escapeHtml(name)}</span><strong>${escapeHtml(detail)}</strong></span>`;
      })
      .join("");
  };

  const loadLiveSignal = async () => {
    try {
      const data = await fetchLiveSignal();
      const rooms = getContent(data.room);
      const entries = getContent(data.entry);
      console.log("[LiveSignal] normalized room rows:", rooms);
      console.log("[LiveSignal] normalized entry rows:", entries);
      const room = rooms[0] || {};

      roomCount.textContent = formatValue(room.roomInfo ?? room.availableRoom ?? room.availableRooms ?? room.roomCount);
      waitCount.textContent = formatValue(room.waitInfo ?? room.waiting ?? room.waitCount);
      roomUpdated.textContent = formatUpdatedAt(room.snapshotAt || room.updatedAt || room.createdAt);
      entryCount.textContent = `총 ${getTotalElements(data.entry, entries.length)}명`;
      renderRoomDetails(room);
      renderEntries(entries);
      status.textContent = `storeNo ${data.storeNo || STORE_NO} 기준 실시간 정보를 불러왔습니다.`;
    } catch (error) {
      console.error("Live signal render failed:", error);
      status.textContent = "실시간 정보를 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.";
      roomUpdated.textContent = "확인 실패";
      roomDetail.innerHTML = '<p class="live-empty">룸 상세 정보를 불러오지 못했습니다.</p>';
      entryList.innerHTML = '<p class="live-empty">엔트리 정보를 불러오지 못했습니다.</p>';
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadLiveSignal, { once: true });
  } else {
    loadLiveSignal();
  }
})();
