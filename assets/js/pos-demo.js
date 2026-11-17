(function(){
if(window.__pdInit)return;window.__pdInit=1;
/* ---- interactive cashier demo ---- */
document.querySelectorAll('.pd-app').forEach(function(root){
 var AR=document.documentElement.lang!=='en';
 var T=AR?{items:[['برجر كلاسيك',45],['شاورما فراخ',40],['بيتزا مارجريتا',70],['قهوة تركي',15],['عصير برتقال',25],['بطاطس',20]],types:['صالة','تيك أواي','دليفري'],cart:'الفاتورة',empty:'اضغط على صنف علشان يتضاف',total:'الإجمالي',cur:'ج.م',save:'حفظ وطباعة',kit:'للمطبخ',hold:'تعليق',net:'الإنترنت',on:'شغّال',off:'مقطوع',run:'الكاشير شغّال',inv:'فواتير النهارده',saved:'فاتورة #',savedLocal:'اتحفظت على جهازك',kp:'المطبخ: جاري التحضير',kd:'المطبخ: جاهز',held:'اتعلّقت. هتلاقيها لما ترجع لها',ill:'تجربة توضيحية، الأسعار للتوضيح فقط',tip:'جرّب: اقطع النت وكمّل بيع',emptyS:'الفاتورة فاضية'}
  :{items:[['Classic burger',45],['Chicken shawarma',40],['Margherita pizza',70],['Turkish coffee',15],['Orange juice',25],['Fries',20]],types:['Dine-in','Takeaway','Delivery'],cart:'Invoice',empty:'Tap an item to add it',total:'Total',cur:'EGP',save:'Save & print',kit:'To kitchen',hold:'Hold',net:'Internet',on:'On',off:'Off',run:'Cashier running',inv:'Invoices today',saved:'Invoice #',savedLocal:'saved on your device',kp:'Kitchen: preparing',kd:'Kitchen: ready',held:'Held. You can resume it later',ill:'Illustrative demo; prices are for illustration only',tip:'Try it: cut the internet and keep selling',emptyS:'The invoice is empty'};
 var cart={},type=0,net=true,count=48,held=0;
 root.innerHTML='<div class="pd-top"><b>Fateen POS</b><button type="button" class="pd-net" aria-pressed="true"><i></i><span></span></button></div>'+
 '<div class="pd-body"><div class="pd-menu"></div><div class="pd-inv"><div class="pd-types"></div><div class="pd-list" aria-live="polite"></div><div class="pd-tot"><span>'+T.total+'</span><b>0</b></div><div class="pd-act"><button type="button" class="pd-save">'+T.save+'</button><button type="button" class="pd-kit">'+T.kit+'</button><button type="button" class="pd-hold">'+T.hold+'</button></div><p class="pd-msg" role="status"></p></div></div>'+
 '<div class="pd-foot"><span><i class="pd-dot"></i>'+T.run+'</span><span>'+T.inv+': <b class="pd-cnt">48</b></span><em>'+T.ill+'</em></div><p class="pd-tip">'+T.tip+'</p>';
 var menu=root.querySelector('.pd-menu'),list=root.querySelector('.pd-list'),tot=root.querySelector('.pd-tot b'),msg=root.querySelector('.pd-msg'),netb=root.querySelector('.pd-net'),cnt=root.querySelector('.pd-cnt'),types=root.querySelector('.pd-types');
 T.items.forEach(function(it,i){var b=document.createElement('button');b.type='button';b.className='pd-it';b.innerHTML='<span>'+it[0]+'</span><b>'+it[1]+'</b>';b.addEventListener('click',function(){cart[i]=(cart[i]||0)+1;draw()});menu.appendChild(b)});
 T.types.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.textContent=t;b.className=i===0?'on':'';b.addEventListener('click',function(){type=i;[].forEach.call(types.children,function(c,j){c.classList.toggle('on',j===i)})});types.appendChild(b)});
 function say(t){msg.textContent=t;msg.classList.add('on')}
 function sum(){var s=0;for(var k in cart)s+=cart[k]*T.items[k][1];return s}
 function draw(){list.innerHTML='';var ks=Object.keys(cart);if(!ks.length){list.innerHTML='<p class="pd-empty">'+T.empty+'</p>'}
  ks.forEach(function(k){var r=document.createElement('div');r.className='pd-row';r.innerHTML='<span>'+T.items[k][0]+'</span><div><button type="button" aria-label="-">−</button><b>'+cart[k]+'</b><button type="button" aria-label="+">+</button></div>';var bs=r.querySelectorAll('button');bs[0].addEventListener('click',function(){cart[k]--;if(cart[k]<1)delete cart[k];draw()});bs[1].addEventListener('click',function(){cart[k]++;draw()});list.appendChild(r)});
  tot.textContent=sum()+' '+T.cur}
 function setNet(){netb.setAttribute('aria-pressed',net);netb.querySelector('span').textContent=T.net+': '+(net?T.on:T.off);root.classList.toggle('cut',!net)}
 netb.addEventListener('click',function(){net=!net;setNet();say(net?'':(AR?'النت قطع، والكاشير كمّل عادي.':'Internet is down and the cashier carries on.'))});
 root.querySelector('.pd-save').addEventListener('click',function(){if(!sum()){say(T.emptyS);return}count++;cnt.textContent=count;say(T.saved+count+' · '+(net?'':T.savedLocal+' · ')+sum()+' '+T.cur);cart={};draw()});
 root.querySelector('.pd-kit').addEventListener('click',function(){if(!sum()){say(T.emptyS);return}say(T.kp);setTimeout(function(){say(T.kd)},1800)});
 root.querySelector('.pd-hold').addEventListener('click',function(){if(!sum()){say(T.emptyS);return}say(T.held);cart={};draw()});
 setNet();draw();
});
/* ---- gallery viewer ---- */
document.querySelectorAll('.gv').forEach(function(g){
 var img=g.querySelector('.gv-stage img'),t=g.querySelector('.gv-cap h3'),p=g.querySelector('.gv-cap p'),th=[].slice.call(g.querySelectorAll('.gv-th button')),i=0;
 function go(n){i=(n+th.length)%th.length;var b=th[i];img.src=b.dataset.full;img.alt=b.dataset.alt;t.textContent=b.dataset.t;p.textContent=b.dataset.d;th.forEach(function(x,j){x.classList.toggle('on',j===i)});g.querySelector('.gv-n').textContent=(i+1)+' / '+th.length}
 th.forEach(function(b,j){b.addEventListener('click',function(){go(j)})});
 g.querySelectorAll('.gv-b').forEach(function(b){b.addEventListener('click',function(){go(i+(+b.dataset.d))})});
 var x0=null;g.querySelector('.gv-stage').addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});g.querySelector('.gv-stage').addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(i+(dx<0?1:-1));x0=null});
 go(0)});
})();
