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
