const IMG={i1:"images/sami-books.jpg",i2:"images/garden-walk.jpg",i3:"images/paper.jpg",i4:"images/wooden-box.jpg",i5:"images/friends-search.jpg",i6:"images/friends-garden.jpg",i7:"images/school-path.jpg",i8:"images/new-friend.jpg",i9:"images/sami-sad.jpg",i10:"images/backpack.jpg",i11:"images/teacher.jpg"};
const AR='٠١٢٣٤٥٦٧٨٩',toAr=n=>String(n).replace(/\d/g,d=>AR[d]);
function heart(x,y,r,c,o=1){return `<path d="M${x} ${y+r*.9} C${x-r*1.7} ${y-r*.15} ${x-r*.75} ${y-r*1.35} ${x} ${y-r*.45} C${x+r*.75} ${y-r*1.35} ${x+r*1.7} ${y-r*.15} ${x} ${y+r*.9}Z" fill="${c}" opacity="${o}"/>`}
function star(x,y,r,c,o=1){let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.46:r;d+=(i?'L':'M')+(x+rr*Math.cos(a)).toFixed(1)+' '+(y+rr*Math.sin(a)).toFixed(1)}return `<path d="${d}Z" fill="${c}" opacity="${o}" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/>`}
const BOX=`<svg viewBox="0 0 200 150"><defs><linearGradient id="w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D29660"/><stop offset="1" stop-color="#A86B3C"/></linearGradient></defs><ellipse cx="100" cy="140" rx="70" ry="8" fill="#16384A" opacity=".12"/><g transform="rotate(-24 42 74)"><rect x="40" y="52" width="122" height="22" rx="6" fill="#D29660"/></g><rect x="78" y="44" width="44" height="34" rx="4" fill="#FFFBEF" stroke="#E6D3A3" stroke-width="2" transform="rotate(-8 100 61)"/><rect x="44" y="74" width="112" height="64" rx="9" fill="url(#w)"/><path d="M44 96H156M44 117H156" stroke="#9C6234" stroke-width="2" opacity=".45"/>${star(76,104,13,'#FFCF4A')}${heart(124,104,12,'#FF8A5B')}${heart(100,30,10,'#FF8A5B',.9)}${star(140,22,7,'#FFCF4A')}${star(62,26,6,'#FFCF4A')}</svg>`;
const BAG=`<svg viewBox="0 0 200 170"><ellipse cx="100" cy="160" rx="56" ry="7" fill="#16384A" opacity=".12"/><path d="M78 52 Q100 22 122 52" stroke="#E07B32" stroke-width="9" fill="none" stroke-linecap="round"/><rect x="58" y="50" width="84" height="108" rx="24" fill="#FF9F5A"/><rect x="72" y="104" width="56" height="38" rx="11" fill="#FFB98A"/>${star(100,123,9,'#FFCF4A')}${star(40,48,9,'#FFCF4A')}${star(160,40,11,'#FFCF4A')}${star(166,92,6,'#1FB2A9')}${star(34,104,6,'#1FB2A9')}</svg>`;
const HAND=`<svg viewBox="0 0 200 160"><path d="M40 92 Q100 160 160 92 Q156 124 100 136 Q44 124 40 92Z" fill="#EDB98F"/><path d="M40 92 Q100 160 160 92" stroke="#D49A6E" stroke-width="3" fill="none"/>${heart(100,66,32,'#FF8A5B')}${star(46,40,8,'#FFCF4A')}${star(156,34,10,'#FFCF4A')}${star(170,78,6,'#1FB2A9')}</svg>`;
const QURAN=`<svg viewBox="0 0 800 420"><defs><radialGradient id="qg" cx=".5" cy=".55" r=".75"><stop offset="0" stop-color="#FFF7DA"/><stop offset=".45" stop-color="#CFF3F1"/><stop offset="1" stop-color="#5FC8DC"/></radialGradient><radialGradient id="gl"><stop offset="0" stop-color="#FFE48A" stop-opacity=".95"/><stop offset="1" stop-color="#FFE48A" stop-opacity="0"/></radialGradient></defs><rect width="800" height="420" fill="url(#qg)"/>${Array.from({length:14},(_,i)=>{const a=i/14*Math.PI*2;return `<path d="M400 220 L${(400+700*Math.cos(a)).toFixed(0)} ${(220+700*Math.sin(a)).toFixed(0)} L${(400+700*Math.cos(a+.12)).toFixed(0)} ${(220+700*Math.sin(a+.12)).toFixed(0)}Z" fill="#FFF1B8" opacity=".22"/>`}).join('')}<circle cx="400" cy="225" r="190" fill="url(#gl)"/><path d="M326 272 L472 394 M474 272 L328 394" stroke="#9C6234" stroke-width="24" stroke-linecap="round"/><path d="M326 272 L472 394 M474 272 L328 394" stroke="#C98A55" stroke-width="10" stroke-linecap="round" opacity=".6"/><path d="M262 210 L400 262 L400 310 L262 258Z" fill="#B97A45"/><path d="M538 210 L400 262 L400 310 L538 258Z" fill="#A86B3C"/><path d="M272 192 Q340 196 400 236 L400 290 Q340 250 272 246Z" fill="#1F7A5A"/><path d="M528 192 Q460 196 400 236 L400 290 Q460 250 528 246Z" fill="#1F7A5A"/><path d="M282 186 Q342 190 398 228 L398 280 Q342 242 282 238Z" fill="#FFFDF4" stroke="#E2C27A" stroke-width="2.5"/><path d="M518 186 Q458 190 402 228 L402 280 Q458 242 518 238Z" fill="#FFFDF4" stroke="#E2C27A" stroke-width="2.5"/>${star(170,120,8,'#FFD45C')}${star(640,106,10,'#FFD45C')}${star(600,320,6,'#fff')}${star(200,320,7,'#fff')}</svg>`;
const ICON_HELP=`<svg viewBox="0 0 120 90"><rect x="30" y="56" width="60" height="12" rx="3" fill="#FF8A5B"/><rect x="34" y="44" width="54" height="12" rx="3" fill="#5EC4F0"/><rect x="32" y="32" width="56" height="12" rx="3" fill="#FFCF4A"/>${heart(60,18,9,'#FF8A5B')}<path d="M22 70 Q60 90 98 70" stroke="#EDB98F" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`;
const ICON_WELCOME=`<svg viewBox="0 0 120 90"><circle cx="40" cy="40" r="20" fill="#F3CBA5"/><circle cx="33" cy="37" r="2.6" fill="#2A2A35"/><circle cx="47" cy="37" r="2.6" fill="#2A2A35"/><path d="M32 47 Q40 54 48 47" stroke="#7E2E33" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="82" cy="40" r="20" fill="#EDB98F"/><circle cx="75" cy="37" r="2.6" fill="#2A2A35"/><circle cx="89" cy="37" r="2.6" fill="#2A2A35"/><path d="M74 47 Q82 54 90 47" stroke="#7E2E33" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="24" y="62" width="32" height="24" rx="9" fill="#86D9B4"/><rect x="66" y="62" width="32" height="24" rx="9" fill="#1FB2A9"/>${heart(61,16,7,'#FF8A5B')}</svg>`;
const ICON_WORD=`<svg viewBox="0 0 120 90"><path d="M24 12 h72 a14 14 0 0 1 14 14 v26 a14 14 0 0 1 -14 14 h-38 l-14 14 v-14 h-20 a14 14 0 0 1 -14 -14 v-26 a14 14 0 0 1 14 -14z" fill="#fff" stroke="#1FB2A9" stroke-width="4"/>${heart(60,42,13,'#FF8A5B')}</svg>`;

const S={sami:['سامي','#1FB2A9','#fff'],ahmed:['أحمد','#E9B21F','#4A3200'],newkid:['التلميذ الجديد','#43B087','#fff'],hassan:['عامل المدرسة','#3C7DB8','#fff'],
 teacher:['المعلم','#2F8C86','#fff'],finder:['أحد الطلاب','#FF8A5B','#fff'],students:['الطلاب','#3FA9D8','#fff'],all:['الجميع','#F08A3C','#fff']};
const b=(k,t,label)=>{const [n,c,ct]=S[k];return `<div class="b ${k==='sami'?'':'o'}" style="--c:${c};--ct:${ct}"><span class="who">${label||n}</span><p>${t}</p></div>`};
const note=(label,t)=>`<div class="b note" style="--c:#E2B04A;--ct:#5C3A06"><span class="who">${label}</span><p>${t}</p></div>`;
const SC={sami:'#0E8C85',ahmed:'#A86A00',newkid:'#2E8F5F',hassan:'#2F6BA0',teacher:'#8A4FB8',finder:'#D9582A',students:'#2386BD',all:'#D9661F',note:'#7A4E06'};
const nm=(k,t)=>`<b style="color:${SC[k]}">${t}</b>`;
const Q=(k,t)=>k==='note'?`<span class="rd">«${t}»</span>`:`<span class="qt" style="color:${SC[k]}">«${t}»</span>`;
const W=t=>`<span class="wow">${t}</span>`;
const q=(k,t,verb='قال',adv='')=>`${verb} <b style="color:${SC[k]}">${S[k][0]}</b>${adv?' '+adv:''}: «${t}»`;
const p=t=>`<p class="tx">${t}</p>`;
const story=(...x)=>`<div class="story">${x.join('')}</div>`;
const cut=(src,h)=>`<div class="cut" style="height:${h}cqh"><img src="${src}" alt=""></div>`;
const nar=t=>`<div class="nar">${t}</div>`;
const talk=(...x)=>`<div class="talk">${x.join('')}</div>`;
const ban=(s,t)=>`<div class="ban"><small>${s}</small><h2>${t}</h2></div>`;
const ph=(src,h,pos='center')=>`<div class="ph" style="height:${h}cqh"><img src="${src}" alt="" style="object-position:${pos}"></div>`;

/* pages in reading order (R). R0 = front cover, last = back cover */
const R=[
 {hard:1,html:`<div class="cv"><div class="cv-t">صُنْعُ المَعْرُوفِ<br>كَنْزٌ حَقِيقِيٌّ</div><div class="cv-p"><img src="${IMG.i6}" alt=""></div><div class="cv-s">قصة سامي وأصدقائه عن حسن الخلق</div></div>
  <svg class="cv-d" viewBox="0 0 100 131" preserveAspectRatio="none">${star(12,10,2.4,'#FFCF4A')}${star(84,8,1.8,'#fff')}${star(10,118,1.8,'#fff')}${heart(86,120,2.2,'#FFCF4A')}</svg>`},
 {html:`<div class="pg" style="justify-content:center;align-items:center;gap:5cqw;text-align:center">
   <div style="font-size:4cqw;font-weight:800;color:#E07B32">قصة عن حسن الخلق وأثر صنائع المعروف</div>
   <div style="font-size:10cqw;font-weight:800;line-height:1.45;color:var(--turq-d)">صُنْعُ المَعْرُوفِ<br>كَنْزٌ حَقِيقِيٌّ</div>
   <div class="emb" style="margin:0">${BOX}</div>
   <div style="font-size:4.6cqw;font-weight:700;color:var(--ink2)">قصة سامي وأصدقائه عن حسن الخلق</div></div>`},
 {bleed:IMG.i7,html:`<div class="top"><div class="card">${ban('المشهد الأول','الورقة الغامضة')}</div><div class="card" style="padding:2.4cqw 4.4cqw 3cqw">${p(`في يومٍ من الأيام، كان ${nm('sami','سامي')} يمشي في طريقه إلى المدرسة، والشمس تبتسم في السماء الزرقاء.`)}</div></div>`},
 {tint:'t1',html:`<div class="pg">${ph(IMG.i3,38)}${story(p(`${W('وفجأةً')} رأى ${nm('sami','سامي')} ورقةً صغيرةً على الأرض، فتعجّب وقال: ${Q('sami','ما هذه الورقة على الأرض؟')}`),p(`التقط سامي الورقة وقرأها: ${Q('note','افتح صندوق المعروف، وسترى أثر الخير بعينيك!')}`))}</div>`},
 {tint:'t1',html:`<div class="pg" style="justify-content:center">${story(p(`اتّسعت عينا ${nm('sami','سامي')} وقال: ${Q('sami','عجيب! ومن كتب هذا؟')}`),p(`اقترب صديقه ${nm('ahmed','أحمد')} وسأله: ${Q('ahmed','ماذا وجدت؟')}`),p(`فأجابه سامي: ${Q('sami','رسالة غريبة ومعها خريطة صغيرة!')}`),p(`ضحك أحمد وقال: ${Q('ahmed','يبدو أنها مغامرة!')}`),p(`فقال سامي بحماس: ${Q('sami','سأكتشف الأمر بعد المدرسة.')}`))}</div>`},
 {bleed:IMG.i2,html:`<div class="top"><div class="card">${ban('المشهد الثاني','الصندوق العجيب')}</div><div class="card" style="padding:2.4cqw 4.4cqw 3cqw">${p(`وبعد انتهاء الدوام، حمل ${nm('sami','سامي')} الخريطة وذهب إلى الحديقة، وهو يقول: ${Q('sami','حسب الخريطة يجب أن يكون الصندوق هنا...')}`)}</div></div>`},
 {tint:'t2',html:`<div class="pg">${ph(IMG.i4,46,'center 30%')}${story(p(`بحث ${nm('sami','سامي')} تحت الشجرة الكبيرة، حتى ${W('وجد صندوقًا خشبيًا!')} ففتحه بسرعة... ثم قال متفاجئًا: ${Q('sami','لا يوجد كنز!')}`))}</div>`},
 {tint:'t2',html:`<div class="pg">${story(p(`نظر سامي داخل الصندوق، فوجد رسالةً مكتوبًا فيها: ${Q('note','ضع في هذا الصندوق كل عمل حسن تقوم به، ثم راقب ما يحدث.')}`),p(`تعجّب ${nm('sami','سامي')} وقال: ${Q('sami','وهل يمكن للأعمال الصغيرة أن تُحدث فرقًا؟')}`),p(`ثم أغلق الصندوق، وفكّر قليلًا، وقال: ${Q('sami','سأجرب.')}`))}<div class="emb">${BOX.replace('<svg','<svg style="width:36cqw"')}</div></div>`},
 {tint:'t3',html:`<div class="pg" style="gap:2.4cqw">${ban('المشهد الثالث','أعمال صغيرة')}${cut(IMG.i1,22)}${story(p(`وفي المدرسة، سقطت الكتب من ${nm('hassan','عمّ حسن')} عامل المدرسة، فقال: ${Q('hassan','أوه! سقطت الكتب كلها!')}`),p(`أسرع ${nm('sami','سامي')} إليه وقال: ${Q('sami','لا تقلق يا عم حسن، سأساعدك.')}`),p(`فابتسم عمّ حسن وقال: ${Q('hassan','بارك الله فيك يا بني.')}`))}</div>`},
 {tint:'t3',html:`<div class="pg">${ph(IMG.i8,38,'center 56%')}${story(p(`وفي الفسحة، رأى سامي ${nm('newkid','تلميذًا جديدًا')} يقف وحده، فقال التلميذ الجديد: ${Q('newkid','لا أعرف أحدًا هنا.')}`),p(`فمدّ ${nm('sami','سامي')} يده إليه وقال: ${Q('sami','تعال، العب معنا.')}`))}</div>`},
 {tint:'t3',html:`<div class="pg" style="justify-content:center;gap:4.4cqw">${story(p(`فرح ${nm('newkid','التلميذ الجديد')} وقال: ${Q('newkid','حقًا؟')}`),p(`فأجابه ${nm('sami','سامي')} مبتسمًا: ${Q('sami','بالطبع، الأصدقاء يرحبون بالجميع.')}`),p(`فقال التلميذ الجديد: ${Q('newkid','شكرًا لك يا سامي.')}`))}<div class="emb" style="margin:0">${HAND.replace('<svg','<svg style="width:30cqw"')}</div><div class="cap">«الكلمة الطيبة والمساعدة البسيطة تصنعان فرقًا كبيرًا».</div></div>`},
 {tint:'t4',html:`<div class="pg" style="gap:2.4cqw">${ban('المشهد الرابع','الأزمة')}${cut(IMG.i9,22)}${story(p(`وبعد عدة أيام، بحث ${nm('sami','سامي')} عن حقيبته ${W('فلم يجدها!')} فقال حزينًا: ${Q('sami','أين حقيبتي؟! كانت هنا!')}`),p(`سأله ${nm('ahmed','أحمد')}: ${Q('ahmed','هل بحثت في الفصل؟')}`),p(`فقال سامي: ${Q('sami','نعم، لم أجدها.')}`))}</div>`},
 {tint:'t4',html:`<div class="pg">${ph(IMG.i5,34,'40% center')}${story(p(`فجاء الأصدقاء ليساعدوه. قال ${nm('newkid','التلميذ الجديد')}: ${Q('newkid','سأبحث في الساحة.')}`),p(`وقال ${nm('hassan','عمّ حسن')}: ${Q('hassan','وأنا سأفتش الممرات.')}`),p(`وقال ${nm('ahmed','أحمد')}: ${Q('ahmed','هيا يا أصدقاء، لنساعد سامي.')} وانطلق الجميع يبحثون في كل مكان.`))}</div>`},
 {tint:'t4',html:`<div class="pg" style="justify-content:center;gap:5cqw">${cut(IMG.i10,32)}${story(p(`${W('وفجأةً')} صاح ${nm('finder','أحد الطلاب')}: ${Q('finder','وجدتها! الحقيبة في قاعة الأنشطة!')}`),p(`ففرح ${nm('sami','سامي')} كثيرًا وقال: ${Q('sami','وجدتموها! شكرًا لكم جميعًا.')}`))}</div>`},
 {tint:'t5',html:`<div class="pg sm" style="gap:2.2cqw">${ban('المشهد الخامس','كشف السر')}${story(p(`وفي الفصل، قال ${nm('sami','سامي')} للمعلم: ${Q('sami','لا أفهم لماذا ساعدني الجميع بهذه السرعة.')}`),p(`فقال ${nm('teacher','المعلم')}: ${Q('teacher','لأن الخير الذي صنعته عاد إليك.')}`),p(`سأل سامي: ${Q('sami','ماذا تقصد؟')}`),p(`فقال المعلم: ${Q('teacher','عندما ساعدت الآخرين، زرعت المحبة في قلوبهم، وعندما احتجت إليهم وقفوا بجانبك.')}`),p(`ففهم سامي وقال: ${Q('sami','إذن هذا هو أثر المعروف!')}`))}</div>`},
 {tint:'t5',html:`<div class="pg">${ph(IMG.i11,38,'center 28%')}${story(p(`ثم ابتسم ${nm('teacher','المعلم')} وقال: ${Q('teacher','وهناك سر آخر...')}`),p(`فسأله ${nm('sami','سامي')}: ${Q('sami','ما هو؟')}`),p(`قال المعلم: ${Q('teacher','أنا من وضعت الورقة والخريطة والصندوق.')}`),p(`فتعجّب ${nm('students','الطلاب')} وقالوا: ${Q('students','ماذا؟!')}`))}</div>`},
 {tint:'t5',html:`<div class="pg" style="gap:2.4cqw">${story(p(`قال ${nm('teacher','المعلم')}: ${Q('teacher','أردت أن تتعلموا أن حسن الخلق وصنائع المعروف كنزٌ حقيقي.')}`),p(`فقال ${nm('sami','سامي')}: ${Q('sami','الآن فهمت... الخير لا يضيع أبدًا.')}`),p(`وقال ${nm('all','الجميع')} بصوتٍ واحد: ${Q('all','نعم، الخير يعود إلى صاحبه دائمًا.')}`))}
   <div style="text-align:center;font-size:6.4cqw;font-weight:800;color:#E07B32;line-height:1.4">النهاية</div>
   <div class="msg" style="margin-top:auto;font-size:4.2cqw;padding:2cqw 4cqw 2.6cqw"><div style="font-size:3.2cqw">الرسالة</div>حسن الخلق وصنائع المعروف يزرعان المحبة بين الناس، وما يقدمه الإنسان من خير يعود إليه يومًا بأجمل صورة.</div></div>`},
 {html:`<div class="pg" style="gap:2.4cqw">${ban('نتعلم من القرآن','سورة القلم')}<div class="ph" style="height:30cqh">${QURAN.replace('<svg','<svg style="width:100%;height:100%" preserveAspectRatio="xMidYMid slice"')}</div>
   <div class="ayah">وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ ﴿٣﴾<br>وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ ﴿٤﴾</div><div class="src">سورة القلم، الآيتان ٣ و٤</div></div>`},
 {html:`<div class="pg" style="gap:3cqw"><p class="lesson">في هاتين الآيتين أثنى الله تعالى على نبيّنا محمد ﷺ لعظمة أخلاقه، ووعده بأجر دائم لا ينقطع. ونحن نتعلم من أخلاقه ﷺ الصدق والرحمة والإحسان إلى الآخرين.</p>
   <div class="word"><b>غَيْرَ مَمْنُونٍ:</b> دائمٌ لا ينقطع.</div>
   <div class="ask"><small>سؤال للتفكير</small>كيف نقتدي بالنبي ﷺ في حُسن الخُلُق؟</div>
   <div class="trio"><div>${ICON_HELP}أساعد غيري</div><div>${ICON_WELCOME}أرحّب بصديقي</div><div>${ICON_WORD}أقول كلمة طيبة</div></div></div>`},
 {html:`<div class="pg" style="gap:3.4cqw">${ban('الخاتمة','كنز المعروف')}${ph(IMG.i6,29)}<div class="msg">«أقتدي بالنبي ﷺ في حُسن خُلُقه، وأحرص على فعل الخير كل يوم».</div><div class="ask"><small>سؤال أخير</small>ما عمل المعروف الذي ستقوم به اليوم؟</div></div>`},
 {html:`<div class="pg" style="justify-content:center;align-items:center;gap:6cqw;text-align:center"><div class="emb" style="margin:0">${BOX}</div>
   <div style="font-size:7.4cqw;font-weight:800;line-height:1.6;color:var(--turq-d)">انتهت القصة،<br>وبقي أثر المعروف</div>
   <button class="restart" data-restart>إعادة قراءة القصة</button></div>`},
 {hard:1,html:`<div class="cv"><div class="emb" style="margin:0">${BOX.replace('<svg','<svg style="width:44cqw"')}</div><div class="cv-t" style="font-size:7cqw">الخير لا يضيع أبدًا</div><div class="cv-s">قصة سامي وأصدقائه</div></div>`}
];
const N=R.length;
const book=document.getElementById('book');
const els=R.map((p,r)=>{const d=document.createElement('div');
 d.className='page '+(r%2?'pr':'pl')+(p.hard?' hard':'')+(p.tint?' '+p.tint:'');if(p.hard)d.dataset.density='hard';
 const num=(r>0&&r<N-1)?`<div class="num">${toAr(r)}</div>`:'';
 const dc=(p.tint)?`<svg class="deco" viewBox="0 0 40 40">${r%3===0?heart(20,22,9,'#FF8A5B',.75):star(20,20,11,'#FFCF4A',.9)}${star(r%2?8:32,34,4,'#1FB2A9',.7)}</svg>`:'';
 d.innerHTML=p.bleed?`<div class="bleed"><img src="${p.bleed}" alt="">${p.html}</div>${num}`:p.html+num+dc;return d});
els.slice().reverse().forEach(e=>book.appendChild(e));

const stage=document.getElementById('stage');
function fit(){const land=innerWidth>=720&&innerWidth/innerHeight>0.9;const cols=land?2:1;
 let h=innerHeight-(land?120:140),w=h*550/720;const maxW=innerWidth*(land?.9:.94)/cols;if(w>maxW){w=maxW}
 stage.style.width=Math.floor(w*cols)+'px';}
fit();addEventListener('resize',fit);

const pf=new St.PageFlip(book,{width:550,height:720,size:'stretch',minWidth:300,maxWidth:1400,minHeight:390,maxHeight:1830,
 showCover:true,usePortrait:true,mobileScrollSupport:false,maxShadowOpacity:.6,flippingTime:950,drawShadow:true,showPageCorners:true,startPage:N-1,clickEventForward:true});
pf.loadFromHTML(book.querySelectorAll('.page'));

const ind=document.getElementById('ind'),back=document.getElementById('back'),fwd=document.getElementById('fwd'),again=document.getElementById('again'),hint=document.getElementById('hint');
function update(){
 const L=pf.getCurrentPageIndex(),land=pf.getOrientation()==='landscape';
 const front=L===N-1,backC=L===0;
 stage.classList.toggle('open',land&&!front&&!backC);
 stage.style.transform=land&&front?'translateX(25%)':land&&backC?'translateX(-25%)':'none';
 let txt;
 if(front)txt='الغلاف';else if(backC)txt='الغلاف الخلفي';
 else{let r;if(land){const a=L%2?L:L-1;r=N-2-a}else r=N-1-L;txt=`الصفحة ${toAr(r)} من ${toAr(N-2)}`}
 ind.textContent=txt;back.disabled=front;fwd.disabled=backC;
 again.classList.toggle('show',L<=2);hint.style.opacity=front?1:0;
}
pf.on('flip',update);pf.on('changeOrientation',update);pf.on('init',update);
setTimeout(update,50);
fwd.onclick=()=>pf.flipPrev('bottom');back.onclick=()=>pf.flipNext('bottom');
function restart(){pf.flip(N-1,'bottom')}
again.onclick=restart;
book.addEventListener('click',e=>{if(e.target.closest('[data-restart]'))restart()});
addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key===' ')pf.flipPrev('bottom');if(e.key==='ArrowRight')pf.flipNext('bottom')});
document.getElementById('fs').onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(_){}};
document.addEventListener('fullscreenchange',()=>{document.getElementById('fs').textContent=document.fullscreenElement?'الخروج من ملء الشاشة':'ملء الشاشة';setTimeout(fit,100)});
