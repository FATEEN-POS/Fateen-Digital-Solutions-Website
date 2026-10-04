(function(){
var D=window.FATEEN_CHAT,L=document.documentElement.lang==='en'?'en':'ar',T=D.ui[L],I=D.intents;
function norm(s){return String(s).toLowerCase().replace(/[ً-ٰٟـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^a-z0-9ء-ي ]+/g,' ').replace(/\s+/g,' ').trim()}
function score(q){var best=null,bs=0,qs=' '+norm(q)+' ';I.forEach(function(it){var s=0;it.k.forEach(function(k){var n=norm(k);if(n&&qs.indexOf(n.length<4?' '+n+' ':n)>-1)s+=n.length>4?2:1});if(s>bs){bs=s;best=it}});return bs?best:null}
var root=document.createElement('div');root.className='chat';root.innerHTML='<button class="chat-fab" aria-label="'+T.open+'" aria-expanded="false"><svg class="ic"><use href="#i-chat"/></svg><span>'+T.fab+'</span></button><section class="chat-box" role="dialog" aria-label="'+T.title+'" hidden><header><div><b>'+T.title+'</b><small>'+T.sub+'</small></div><button class="chat-x" aria-label="'+T.close+'"><svg class="ic"><use href="#i-close"/></svg></button></header><div class="chat-log" aria-live="polite"></div><div class="chat-qr"></div><form class="chat-form"><input type="text" autocomplete="off" placeholder="'+T.ph+'" aria-label="'+T.ph+'"><button aria-label="'+T.send+'"><svg class="ic"><use href="#i-send"/></svg></button></form></section>';
document.body.appendChild(root);
var fab=root.querySelector('.chat-fab'),box=root.querySelector('.chat-box'),log=root.querySelector('.chat-log'),qr=root.querySelector('.chat-qr'),form=root.querySelector('form'),inp=form.querySelector('input'),started=false;
function add(t,who,act){var m=document.createElement('div');m.className='msg '+who;var p=document.createElement('p');p.textContent=t;m.appendChild(p);if(act){var a=document.createElement('a');a.className='btn sm';a.href=act.href;a.textContent=act.text;if(act.ext){a.target='_blank';a.rel='noopener'}m.appendChild(a)}log.appendChild(m);log.scrollTop=log.scrollHeight}
function wa(q){return D.wa+'?text='+encodeURIComponent(q||T.wamsg)}
function reply(q){var it=score(q);if(it){add(it.a[L],'bot',it.link?{href:it.link[L],text:it.linkText[L]}:null)}else{add(T.fallback,'bot',{href:wa(q),text:T.wa,ext:1})}}
function chips(){qr.innerHTML='';D.quick.forEach(function(id){var it=I.filter(function(x){return x.id===id})[0];var b=document.createElement('button');b.type='button';b.textContent=it.q[L];b.addEventListener('click',function(){add(it.q[L],'me');setTimeout(function(){reply(it.k[0])},250)});qr.appendChild(b)});var w=document.createElement('a');w.href=wa();w.target='_blank';w.rel='noopener';w.textContent=T.wa;qr.appendChild(w)}
function open(o){box.hidden=!o;fab.setAttribute('aria-expanded',o);root.classList.toggle('on',o);if(o){if(!started){started=true;add(T.hello,'bot');chips()}setTimeout(function(){inp.focus()},50)}}
fab.addEventListener('click',function(){open(box.hidden)});root.querySelector('.chat-x').addEventListener('click',function(){open(false);fab.focus()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden)open(false)});
form.addEventListener('submit',function(e){e.preventDefault();var v=inp.value.trim();if(!v)return;inp.value='';add(v,'me');setTimeout(function(){reply(v)},300)});
})();
