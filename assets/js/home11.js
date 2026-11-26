(function(){
var d=document,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
/* tabs */
d.querySelectorAll('.t11').forEach(function(w){
 var tabs=[].slice.call(w.querySelectorAll('[role=tab]')),ps=[].slice.call(w.querySelectorAll('[role=tabpanel]'));
 function sel(i,f){tabs.forEach(function(t,j){t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1});ps.forEach(function(p,j){p.hidden=j!==i});if(f)tabs[i].focus()}
 tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(i)});t.addEventListener('keydown',function(e){var k=e.key,n=i;if(k==='ArrowDown'||k==='ArrowLeft'||k==='ArrowRight'||k==='ArrowUp'){n=(i+(k==='ArrowUp'||k==='ArrowRight'?-1:1)+tabs.length)%tabs.length;e.preventDefault();sel(n,1)}})});
 sel(0)});
/* reveal + counters */
if(!('IntersectionObserver' in window)||rm)return;
d.documentElement.classList.add('js11');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('in11');io.unobserve(t);
 if(t.matches('.x10-st b')){var to=+t.dataset.n,s=null;function st(ts){s=s||ts;var p=Math.min(1,(ts-s)/900);t.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(st)}requestAnimationFrame(st)}})},{threshold:.15});
d.querySelectorAll('.rv11,.x10-st b').forEach(function(e){io.observe(e)});
})();
