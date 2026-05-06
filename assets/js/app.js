(function () {
  "use strict";

  /* Fake online counter — visually credible fluctuation */
  function initLiveCounter() {
    var el = document.getElementById("live-counter-value");
    if (!el) return;
    var base = 1180 + Math.floor(Math.random() * 80);
    function tick() {
      var delta = Math.floor(Math.random() * 9) - 4;
      base = Math.max(950, Math.min(2600, base + delta));
      el.textContent = base.toLocaleString("ru-RU");
    }
    tick();
    setInterval(tick, 4200 + Math.floor(Math.random() * 2000));
  }

  /* Lazy enhancement for images that use data-src */
  function initLazyImages() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("img[data-src]").forEach(function (img) {
        img.src = img.getAttribute("data-src");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var img = entry.target;
          var src = img.getAttribute("data-src");
          if (src) {
            img.src = src;
            img.removeAttribute("data-src");
          }
          io.unobserve(img);
        });
      },
      { rootMargin: "200px 0px" }
    );
    document.querySelectorAll("img[data-src]").forEach(function (img) {
      io.observe(img);
    });
  }

  function initMobileNav() {
    var header = document.getElementById("site-header");
    var btn = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");
    var bd = document.getElementById("nav-backdrop");
    if (!header || !btn || !nav) return;

    var mq = window.matchMedia("(max-width: 899px)");

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (bd) {
        bd.setAttribute("aria-hidden", open ? "false" : "true");
      }
      if (mq.matches) {
        document.body.style.overflow = open ? "hidden" : "";
      }
    }

    btn.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });

    if (bd) {
      bd.addEventListener("click", function () {
        setOpen(false);
      });
    }

    nav.addEventListener(
      "click",
      function (e) {
        var t = e.target;
        if (!t || !t.closest) return;
        var a = t.closest("a");
        if (!a || !nav.contains(a)) return;
        var href = a.getAttribute("href");
        if (href && href !== "#" && mq.matches) {
          setOpen(false);
        }
      },
      false
    );

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (!mq.matches) {
        setOpen(false);
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    try {
      initMobileNav();
    } catch (e) {}
    try {
      initLiveCounter();
    } catch (e) {}
    try {
      initLazyImages();
    } catch (e) {}
  });
})();
