(function(){
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var H=document.querySelector('.hv19');
if(H&&!rm){H.addEventListener('mousemove',function(e){var r=H.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;H.style.setProperty('--rx',(-y*8)+'deg');H.style.setProperty('--ry',(x*10)+'deg')});H.addEventListener('mouseleave',function(){H.style.setProperty('--rx','0deg');H.style.setProperty('--ry','0deg')})}
var S=document.querySelector('.st19');
if(S){var bs=S.querySelectorAll('.st19-b'),ps=S.querySelectorAll('.st19-p'),cur=0,tm=null,num=S.querySelector('.st19-num');
function go(i){cur=i;bs.forEach(function(b,k){b.classList.toggle('on',k===i)});ps.forEach(function(p,k){p.classList.toggle('on',k===i)});
 if(i===3&&num){var t0=null;(function f(ts){if(!t0)t0=ts;var q=Math.min((ts-t0)/900,1);num.textContent=Math.round(1400*q).toLocaleString('en-US');if(q<1)requestAnimationFrame(f)})(performance.now())}}
function start(){if(rm||tm)return;tm=setInterval(function(){go((cur+1)%bs.length)},3600)}
function stop(){clearInterval(tm);tm=null}
bs.forEach(function(b){b.addEventListener('click',function(){stop();go(+b.dataset.i)})});
S.addEventListener('mouseenter',stop);S.addEventListener('mouseleave',start);
if('IntersectionObserver' in window){new IntersectionObserver(function(en){en.forEach(function(x){x.isIntersecting?start():stop()})},{threshold:.35}).observe(S)}else{start()}}
})();