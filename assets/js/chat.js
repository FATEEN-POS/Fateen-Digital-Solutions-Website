(function(){
var D=window.FATEEN_CHAT,L=document.documentElement.lang==='en'?'en':'ar',T=D.ui[L],I=D.intents,AR=L==='ar';
function norm(s){return String(s).toLowerCase().replace(/[ً-ٰـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^a-z0-9ء-ي ]+/g,' ').replace(/\s+/g,' ').trim()}
function has(q,ks){q=' '+norm(q)+' ';return ks.some(function(k){k=norm(k);return k&&q.indexOf(k.length<4?' '+k+' ':k)>-1})}
function score(q){var best=null,bs=0,qs=' '+norm(q)+' ';I.forEach(function(it){var s=0;it.k.forEach(function(k){var n=norm(k);if(n&&qs.indexOf(n.length<4?' '+n+' ':n)>-1)s+=n.length>4?2:1});if(s>bs){bs=s;best=it}});return bs?best:null}
/* ---- sales content ---- */
var ACT={
 rest:{n:AR?'مطعم':'a restaurant',k:['مطعم','مطاعم','restaurant','كشري','فاست فود','برجر','شاورما'],rec:AR?'كاشير بشاشة مطبخ، تسعير بالتكلفة الحقيقية، ومنيو QR':'POS with a kitchen screen, cost-based pricing and a QR menu'},
 cafe:{n:AR?'كافيه':'a café',k:['كافيه','كافي','قهوه','cafe','coffee','كوفي'],rec:AR?'كاشير بشاشة بار، تسعير الخامات، ومنيو QR':'POS with a bar screen, ingredient pricing and a QR menu'},
 mkt:{n:AR?'ماركت':'a market',k:['ماركت','سوبر','بقاله','محل','متجر','market','shop','store','صيدليه'],rec:AR?'كاشير بباركود ومخزون وصلاحيات وتقارير':'POS with barcode, inventory, staff roles and reports'},
 fuel:{n:AR?'محطة وقود':'a fuel station',k:['محطه','وقود','بنزين','fuel','station','atg'],rec:AR?'نظام ATG لمتابعة الخزانات وتقارير يومية آلية':'an ATG system for tank monitoring and automatic daily reports'},
 biz:{n:AR?'شركة أو مكتب':'a company or office',k:['شركه','مكتب','محامي','محاماه','عيادة','company','office','law','clinic'],rec:AR?'موقع احترافي يظهر في جوجل':'a professional website that ranks on Google'}};
var PAIN={
 net:{n:AR?'النت بيقطع':'internet drops',k:['نت','انترنت','قطع','يفصل','internet','offline','وقف'],a:AR?'كاشير فطين بيشتغل بالكامل من غير إنترنت، فمفيش فاتورة بتتعطل ولا زبون بيستنى.':'Fateen POS works fully offline, so no invoice stalls and no customer waits.'},
 cost:{n:AR?'التسعير والربح':'pricing and profit',k:['تسعير','ربح','تكلفه','خسران','هامش','pricing','profit','margin','cost'],a:AR?'بنحسب تكلفة كل صنف من خاماته ونحدد هامش ربح مدروس، فمتبيعش كتير وانت مش كسبان.':'We work out each item\'s real cost from its ingredients and set a planned margin, so you stop selling a lot without earning.'},
 stock:{n:AR?'المخزون':'stock',k:['مخزون','جرد','ناقص','هالك','صلاحيه','stock','inventory','expiry'],a:AR?'المخزون بالسعر والتكلفة والكمية والصلاحية، وتنبيه بالأصناف الناقصة، وتقدر ترفع أصنافك من Excel.':'Stock with price, cost, quantity and expiry, shortage tracking, and Excel import.'},
 staff:{n:AR?'الرقابة على الموظفين':'staff control',k:['موظف','موظفين','سرقه','رقابه','كاشير غلط','staff','employees','control'],a:AR?'كل عملية مسجّلة باسم صاحبها، بصلاحيات مدير وكاشير، وتقارير منفصلة لكل كاشير وحضور وعمولات.':'Every action is tagged to the person who did it, with manager and cashier roles, per-cashier reports, attendance and commission.'},
 web:{n:AR?'موقع أو منيو':'website or menu',k:['موقع','منيو','ويب','جوجل','qr','website','menu','google'],a:AR?'بنعمل مواقع بتظهر في جوجل ومنيو QR بهوية مكانك من غير طباعة.':'We build sites that rank on Google and QR menus with your venue\'s identity, no printing.'}};
var S={act:null,pain:null,name:null};
function pick(q,M){for(var k in M){if(has(q,M[k].k))return k}return null}
/* ---- ui ---- */
var root=document.createElement('div');root.className='chat';root.innerHTML='<button class="chat-fab" aria-label="'+T.open+'" aria-expanded="false"><svg class="ic"><use href="#i-chat"/></svg><span>'+T.fab+'</span></button><section class="chat-box" role="dialog" aria-label="'+T.title+'" hidden><header><div><b>'+T.title+'</b><small>'+T.sub+'</small></div><button class="chat-x" aria-label="'+T.close+'"><svg class="ic"><use href="#i-close"/></svg></button></header><div class="chat-log" aria-live="polite"></div><div class="chat-qr"></div><form class="chat-form"><input type="text" autocomplete="off" placeholder="'+T.ph+'" aria-label="'+T.ph+'"><button aria-label="'+T.send+'"><svg class="ic"><use href="#i-send"/></svg></button></form></section>';
document.body.appendChild(root);
var fab=root.querySelector('.chat-fab'),box=root.querySelector('.chat-box'),log=root.querySelector('.chat-log'),qr=root.querySelector('.chat-qr'),form=root.querySelector('form'),inp=form.querySelector('input'),started=false;
function add(t,who,acts){var m=document.createElement('div');m.className='msg '+who;var p=document.createElement('p');p.textContent=t;m.appendChild(p);(acts||[]).forEach(function(act){var a=document.createElement('a');a.className='btn sm';a.href=act.href;a.textContent=act.text;if(act.ext){a.target='_blank';a.rel='noopener'}m.appendChild(a)});log.appendChild(m);log.scrollTop=log.scrollHeight}
function typing(cb){var m=document.createElement('div');m.className='msg bot';m.innerHTML='<p>…</p>';log.appendChild(m);log.scrollTop=log.scrollHeight;setTimeout(function(){log.removeChild(m);cb()},450)}
function wa(q){return D.wa+'?text='+encodeURIComponent(q||T.wamsg)}
function ctx(){var a=S.act?ACT[S.act].n:'',p=S.pain?PAIN[S.pain].n:'';return AR?('أهلًا، عندي '+(a||'نشاط')+(p?' ومشكلتي: '+p:'')+'. عايز أبدأ تجربة 7 أيام.'):('Hello, I have '+(a||'a business')+(p?' and my main problem is '+p:'')+'. I\'d like to start the 7-day free trial.')}
function trial(){return {href:wa(ctx()),text:AR?'ابدأ تجربة 7 أيام على واتساب':'Start the 7-day trial on WhatsApp',ext:1}}
function setQ(list){qr.innerHTML='';list.forEach(function(o){var b=document.createElement('button');b.type='button';b.textContent=o[0];b.addEventListener('click',function(){add(o[0],'me');var f=o[1];setTimeout(function(){typing(f)},80)});qr.appendChild(b)})}
/* ---- flows ---- */
function askAct(){add(AR?'نشاطك إيه؟ عشان أرشّحلك الأنسب.':'What kind of business do you run? I\'ll recommend what fits.','bot');var o=[];['rest','cafe','mkt','fuel','biz'].forEach(function(k){o.push([ACT[k].n.replace(/^a /,''),function(){setAct(k)}])});setQ(o)}
function setAct(k){S.act=k;var p=[];if(k==='fuel'){add(AR?'ممتاز. لمحطات الوقود عندنا نظام ATG: '+ACT[k].rec+'. اتسلّم لمحطة بازينينا CPC في مايو 2026.':'Great. For fuel stations we have ATG: '+ACT[k].rec+'. Delivered to the Bazinina CPC station in May 2026.','bot',[trial()]);return after()}
 if(k==='biz'){add(AR?'تمام. '+ACT[k].rec+'، وعملنا موقع لواء د. طارق جمعة. تحب نبدأ؟':'Good. '+ACT[k].rec+', and we built Maj. Gen. Dr. Tarek Gomaa\'s site. Shall we start?','bot',[trial()]);return after()}
 add(AR?'جميل. لـ'+ACT[k].n+' بنرشّح: '+ACT[k].rec+'. إيه أكتر حاجة بتتعبك دلوقتي؟':'Nice. For '+ACT[k].n+' we recommend '+ACT[k].rec+'. What hurts most right now?','bot');
 var o=[];['net','cost','stock','staff'].forEach(function(x){o.push([PAIN[x].n,function(){setPain(x)}])});setQ(o)}
function setPain(x){S.pain=x;add(PAIN[x].a+(AR?' تحب تجرّبه على نشاطك أسبوع من غير التزام؟':' Want to try it on your business for a week, no commitment?'),'bot',[trial()]);after()}
function after(){setQ([[AR?'إزاي التجربة بتشتغل؟':'How does the trial work?',trialHow],[AR?'بتشتغلوا مع مين؟':'Who do you work with?',proof],[AR?'إيه حدود السيستم؟':'What are the limits?',limits],[AR?'السعر؟':'Pricing?',price]])}
function trialHow(){add(AR?'بتبعتلنا على واتساب، بنسألك 3 أسئلة (نوع النشاط، المشكلة، حجم الشغل)، نعرض عليك السيستم، وبعدها تجرّبه 7 أيام من غير التزام. ومتابعة معاك في اليوم 2 و5 و7.':'Message us on WhatsApp, we ask 3 questions (business type, problem, size), show you the system, then you try it for 7 days with no commitment, with follow-ups on days 2, 5 and 7.','bot',[trial()]);after()}
function proof(){add(AR?'12 عميل في 5 قطاعات خلال أقل من 10 شهور، منهم فود كورت أسوان (4 مطاعم)، Way 2 Go، ومحطة بازينينا CPC. وكل شغلنا بعقد وفاتورة رسمية وتسليم موثّق.':'12 clients across 5 sectors in under 10 months, including Aswan Food Court (4 restaurants), Way 2 Go and the Bazinina CPC station. Every job comes with a contract, an official invoice and documented delivery.','bot',[{href:AR?'/team/':'/en/team/',text:AR?'شوف شغلنا':'See our work'}]);after()}
function limits(){add(AR?'بنقولك بصراحة: بيشتغل على جهاز واحد في المحل، ولو الجهاز اتعطل السيستم يقف لحد الإصلاح أو استرجاع نسخة احتياطية. مفيش متابعة من خارج المحل في النسخة الحالية، والواجهة عربي فقط، وأكتر من 3 كاشير بنقيّمه معاك.':'Honestly: it runs on one device in the shop; if that device fails the system stops until repaired or restored from a backup. No monitoring from outside the shop in the current version, Arabic interface only, and more than 3 cashiers is assessed with you first.','bot');after()}
function price(){add(AR?'السعر واضح بالجنيه ولا ربط بالدولار، وبيتحدد حسب نشاطك وعدد الشاشات. ابعتلنا نشاطك على واتساب ونرد عليك بالتفاصيل.':'The price is in EGP with no dollar link, and depends on your business and screens. Send us your business type on WhatsApp and we\'ll reply with details.','bot',[{href:wa(AR?'أهلًا، عايز أعرف التفاصيل والسعر لنشاطي':'Hello, I\'d like details and pricing for my business'),text:AR?'كلمنا على واتساب':'Chat on WhatsApp',ext:1}]);after()}
var OBJ=[
 {k:['غالي','غاليه','خصم','اوفر','expensive','discount'],f:function(){add(AR?'فاهم قلقك. السعر بالجنيه من غير ربط بالدولار، والتجربة 7 أيام من غير التزام، فتشوف القيمة قبل ما تدفع.':'Understood. The price is fixed in EGP with no monthly subscription or dollar link, and the trial is 7 days with no commitment, so you see the value before paying.','bot',[trial()])}},
 {k:['ضمان','امان','موثوق','نصب','اثق','trust','safe','scam'],f:function(){proof()}},
 {k:['بيانات','تشفير','سرقه بيانات','data','security','encrypted'],f:function(){add(AR?'بيانات محلك متخزنة على جهازك أنت ومشفّرة، والترخيص مربوط بجهازك. الإنترنت مطلوب بس للدعم عن بعد أو التحديثات.':'Your data lives on your own device, encrypted, and the licence is bound to that device. The internet is only needed for remote support or updates.','bot')}},
 {k:['دعم','صيانه','مشكله','support','help'],f:function(){add(AR?'الدعم من فريق في أسوان على واتساب، والتجديد السنوي بيشمل الدعم والتحديثات.':'Support comes from a team in Aswan on WhatsApp, and the yearly renewal includes support and updates.','bot',[{href:wa(),text:T.wa,ext:1}])}},
 {k:['تجربه','جرب','trial','try','demo','ديمو'],f:function(){trialHow()}},
 {k:['حدود','عيوب','سلبيات','limits','drawback'],f:function(){limits()}},
 {k:['منافس','فودكس','دفترة','دفتره','foodics','daftra','loyverse','مستورد','امريكي'],f:function(){add(AR?'الأنظمة المستوردة غالبًا بتعتمد على الإنترنت واشتراك متغيّر مربوط بالدولار وواجهة مترجمة. فطين بيشتغل من غير نت، بسعر ثابت بالجنيه، وعربي من الأساس، وفريقه في أسوان.':'Imported systems usually depend on the internet, a variable dollar-linked subscription and a translated interface. Fateen works offline, at a fixed EGP price, Arabic-native, with a team in Aswan.','bot',[trial()])}},
 {k:['اهلا','هاي','مرحبا','السلام','hello','hi','ازيك','صباح'],f:function(){add(AR?'أهلًا بيك! أنا مساعد فطين. أقولك أنسب حل لنشاطك في دقيقة.':'Hello! I\'m the Fateen assistant. I can find the best fit for your business in a minute.','bot');askAct()}}];
function reply(q){
 for(var i=0;i<OBJ.length;i++){if(has(q,OBJ[i].k)){return OBJ[i].f()}}
 var a=pick(q,ACT),p=pick(q,PAIN);
 if(a&&!S.act){S.act=a;if(p){return setPain(p)}return setAct(a)}
 if(p){if(!S.act){S.pain=p;add(PAIN[p].a,'bot');return askAct()}return setPain(p)}
 var it=score(q);
 if(it){add(it.a[L],'bot',it.link?[{href:it.link[L],text:it.linkText[L]}]:null);return after()}
 add(AR?'مش متأكد إني فهمت. قولّي نشاطك (مطعم، كافيه، ماركت، محطة) وأرشّحلك الأنسب، أو كلّم فريقنا على واتساب.':'Not sure I got that. Tell me your business (restaurant, café, market, station) and I\'ll recommend what fits, or talk to our team on WhatsApp.','bot',[{href:wa(q),text:T.wa,ext:1}]);
 if(!S.act)askAct()}
function open(o){box.hidden=!o;fab.setAttribute('aria-expanded',o);root.classList.toggle('on',o);if(o){if(!started){started=true;add(AR?'أهلًا بيك في فطين 👋 أنا هساعدك تختار الأنسب لنشاطك، وتجرّب السيستم 7 أيام مجانًا.':'Welcome to Fateen 👋 I\'ll help you pick what fits your business, and you can try the system free for 7 days.','bot');askAct()}setTimeout(function(){inp.focus()},50)}}
fab.addEventListener('click',function(){open(box.hidden)});root.querySelector('.chat-x').addEventListener('click',function(){open(false);fab.focus()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden){open(false);fab.focus()}});
form.addEventListener('submit',function(e){e.preventDefault();var v=inp.value.trim();if(!v)return;inp.value='';add(v,'me');typing(function(){reply(v)})});
})();
