// Client-side developer tools deterrent. This is not a security boundary.
(function devToolsBlockGuard() {
  const threshold = 160;
  const localHosts = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
  const state = {
    isDevToolsBlocked: false,
  };

  function isLocalhost() {
    return localHosts.has(window.location.hostname);
  }

  function markBlocked() {
    state.isDevToolsBlocked = true;
    window.isDevToolsBlocked = true;
    window.__isDevToolsBlocked = true;
    document.documentElement.dataset.devToolsBlocked = "true";

    try {
      sessionStorage.setItem("isDevToolsBlocked", "true");
    } catch (error) {
      // Storage can be unavailable in private or restricted browsing modes.
    }
  }

  function ensureStyle() {
    if (document.getElementById("dev-tools-block-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "dev-tools-block-style";
    style.textContent = `
      html[data-dev-tools-blocked="true"],
      html[data-dev-tools-blocked="true"] body {
        width: 100%;
        min-height: 100%;
        margin: 0;
        overflow: hidden;
        background: #06080d;
      }

      .dev-tools-block-overlay {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 32px 20px;
        background:
          radial-gradient(circle at top, rgba(201, 168, 76, 0.18), transparent 36%),
          linear-gradient(135deg, #06080d 0%, #101418 100%);
        color: #f8f1d1;
        font-family: "Noto Sans KR", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        text-align: center;
      }

      .dev-tools-block-card {
        width: min(100%, 520px);
        padding: 36px 28px;
        border: 1px solid rgba(201, 168, 76, 0.38);
        border-radius: 22px;
        background: rgba(9, 14, 18, 0.92);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.48);
      }

      .dev-tools-block-title {
        margin: 0 0 16px;
        color: #f5e27a;
        font-size: clamp(24px, 5vw, 34px);
        font-weight: 800;
        line-height: 1.25;
      }

      .dev-tools-block-description {
        margin: 0;
        color: rgba(248, 241, 209, 0.82);
        font-size: 16px;
        line-height: 1.75;
        word-break: keep-all;
      }
    `;
    document.head.appendChild(style);
  }

  function renderOverlay() {
    ensureStyle();

    const overlay = document.createElement("main");
    overlay.className = "dev-tools-block-overlay";
    overlay.setAttribute("role", "alert");
    overlay.setAttribute("aria-live", "assertive");

    const card = document.createElement("section");
    card.className = "dev-tools-block-card";

    const title = document.createElement("h1");
    title.className = "dev-tools-block-title";
    title.textContent = "접근이 일시적으로 제한되었습니다";

    const description = document.createElement("p");
    description.className = "dev-tools-block-description";
    description.textContent = "안전한 이용을 위해 개발자도구가 감지된 상태에서는 페이지를 표시할 수 없습니다. 개발자도구를 닫은 뒤 새로고침해 주세요.";

    card.append(title, description);
    overlay.appendChild(card);
    document.body.replaceChildren(overlay);
  }

  function block() {
    if (state.isDevToolsBlocked) {
      return true;
    }

    if (isLocalhost()) {
      return false;
    }

    markBlocked();

    if (document.body) {
      renderOverlay();
    } else {
      window.addEventListener("DOMContentLoaded", renderOverlay, { once: true });
    }

    return true;
  }

  function detectAndBlock() {
    if (isLocalhost()) {
      return false;
    }

    const widthGap = Math.abs(window.outerWidth - window.innerWidth);
    const heightGap = Math.abs(window.outerHeight - window.innerHeight);
    const isDevToolsOpen = widthGap > threshold || heightGap > threshold;

    return isDevToolsOpen ? block() : false;
  }

  window.devToolsBlockGuard = {
    get isDevToolsBlocked() {
      return state.isDevToolsBlocked;
    },
    block,
    detectAndBlock,
  };

  if (!detectAndBlock()) {
    window.addEventListener("resize", detectAndBlock);
    window.addEventListener("focus", detectAndBlock);
    window.setInterval(detectAndBlock, 1000);
  }
})();
