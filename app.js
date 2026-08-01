/* Bilt Morocco — app logic. You don't need to edit this file.
   All text/prices/colours/logos live in content.js. */

const C = window.CONTENT;
const IMGS = { bigmac:"images/big-mac.jpg", whopper:"images/whopper.jpg", double:"images/double-double.jpg" };

const MODELS = {
  bigmac: { fins:["Thruster"],
    sizes:[["5'6",28],["5'8",30],["5'10",33],["6'0",36],["6'2",39],["6'4",42],["6'6",45],["6'8",48],["7'0",51],["7'6",54],["8'0",58]] },
  whopper:{ fins:["Twin","Quad"],
    sizes:[["5'8",36],["5'10",38],["6'0",40],["6'2",43],["6'4",47],["6'6",49],["6'10",53],["7'2",56],["8'0",64]] },
  double: { fins:["Twin","2+1"],
    sizes:[["6'6",42],["6'8",44],["6'10",46],["7'0",48],["7'2",50],["7'4",53],["7'6",56],["7'10",60],["8'0",63],["8'6",70]] }
};
const WAVE_LABELS=["Ankle","Knee","Waist","Chest","Head","OH","DOH"];
const SKILL_LABELS=["First-timer","Beginner","Improver","Intermediate","Advanced","Pro"];
const ATTR={
  bigmac:{builtFor:"Shortboard · daily driver",wave:[2,6],skill:[2,4],bars:{Paddle:3,Speed:4,Flow:3,Control:4,Response:4,Forgiving:3}},
  whopper:{builtFor:"Fish · small-wave weapon",wave:[0,4],skill:[0,5],bars:{Paddle:5,Speed:5,Flow:4,Control:3,Response:3,Forgiving:4}},
  double:{builtFor:"Mid-length · all-rounder",wave:[1,6],skill:[0,5],bars:{Paddle:5,Speed:3,Flow:5,Control:4,Response:3,Forgiving:5}}
};
const COLORS = C.colours;
const GLASS = [
  {id:"standard",label:"Standard",desc:"4+4 / 4 · light and lively",charge:C.glassingStandardCharge},
  {id:"strong",  label:"Strong",  desc:"6+4 / 6 · more durable, a touch heavier",charge:C.glassingStrongCharge},
  {id:"heavy",   label:"Heavy",   desc:"6+6 / 6 · toughest, heaviest",charge:C.glassingHeavyCharge}
];
const ABILITY={beginner:0.95,improver:0.72,intermediate:0.55,advanced:0.42};
const AGE_MOD={u30:1.0,a30:1.03,a46:1.06,a56:1.10};
const FIT_MOD={high:0.97,avg:1.0,low:1.05};
const FREQ_MOD={often:0.98,monthly:1.0,rare:1.04};

const state={ability:null,weight:null,height:null,age:null,fitness:null,frequency:null,waves:null,goal:null,
  model:"double",size:null,fin:null,glassing:"standard",
  deck:"#ffffff",bottom:"#ffffff",rails:"#ffffff"};
const nameOf=m=>C[m+"Name"];
const parseNum=s=>parseInt(String(s).replace(/[^\d]/g,""),10)||0;
const money=n=>n.toLocaleString('en-US');
const pctNum=s=>parseNum(s);

/* ---------- vector board generator ---------- */
const GEO = {
  bigmac: { tail:"squash", samples:[[0.00,3],[0.06,13],[0.14,27],[0.24,41],[0.36,52],[0.46,57],[0.58,55],[0.70,47],[0.82,36],[0.90,28],[0.95,23]] },
  whopper:{ tail:"swallow",samples:[[0.00,10],[0.07,24],[0.16,40],[0.28,54],[0.40,64],[0.50,65],[0.62,61],[0.74,53],[0.84,45],[0.91,41]] },
  double: { tail:"round",  samples:[[0.00,12],[0.08,27],[0.18,41],[0.30,51],[0.44,58],[0.54,59],[0.66,55],[0.78,46],[0.88,34],[0.94,23]] }
};
const NY=30,BY=592,BH=BY-NY;
function outlinePoints(model,cx){
  const g=GEO[model],pts=[[cx,NY]];
  g.samples.forEach(([t,hw])=>pts.push([cx+hw,NY+t*BH]));
  const last=g.samples[g.samples.length-1],tw=last[1];
  if(g.tail==="squash"){pts.push([cx+tw*0.95,BY-14],[cx+tw*0.55,BY],[cx,BY],[cx-tw*0.55,BY],[cx-tw*0.95,BY-14]);}
  else if(g.tail==="swallow"){pts.push([cx+tw*0.92,BY-6],[cx+tw*0.5,BY],[cx,BY-30],[cx-tw*0.5,BY],[cx-tw*0.92,BY-6]);}
  else{pts.push([cx+tw*0.55,BY-16],[cx,BY],[cx-tw*0.55,BY-16]);}
  for(let i=g.samples.length-1;i>=0;i--){const[t,hw]=g.samples[i];pts.push([cx-hw,NY+t*BH]);}
  return pts;
}
function smoothClosed(pts){
  const n=pts.length,p=i=>pts[(i%n+n)%n];
  let d=`M ${p(0)[0].toFixed(1)} ${p(0)[1].toFixed(1)} `;
  for(let i=0;i<n;i++){const p0=p(i-1),p1=p(i),p2=p(i+1),p3=p(i+2);
    const c1x=p1[0]+(p2[0]-p0[0])/6,c1y=p1[1]+(p2[1]-p0[1])/6,c2x=p2[0]-(p3[0]-p1[0])/6,c2y=p2[1]-(p3[1]-p1[1])/6;
    d+=`C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} `;}
  return d+"Z";
}
function finsSVG(cx,fins){
  const y=BY-70;
  const fin=(x,s=1)=>`<path d="M ${x} ${y} q ${6*s} ${10*s} ${2*s} ${26*s} q ${-2*s} ${4*s} ${-8*s} ${2*s} q ${-3*s} ${-14*s} ${4*s} ${-28*s} z" fill="#1c1c1c"/>`;
  if(fins==="Twin")return fin(cx-22)+fin(cx+22);
  if(fins==="Quad")return fin(cx-30,.8)+fin(cx+30,.8)+fin(cx-15,.68)+fin(cx+15,.68);
  if(fins==="2+1")return fin(cx-26,.8)+fin(cx+26,.8)+`<rect x="${cx-3}" y="${y-6}" width="6" height="42" rx="3" fill="#1c1c1c"/>`;
  return fin(cx-24,.85)+fin(cx+24,.85)+fin(cx,.85);
}
function buildBoardSVG(model,c,fins){
  const cxD=150,cxB=450;
  const pD=smoothClosed(outlinePoints(model,cxD)),pB=smoothClosed(outlinePoints(model,cxB));
  const base=p=>`<path d="${p}" fill="none" stroke="#d4d4d4" stroke-width="11" stroke-linejoin="round"/>`;
  const stringer=x=>`<line x1="${x}" y1="${NY+10}" x2="${x}" y2="${BY-10}" stroke="${c.rails}" stroke-width="1.3" opacity=".45"/>`;
  const logo=`<text x="0" y="0" text-anchor="middle" font-family="Archivo,Arial" font-weight="900" font-size="30" fill="${c.rails}" opacity=".8" transform="translate(${cxD},${NY+160}) rotate(-90)">B</text>`;
  return `<svg viewBox="0 0 600 660" style="width:100%;height:100%" xmlns="http://www.w3.org/2000/svg">
  <defs><filter id="bsh" x="-25%" y="-25%" width="150%" height="150%"><feDropShadow dx="0" dy="7" stdDeviation="9" flood-color="#000" flood-opacity="0.12"/></filter></defs>
  <g filter="url(#bsh)">
    ${base(pD)}<path d="${pD}" fill="${c.deck}" stroke="${c.rails}" stroke-width="7" stroke-linejoin="round"/>${stringer(cxD)}${logo}
    ${base(pB)}<path d="${pB}" fill="${c.bottom}" stroke="${c.rails}" stroke-width="7" stroke-linejoin="round"/>${stringer(cxB)}${finsSVG(cxB,fins)}
  </g>
  <text x="150" y="646" text-anchor="middle" font-family="'Space Mono',monospace" font-size="12" fill="#a2a2a2">DECK</text>
  <text x="450" y="646" text-anchor="middle" font-family="'Space Mono',monospace" font-size="12" fill="#a2a2a2">BOTTOM</text>
</svg>`;
}

/* ---------- hydrate ---------- */
function tok(s){return String(s).replace(/\{(\w+)\}/g,(_,k)=>C[k]!==undefined?C[k]:"{"+k+"}");}
function setTxt(id,v){const e=document.getElementById(id);if(e)e.textContent=v;}
function setHtml(id,v){const e=document.getElementById(id);if(e)e.innerHTML=v;}
function hydrate(){
  document.querySelectorAll('[data-c]').forEach(el=>{const v=C[el.dataset.c];if(v!==undefined)el.innerHTML=tok(v);});
  const lg=document.getElementById('logos');
  if(lg)lg.innerHTML=C.shapedLogos.map(src=>'<span class="logo-img"><img src="'+src+'" alt=""></span>').join('');
  const rr=document.getElementById('riders');
  if(rr)rr.innerHTML=C.riders.map(r=>'<div class="rider"><div class="av">[ photo ]</div><div class="nm">'+r.name+'</div><div class="rl">'+r.role+'</div></div>').join('');
  const wi=document.getElementById('wideImg');
  if(wi)wi.style.backgroundImage="url('"+ (C.wideImage||"images/wave.jpg") +"')";
  document.querySelectorAll('.js-wa').forEach(a=>a.href=C.whatsapp);
  setHtml('depositNote',tok(C.depositNote)+' Prefer to talk first? <a class="js-wa" style="color:var(--pink-ink);font-weight:600" href="'+C.whatsapp+'">Message Coach Dris on WhatsApp</a>.');
}

/* ---------- pricing ---------- */
const isColoured=()=>[state.deck,state.bottom,state.rails].some(h=>h.toLowerCase()!=="#ffffff");
function totals(){
  const base=parseNum(C.priceFrom);
  const tint=isColoured()?(+C.colourTintCharge||0):0;
  const glass=(GLASS.find(g=>g.id===state.glassing)||GLASS[0]).charge||0;
  const total=base+tint+glass;
  const deposit=Math.round(total*pctNum(C.depositPct)/100);
  return {base,tint,glass,total,deposit,balance:total-deposit};
}
function applyTotals(){
  const t=totals(),cur=C.currency,gl=GLASS.find(g=>g.id===state.glassing).label;
  const rows=[];
  rows.push(`<div class="price-row"><span>Board</span><b>${money(t.base)} ${cur}</b></div>`);
  rows.push(`<div class="price-row"><span>Colour tint</span><b>${t.tint?('+'+money(t.tint)+' '+cur):'—'}</b></div>`);
  rows.push(`<div class="price-row"><span>Glassing · ${gl}</span><b>${t.glass?('+'+money(t.glass)+' '+cur):'Included'}</b></div>`);
  rows.push(`<div class="price-row total"><span>Total</span><b>${money(t.total)} ${cur}</b></div>`);
  rows.push(`<div class="price-row"><span>Deposit (${C.depositPct}) today</span><b>${money(t.deposit)} ${cur}</b></div>`);
  rows.push(`<div class="price-row"><span>Balance on delivery</span><b>${money(t.balance)} ${cur}</b></div>`);
  setHtml('buildSummary',rows.join(''));
  setTxt('sumTotal',money(t.total)+' '+cur);
  setHtml('summaryNote','Deposit today <b>'+money(t.deposit)+' '+cur+'</b> ('+C.depositPct+') · balance <b>'+money(t.balance)+' '+cur+'</b> on delivery. Build time '+C.buildTime+'.');
  setTxt('depositBtn',C.depositLabel+' · '+money(t.deposit)+' '+cur);
}

/* ---------- finder ---------- */
let step=0;const STEPS=5;
const qs=()=>[...document.querySelectorAll('.q')];
function showStep(){
  qs().forEach(q=>q.classList.toggle('on',+q.dataset.q===step));
  document.getElementById('bar').style.width=((step+1)/STEPS*100)+'%';
  setTxt('stepLabel','Step '+(step+1)+' of '+STEPS);
  document.getElementById('backBtn').style.visibility=step===0?'hidden':'visible';
  document.getElementById('nextBtn').textContent=step===STEPS-1?'See my board →':'Next';
  validate();
}
function validate(){
  let ok=false;
  if(step===0)ok=!!state.ability;
  if(step===1)ok=state.weight>0;
  if(step===2)ok=state.age&&state.fitness&&state.frequency;
  if(step===3)ok=!!state.waves;
  if(step===4)ok=!!state.goal;
  document.getElementById('nextBtn').disabled=!ok;
}
function wireFinder(){
  document.querySelectorAll('.opts').forEach(group=>{
    group.querySelectorAll('.opt').forEach(opt=>{
      opt.addEventListener('click',()=>{group.querySelectorAll('.opt').forEach(o=>o.classList.remove('sel'));opt.classList.add('sel');state[group.dataset.group]=opt.dataset.val;validate();});
    });
  });
  document.getElementById('weight').addEventListener('input',e=>{state.weight=+e.target.value;validate();});
  document.getElementById('height').addEventListener('input',e=>{state.height=+e.target.value;});
  document.getElementById('nextBtn').addEventListener('click',()=>{step<STEPS-1?(step++,showStep()):finish();});
  document.getElementById('backBtn').addEventListener('click',()=>{if(step>0){step--;showStep();}});
  document.getElementById('restart').addEventListener('click',()=>{
    step=0;['ability','waves','goal','age','fitness','frequency'].forEach(k=>state[k]=null);state.weight=null;
    document.querySelectorAll('.opt.sel').forEach(o=>o.classList.remove('sel'));
    document.getElementById('weight').value='';document.getElementById('height').value='';
    document.getElementById('finderBody').style.display='';document.getElementById('result').classList.remove('on');
    document.querySelector('.finder-top').style.display='';showStep();document.getElementById('finder').scrollIntoView({behavior:'smooth'});
  });
  document.getElementById('toBuild').addEventListener('click',()=>document.getElementById('build').scrollIntoView({behavior:'smooth'}));
}
function matchModel(){
  const s={bigmac:0,whopper:0,double:0};
  ({small:()=>{s.whopper+=2;s.double+=1;},average:()=>{s.double+=2;s.whopper+=1;s.bigmac+=1;},punchy:()=>{s.bigmac+=2;s.double+=1;},everything:()=>{s.double+=2;s.bigmac+=1;s.whopper+=1;}}[state.waves])();
  ({paddle:()=>{s.whopper+=2;s.double+=1;},oneboard:()=>{s.double+=2;s.bigmac+=1;},performance:()=>{s.bigmac+=2;s.double+=1;}}[state.goal])();
  ({beginner:()=>{s.whopper+=1;s.double+=1;},improver:()=>{s.double+=1;s.whopper+=1;},intermediate:()=>{s.double+=1;s.bigmac+=1;},advanced:()=>{s.bigmac+=1;}}[state.ability])();
  const order=["double","whopper","bigmac"];return order.reduce((b,m)=>s[m]>s[b]?m:b,order[0]);
}
function targetVolume(){
  return Math.round(state.weight*ABILITY[state.ability]*(AGE_MOD[state.age]||1)*(FIT_MOD[state.fitness]||1)*(FREQ_MOD[state.frequency]||1));
}
function pickSize(model,tv){const s=MODELS[model].sizes;let c=s.find(x=>x[1]>=tv);if(!c)c=s[s.length-1];if(tv<s[0][1])c=s[0];return c;}
function finish(){
  const model=matchModel(),tv=targetVolume(),size=pickSize(model,tv);
  state.model=model;state.size=size[0];state.fin=MODELS[model].fins[0];
  setTxt('recName','The '+nameOf(model));
  document.getElementById('recImg').src=IMGS[model];
  setTxt('recWhy',C[model+"Why"]);
  setTxt('recDims',size[0]+' · '+size[1]+'L');
  document.getElementById('finderBody').style.display='none';
  document.getElementById('result').classList.add('on');
  document.querySelector('.finder-top').style.display='none';
  syncBuilder();
}

/* ---------- builder ---------- */
function renderSizes(){const row=document.getElementById('sizeRow');row.innerHTML='';
  MODELS[state.model].sizes.forEach(([len])=>{const b=document.createElement('button');b.className='sz';b.textContent=len;
    if(len===state.size)b.classList.add('sel');b.onclick=()=>{state.size=len;renderSizes();updateVol();syncSummary();};row.appendChild(b);});}
function renderFins(){const m=MODELS[state.model];if(!m.fins.includes(state.fin))state.fin=m.fins[0];
  const row=document.getElementById('finRow');row.innerHTML='';
  m.fins.forEach(f=>{const b=document.createElement('button');b.className='fin';b.textContent=f;if(f===state.fin)b.classList.add('sel');
    b.onclick=()=>{state.fin=f;renderFins();renderBoard();syncSummary();};row.appendChild(b);});}
function renderGlass(){const row=document.getElementById('glassRow');row.innerHTML='';
  GLASS.forEach(g=>{const b=document.createElement('button');b.className='glass'+(g.id===state.glassing?' sel':'');
    b.innerHTML='<span class="gl-name">'+g.label+(g.charge?(' · +'+money(g.charge)+' '+C.currency):'')+'</span><span class="gl-desc">'+g.desc+'</span>';
    b.onclick=()=>{state.glassing=g.id;renderGlass();applyTotals();syncSummary();};row.appendChild(b);});}
function swatchSet(region,containerId){
  const row=document.getElementById(containerId);row.innerHTML='';
  COLORS.forEach(([name,hex])=>{const b=document.createElement('button');b.className='sw';b.style.background=hex;b.title=name;
    if(state[region].toLowerCase()===hex.toLowerCase())b.classList.add('sel');
    b.onclick=()=>{setRegion(region,hex);};row.appendChild(b);});
}
function setRegion(region,hex){state[region]=hex;
  ['deck','bottom','rails'].forEach(r=>{const p=document.getElementById('pick-'+r);if(p)p.value=state[r]==='#ffffff'?'#ffffff':state[r];});
  swatchSet('deck','sw-deck');swatchSet('bottom','sw-bottom');swatchSet('rails','sw-rails');
  renderBoard();applyTotals();syncSummary();
}
function renderColours(){
  swatchSet('deck','sw-deck');swatchSet('bottom','sw-bottom');swatchSet('rails','sw-rails');
  ['deck','bottom','rails'].forEach(r=>{const p=document.getElementById('pick-'+r);if(p){p.value=state[r];p.oninput=e=>setRegion(r,e.target.value);}});
}
const volFor=(m,s)=>{const x=MODELS[m].sizes.find(v=>v[0]===s);return x?x[1]:null;};
function updateVol(){const v=volFor(state.model,state.size);setHtml('volTag',v?('<span class="vol-live">'+v+' L</span>'):'— L');}
function segBar(val,max){let s='<span class="seg">';for(let i=0;i<max;i++)s+='<i class="'+(i<val?'on':'')+'"></i>';return s+'</span>';}
function rangeMeter(t,labels,rng){const n=labels.length,l=rng[0]/(n-1)*100,r=rng[1]/(n-1)*100;
  return '<div class="meter"><div class="mh">'+t+'</div><div class="track"><span class="band" style="left:'+l+'%;width:'+(r-l)+'%"></span></div><div class="ticks"><span>'+labels[0]+'</span><span>'+labels[n-1]+'</span></div></div>';}
function renderLevel(model){const a=ATTR[model];
  const bars=Object.entries(a.bars).map(([k,v])=>'<div class="bar-row"><span class="bl">'+k+'</span>'+segBar(v,5)+'</div>').join('');
  setHtml('levelBlock','<div class="built">Built for · <b>'+a.builtFor+'</b></div><div class="lvl-block">'+rangeMeter('Wave size',WAVE_LABELS,a.wave)+rangeMeter('Skill level',SKILL_LABELS,a.skill)+'</div><div class="bars">'+bars+'</div>');}
function selectModelChip(){document.querySelectorAll('#modelRow .chip').forEach(c=>c.classList.toggle('sel',c.dataset.model===state.model));}
function renderBoard(){document.getElementById('boardStage').innerHTML=buildBoardSVG(state.model,{deck:state.deck,bottom:state.bottom,rails:state.rails},state.fin);}
function wireBuilder(){
  document.querySelectorAll('#modelRow .chip').forEach(c=>{c.onclick=()=>{state.model=c.dataset.model;
    const sizes=MODELS[state.model].sizes;if(!sizes.find(x=>x[0]===state.size))state.size=sizes[Math.floor(sizes.length/2)][0];syncBuilder();};});
  document.getElementById('toOrder').addEventListener('click',()=>{syncSummary();document.getElementById('order').scrollIntoView({behavior:'smooth'});});
}
function syncBuilder(){
  if(!state.size)state.size=MODELS[state.model].sizes[Math.floor(MODELS[state.model].sizes.length/2)][0];
  document.querySelectorAll('#modelRow .chip .cn').forEach(el=>{el.textContent=nameOf(el.parentElement.dataset.model);});
  selectModelChip();renderSizes();renderGlass();renderFins();renderColours();updateVol();renderLevel(state.model);renderBoard();applyTotals();syncSummary();
}
function syncSummary(){
  const v=volFor(state.model,state.size);
  setTxt('sumModel',nameOf(state.model));setTxt('sumSize',state.size||'—');setTxt('sumVol',v?(v+' L'):'—');
  setTxt('sumFin',state.fin||'—');setTxt('sumGlass',GLASS.find(g=>g.id===state.glassing).label);
  const colTxt=isColoured()?('deck '+state.deck+' · bottom '+state.bottom+' · rails '+state.rails):'White / clear';
  setTxt('sumColor',colTxt);
  const spec=[nameOf(state.model),state.size,v+'L',state.fin,GLASS.find(g=>g.id===state.glassing).label+' glass',colTxt,'Total '+money(totals().total)+' '+C.currency].join(' · ');
  document.getElementById('specField').value=spec;
}

/* ---------- order ---------- */
function wireOrder(){
  const form=document.getElementById('orderForm');
  form.addEventListener('submit',e=>{e.preventDefault();syncSummary();
    const body=new URLSearchParams(new FormData(form)).toString();
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body}).then(showConfirm).catch(showConfirm);});
}
function showConfirm(){
  const t=totals(),cur=C.currency,box=document.getElementById('confirmBox');
  box.innerHTML='<b>Order received.</b><br>'+nameOf(state.model)+' · '+state.size+' · '+(volFor(state.model,state.size))+'L · '+state.fin+' · '+GLASS.find(g=>g.id===state.glassing).label+' glass'+
    '<br><br>Total '+money(t.total)+' '+cur+'. We\u2019ll send a '+money(t.deposit)+' '+cur+' deposit link ('+C.depositPct+'). Balance '+money(t.balance)+' '+cur+' on delivery.';
  box.classList.add('on');box.scrollIntoView({behavior:'smooth',block:'center'});
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded',()=>{hydrate();wireFinder();wireBuilder();wireOrder();showStep();syncBuilder();});
