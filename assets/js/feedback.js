(function(){var f=document.getElementById('fbf');if(!f)return;
var steps=[].slice.call(f.querySelectorAll('.step')),dots=[].slice.call(f.querySelectorAll('.steps li')),
nx=document.getElementById('fb-next'),bk=document.getElementById('fb-back'),sd=document.getElementById('fb-send'),er=document.getElementById('fb-err'),
cur=0,rate=0,ar=f.dataset.lang==='ar';
function show(i){cur=i;steps.forEach(function(s,k){s.hidden=k!==i});dots.forEach(function(d,k){d.className=k===i?'on':k<i?'ok':''});
bk.hidden=i===0;nx.hidden=i===steps.length-1;sd.hidden=i!==steps.length-1;er.hidden=true}
function err(m){er.textContent=m;er.hidden=false}
f.querySelectorAll('.star').forEach(function(b){b.addEventListener('click',function(){rate=+b.dataset.v;
f.querySelectorAll('.star').forEach(function(x){var on=+x.dataset.v<=rate;x.classList.toggle('on',on);x.setAttribute('aria-checked',+x.dataset.v===rate)});er.hidden=true})});
var stars=[].slice.call(f.querySelectorAll('.star'));function rov(i){stars.forEach(function(s,k){s.tabIndex=k===i?0:-1})}rov(0);
stars.forEach(function(b,i){b.addEventListener('click',function(){rov(i);er.hidden=true;stars.forEach(function(x){x.removeAttribute('aria-invalid')})});b.addEventListener('keydown',function(e){var k=e.key,n=-1,rtl=getComputedStyle(f).direction==='rtl';
if(k==='ArrowRight'||k==='ArrowLeft'||k==='ArrowDown'||k==='ArrowUp'){n=(i+(((k==='ArrowRight'||k==='ArrowDown')!==rtl)?1:-1)+5)%5}else if(k==='Home')n=0;else if(k==='End')n=4;
if(n>=0){e.preventDefault();stars[n].focus();stars[n].click()}})});
nx.onclick=function(){if(cur===0&&!rate){err(f.dataset.need);stars.forEach(function(x){x.setAttribute('aria-invalid','true')});stars[0].focus();return}show(cur+1)};
bk.onclick=function(){show(cur-1)};
function val(n){var x=f.querySelector('[name="'+n+'"]:checked');return x?x.value:''}
function tags(){var a=[];f.querySelectorAll('[name="tags"]:checked').forEach(function(x){a.push(x.value)});return a}
f.addEventListener('submit',function(e){e.preventDefault();
if(f.website&&f.website.value)return;
var p={rating:rate,service:val('service'),tags:tags(),msg:f.msg.value.trim(),name:f.name.value.trim(),biz:f.biz.value.trim(),phone:f.phone.value.trim(),publish:val('pub'),lang:f.dataset.lang,website:f.website.value};
function done(){f.hidden=true;document.getElementById('fb-done').hidden=false;window.scrollTo(0,0)}
function wa(){var t=f.dataset.wamsg+': '+rate+'/5'+(p.service?' | '+p.service:'')+(p.tags.length?' | '+p.tags.join(', '):'')+(p.msg?'\n'+p.msg:'')+(p.name?'\n'+p.name:'');
window.open(f.dataset.wa+'?text='+encodeURIComponent(t),'_blank','noopener');done()}
var ep=f.dataset.ep;if(!ep){wa();return}
sd.disabled=true;
fetch(ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}).then(function(r){if(!r.ok)throw 0;done()}).catch(function(){sd.disabled=false;err(f.dataset.err)})});
show(0)})();
