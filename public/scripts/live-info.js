(() => {
  const LIVE_SIGNAL_ENDPOINT = "/api/live-signal";

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

  const getContent = (payload) => (Array.isArray(payload?.content) ? payload.content : []);
  const formatValue = (value) => (value === null || value === undefined || value === "" ? "-" : String(value));
  const formatUpdatedAt = (value) => {
    if (!value) return "방금 확인";
    const date = new Date(String(value).replace(" ", "T"));
    if (Number.isNaN(date.getTime())) return "방금 확인";
    return new Intl.DateTimeFormat("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const renderRoomDetails = (room) => {
    const roomEntries = Object.entries(room || {}).filter(([key, value]) => {
      const lowerKey = key.toLowerCase();
      return lowerKey.includes("room") && !["roominfo", "id"].includes(lowerKey) && value !== null && value !== undefined && value !== "";
    });

    if (!roomEntries.length) {
      roomDetail.innerHTML = '<p class="live-empty">룸 상세 정보가 없습니다.</p>';
      return;
    }

    roomDetail.innerHTML = `<div class="room-floor"><div class="room-type-grid">${roomEntries
      .map(([key, value]) => `<div class="room-type"><span>${key}</span><strong>${formatValue(value)}</strong></div>`)
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
        const detail = entry.entryStatus || entry.status || entry.workTime || entry.time || "출근";
        return `<span class="entry-chip"><span>${name}</span><strong>${detail}</strong></span>`;
      })
      .join("");
  };

  const loadLiveSignal = async () => {
    try {
      const response = await fetch(LIVE_SIGNAL_ENDPOINT, { cache: "no-store" });
      if (!response.ok) throw new Error(`Live signal request failed: ${response.status}`);

      const data = await response.json();
      const rooms = getContent(data.room);
      const entries = getContent(data.entry);
      const room = rooms[0] || {};

      roomCount.textContent = formatValue(room.roomInfo ?? room.availableRoom ?? room.availableRooms ?? room.roomCount);
      waitCount.textContent = formatValue(room.waitInfo ?? room.waiting ?? room.waitCount);
      roomUpdated.textContent = formatUpdatedAt(room.snapshotAt || room.updatedAt || room.createdAt);
      entryCount.textContent = `총 ${data.entry?.totalElements ?? entries.length}명`;
      renderRoomDetails(room);
      renderEntries(entries);
      status.textContent = `storeNo ${data.storeNo || "4"} 기준 실시간 정보를 불러왔습니다.`;
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
