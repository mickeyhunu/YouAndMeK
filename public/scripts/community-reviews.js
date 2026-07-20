(() => {
  const COMMUNITY_REVIEWS_ENDPOINT = "/api/community-reviews";
  const DIRECT_COMMUNITY_REVIEWS_ENDPOINT = "https://nightmens.com/api/posts/search-signal";
  const KEYWORDS = ["유앤미", "유엔미", "ㅇㅇㅁ"];

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  const stripHtml = (value) => String(value ?? "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  const unwrapPayload = (payload) => {
    let current = payload;
    for (let depth = 0; depth < 4; depth += 1) {
      if (!current || typeof current !== "object" || Array.isArray(current)) break;
      if (Array.isArray(current.content)) return current.content;
      if (Array.isArray(current.items)) return current.items;
      if (Array.isArray(current.list)) return current.list;
      if (Array.isArray(current.rows)) return current.rows;
      current = current.data ?? current.result ?? current.body ?? current.payload;
    }
    return Array.isArray(payload) ? payload : [];
  };
  const formatDate = (value) => {
    if (!value) return "미드나잇맨즈 후기";
    const date = new Date(String(value).replace(" ", "T"));
    if (Number.isNaN(date.getTime())) return "미드나잇맨즈 후기";
    return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  };
  const normalizeUrl = (value) => {
    if (!value) return "https://nightmens.com/reviews";
    try {
      return new URL(value, "https://nightmens.com").href;
    } catch (_error) {
      return "https://nightmens.com/reviews";
    }
  };
  const fetchKeywordReviews = async (keyword, direct = false) => {
    const apiUrl = new URL(direct ? DIRECT_COMMUNITY_REVIEWS_ENDPOINT : COMMUNITY_REVIEWS_ENDPOINT, window.location.origin);
    if (direct) apiUrl.searchParams.set("board", "후기");
    apiUrl.searchParams.set("keyword", keyword);
    const response = await fetch(apiUrl, { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || `Community review request failed: ${response.status}`);
    return unwrapPayload(data);
  };
  const collectReviews = async (direct = false) => {
    const responses = await Promise.all(KEYWORDS.map((keyword) => fetchKeywordReviews(keyword, direct)));
    return responses.flat()
      .filter((review) => review && (review.id || review.title || review.content))
      .filter((review, index, all) => all.findIndex((item) => String(item.id ?? item.url ?? item.title) === String(review.id ?? review.url ?? review.title)) === index)
      .slice(0, 6);
  };
  const fetchReviews = async () => {
    const proxyReviews = await collectReviews(false);
    if (proxyReviews.length) return proxyReviews;

    try {
      return await collectReviews(true);
    } catch (directError) {
      console.warn("Direct community review endpoint failed:", directError);
      return proxyReviews;
    }
  };
  const renderReviews = (reviews) => {
    const status = $("community-review-status");
    const list = $("community-review-list");
    if (!status || !list) return;
    if (!reviews.length) {
      status.textContent = "표시할 커뮤니티 후기가 없습니다.";
      list.innerHTML = "";
      return;
    }
    status.classList.add("is-hidden");
    list.innerHTML = reviews
      .map((review) => {
        const title = review.title || "제목 없는 후기";
        const content = stripHtml(review.content || review.summary || "미드나잇맨즈 회원 후기를 확인해 보세요.");
        const url = normalizeUrl(review.url || review.link);
        return `<a class="rv community-review-card" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer"><p class="community-review-date">${escapeHtml(formatDate(review.createdAt || review.updatedAt || review.date))}</p><h3 class="community-review-title">${escapeHtml(title)}</h3><p class="community-review-content">${escapeHtml(content)}</p><span class="community-review-more">후기 보러가기</span></a>`;
      })
      .join("");
  };
  const loadReviews = async () => {
    const status = $("community-review-status");
    try {
      renderReviews(await fetchReviews());
    } catch (error) {
      console.error("Community reviews render failed:", error);
      if (status) status.textContent = "커뮤니티 후기를 불러오지 못했습니다.";
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadReviews, { once: true });
  } else {
    loadReviews();
  }
})();
