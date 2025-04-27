if (
  (document.addEventListener("DOMContentLoaded", function () {
    for (
      var t = document.getElementsByClassName("unit-btn"),
        e = document.getElementById("left_bg"),
        n = document.getElementById("top_bg"),
        i = 0;
      i < t.length;
      i++
    ) {
      var d = t[i];
      d.attachEvent
        ? d.attachEvent("onclick", l)
        : d.addEventListener("click", l);
    }
    function l() {
      var i = this.getAttribute("data-unit");
      "cm" === i
        ? ((e.src = "cm_left.png"), (n.src = "cm_top.png"))
        : "inch" === i && ((e.src = "inch_left.png"), (n.src = "inch_top.png"));
      for (var d = 0; d < t.length; d++) t[d].classList.remove("active");
      this.classList.add("active");
    }
  }),
  window.devicePixelRatio > 1)
) {
  let dpr = window.devicePixelRatio || 1;
  if (dpr === 3 && /iPhone/.test(navigator.userAgent)) {
    if (window.innerWidth === 375 && window.innerHeight === 638) {
      dpr = 1.378;
    } else if (window.innerWidth === 375 && window.innerHeight === 639) {
      dpr = 1.2402;
    } else if (window.innerWidth === 393 && window.innerHeight === 659) {
      dpr = 1.378;
    } else if (window.innerWidth === 430 && window.innerHeight === 932) {
      dpr = 1.15;
    } else {
      dpr = 1.378;
    }
  } else if (
    navigator.platform === "MacIntel" &&
    navigator.maxTouchPoints > 1
  ) {
    if (window.innerWidth === 1024 && window.innerHeight === 1366) {
      dpr = 1.45;
    } else if (window.innerWidth === 834 && window.innerHeight === 1194) {
      dpr = 1.45;
    } else if (window.innerWidth === 810 && window.innerHeight === 1080) {
      dpr = 1.45;
    } else {
      dpr = 1.45;
    }
  } else if (/Android/.test(navigator.userAgent)) {
    if (window.innerWidth === 393 && window.innerHeight === 873) {
      dpr = 1.28;
    } else if (window.innerWidth === 412 && window.innerHeight === 915) {
      dpr = 1.3;
    } else if (window.innerWidth === 412 && window.innerHeight === 892) {
      dpr = 1.25;
    } else if (window.innerWidth === 412 && window.innerHeight === 915) {
      dpr = 1.33;
    } else if (window.innerWidth === 393 && window.innerHeight === 851) {
      dpr = 1.35;
    }
  } else if (window.devicePixelRatio == 1.5) {
    dpr = 0.93;
  } else if (!navigator.userAgent.match(/Mobile/)) {
    if (window.screen.width >= 1920) {
      dpr = 0.93;
    } else if (window.screen.width >= 2560) {
      dpr = 0.78125;
    } else if (window.screen.width >= 3840) {
      dpr = 0.625;
    }
    if (/Mac/.test(navigator.platform)) {
      if (window.screen.width === 1440) {
        dpr = 1.0;
      } else if (window.screen.width === 1728) {
        dpr = 1.5;
      } else if (window.screen.width === 4480) {
        dpr = 1.8;
      }
    }
  } else {
    dpr = 1;
  }
  var leftBg = document.getElementById("left_bg"),
    topBg = document.getElementById("top_bg"),
    showContent = document.getElementsByClassName("showContent")[0];
  (leftBg.style.width = 50 * dpr + "px"),
    (leftBg.style.height = 616 * dpr + "px"),
    (leftBg.style.top = 40 * dpr + "px"),
    (showContent.style.marginLeft = 50 * dpr + "px"),
    (topBg.style.width = 1349 * dpr + "px"),
    (topBg.style.height = 40 * dpr + "px");
}
