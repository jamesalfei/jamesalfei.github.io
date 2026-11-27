(() => {
  const THEME_KEY = "color-scheme";
  const THEME_COLORS = { dark: "#0b0f14", light: "#f8fafc" };

  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const themeBtn = document.getElementById("theme-toggle-btn");
  const printBtn = document.getElementById("print-cv-btn");
  const copyBtn = document.getElementById("copy-email-btn");
  const earlierDetails = document.getElementById("earlier-career");

  const getTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

  const setTheme = (theme, persist = true) => {
    const next = theme === "light" ? "light" : "dark";
    metaColorScheme?.setAttribute("content", next);
    metaThemeColor?.setAttribute("content", THEME_COLORS[next]);
    document.documentElement.dataset.theme = next;
    themeBtn?.setAttribute(
      "aria-label",
      next === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {}
    }
  };

  setTheme(getTheme(), false);

  themeBtn?.addEventListener("click", () => {
    setTheme(getTheme() === "light" ? "dark" : "light", true);
  });

  window.addEventListener("storage", (event) => {
    if (event.key === THEME_KEY) {
      setTheme(event.newValue, false);
    }
  });

  let wasEarlierOpen = false;
  window.addEventListener("beforeprint", () => {
    if (earlierDetails) {
      wasEarlierOpen = earlierDetails.open;
      earlierDetails.open = true;
    }
  });

  window.addEventListener("afterprint", () => {
    if (earlierDetails) {
      earlierDetails.open = wasEarlierOpen;
    }
  });

  printBtn?.addEventListener("click", () => window.print());

  let copyTimer;
  copyBtn?.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;
    const label = copyBtn.querySelector(".copy-label");
    if (!email || !label) return;

    try {
      await navigator.clipboard.writeText(email);
      copyBtn.classList.add("is-copied");
      label.textContent = "Copied";
      clearTimeout(copyTimer);
      copyTimer = setTimeout(() => {
        copyBtn.classList.remove("is-copied");
        label.textContent = "Copy email";
      }, 2000);
    } catch (e) {
      window.location.href = `mailto:${email}`;
    }
  });
})();
