(function () {// quartz/components/scripts/quartz/components/scripts/darkmode.inline.ts
var userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
var currentTheme = localStorage.getItem("theme") ?? userPref;
document.documentElement.setAttribute("saved-theme", currentTheme);
document.addEventListener("nav", () => {
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("saved-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("saved-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };
  const toggleSwitch = document.querySelector("#darkmode-toggle");
  toggleSwitch.removeEventListener("change", switchTheme);
  toggleSwitch.addEventListener("change", switchTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
});
})();

document.addEventListener("DOMContentLoaded", function() {
  function preventDefault(event) {
      event.preventDefault();
  }

  function disableKeysAndContextMenu(event) {
      if (event.ctrlKey || event.shiftKey || event.altKey) {
          event.preventDefault();
      }
  }

  function disableRightClick(event) {
      if (event.which === 2 || event.which === 3 || event.button === 2 || event.button === 3) {
          event.preventDefault();
      }
  }

  document.addEventListener("mousedown", preventDefault);
  document.addEventListener("mouseup", preventDefault);
  document.addEventListener("keydown", disableKeysAndContextMenu);
  document.addEventListener("contextmenu", preventDefault);

  if (typeof document.onselectstart !== "undefined") {
      document.addEventListener("mousedown", preventDefault);
  } else {
      document.addEventListener("mouseup", function(event) {
          event.stopPropagation();
      });
  }

  document.addEventListener("mousedown", disableRightClick);

  function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function preventTextSelectionMobile(event) {
      if (isMobile()) {
          event.preventDefault();
      }
  }

  document.addEventListener("selectstart", preventTextSelectionMobile);
  document.addEventListener("mousedown", preventTextSelectionMobile);
  document.addEventListener("mouseup", preventTextSelectionMobile);
});