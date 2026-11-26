(function(){
if(window.__sdInit)return;window.__sdInit=1;
var AR=document.documentElement.lang!=='en';
function $(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function L(a,e){return AR?a:e}
var ILL=L('مثال توضيحي: الأرقام للتوضيح فقط','Illustrative example: numbers are for illustration only');
var D={};
/* ---------- finance: price from real cost ---------- */
D.finance=function(r){
 r.innerHTML='<div class="sd-h"><b>'+L('حاسبة التسعير','Pricing calculator')+'</b><span>'+L('بالتكلفة الحقيقية','From true cost')+'</span></div>'+
 '<div class="sd-f"><label>'+L('تكلفة المكوّنات (ج.م)','Ingredients cost (EGP)')+'<input id="sdA" type="number" inputmode="decimal" min="0" value="30"></label>'+
 '<label>'+L('تغليف وتشغيل للقطعة (ج.م)','Packaging & running per item (EGP)')+'<input id="sdB" type="number" inputmode="decimal" min="0" value="5"></label>'+
 '<label>'+L('هامش الربح المطلوب','Target margin')+' <b class="sd-v" id="sdM">40%</b><input id="sdC" type="range" min="10" max="70" value="40"></label></div>'+
 '<div class="sd-out"><div><small>'+L('التكلفة الكلية','Total cost')+'</small><b id="oC"></b></div><div class="hl"><small>'+L('السعر المقترح','Suggested price')+'</small><b id="oP"></b></div><div><small>'+L('ربح القطعة','Profit per item')+'</small><b id="oR"></b></div></div>'+
 '<div class="sd-bar" aria-hidden="true"><i id="bC"></i><i id="bR" class="pf"></i></div><p class="sd-ill">'+ILL+'</p>';
 var A=r.querySelector('#sdA'),B=r.querySelector('#sdB'),C=r.querySelector('#sdC');
 function go(){var a=Math.max(0,+A.value||0),b=Math.max(0,+B.value||0),m=+C.value/100,c=a+b,p=c/(1-m);
  r.querySelector('#sdM').textContent=C.value+'%';
  r.querySelector('#oC').textContent=c.toFixed(1);r.querySelector('#oP').textContent=p.toFixed(1);r.querySelector('#oR').textContent=(p-c).toFixed(1);
  r.querySelector('#bC').style.width=(c/p*100||0)+'%';r.querySelector('#bR').style.width=((p-c)/p*100||0)+'%'}
 [A,B,C].forEach(function(x){x.addEventListener('input',go)});go()};
/* ---------- QR menu ---------- */
D.menu=function(r){
 var cats=AR?{'مشروبات':[['قهوة تركي','غامقة أو وسط',15],['عصير برتقال','طازج',25],['شاي بالنعناع','',10]],'أكل':[['برجر كلاسيك','مع بطاطس',45],['شاورما فراخ','سندوتش',40],['بيتزا مارجريتا','حجم وسط',70]],'حلويات':[['كنافة','بالقشطة',35],['أم علي','',30]]}
 :{'Drinks':[['Turkish coffee','Dark or medium',15],['Orange juice','Fresh',25],['Mint tea','',10]],'Food':[['Classic burger','With fries',45],['Chicken shawarma','Sandwich',40],['Margherita pizza','Medium',70]],'Dessert':[['Kunafa','With cream',35],['Om Ali','',30]]};
 r.innerHTML='<div class="sd-ph"><div class="sd-top"><b>'+L('كافيه المثال','Example Café')+'</b><span>QR</span></div><div class="sd-tabs" role="tablist"></div><div class="sd-pan"></div></div><p class="sd-ill">'+ILL+'</p>';
 var tabs=r.querySelector('.sd-tabs'),pan=r.querySelector('.sd-pan'),keys=Object.keys(cats).concat([L('قيّمنا','Rate us')]),cur=0;
 function draw(){[].forEach.call(tabs.children,function(b,i){b.classList.toggle('on',i===cur);b.setAttribute('aria-selected',i===cur)});pan.innerHTML='';
  if(cur<keys.length-1){cats[keys[cur]].forEach(function(it){pan.appendChild($('div','sd-it','<span><b>'+it[0]+'</b><small>'+it[1]+'</small></span><em>'+it[2]+'</em>'))})}
  else{var s=0;pan.innerHTML='<p class="sd-q">'+L('عجبك المكان؟ قيّم في ثانية.','Liked the place? Rate in a second.')+'</p><div class="sd-st"></div><button type="button" class="sd-btn" disabled>'+L('ابعت رأيك','Send feedback')+'</button><p class="sd-ok" role="status"></p>';
   var st=pan.querySelector('.sd-st'),bt=pan.querySelector('.sd-btn'),ok=pan.querySelector('.sd-ok');
   for(var i=1;i<=5;i++)(function(i){var b=$('button','','★');b.type='button';b.setAttribute('aria-label',i+'/5');b.addEventListener('click',function(){s=i;[].forEach.call(st.children,function(x,j){x.classList.toggle('on',j<i)});bt.disabled=false});st.appendChild(b)})(i);
   bt.addEventListener('click',function(){ok.textContent=L('وصل رأيك لصاحب المكان. شكرًا!','Your feedback reached the owner. Thank you!');bt.disabled=true})}}
 keys.forEach(function(k,i){var b=$('button','',k);b.type='button';b.setAttribute('role','tab');b.addEventListener('click',function(){cur=i;draw()});tabs.appendChild(b)});draw()};
/* ---------- website preview ---------- */
D.web=function(r){
 var pg=AR?['الرئيسية','الخدمات','تواصل']:['Home','Services','Contact'];
 r.innerHTML='<div class="sd-h"><b>'+L('معاينة موقعك','Your site preview')+'</b><div class="sd-dv"><button type="button" class="on" data-d="m">'+L('موبايل','Mobile')+'</button><button type="button" data-d="d">'+L('كمبيوتر','Desktop')+'</button></div></div>'+
 '<div class="sd-bw m"><div class="sd-url"><i></i><i></i><i></i><span dir="ltr">yourbusiness.com</span></div><div class="sd-nv" role="navigation"></div><div class="sd-pg"></div></div>'+
 '<div class="sd-gg"><small dir="ltr">yourbusiness.com</small><b>'+L('اسم نشاطك | أسوان','Your business | Aswan')+'</b><span>'+L('كده بيظهر نشاطك على جوجل.','This is how your business shows on Google.')+'</span></div><p class="sd-ill">'+ILL+'</p>';
 var bw=r.querySelector('.sd-bw'),nv=r.querySelector('.sd-nv'),pgE=r.querySelector('.sd-pg'),cur=0;
 var C=AR?[['اسم نشاطك','شغل نضيف وخدمة سريعة.','اطلب على واتساب'],['خدماتنا','ثلاث خدمات واضحة بأسعار بتعرفها على واتساب.','شوف التفاصيل'],['كلمنا','العنوان ومواعيد الشغل وزرار واتساب.','ابعت رسالة']]
 :[['Your business name','Clean work and fast service.','Order on WhatsApp'],['Our services','Three clear services; prices on WhatsApp.','See details'],['Contact us','Address, opening hours and a WhatsApp button.','Send a message']];
 function draw(){[].forEach.call(nv.children,function(b,i){b.classList.toggle('on',i===cur)});var c=C[cur];pgE.innerHTML='<h3>'+c[0]+'</h3><p>'+c[1]+'</p><span class="sd-cta">'+c[2]+'</span><div class="sd-bl"><i></i><i></i><i></i></div>'}
 pg.forEach(function(k,i){var b=$('button','',k);b.type='button';b.addEventListener('click',function(){cur=i;draw()});nv.appendChild(b)});
 [].forEach.call(r.querySelectorAll('.sd-dv button'),function(b){b.addEventListener('click',function(){[].forEach.call(r.querySelectorAll('.sd-dv button'),function(x){x.classList.toggle('on',x===b)});bw.className='sd-bw '+b.dataset.d})});draw()};
/* ---------- automation: bot ---------- */
D.bot=function(r){
 var Q=AR?[['مبيعات النهارده؟','مبيعات النهارده 63 فاتورة، والأكتر مبيعًا برجر كلاسيك.'],['إيه اللي قرّب يخلص؟','صنفين قربوا يخلصوا: بطاطس وعصير برتقال.'],['مواعيد الشغل؟','بنشتغل كل يوم من 10 الصبح لـ 12 بالليل.'],['عايز أحجز','تمام! قولي عدد الأفراد والمعاد وأنا هبلّغ الفريق.']]
 :[['Sales today?','Today: 63 invoices; best seller is Classic burger.'],['What is running low?','Two items are low: fries and orange juice.'],['Opening hours?','We are open daily from 10 AM to midnight.'],['I want to book','Sure! Tell me the party size and time and I will notify the team.']];
 r.innerHTML='<div class="sd-h"><b>'+L('مساعد فطين','Fateen assistant')+'</b><span><i class="sd-live"></i>'+L('شغّال','Online')+'</span></div><div class="sd-ch" aria-live="polite"></div><div class="sd-cp"></div><p class="sd-ill">'+ILL+'</p>';
 var ch=r.querySelector('.sd-ch'),cp=r.querySelector('.sd-cp');
 function add(c,t){var p=$('p',c,t);ch.appendChild(p);ch.scrollTop=ch.scrollHeight}
 add('bot',L('أهلًا! اسألني عن مبيعاتك أو مخزونك أو مواعيد الشغل.','Hi! Ask me about your sales, stock or opening hours.'));
 Q.forEach(function(q){var b=$('button','',q[0]);b.type='button';b.addEventListener('click',function(){add('me',q[0]);var t=$('p','bot ty','...');ch.appendChild(t);setTimeout(function(){ch.removeChild(t);add('bot',q[1])},700)});cp.appendChild(b)})};
/* ---------- smart stand ---------- */
D.stand=function(r){
 var O=AR?[['menu','المنيو'],['rate','قيّمنا'],['pay','ادفع']]:[['menu','Menu'],['rate','Rate us'],['pay','Pay']];
 var X=AR?{menu:'منيو المكان كله على موبايلك: أكل ومشروبات وحلويات.',rate:'قيّم تجربتك بنجمة، ورأيك يوصل لصاحب المكان.',pay:'امسح كود الدفع وادفع بسهولة من موبايلك.',hint:'قرّب موبايلك من الستاند',tap:'قرّب الموبايل',tbl:'ترابيزة 5'}
 :{menu:'The whole menu on your phone: food, drinks and dessert.',rate:'Rate your visit with a star; it reaches the owner.',pay:'Scan the payment code and pay easily from your phone.',hint:'Bring your phone close to the stand',tap:'Tap phone',tbl:'Table 5'};
 r.innerHTML='<div class="sd-stw"><div class="sd-stand"><b>FATEEN</b><i class="sd-qr"></i><small>'+X.tbl+'</small></div><div class="sd-ph sm"><p class="sd-hint">'+X.hint+'</p><button type="button" class="sd-btn tap">'+X.tap+'</button><div class="sd-sc" hidden></div></div></div><p class="sd-ill">'+ILL+'</p>';
 var tap=r.querySelector('.tap'),sc=r.querySelector('.sd-sc'),hint=r.querySelector('.sd-hint');
 tap.addEventListener('click',function(){tap.hidden=true;hint.hidden=true;sc.hidden=false;sc.innerHTML='<div class="sd-ac"></div><p class="sd-tx" role="status"></p>';var ac=sc.querySelector('.sd-ac'),tx=sc.querySelector('.sd-tx');
  O.forEach(function(o,i){var b=$('button','',o[1]);b.type='button';b.addEventListener('click',function(){[].forEach.call(ac.children,function(x){x.classList.toggle('on',x===b)});tx.textContent=X[o[0]]});ac.appendChild(b);if(!i)b.click()})})};
document.querySelectorAll('.sd[data-demo]').forEach(function(r){var f=D[r.dataset.demo];if(f)f(r)});
})();
