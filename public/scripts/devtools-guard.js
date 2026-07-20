(() => {
  const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);

  if (LOCAL_HOSTNAMES.has(window.location.hostname)) {
    return;
  }

  const BLOCKED_KEYS = new Set(["F12", "I", "J", "C", "U", "S"]);
  const DEVTOOLS_SIZE_THRESHOLD = 160;
  let overlayVisible = false;

  const prevent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  const isBlockedShortcut = (event) => {
    const key = event.key.toUpperCase();
    return (
      key === "F12" ||
      ((event.ctrlKey || event.metaKey) && event.shiftKey && BLOCKED_KEYS.has(key)) ||
      ((event.ctrlKey || event.metaKey) && ["U", "S"].includes(key))
    );
  };

  const ensureOverlay = () => {
    let overlay = document.getElementById("devtools-guard-overlay");

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "devtools-guard-overlay";
      overlay.setAttribute("role", "alert");
      overlay.textContent = "보안 정책에 따라 개발자 도구 사용이 제한됩니다.";
      overlay.style.cssText = [
        "position:fixed",
        "inset:0",
        "z-index:2147483647",
        "display:none",
        "align-items:center",
        "justify-content:center",
        "padding:24px",
        "background:#030f0a",
        "color:#f5e27a",
        "font:700 18px/1.6 system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
        "text-align:center",
      ].join(";");
      document.documentElement.appendChild(overlay);
    }

    return overlay;
  };

  const setOverlayVisible = (visible) => {
    overlayVisible = visible;
    ensureOverlay().style.display = visible ? "flex" : "none";
    document.documentElement.style.overflow = visible ? "hidden" : "";
  };

  const checkDevtoolsSize = () => {
    const widthGap = Math.abs(window.outerWidth - window.innerWidth);
    const heightGap = Math.abs(window.outerHeight - window.innerHeight);
    setOverlayVisible(widthGap > DEVTOOLS_SIZE_THRESHOLD || heightGap > DEVTOOLS_SIZE_THRESHOLD);
  };

  document.addEventListener("contextmenu", prevent, true);
  document.addEventListener(
    "keydown",
    (event) => {
      if (isBlockedShortcut(event)) {
        prevent(event);
        setOverlayVisible(true);
      }
    },
    true
  );

  window.addEventListener("resize", checkDevtoolsSize);
  window.addEventListener("focus", checkDevtoolsSize);

  setInterval(() => {
    checkDevtoolsSize();
    if (overlayVisible) {
      debugger;
    }
  }, 1000);
})();
