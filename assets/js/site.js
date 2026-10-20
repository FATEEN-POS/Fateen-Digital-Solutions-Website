(function(){var b=document.querySelectorAll('.gz');if(!b.length)return;var o=document.createElement('div');o.className='lb';o.hidden=true;o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.innerHTML='<button type="button" class="lbx" aria-label="Close">&times;</button><img alt="">';document.body.appendChild(o);var im=o.querySelector('img');function c(){o.hidden=true;document.body.style.overflow=''}
b.forEach(function(x){x.addEventListener('click',function(){var s=x.querySelector('img');im.src=x.getAttribute('data-full');im.alt=s.alt;o.hidden=false;document.body.style.overflow='hidden';o.querySelector('.lbx').focus()})});
o.addEventListener('click',function(e){if(e.target!==im)c()});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!o.hidden)c()})})();
(function(){var els=document.querySelectorAll('.stat b');if(!els.length||matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;io.unobserve(x.target);var el=x.target,t=el.textContent.trim(),m=t.match(/^(\d+)(.*)$/);if(!m)return;var n=+m[1],s=m[2],t0=null;(function f(ts){t0=t0||ts;var p=Math.min((ts-t0)/900,1),v=Math.round(n*(1-Math.pow(1-p,3)));el.textContent=v+s;if(p<1)requestAnimationFrame(f)})(performance.now())})},{threshold:.4});
els.forEach(function(e){io.observe(e)})})();

(function(){document.querySelectorAll('.yt').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+a.getAttribute('data-yt')+'?autoplay=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.allowFullscreen=true;f.title=a.getAttribute('aria-label');a.innerHTML='';a.appendChild(f)})})})();

(function(){var b=document.getElementById('annc');if(!b)return;try{if(sessionStorage.getItem('annc')==='1'){b.hidden=true;return}}catch(e){}
b.querySelector('.ax').addEventListener('click',function(){b.hidden=true;try{sessionStorage.setItem('annc','1')}catch(e){}})})();

(function(){var d=document.getElementById('demo');if(!d)return;var n=d.querySelector('.net'),c=d.querySelector('.cnt'),b=d.querySelector('.dbtn'),v=48,off=false;
b.addEventListener('click',function(){off=!off;d.classList.toggle('cut',off);n.classList.toggle('off',off);n.classList.toggle('on',!off);n.textContent=off?d.dataset.off:d.dataset.on;b.textContent=off?d.dataset.b2:d.dataset.b1});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(function(){v+=1;c.textContent=v},2600)})();

(function(){document.querySelectorAll('[data-copy]').forEach(function(b){var t=b.textContent;b.addEventListener('click',function(){var u=b.getAttribute('data-copy');function ok(){b.textContent=b.getAttribute('data-done');setTimeout(function(){b.textContent=t},1800)}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(ok,function(){})}else{var i=document.createElement('input');i.value=u;document.body.appendChild(i);i.select();try{document.execCommand('copy');ok()}catch(e){}i.remove()}})})})();

/* splash: home only, once per session, skipped for reduced motion */
(function(){try{
var p=location.pathname.replace(/index\.html$/,'');
if(p!=='/'&&p!=='/en/')return;
if(sessionStorage.getItem('fd-splash'))return;
sessionStorage.setItem('fd-splash','1');
if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var en=p==='/en/',s=document.createElement('div');s.id='fd-splash';s.setAttribute('aria-hidden','true');
s.innerHTML="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-12 -12 491 124\" aria-hidden=\"true\" role=\"img\" aria-label=\"Fateen\"><style>.l{transform-box:fill-box;opacity:0;animation:up .6s cubic-bezier(.2,.8,.2,1) forwards}@keyframes up{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:none}}.d{transform-box:fill-box;transform-origin:center;transform:scale(0);animation:pop .5s cubic-bezier(.3,1.6,.5,1) 1.05s forwards,beat 1.4s ease-in-out 1.7s infinite}@keyframes pop{to{transform:scale(1)}}@keyframes beat{0%,100%{transform:scale(1)}30%{transform:scale(1.3)}}.r{fill:none;stroke:#FF4F1F;stroke-width:2;opacity:0;transform-box:fill-box;transform-origin:center;animation:ring 1.4s ease-out 1.7s infinite}@keyframes ring{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(5)}}@media (prefers-reduced-motion:reduce){.l,.d{animation:none;opacity:1;transform:none}.r{display:none}}</style><path class=\"l\" style=\"animation-delay:0.15s\" d=\"M0,0 L62,0 L62,24 L24,24 L24,38 L50,38 L50,62 L24,62 L24,100 L0,100 Z\" fill=\"#F2EFE8\"/><path class=\"l\" style=\"animation-delay:0.24s\" d=\"M65,100 L97,0 L119,0 L151,100 L125,100 L108,47 L91,100 Z\" fill=\"#F2EFE8\"/><path class=\"l\" style=\"animation-delay:0.33s\" d=\"M156,0 L226,0 L226,24 L203,24 L203,100 L179,100 L179,24 L156,24 Z\" fill=\"#F2EFE8\"/><path class=\"l\" style=\"animation-delay:0.42s\" d=\"M239,0 L297,0 L297,24 L263,24 L263,38 L287,38 L287,62 L263,62 L263,76 L297,76 L297,100 L239,100 Z\" fill=\"#F2EFE8\"/><path class=\"l\" style=\"animation-delay:0.51s\" d=\"M310,0 L368,0 L368,24 L334,24 L334,38 L358,38 L358,62 L334,62 L334,76 L368,76 L368,100 L310,100 Z\" fill=\"#F2EFE8\"/><path class=\"l\" style=\"animation-delay:0.60s\" d=\"M381,0 L405,0 L443,60 L443,0 L467,0 L467,100 L443,100 L405,40 L405,100 L381,100 Z\" fill=\"#F2EFE8\"/><circle class=\"r\" cx=\"108\" cy=\"81\" r=\"6.6\"/><circle class=\"d\" cx=\"108\" cy=\"81\" r=\"6.6\" fill=\"#FF4F1F\"/></svg>"+'<div class="fd-slogan">'+(en?'Fateen. Work that <b>carries on</b>.':'فطين. شغل <b>بيكمّل</b>.')+'</div><div class="fd-bar"><i></i></div>';
document.body.appendChild(s);
var done=function(){if(s.classList.contains('done'))return;s.classList.add('done');setTimeout(function(){s.remove()},700)};
s.addEventListener('click',done);setTimeout(done,2300);
}catch(e){}})();
