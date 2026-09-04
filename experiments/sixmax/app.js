const players = [
  {name:'YOU',tag:'Hero',vpip:'—',pfr:'—',river:'—'},
  {name:'Mason',tag:'TAG',vpip:22,pfr:18,river:'2.3'},
  {name:'Luna',tag:'LAG',vpip:34,pfr:27,river:'4.1'},
  {name:'Victor',tag:'NIT',vpip:14,pfr:12,river:'1.4'},
  {name:'Chloe',tag:'BAL',vpip:25,pfr:20,river:'2.7'},
  {name:'Ryan',tag:'STICKY',vpip:31,pfr:16,river:'2.0'}
];
const posOrder=['BTN','SB','BB','UTG','HJ','CO'];
const H = [
{
 id:'H01',heroPos:'BTN',cards:['J♠','9♠'],board:[],pot:'1.5 BB',eff:'100 BB',villain:3,note:'Victor 在盲位整体偏紧，过去 40 手很少对偷盲反击。',
 log:[['PREFLOP','UTG folds'],['PREFLOP','HJ folds'],['PREFLOP','CO folds'],['PREFLOP','Action on BTN']],
 title:'翻前：BTN 首入池',text:'你拿 J♠9♠，前面全部弃牌。',cats:['Preflop'],
 actions:[
  {id:'fold',label:'Fold',hint:'弃牌',score:0},
  {id:'limp',label:'Limp 1 BB',hint:'平跟入池',score:1},
  {id:'open22',label:'Raise 2.2 BB',hint:'标准小尺寸 open',score:4,aggr:1},
  {id:'open45',label:'Raise 4.5 BB',hint:'大尺寸 open',score:2,aggr:1}
 ]
},
{
 id:'H02',heroPos:'BB',cards:['A♣','5♣'],board:[],pot:'4.0 BB',eff:'100 BB',villain:2,note:'Luna BTN 开池很宽，面对 3-bet 不会过度弃牌，翻后攻击性高。',
 log:[['PREFLOP','UTG folds'],['PREFLOP','HJ folds'],['PREFLOP','CO folds'],['PREFLOP','Luna (BTN) raises 2.3 BB'],['PREFLOP','SB folds'],['PREFLOP','Action on BB']],
 title:'翻前：BB 对 BTN open',text:'A♣5♣ 面对 BTN 2.3BB open。',cats:['Preflop','Bluff / Blocker'],
 actions:[
  {id:'fold',label:'Fold',hint:'直接放弃',score:0},
  {id:'call',label:'Call 1.3 BB',hint:'保留宽范围',score:3},
  {id:'3bet',label:'3-bet to 9.5 BB',hint:'带 A blocker 反击',score:4,aggr:1},
  {id:'jam',label:'All-in 100 BB',hint:'超额极化',score:0,aggr:1}
 ]
},
{
 id:'H03',heroPos:'SB',cards:['A♥','K♦'],board:[],pot:'3.8 BB',eff:'100 BB',villain:1,note:'Mason BTN 开池结构规整，面对盲位 3-bet 会继续合理的强段范围。',
 log:[['PREFLOP','UTG folds'],['PREFLOP','HJ folds'],['PREFLOP','CO folds'],['PREFLOP','Mason (BTN) raises 2.3 BB'],['PREFLOP','Action on SB']],
 title:'翻前：SB 拿 AKo',text:'BTN 2.3BB open，BB 仍在后面。',cats:['Preflop','Sizing'],
 actions:[
  {id:'call',label:'Call 1.8 BB',hint:'平跟进入 OOP',score:1},
  {id:'3bet10',label:'3-bet to 10.5 BB',hint:'标准 OOP 价值 3-bet',score:4,aggr:1},
  {id:'3bet16',label:'3-bet to 16 BB',hint:'明显偏大',score:2,aggr:1},
  {id:'jam',label:'All-in 100 BB',hint:'100BB 直接 shove',score:0,aggr:1}
 ]
},
{
 id:'H04',heroPos:'BTN',cards:['A♣','J♦'],board:['A♦','7♣','2♥'],pot:'5.3 BB',eff:'97.5 BB',villain:4,note:'Chloe BB 防守接近理论，面对小 c-bet 会继续大量 Ax、7x、小对子与一些高张。',
 log:[['PREFLOP','You (BTN) raise 2.5 BB'],['PREFLOP','Chloe (BB) calls'],['FLOP','Chloe checks'],['FLOP','Action on BTN']],
 title:'Flop：干燥 A-high 牌面',text:'A♦7♣2♥，你有 top pair。选择整个范围更舒服的尺寸。',cats:['Range / Board','Sizing','Value'],
 actions:[
  {id:'check',label:'Check back',hint:'放弃首枪',score:2},
  {id:'bet33',label:'Bet 1.8 BB (≈⅓ pot)',hint:'高频小注',score:4,aggr:1},
  {id:'bet67',label:'Bet 3.6 BB (≈⅔ pot)',hint:'更极化',score:2,aggr:1},
  {id:'pot',label:'Bet 5.3 BB (pot)',hint:'大尺寸',score:1,aggr:1}
 ]
},
{
 id:'H05',heroPos:'BTN',cards:['T♣','T♦'],board:['9♠','8♠','7♦'],pot:'5.3 BB',eff:'97.5 BB',villain:5,note:'Ryan BB 防守宽且粘，连接牌、同花牌的占比明显高于平均。',
 log:[['PREFLOP','You (BTN) raise 2.5 BB'],['PREFLOP','Ryan (BB) calls'],['FLOP','Ryan checks'],['FLOP','Action on BTN']],
 title:'Flop：极度动态的中低张连接面',text:'你有 overpair + open-ended straight draw，但 BB 的 nut density 很高。',cats:['Range / Board','Sizing'],
 actions:[
  {id:'check',label:'Check back',hint:'控制范围并实现 equity',score:4},
  {id:'bet33',label:'Bet 1.8 BB (≈⅓ pot)',hint:'小注保护',score:3,aggr:1},
  {id:'bet75',label:'Bet 4.0 BB (≈¾ pot)',hint:'大注压制',score:1,aggr:1},
  {id:'pot',label:'Bet 5.3 BB (pot)',hint:'整池',score:0,aggr:1}
 ]
},
{
 id:'H06',heroPos:'BTN',cards:['A♦','5♦'],board:['K♣','8♦','3♠','2♦'],pot:'9.0 BB',eff:'94 BB',villain:4,note:'Chloe 对 flop 小注防守正常；turn 不会因为一张低 blank 过度弃 Kx，但 8x/小对子会承压。',
 log:[['PREFLOP','You (BTN) raise 2.5 BB; BB calls'],['FLOP','K♣ 8♦ 3♠ — You bet 1.8 BB; Chloe calls'],['TURN','2♦ — Chloe checks'],['TURN','Action on BTN']],
 title:'Turn：强半诈唬',text:'A♦5♦ = nut flush draw + gutshot。',cats:['Range / Board','Bluff / Blocker','Sizing'],
 actions:[
  {id:'check',label:'Check back',hint:'实现 equity',score:3},
  {id:'half',label:'Bet 4.5 BB (½ pot)',hint:'中尺寸 barrel',score:4,aggr:1},
  {id:'75',label:'Bet 6.8 BB (¾ pot)',hint:'更极化 barrel',score:4,aggr:1},
  {id:'over',label:'Bet 12 BB (overbet)',hint:'高压大注',score:2,aggr:1}
 ]
},
{
 id:'H07',heroPos:'BTN',cards:['K♣','Q♦'],board:['K♥','9♣','4♦','6♠','2♣'],pot:'30 BB',eff:'72 BB',villain:5,note:'Ryan 河牌跟注偏宽，尤其会用较差 Kx 和部分 9x bluff-catch；河牌 check-raise 很少。',
 log:[['FLOP','You bet ⅓ pot; Ryan calls'],['TURN','You bet ⅔ pot; Ryan calls'],['RIVER','2♣ — Ryan checks'],['RIVER','Action on BTN']],
 title:'River：第三条街薄价值',text:'KQ 在 blank river。你要不要继续从更差牌收钱？',cats:['Value','Sizing','Exploit / Discipline'],
 actions:[
  {id:'check',label:'Check back',hint:'锁定摊牌价值',score:2},
  {id:'small',label:'Bet 8 BB (≈¼ pot)',hint:'薄价值',score:4,aggr:1},
  {id:'60',label:'Bet 18 BB (≈60%)',hint:'中大尺寸',score:3,aggr:1},
  {id:'jam',label:'All-in 72 BB',hint:'超池极化',score:0,aggr:1}
 ]
},
{
 id:'H08',heroPos:'BTN',cards:['A♣','A♦'],board:['9♠','8♠','7♦','6♣','2♥'],pot:'72 BB',eff:'64 BB',villain:1,note:'Mason 不是被动玩家，但在这种 runout 上 river pot jam 的 value 密度很高；前两街半诈唬会有一些。',
 log:[['FLOP','9♠ 8♠ 7♦ — You bet ⅓; Mason check-raises 4×; you call'],['TURN','6♣ — Mason bets 75%; you call'],['RIVER','2♥ — Mason jams ~pot'],['RIVER','Action on BTN']],
 title:'River：强牌弃得掉吗？',text:'你仍是 AA，但对手 flop raise → turn 大注 → river shove。',cats:['Range / Board','Exploit / Discipline'],
 actions:[
  {id:'call',label:'Call',hint:'抓 missed spades / overplay',score:1},
  {id:'fold',label:'Fold',hint:'尊重 value density',score:4}
 ]
},
{
 id:'H09',heroPos:'BB',cards:['K♣','Q♣'],board:['K♦','9♠','6♠','3♥','2♦'],pot:'46 BB',eff:'56 BB',villain:2,note:'Luna 最近 3 次河牌极化下注摊牌出 2 次 bluff；她会把 miss draw 转成大尺寸。',
 log:[['FLOP','You check-call ⅓ pot'],['TURN','You check-call ⅔ pot'],['RIVER','2♦ — You check'],['RIVER','Luna overbets 56 into 46'],['RIVER','Action on BB']],
 title:'River：针对过度诈唬者的 bluff catch',text:'你有 KQ，且手里没有黑桃。',cats:['Bluff / Blocker','Exploit / Discipline'],
 actions:[
  {id:'fold',label:'Fold',hint:'面对超池保守弃牌',score:1},
  {id:'call',label:'Call 56 BB',hint:'利用她的过度 bluff',score:4}
 ]
},
{
 id:'H10',heroPos:'BTN',cards:['Q♥','J♦'],board:['A♠','K♠','8♦','4♣','2♥'],pot:'40 BB',eff:'66 BB',villain:4,note:'Chloe 河牌会按结构防守；她的 flop/turn 跟注范围里保留不少 Ax/Kx，也保留 miss spade draws。',
 log:[['FLOP','A♠ K♠ 8♦ — You c-bet ⅓; Chloe calls'],['TURN','4♣ — You bet ⅔; Chloe calls'],['RIVER','2♥ — Chloe checks'],['RIVER','Action on BTN']],
 title:'River：选不选第三枪 Bluff',text:'Q♥J♦ 没有摊牌价值；它阻挡部分 AQ/AJ/KQ/KJ，同时不阻挡 miss spades。',cats:['Bluff / Blocker','Sizing'],
 actions:[
  {id:'check',label:'Check back',hint:'放弃 bluff',score:2},
  {id:'half',label:'Bet 20 BB (½ pot)',hint:'小中尺寸 bluff',score:2,aggr:1},
  {id:'pot',label:'Bet 40 BB (pot)',hint:'极化下注',score:4,aggr:1},
  {id:'over',label:'Bet 60 BB (1.5× pot)',hint:'高压极化',score:4,aggr:1}
 ]
},
{
 id:'H11',heroPos:'CO',cards:['Q♠','J♠'],board:['J♦','9♣','4♠','7♠','2♥'],pot:'36 BB',eff:'59 BB',villain:3,note:'Victor 很少 river bluff，强牌喜欢 slowplay；过去 120 手 river overbet 只见过 value。',
 log:[['FLOP','You bet ⅓; Victor calls'],['TURN','You bet ¾; Victor calls'],['RIVER','You check'],['RIVER','Victor overbets 45 into 36'],['RIVER','Action on CO']],
 title:'River：理论防守 vs 实战 exploit',text:'Q♠J♠ 顶对，自己的黑桃还会阻挡部分 miss-flush bluff。',cats:['Bluff / Blocker','Exploit / Discipline'],
 actions:[
  {id:'call',label:'Call 45 BB',hint:'守住 bluff catcher',score:1},
  {id:'fold',label:'Fold',hint:'针对 underbluff 调整',score:4}
 ]
},
{
 id:'H12',heroPos:'CO',cards:['A♥','K♦'],board:['K♣','T♣','6♠','4♦','Q♣'],pot:'64.5 BB',eff:'68.5 BB',villain:1,note:'Mason 三枪结构比较平衡，但这张 Q♣ 会把大量原本的自然半诈唬直接升级为 value。',
 log:[['PREFLOP','You open 2.5; Mason (BTN) 3-bets 8; you call'],['FLOP','K♣ T♣ 6♠ — you check-call ⅓'],['TURN','4♦ — you check-call ⅔'],['RIVER','Q♣ — you check; Mason jams ~pot'],['RIVER','Action on CO']],
 title:'Final：River 范围坍缩',text:'AK 现在主要是 bluff catcher。Q♣ 同时完成了哪些原本的 semi-bluff？',cats:['Range / Board','Bluff / Blocker','Exploit / Discipline'],
 actions:[
  {id:'call',label:'Call 68.5 BB',hint:'抓剩余 miss bluff',score:1},
  {id:'fold',label:'Fold',hint:'承认 river value density 激增',score:4}
 ]
}
];
const categoryMax={}; H.forEach(h=>h.cats.forEach(c=>categoryMax[c]=(categoryMax[c]||0)+4));
let idx=0,answers=[],started=0,timer=null,elapsed=0;
function parseCard(s){const suit=s.slice(-1),rank=s.slice(0,-1);return {rank,suit,red:['♥','♦'].includes(suit)}}
function cardHTML(s,back=false){if(back)return '<div class="poker-card back"></div>';const c=parseCard(s);return `<div class="poker-card ${c.red?'red':''}"><span class="rank">${c.rank}</span><span class="suit">${c.suit}</span></div>`}
function seatPositions(heroPos){const heroIndex=posOrder.indexOf(heroPos);const arr=[];for(let i=0;i<6;i++)arr.push(posOrder[(heroIndex+i)%6]);return arr}
function render(){const h=H[idx]; document.getElementById('progressText').textContent=`Hand ${idx+1} / ${H.length}`;document.getElementById('progressBar').style.width=`${idx/H.length*100}%`;
 document.getElementById('pot').textContent=h.pot;document.getElementById('eff').textContent=h.eff;document.getElementById('board').innerHTML=h.board.length?h.board.map(cardHTML).join(''):'<div style="color:rgba(255,255,255,.35);font-size:12px;padding-top:20px">Preflop</div>';document.getElementById('heroCards').innerHTML=h.cards.map(cardHTML).join('');
 const pos=seatPositions(h.heroPos);let seatHTML='';for(let i=0;i<6;i++){const p=players[i];seatHTML+=`<div class="seat s${i} ${i===0?'hero':''}"><div class="bubble"><div class="name">${p.name}<span class="pos">${pos[i]}</span></div><div class="stack">100 BB</div></div></div>`}document.getElementById('seats').innerHTML=seatHTML;
 document.getElementById('log').innerHTML=h.log.map(x=>`<div><span class="street-label">${x[0]}</span>${x[1]}</div>`).join('');document.getElementById('decisionTitle').textContent=h.title;document.getElementById('decisionText').textContent=h.text;
 document.getElementById('actions').innerHTML=h.actions.map(a=>`<button class="action-btn ${a.id==='fold'?'fold':''} ${a.aggr?'aggr':''}" data-id="${a.id}"><div class="main">${a.label}</div><div class="hint">${a.hint}</div></button>`).join('');document.querySelectorAll('.action-btn').forEach(b=>b.addEventListener('click',choose));
 const v=players[h.villain];document.getElementById('villainName').textContent=v.name;document.getElementById('villainTag').textContent=v.tag;document.getElementById('vpip').textContent=v.vpip;document.getElementById('pfr').textContent=v.pfr;document.getElementById('river').textContent=v.river;document.getElementById('note').textContent=h.note;
 started=performance.now();elapsed=0;clearInterval(timer);timer=setInterval(()=>{elapsed=performance.now()-started;const sec=Math.floor(elapsed/1000);document.getElementById('clock').textContent=`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`},250)
}
function choose(e){const h=H[idx],id=e.currentTarget.dataset.id,a=h.actions.find(x=>x.id===id);elapsed=performance.now()-started;clearInterval(timer);document.querySelectorAll('.action-btn').forEach(b=>b.classList.add('locked'));answers.push({hand:h.id,position:h.heroPos,cards:h.cards.join(' '),board:h.board.join(' '),action:a.label,actionId:a.id,score:a.score,categories:h.cats,decisionSeconds:+(elapsed/1000).toFixed(1)});document.getElementById('betweenTitle').textContent=`Hand ${idx+1} 已记录`;document.getElementById('betweenText').textContent=idx===H.length-1?'12 手全部完成。生成报告。':'不揭答案。保持自己的打法，继续下一手。';document.getElementById('nextBtn').textContent=idx===H.length-1?'查看 Session Report':'下一手';document.getElementById('between').classList.add('show')}
function next(){document.getElementById('between').classList.remove('show');if(idx>=H.length-1){finish();return}idx++;render()}
function finish(){document.getElementById('progressText').textContent=`12 / 12 Complete`;document.getElementById('progressBar').style.width='100%';const cat={};Object.keys(categoryMax).forEach(k=>cat[k]=0);answers.forEach(a=>a.categories.forEach(c=>cat[c]+=a.score));const pct={};Object.keys(cat).forEach(c=>pct[c]=Math.round(cat[c]/categoryMax[c]*100));const avg=Math.round(answers.reduce((s,a)=>s+a.score,0)/(H.length*4)*100);const label=avg>=88?'Advanced decision profile':avg>=78?'Strong intermediate':avg>=66?'Solid developing player':avg>=52?'Developing recreational':'Foundational level';
 document.getElementById('scoreGrid').innerHTML=`<div class="scorebox"><div class="k">Provisional overall</div><div class="v">${avg}/100</div></div><div class="scorebox"><div class="k">Machine band</div><div class="v" style="font-size:14px">${label}</div></div>`+Object.entries(pct).map(([k,v])=>`<div class="scorebox"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('');
 const reportObj={reportType:'CHATGPT_SIXMAX_12_HAND_ASSESSMENT',version:'1.0',provisionalOverall:avg,machineBand:label,categoryScores:pct,answers:answers.map(({score,categories,...rest})=>rest)};const text='=== SIX-MAX SESSION REPORT ===\n'+JSON.stringify(reportObj,null,2)+'\n=== END REPORT ===';document.getElementById('report').value=text;document.getElementById('finish').classList.add('show')}
function reset(){idx=0;answers=[];document.getElementById('finish').classList.remove('show');render()}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1400)}
document.getElementById('startBtn').onclick=()=>{document.getElementById('intro').classList.remove('show');render()};document.getElementById('nextBtn').onclick=next;document.getElementById('restartBtn').onclick=reset;document.getElementById('copyBtn').onclick=async()=>{const text=document.getElementById('report').value;try{await navigator.clipboard.writeText(text);toast('Session Report 已复制')}catch{document.getElementById('report').select();document.execCommand('copy');toast('Session Report 已复制')}};document.getElementById('downloadBtn').onclick=()=>{const blob=new Blob([document.getElementById('report').value],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sixmax-session-report.txt';a.click();URL.revokeObjectURL(a.href)};