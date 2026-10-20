/* Curved tilted-grid row (vanilla port of the "Tilted Grid Hero" idea).
   One row of images streams around the inside of a cylinder; every tile is cut
   into SL vertical strips, each turned a few degrees, and the tile (preserve-3d)
   is the only thing animated: transform only. Ends fade out with a static mask. */
(function () {
  var SL = 16, CAM = 1.6, MAXW = 55, uid = 0;
  function arc(b) { return (CAM - 1 + Math.cos(b)) / (2 * CAM * Math.sin(b)); }
  function measure(w, h, tile, aspect, gap, bend) {
    var hh = Math.min(tile / 100 * h, MAXW / 100 * w / aspect);
    var radius = w * arc(bend);
    if (!(hh > 0) || !(radius > 0)) return { columns: 2, sweep: 0, unit: 0, limit: 0 };
    var deg = function (r) { return r * 180 / Math.PI; };
    var unit = deg(hh / radius), pitch = (aspect + gap / 100) * unit, limit = deg(bend) + aspect * unit / 2;
    var columns = Math.min(40, Math.max(2, Math.ceil(2 * limit / pitch)));
    var sweep = +(columns * pitch / 2).toFixed(4);
    return { columns: columns, sweep: sweep, unit: +unit.toFixed(4), limit: +Math.min(sweep, limit).toFixed(4) };
  }
  function init(root) {
    var imgs = (root.getAttribute('data-src') || '').split('|').filter(Boolean);
    if (!imgs.length || !('ResizeObserver' in window) || !(window.CSS && CSS.supports && CSS.supports('width', '1cqw'))) return;
    var tile = +(root.getAttribute('data-tile') || 26), aspect = 16 / 9, gap = 6, axis = +(root.getAttribute('data-axis') || 52),
        bend = Math.min(85, Math.max(5, +(root.getAttribute('data-curve') || 78))) * Math.PI / 180, fade = 12, speed = +(root.getAttribute('data-speed') || 4);
    if (root.clientWidth < 700) tile = Math.min(62, tile * 1.45);
    var id = 'crow' + (++uid), key = '';
    var style = document.createElement('style'), stage = document.createElement('div');
    stage.className = 'crow-stage'; stage.setAttribute('aria-hidden', 'true');
    root.appendChild(style); root.appendChild(stage);
    function render() {
      var m = measure(root.clientWidth, root.clientHeight, tile, aspect, gap, bend);
      var k = [m.columns, m.sweep, m.unit].join();
      if (k === key) return; key = k;
      var u = function (n) { return 'calc(' + (+n.toFixed(4)) + ' * min(' + tile + 'cqh,' + (+(MAXW / aspect).toFixed(4)) + 'cqw))'; };
      var r = 100 * arc(bend), radius = (+r.toFixed(3)) + 'cqw';
      var turn = function (d) { return 'translateZ(' + radius + ') rotateY(' + (+d.toFixed(4)) + 'deg) translateZ(-' + radius + ')'; };
      var hide = +((m.sweep - m.limit) / (2 * (m.sweep || 1)) * 100).toFixed(4);
      style.textContent = '@keyframes ' + id + '{from{transform:' + turn(-m.sweep) + '}to{transform:' + turn(m.sweep) + '}0%,' + hide + '%,' + (100 - hide) + '%,100%{visibility:hidden}' + (hide + 0.001) + '%,' + (100 - hide - 0.001) + '%{visibility:visible}}' +
        '@media(prefers-reduced-motion:reduce){.' + id + '{animation-play-state:paused!important}}';
      var share = aspect / SL, dur = m.columns * speed, html = '';
      stage.style.perspective = (+(r * CAM).toFixed(3)) + 'cqw';
      stage.style.perspectiveOrigin = '50% ' + axis + '%';
      var mask = 'linear-gradient(90deg,transparent,#000 ' + fade + '%,#000 ' + (100 - fade) + '%,transparent)';
      stage.style.webkitMaskImage = stage.style.maskImage = mask;
      for (var t = 0; t < m.columns; t++) {
        var first = m.columns - 1 - t, src = imgs[first % imgs.length];
        html += '<div class="crow-t ' + id + '" style="left:calc(50% - ' + u(aspect / 2) + ');top:calc(' + axis + '% - ' + u(.5) + ');width:' + u(aspect) + ';height:' + u(1) + ';animation:' + id + ' ' + dur + 's linear ' + (-t * speed) + 's infinite">';
        for (var s = 0; s < SL; s++) {
          var w = s === SL - 1 ? u(share) : 'calc(' + u(share) + ' + 1px)';
          html += '<div class="crow-s' + (s === 0 ? ' l' : '') + (s === SL - 1 ? ' r' : '') + '" style="left:' + u((aspect - share) / 2) + ';width:' + w + ';height:' + u(1) + ';transform:' + turn((aspect / 2 - (s + .5) * share) * m.unit) + '"><img src="' + src + '" alt="" draggable="false" decoding="async" style="left:' + u(-s * share) + ';width:' + u(aspect) + ';height:' + u(1) + '"></div>';
        }
        html += '</div>';
      }
      stage.innerHTML = html;
      root.classList.add('on');
    }
    new ResizeObserver(render).observe(root);
    render();
  }
  function go() { var a = document.querySelectorAll('.crow'); for (var i = 0; i < a.length; i++) init(a[i]); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();
