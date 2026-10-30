/*
 * Launchpad diagrams: click/tap captions, playhead and press-hint animation.
 * Progressive enhancement only: every diagram is complete without this script.
 *
 * Reads these attributes (written by _includes/launchpad-grid.html and lp-cell.html):
 *   .launchpad-container[data-playhead][data-playhead-at][data-playhead-ms]
 *   .launchpad-pad[data-cc][data-label][data-desc][data-hint][data-step]
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pad(el) {
    return el && el.closest ? el.closest(".launchpad-pad") : null;
  }

  function describe(p) {
    var label = p.getAttribute("data-label") || "";
    var desc = p.getAttribute("data-desc") || "";
    var hint = p.getAttribute("data-hint");
    var text = "Pad " + p.getAttribute("data-cc");
    if (label) { text += " (" + label + ")"; }
    if (desc) { text += ": " + desc; }
    if (hint) { text += (desc ? ". " : ": ") + "Press number " + hint; }
    return text;
  }

  function init(container) {
    if (container.classList.contains("lp-js")) { return; }
    container.classList.add("lp-js");

    var figure = container.closest("figure") || container.parentNode;
    var readout = figure.querySelector(".lp-readout");
    var pads = Array.prototype.slice.call(container.querySelectorAll(".launchpad-pad"));
    var selected = null;
    var paused = reduceMotion;
    var visible = true;
    var timers = [];

    // Native tooltips would duplicate the caption line.
    pads.forEach(function (p) { p.removeAttribute("title"); });

    function select(p) {
      if (selected) { selected.classList.remove("lp-selected"); }
      selected = p;
      if (p) { p.classList.add("lp-selected"); }
      if (readout) {
        readout.textContent = p ? describe(p) : "";
      }
    }

    var hasInfo = pads.some(function (p) { return p.classList.contains("lp-info"); });
    if (readout) {
      readout.hidden = false;
      readout.textContent = hasInfo ? "Click or tap a pad to see what it does." : "";
      if (!hasInfo) { readout.hidden = true; }
    }

    container.addEventListener("click", function (e) {
      var p = pad(e.target);
      if (p && p.classList.contains("lp-info")) { select(p === selected ? null : p); }
    });
    container.addEventListener("keydown", function (e) {
      var p = pad(e.target);
      if ((e.key === "Enter" || e.key === " ") && p && p.classList.contains("lp-info")) {
        e.preventDefault();
        select(p === selected ? null : p);
      } else if (e.key === "Escape" && selected) {
        select(null);
      }
    });

    // ---- playhead -------------------------------------------------------
    var steps = [];
    var total = parseInt(container.getAttribute("data-playhead"), 10) || 0;
    if (total > 0) {
      pads.forEach(function (p) {
        var s = parseInt(p.getAttribute("data-step"), 10);
        if (s > 0) { steps[s] = p; }
      });
    }
    var at = parseInt(container.getAttribute("data-playhead-at"), 10) || 1;
    var stepMs = Math.max(60, parseInt(container.getAttribute("data-playhead-ms"), 10) || 250);

    function showPlayhead() {
      steps.forEach(function (p) { if (p) { p.classList.remove("pad-playhead"); } });
      if (steps[at]) { steps[at].classList.add("pad-playhead"); }
    }

    // ---- hint sequence --------------------------------------------------
    var hints = pads.filter(function (p) { return p.hasAttribute("data-hint"); });
    hints.sort(function (a, b) {
      return (parseInt(a.getAttribute("data-hint"), 10) || 0) - (parseInt(b.getAttribute("data-hint"), 10) || 0);
    });
    var hintIndex = -1;

    function hintTick() {
      hints.forEach(function (p) { p.classList.remove("lp-pulse"); });
      hintIndex += 1;
      if (hintIndex < hints.length) { hints[hintIndex].classList.add("lp-pulse"); }
      else if (hintIndex > hints.length + 1) { hintIndex = -1; }
    }

    function start() {
      stop();
      if (paused || !visible) { return; }
      if (total > 0 && steps.length) {
        timers.push(window.setInterval(function () {
          at = at % total + 1;
          showPlayhead();
        }, stepMs));
      }
      if (hints.length) {
        timers.push(window.setInterval(hintTick, 700));
      }
    }

    function stop() {
      timers.forEach(function (t) { window.clearInterval(t); });
      timers = [];
    }

    showPlayhead();

    // Pause button (WCAG 2.2.2): only when something moves.
    if ((total > 0 && steps.length) || hints.length) {
      var caption = figure.querySelector(".lp-caption");
      if (caption) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lp-toggle";
        var label = function () {
          btn.textContent = paused ? "Play animation" : "Pause animation";
          btn.setAttribute("aria-pressed", paused ? "true" : "false");
        };
        label();
        btn.addEventListener("click", function () {
          paused = !paused;
          label();
          if (paused) {
            stop();
            hints.forEach(function (p) { p.classList.remove("lp-pulse"); });
          } else {
            start();
          }
        });
        caption.appendChild(btn);
      }
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) { start(); } else { stop(); }
      }).observe(container);
    }
    start();
  }

  function boot() {
    var list = document.querySelectorAll(".launchpad-container");
    for (var i = 0; i < list.length; i++) { init(list[i]); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
