/* Small progressive enhancements. Every page works without this file. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Hero field ------------------------------------------------------------
     Streamlines of a two-pole field: one pole sits behind the portrait, the
     other off to the side. A nod to dyadic interaction and push-pull signals. */
  function drawField(animate) {
    var svg = document.querySelector(".field");
    var portrait = document.querySelector(".hero-portrait");
    if (!svg || !portrait) return;
    var box = svg.getBoundingClientRect();
    var pr = portrait.getBoundingClientRect();
    var W = Math.round(box.width), H = Math.round(box.height);
    if (!W || !H) return;
    var NS = "http://www.w3.org/2000/svg";
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);

    var A = { x: pr.left - box.left + pr.width / 2, y: pr.top - box.top + pr.height / 2 };
    var rA = pr.width / 2;
    var narrow = W < 832;
    var B = narrow
      ? { x: W * 0.92, y: A.y + H * 0.06 }
      : { x: A.x - W * 0.40, y: H - 34 };

    function vec(x, y) {
      var ax = x - A.x, ay = y - A.y, bx = x - B.x, by = y - B.y;
      var da = ax * ax + ay * ay + 1, db = bx * bx + by * by + 1;
      // source at A, sink at B, with a slight swirl around each pole
      var vx = ax / da - bx / db - 0.28 * ay / da + 0.18 * by / db;
      var vy = ay / da - by / db + 0.28 * ax / da - 0.18 * bx / db;
      var m = Math.sqrt(vx * vx + vy * vy) || 1;
      return [vx / m, vy / m];
    }

    var defs = document.createElementNS(NS, "defs");
    var grad = document.createElementNS(NS, "linearGradient");
    grad.setAttribute("id", "fieldGrad");
    grad.setAttribute("gradientUnits", "userSpaceOnUse");
    grad.setAttribute("x1", A.x); grad.setAttribute("y1", A.y);
    grad.setAttribute("x2", B.x); grad.setAttribute("y2", B.y);
    [["0", "var(--field-a)"], ["0.55", "var(--field-rest)"], ["1", "var(--field-b)"]].forEach(function (s) {
      var st = document.createElementNS(NS, "stop");
      st.setAttribute("offset", s[0]);
      st.setAttribute("style", "stop-color:" + s[1]);
      grad.appendChild(st);
    });
    defs.appendChild(grad);
    svg.appendChild(defs);

    var g = document.createElementNS(NS, "g");
    svg.appendChild(g);
    var n = narrow ? 34 : 56, step = 3.5, maxSteps = 900, margin = 60;
    var paths = [];
    for (var i = 0; i < n; i++) {
      var ang = (i / n) * Math.PI * 2 + 0.07;
      var x = A.x + Math.cos(ang) * (rA + 8), y = A.y + Math.sin(ang) * (rA + 8);
      var d = "M" + x.toFixed(1) + " " + y.toFixed(1), len = 0;
      for (var k = 0; k < maxSteps; k++) {
        var v = vec(x, y);
        x += v[0] * step; y += v[1] * step; len += step;
        if (k % 3 === 2) d += "L" + x.toFixed(1) + " " + y.toFixed(1);
        if (x < -margin || y < -margin || x > W + margin || y > H + margin) break;
        if ((x - B.x) * (x - B.x) + (y - B.y) * (y - B.y) < 49) break;
      }
      var p = document.createElementNS(NS, "path");
      p.setAttribute("d", d);
      p.setAttribute("stroke", "url(#fieldGrad)");
      p.setAttribute("stroke-width", i % 4 === 0 ? "1.6" : "1");
      p.setAttribute("stroke-opacity", i % 4 === 0 ? "0.75" : "0.5");
      g.appendChild(p);
      paths.push([p, len]);
    }

    // rings around both poles
    [[A, rA + 22, "var(--field-a)"], [A, rA + 44, "var(--field-a)"], [B, 7, "var(--field-b)"], [B, 18, "var(--field-b)"]].forEach(function (r, j) {
      var c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", r[0].x); c.setAttribute("cy", r[0].y); c.setAttribute("r", r[1]);
      c.setAttribute("fill", j === 2 ? r[2] : "none");
      c.setAttribute("style", (j === 2 ? "fill:" : "fill:none;stroke:") + r[2]);
      c.setAttribute("stroke-opacity", "0.35");
      c.setAttribute("stroke-dasharray", j < 2 ? "2 6" : "none");
      g.appendChild(c);
    });

    if (animate && !reduceMotion && "animate" in Element.prototype) {
      paths.forEach(function (pl, j) {
        var p = pl[0], L = Math.max(pl[1], 1);
        p.style.strokeDasharray = L;
        p.style.strokeDashoffset = L;
        p.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], {
          duration: 2200, delay: (j % 8) * 60, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards"
        });
      });
    }
  }

  if (document.querySelector(".field")) {
    var start = function () { drawField(true); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start); else start();
    var t, lastW = window.innerWidth;
    window.addEventListener("resize", function () {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(t);
      t = setTimeout(function () { drawField(false); }, 150);
    });
  }

  /* Type filters on the publications and talks pages ---------------------- */
  document.querySelectorAll("[data-listing]").forEach(function (root) {
    var bar = root.querySelector(".filters");
    if (!bar) return;
    bar.hidden = false;
    var chips = bar.querySelectorAll(".chip");
    var items = root.querySelectorAll("[data-type]:not(.chip)");
    var groups = root.querySelectorAll(".year-group");

    function apply(type, push) {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.filter === type)); });
      items.forEach(function (el) { el.hidden = type !== "all" && el.dataset.type !== type; });
      groups.forEach(function (g) { g.hidden = !g.querySelector("[data-type]:not([hidden])"); });
      if (push && window.history && history.replaceState) {
        var url = new URL(window.location.href);
        if (type === "all") url.searchParams.delete("type"); else url.searchParams.set("type", type);
        history.replaceState(null, "", url);
      }
    }

    chips.forEach(function (c) {
      c.addEventListener("click", function () { apply(c.dataset.filter, true); });
    });

    var initial = new URL(window.location.href).searchParams.get("type");
    if (initial && bar.querySelector('[data-filter="' + initial + '"]')) apply(initial, false);
  });

  /* Section highlighting in the research page contents -------------------- */
  var toc = document.querySelector(".toc");
  if (toc && "IntersectionObserver" in window) {
    var links = toc.querySelectorAll("a");
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          map[e.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    document.querySelectorAll(".doc-section[id]").forEach(function (s) { io.observe(s); });
  }

  /* Copy buttons ---------------------------------------------------------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var target = document.getElementById(btn.dataset.copy);
    if (!target || !navigator.clipboard) return;
    btn.hidden = false;
    btn.addEventListener("click", function () {
      var text = target.innerText.replace(/\s+/g, " ").trim();
      navigator.clipboard.writeText(text).then(function () {
        var old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1600);
      });
    });
  });
})();
