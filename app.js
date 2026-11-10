
const W=1080, H=1440, PAD=120, MAXW=W-PAD*2;

const QUOTES=[
  {t:"搞钱第一步，是承认钱很重要。",a:"佚名",c:"搞钱"},
  {t:"把一件事做到极致，钱会追着你跑。",a:"佚名",c:"搞钱"},
  {t:"你缺的不是机会，是执行力。",a:"佚名",c:"搞钱"},
  {t:"先完成，再完美。",a:"佚名",c:"搞钱"},
  {t:"省下来的不是钱，赚到的才是。",a:"佚名",c:"搞钱"},
  {t:"现金流的尽头，是被动收入。",a:"佚名",c:"搞钱"},
  {t:"风口上猪都能飞，但风停了摔死的也是猪。",a:"佚名",c:"搞钱"},
  {t:"你的时间，是唯一不可再生的资源。",a:"佚名",c:"搞钱"},
  {t:"种一棵树最好的时间是十年前，其次是现在。",a:"谚语",c:"成长"},
  {t:"你要悄悄努力，然后惊艳所有人。",a:"佚名",c:"成长"},
  {t:"真正的成长，是敢于直面自己的不堪。",a:"佚名",c:"成长"},
  {t:"慢一点没关系，但别停下来。",a:"佚名",c:"成长"},
  {t:"熬过无人问津的日子，才有诗和远方。",a:"佚名",c:"成长"},
  {t:"自律不是自虐，是对未来的自己温柔。",a:"佚名",c:"成长"},
  {t:"学如逆水行舟，不进则退。",a:"《增广贤文》",c:"成长"},
  {t:"不积跬步，无以至千里。",a:"荀子",c:"成长"},
  {t:"天行健，君子以自强不息。",a:"《周易》",c:"成长"},
  {t:"路虽远，行则将至；事虽难，做则必成。",a:"《荀子》",c:"成长"},
  {t:"生活明朗，万物可爱。",a:"佚名",c:"生活"},
  {t:"人间烟火气，最抚凡人心。",a:"佚名",c:"生活"},
  {t:"治愈你的从来不是时间，而是你自己。",a:"佚名",c:"生活"},
  {t:"今天也要好好吃饭。",a:"佚名",c:"生活"},
  {t:"好好生活，慢慢相遇。",a:"佚名",c:"生活"},
  {t:"日子常新，未来可期。",a:"佚名",c:"生活"},
  {t:"平安喜乐，万事胜意。",a:"佚名",c:"生活"},
  {t:"有人爱，有事做，有所期待。",a:"佚名",c:"生活"},
  {t:"把日子过成诗，简单而精致。",a:"佚名",c:"生活"},
  {t:"清醒时做事，糊涂时读书。",a:"佚名",c:"生活"},
  {t:"让专业成为你的护城河。",a:"佚名",c:"职场"},
  {t:"汇报工作，结论先行。",a:"佚名",c:"职场"},
  {t:"靠谱，是成年人最高级的修养。",a:"佚名",c:"职场"},
  {t:"职场没有苦劳，只有功劳。",a:"佚名",c:"职场"},
  {t:"别把平台当能力。",a:"佚名",c:"职场"},
  {t:"学会说不，是对时间负责。",a:"佚名",c:"职场"},
  {t:"解决问题，而不是制造问题。",a:"佚名",c:"职场"},
  {t:"你的工资，是解决问题能力的标价。",a:"佚名",c:"职场"},
  {t:"早安，今天也要加油鸭。",a:"佚名",c:"早安"},
  {t:"清晨的光，会照亮每个早起的人。",a:"佚名",c:"早安"},
  {t:"新的一天，从一杯温水开始。",a:"佚名",c:"早安"},
  {t:"把今天的自己，过成想要的样子。",a:"佚名",c:"早安"},
  {t:"早安，世界和我爱着你。",a:"佚名",c:"早安"},
  {t:"愿你今天也元气满满。",a:"佚名",c:"早安"},
  {t:"晚安，做个好梦。",a:"佚名",c:"晚安"},
  {t:"今天辛苦了，明天继续。",a:"佚名",c:"晚安"},
  {t:"夜色温柔，愿你安睡。",a:"佚名",c:"晚安"},
  {t:"睡前原谅一切，醒来便是新生。",a:"佚名",c:"晚安"},
  {t:"晚安，世界先睡了，你也别熬夜。",a:"佚名",c:"晚安"},
  {t:"愿你梦里有星辰。",a:"佚名",c:"晚安"},
  {t:"遇见你之后，万物都可爱。",a:"佚名",c:"情感"},
  {t:"喜欢是乍见之欢，爱是久处不厌。",a:"佚名",c:"情感"},
  {t:"我见众生皆草木，唯你是青山。",a:"佚名",c:"情感"},
  {t:"双向奔赴，才有意义。",a:"佚名",c:"情感"},
  {t:"温柔，是这世界最有力的回击。",a:"佚名",c:"情感"},
  {t:"山海皆可平，只要是你。",a:"佚名",c:"情感"},
  {t:"所有的相遇，都是久别重逢。",a:"佚名",c:"情感"},
  {t:"你迟到的这些年，我一眼就认出了你。",a:"佚名",c:"情感"},
  {t:"腹有诗书气自华。",a:"苏轼",c:"读书"},
  {t:"读书，是门槛最低的高贵。",a:"佚名",c:"读书"},
  {t:"你的气质里，藏着你读过的书。",a:"佚名",c:"读书"},
  {t:"阅读是一座随身携带的避难所。",a:"毛姆",c:"读书"},
  {t:"书读百遍，其义自见。",a:"《三国志》",c:"读书"},
  {t:"读万卷书，行万里路。",a:"董其昌",c:"读书"},
  {t:"长风破浪会有时，直挂云帆济沧海。",a:"李白",c:"古诗词"},
  {t:"天生我材必有用。",a:"李白",c:"古诗词"},
  {t:"海内存知己，天涯若比邻。",a:"王勃",c:"古诗词"},
  {t:"会当凌绝顶，一览众山小。",a:"杜甫",c:"古诗词"},
  {t:"春江潮水连海平，海上明月共潮生。",a:"张若虚",c:"古诗词"},
  {t:"落霞与孤鹜齐飞，秋水共长天一色。",a:"王勃",c:"古诗词"},
  {t:"山重水复疑无路，柳暗花明又一村。",a:"陆游",c:"古诗词"},
  {t:"不畏浮云遮望眼，自缘身在最高层。",a:"王安石",c:"古诗词"},
  {t:"海日生残夜，江春入旧年。",a:"王湾",c:"古诗词"},
  {t:"月上柳梢头，人约黄昏后。",a:"欧阳修",c:"古诗词"}
];

const FONTS={
  hei:'SimHei,"PingFang SC","Microsoft YaHei",sans-serif',
  yahei:'"Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif',
  song:'SimSun,"Songti SC","STSong",serif',
  kai:'KaiTi,"STKaiti","Kaiti SC",serif',
  yuan:'"YouYuan","Microsoft YaHei",sans-serif',
  mono:'Consolas,"Courier New",monospace'
};
const FONT_LABELS={hei:"黑体",yahei:"微软雅黑",song:"宋体",kai:"楷体",yuan:"幼圆",mono:"等宽"};

const THEMES=[
  {id:"minimal",name:"极简黑白",font:"yahei",align:"center",vertical:false,decor:"dot",dark:false,
   bg:{type:"solid",color:"#fafafa"},text:"#111111",sub:"#666666",accent:"#d64545"},
  {id:"cream",name:"奶油暖阳",font:"kai",align:"center",vertical:false,decor:"quote",dark:false,
   bg:{type:"gradient",stops:[["#fdf6ec",0],["#f7e9d7",1]]},text:"#7a4a1f",sub:"#a97b50",accent:"#d98e32"},
  {id:"navy",name:"深海蓝",font:"yahei",align:"center",vertical:false,decor:"line",dark:true,
   bg:{type:"gradient",stops:[["#0f1f3d",0],["#1c3a66",1]]},text:"#f4f7fb",sub:"#9db4d6",accent:"#6ec6ff"},
  {id:"sunset",name:"落日渐变",font:"yahei",align:"center",vertical:false,decor:"dots",dark:true,
   bg:{type:"gradient",stops:[["#ff7e5f",0],["#feb47b",.5],["#ff6a88",1]]},text:"#fff8f2",sub:"#ffe0cf",accent:"#ffffff"},
  {id:"paper",name:"复古报纸",font:"song",align:"left",vertical:false,decor:"frame",dark:false,
   bg:{type:"solid",color:"#f2ead8"},text:"#2b2b2b",sub:"#6b5d45",accent:"#9c3d2e"},
  {id:"neon",name:"荧光霓虹",font:"yahei",align:"center",vertical:false,decor:"corner",dark:true,
   bg:{type:"gradient",stops:[["#0a0a0f",0],["#151526",1]]},text:"#e0f2fe",sub:"#7dd3fc",accent:"#f472b6"},
  {id:"ink",name:"国风水墨",font:"kai",align:"center",vertical:true,decor:"seal",dark:false,
   bg:{type:"solid",color:"#f5f0e6"},text:"#1f1f1f",sub:"#6b6b6b",accent:"#b03a2e"},
  {id:"vermilion",name:"朱砂红",font:"kai",align:"center",vertical:false,decor:"none",dark:true,
   bg:{type:"gradient",stops:[["#c0392b",0],["#a93226",1]]},text:"#fdf3e7",sub:"#f5cba7",accent:"#f7dc6f"},
  {id:"journal",name:"日系手帐",font:"yuan",align:"left",vertical:false,decor:"dots",dark:false,
   bg:{type:"gradient",stops:[["#fff9ee",0],["#f7efdd",1]]},text:"#4a4034",sub:"#8b7f6d",accent:"#e8a87c"},
  {id:"xhs",name:"小红书爆款",font:"hei",align:"center",vertical:false,decor:"bar",dark:true,size:72,
   bg:{type:"gradient",stops:[["#ff6b81",0],["#ff9f43",1]]},text:"#ffffff",sub:"#ffe4d6",accent:"#ffffff"},
  {id:"premium",name:"高级灰",font:"yahei",align:"center",vertical:false,decor:"line",dark:true,
   bg:{type:"solid",color:"#2f343a"},text:"#e9ecef",sub:"#9aa3ad",accent:"#c9d1d9"},
  {id:"hk",name:"港风复古",font:"song",align:"center",vertical:false,decor:"corner",dark:true,
   bg:{type:"gradient",stops:[["#1a1420",0],["#2a1f30",1]]},text:"#f4e9d8",sub:"#b99e7a",accent:"#e63946"},
  {id:"aurora",name:"极光渐变",font:"yahei",align:"center",vertical:false,decor:"dots",dark:true,
   bg:{type:"gradient",stops:[["#062a2a",0],["#166d6b",.55],["#3b3a7a",1]]},text:"#eaf6f6",sub:"#a8d5d5",accent:"#7ce0c3"},
  {id:"star",name:"星空",font:"yahei",align:"center",vertical:false,decor:"stars",dark:true,
   bg:{type:"gradient",stops:[["#0d0d1a",0],["#1a1a3a",1]]},text:"#f0f0ff",sub:"#a0a0cc",accent:"#ffd76a"},
  {id:"pink",name:"少女粉",font:"yuan",align:"center",vertical:false,decor:"dots",dark:false,
   bg:{type:"gradient",stops:[["#ffd6e7",0],["#ffb3c8",1]]},text:"#7a2e4a",sub:"#b06a86",accent:"#ffffff"},
  {id:"mint",name:"薄荷清新",font:"yahei",align:"center",vertical:false,decor:"dot",dark:false,
   bg:{type:"gradient",stops:[["#e8f7ee",0],["#cdeee0",1]]},text:"#1f4a3d",sub:"#5f8a78",accent:"#2fa578"},
  {id:"earth",name:"大地棕",font:"song",align:"center",vertical:false,decor:"line",dark:false,
   bg:{type:"gradient",stops:[["#e8dcc8",0],["#d6c4a5",1]]},text:"#4a3b28",sub:"#8a7558",accent:"#a67c52"},
  {id:"blackgold",name:"黑金",font:"song",align:"center",vertical:false,decor:"line",dark:true,
   bg:{type:"gradient",stops:[["#111111",0],["#1c1a17",1]]},text:"#f5e8c8",sub:"#c9ad7a",accent:"#e3c26d"},
  {id:"party",name:"生日派对",font:"yuan",align:"center",vertical:false,decor:"dots",dark:false,
   bg:{type:"gradient",stops:[["#ff9a9e",0],["#fecfef",.5],["#a1c4fd",1]]},text:"#4a2b5f",sub:"#7a5b8a",accent:"#ffffff"},
  {id:"magazine",name:"极简杂志",font:"song",align:"left",vertical:false,decor:"bar",dark:false,size:80,
   bg:{type:"solid",color:"#ffffff"},text:"#111111",sub:"#777777",accent:"#111111"},
  {id:"note",name:"手写便签",font:"kai",align:"center",vertical:false,decor:"none",dark:false,
   bg:{type:"solid",color:"#fff59d"},text:"#3a3320",sub:"#6e6544",accent:"#d9a441"},
  {id:"dark",name:"极暗",font:"yahei",align:"center",vertical:false,decor:"frame",dark:true,
   bg:{type:"solid",color:"#000000"},text:"#f5f5f5",sub:"#999999",accent:"#f5f5f5"}
];

const CATS=["全部","搞钱","成长","生活","职场","早安","晚安","情感","读书","古诗词"];

const $=id=>document.getElementById(id);
const els={
  enterApp:$("enterApp"),backCover:$("backCover"),coverView:$("coverView"),appView:$("appView"),
  coverBoss:$("coverBoss"),coverPlayer:$("coverPlayer"),coverBossFill:$("coverBossFill"),
  coverPlayerFill:$("coverPlayerFill"),coverDmgBoss:$("coverDmgBoss"),coverDmgPlayer:$("coverDmgPlayer"),
  coverPlayCard:$("coverPlayCard"),coverIntent:$("coverIntent"),
  dailyHub:$("dailyHub"),dailyDetails:$("dailyDetails"),
  chips:$("chips"),swatches:$("swatches"),quote:$("quote"),author:$("author"),randomBtn:$("randomBtn"),
  showDate:$("showDate"),fontSel:$("fontSel"),sizeRange:$("sizeRange"),sizeVal:$("sizeVal"),
  lsRange:$("lsRange"),lsVal:$("lsVal"),lhRange:$("lhRange"),lhVal:$("lhVal"),
  alignSeg:$("alignSeg"),verticalToggle:$("verticalToggle"),bgFile:$("bgFile"),bgClear:$("bgClear"),
  wmText:$("wmText"),wmOn:$("wmOn"),wmPos:$("wmPos"),wmFile:$("wmFile"),wmClear:$("wmClear"),
  exportBtn:$("exportBtn"),copyBtn:$("copyBtn"),batchText:$("batchText"),fillQuotesBtn:$("fillQuotesBtn"),
  batchBtn:$("batchBtn"),batchMsg:$("batchMsg"),canvas:$("preview"),
  aiBase:$("aiBase"),aiKey:$("aiKey"),aiModel:$("aiModel"),aiPrompt:$("aiPrompt"),aiBtn:$("aiBtn"),aiMsg:$("aiMsg"),
  codeInput:$("codeInput"),activateBtn:$("activateBtn"),buyBtn:$("buyBtn"),proTitle:$("proTitle"),proDesc:$("proDesc"),proMsg:$("proMsg"),
  dailyName:$("dailyName"),dailyBtn:$("dailyBtn"),dailyInfo:$("dailyInfo"),
  diagBtn:$("diagBtn"),diagModal:$("diagModal"),diagClose:$("diagClose"),diagStart:$("diagStart"),
  diagStartBtn:$("diagStartBtn"),diagQuiz:$("diagQuiz"),diagProgress:$("diagProgress"),diagQ:$("diagQ"),
  diagOpts:$("diagOpts"),diagResult:$("diagResult"),diagCanvas:$("diagCanvas"),diagRetry:$("diagRetry"),
  diagDownload:$("diagDownload"),diagShare:$("diagShare"),diagHint:$("diagHint"),diagName:$("diagName"),
  gameBtn:$("gameBtn"),gameModal:$("gameModal"),gameClose:$("gameClose"),gameMenu:$("gameMenu"),gameStart:$("gameStart"),
  gSound:$("gSound"),gEmbers:$("gEmbers"),gBattleIntro:$("gBattleIntro"),gIntroKicker:$("gIntroKicker"),
  gIntroName:$("gIntroName"),gIntroSub:$("gIntroSub"),gCombo:$("gCombo"),gCrit:$("gCrit"),gKO:$("gKO"),
  gameBattle:$("gameBattle"),gHp:$("gHp"),gBlock:$("gBlock"),gCoins:$("gCoins"),gEnergy:$("gEnergy"),
  gEnemyName:$("gEnemyName"),gEnemyHp:$("gEnemyHp"),gIntent:$("gIntent"),gLog:$("gLog"),gHand:$("gHand"),
  gEnemyPortrait:$("gEnemyPortrait"),gEnemyHpFill:$("gEnemyHpFill"),gPlayerHpFill:$("gPlayerHpFill"),
  gTurnBanner:$("gTurnBanner"),gFloatLayer:$("gFloatLayer"),gEnergyGems:$("gEnergyGems"),
  gPlayerBubble:$("gPlayerBubble"),gEnemyBubble:$("gEnemyBubble"),gHurtFlash:$("gHurtFlash"),
  gRelics:$("gRelics"),
  gEndTurn:$("gEndTurn"),gameReward:$("gameReward"),gRewards:$("gRewards"),gSkip:$("gSkip"),
  gameEvent:$("gameEvent"),gEventTitle:$("gEventTitle"),gEventDesc:$("gEventDesc"),gEventChoices:$("gEventChoices"),
  gameEnd:$("gameEnd"),gameEndCanvas:$("gameEndCanvas"),gameAgain:$("gameAgain"),gameSave:$("gameSave")
};

const state={cat:"全部",theme:0,font:"yahei",size:64,ls:0,lh:1.62,align:"center",vertical:false,showDate:true,wmOn:true,wmPos:"br",wmImage:null,bgImage:null,extra:""};
let toastTimer=null;

function flash(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),1800);}
function hexA(hex,a){const n=parseInt(hex.slice(1),16);return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;}

const PURCHASE_URL="https://afdian.com/a/onelinecards";
const FREE_THEME_COUNT=6;
const CODE_CHARSET="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const SECRET="ONELINE2026_7F3A9C1B";
function fnv1a(str){let h=0x811c9dc5;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}return h>>>0;}
function codeSig(id){const a=fnv1a(SECRET+id);const b=fnv1a(SECRET+id+":"+a.toString(16));let n=b>>>0,s="";for(let i=0;i<6;i++){s=CODE_CHARSET[n%32]+s;n=Math.floor(n/32);}return s;}
function verifyCode(raw){const c=(raw||"").trim().toUpperCase().replace(/\s+/g,"");const m=c.match(/^ONL-([A-Z2-9]{8})-([A-Z2-9]{6})$/);if(!m)return false;return codeSig(m[1])===m[2];}
function isPro(){try{return localStorage.getItem("oneline_pro")==="1";}catch(e){return false;}}
function setPro(v){try{localStorage.setItem("oneline_pro",v?"1":"0");}catch(e){}}
function setProMsg(msg,ok){els.proMsg.textContent=msg;els.proMsg.className="promsg"+(ok?" ok":"");}
function promptUpgrade(msg){
  setProMsg(msg||"这是 Pro 功能，升级后解锁");
  els.codeInput.focus();
  document.querySelector(".probar").scrollIntoView({behavior:"smooth",block:"center"});
}

const DAILY_SIGNS=[
  "今天适合把一件小事，认真做完。",
  "你担心的事，大多不会发生。",
  "先照顾好自己的情绪，再处理别人的期待。",
  "慢一点，也是在往前走。",
  "今天的你，比昨天更靠近想要的生活。",
  "把注意力放回自己身上，答案就出来了。",
  "做不完的事，明天再做也来得及。",
  "你不需要向所有人证明自己。",
  "允许自己休息，也是一种努力。",
  "今天会遇到一件让你开心的小事。",
  "别急着下结论，好事往往在后头。",
  "把想说的话，好好说出口。",
  "你正在成为更从容的自己。",
  "今天适合清理一件拖了很久的事。",
  "值得的人，会主动走向你。",
  "把日子过成自己喜欢的样子。",
  "先行动，再等灵感。",
  "今天的运气，藏在你的耐心里。",
  "不必事事完美，完成就好。",
  "给自己留一点空白，灵感会来。",
  "你走过的路，都算数。",
  "今天适合开始，不适合犹豫。",
  "把复杂的事，拆成一小步一小步。",
  "你比自己以为的更有力量。"
];
const YI=["见面","早睡","复盘","存钱","运动","读书","独处","表白","整理房间","给朋友发消息","喝一杯热的","把话说开","散步","学点新东西","投资自己"];
const JI=["熬夜","内耗","翻旧账","冲动消费","拖延","想太多","和烂人纠缠","空腹喝咖啡","情绪化决定","过度解释"];
const LUCKY_COLORS=[["珊瑚橙","#ff8a5c"],["深海蓝","#2b4a7a"],["抹茶绿","#7aa77a"],["雾霾紫","#8a7aa7"],["奶油白","#f7efe2"],["正红","#c0392b"],["黑金","#e3c26d"],["薄荷绿","#2fa578"]];

const DIAG_QUESTIONS=[
  {q:"早上闹钟响了三遍，你会？",opts:[["立刻起床，自律给我自由",0],["再睡五分钟，结果半小时",1],["先刷十分钟手机，假装在醒",2],["直接请假，身体是革命的本钱",3]]},
  {q:"微信收到一句「在吗」，你的第一反应是？",opts:[["秒回，热情似火",0],["等对方说正事再回",1],["假装没看见，两小时后再回",2],["心里一紧，开始脑补是不是要借钱",3]]},
  {q:"周末最理想的打开方式是？",opts:[["出门社交，认识新朋友",0],["在家躺平，谁也不见",1],["约一两个熟人，安静吃饭",2],["加班/学习，卷死别人",3]]},
  {q:"看到别人发「今天也要元气满满」，你会？",opts:[["点赞，传递正能量",0],["默默划走，心里毫无波澜",1],["想回一句「你没事吧」",2],["反手发一条「今天也要摆烂满满」",3]]},
  {q:"手机电量到 20% 时，你会？",opts:[["立刻找充电器，开始焦虑",0],["还能撑，继续刷",1],["开省电模式，苟住",2],["直接关机，世界清净",3]]},
  {q:"朋友约你出门，但你已经洗好澡躺下了？",opts:[["立刻爬起来，朋友最大",0],["看心情，可能去可能不去",1],["找借口拒绝，被窝才是家",2],["直接说「我死了」，然后继续躺",3]]},
  {q:"你发了一条朋友圈，十分钟没人点赞？",opts:[["开始怀疑人生，删掉",0],["无所谓，发给自己看",1],["过一会儿再看一眼",2],["再发一条，测试算法",3]]},
  {q:"面对「你最近怎么样」，你的真实回答是？",opts:[["挺好的，谢谢关心",0],["就那样，活着",1],["表面还行，内心已经拆迁",2],["别问，问就是在发疯",3]]}
];

const DIAG_RESULTS=[
  {name:"电子木鱼成精",tag:"功德+1，情绪稳定得可怕。",desc:"你已经修炼到遇事不慌、凡事「随缘」的境界。别人以为你佛系，其实你只是懒得解释。",advice:["继续保持，但别把「没事」挂嘴边","每天允许自己发疯五分钟","偶尔也当一回「有所谓」的人"],rarity:"N"},
  {name:"人形充电宝",tag:"谁靠近你都能回血，除了你自己。",desc:"你总能接住别人的情绪，却常常忘了给自己充电。",advice:["先给自己充一次电","学会说不，不会掉粉","周末关机两小时"],rarity:"N"},
  {name:"情绪稳定器",tag:"天塌下来，你先看看被子叠没叠。",desc:"你的稳定是一种天赋，但稳定久了，也容易变成憋着。",advice:["稳定是优点，但别憋着","找个人说点真话","偶尔也可以不靠谱"],rarity:"N"},
  {name:"早睡教教主",tag:"作息规律得像退休干部，精神状态领先同龄人十年。",desc:"当别人还在熬夜修仙，你已经睡醒看完日出了。",advice:["继续保持","带朋友一起早睡","别嘲笑熬夜的人，他们真的会碎"],rarity:"N"},
  {name:"班味晚期",tag:"人还没到工位，班味已经先到了。",desc:"你不是在上班，就是在去上班的路上，连做梦都在回「收到」。",advice:["下班立刻摘工牌","摸鱼二十分钟，不许内疚","把「收到」换成「好的呢」"],rarity:"SR"},
  {name:"i人电量1%",tag:"社交五分钟，充电两小时。",desc:"你的社交电量常年飘红，最大的愿望是所有人都用文字沟通。",advice:["减少无效社交","能发文字别发语音","把「在吗」设置成免打扰"],rarity:"SR"},
  {name:"恋爱脑待机",tag:"嘴上说搞钱，心里在等一条消息。",desc:"你白天是清醒的搞钱人，深夜是emo文学的主角。",advice:["先搞钱，钱不会已读不回","把聊天框关掉","你值得被主动"],rarity:"SR"},
  {name:"摆烂型选手",tag:"不是不努力，是努力了也没用，所以先躺。",desc:"你已经看透了内卷的本质，选择用躺平保护自己。",advice:["允许躺，但别躺太久","躺完做一件小事","别拿别人的人生当尺子"],rarity:"SR"},
  {name:"电子榨菜依赖症",tag:"吃饭必须配视频，不然这顿饭没有灵魂。",desc:"你的人生不能没有背景音，安静会让你开始胡思乱想。",advice:["偶尔认真吃一顿饭","给眼睛放个假","别在深夜刷吃播"],rarity:"SR"},
  {name:"深夜emo批发商",tag:"白天哈哈哈，晚上人间不值得。",desc:"你的情绪有营业时间，白天稳定输出快乐，深夜独自清仓。",advice:["早点睡，真的","把emo写下来，别发出去","别在凌晨做决定"],rarity:"SR"},
  {name:"嘴硬心软型",tag:"嘴上说随便，心里已经演完八十集。",desc:"你最擅长用「没事」掩饰有事，用「随便」表达在意。",advice:["想要就说","别用反话试探","真诚不丢人"],rarity:"SR"},
  {name:"社交牛杂症",tag:"熟的时候是疯子，不熟的时候是哑巴。",desc:"你的社交状态取决于对方是谁，切换速度连你自己都害怕。",advice:["不用讨好所有人","找到你的同类","允许自己慢热"],rarity:"SR"},
  {name:"发疯文学代言人",tag:"精神状态：稳定地发疯，优雅地崩溃。",desc:"你把生活过成了一部荒诞剧，而你是唯一投入的演员。",advice:["发疯可以，别伤害自己","找个树洞","你只是太累了"],rarity:"SSR"},
  {name:"人间清醒的疯子",tag:"什么都懂，就是过不好这一生。",desc:"你看得透所有道理，却依然在深夜点开外卖软件。",advice:["少想多做","允许自己糊涂","先睡一觉"],rarity:"SSR"},
  {name:"抽象乐子人",tag:"世界是个草台班子，你是台下最投入的观众。",desc:"你用玩笑消解一切，但玩笑背后，是你认真活过的痕迹。",advice:["乐子可以看，别把自己搭进去","认真生活五分钟","笑完记得吃饭"],rarity:"SSR"},
  {name:"赛博菩萨",tag:"功德已经敲满，情绪还在加载。",desc:"你已经把「随缘」修炼成一种本能，但偶尔也想有人问你累不累。",advice:["功德不能当饭吃","该哭就哭","你已经做得很好了"],rarity:"SSR"}
];

const GAME_CARDS=[
  {id:"c1",name:"嘴替出击",cost:1,type:"attack",desc:"造成 6 点伤害。",dmg:6,emoji:"💬"},
  {id:"c2",name:"阴阳怪气",cost:1,type:"attack",desc:"造成 4 点伤害，施加 2 层易伤。",dmg:4,vuln:2,emoji:"😏"},
  {id:"c3",name:"甩锅",cost:1,type:"attack",desc:"造成 5 点伤害，获得 5 点护盾。",dmg:5,block:5,emoji:"🍳"},
  {id:"c4",name:"发疯",cost:2,type:"attack",desc:"造成 14 点伤害，失去 3 点精神值。",dmg:14,selfDmg:3,emoji:"🤯"},
  {id:"c5",name:"辞职",cost:3,type:"attack",desc:"造成 24 点伤害，失去 8 点精神值。",dmg:24,selfDmg:8,emoji:"🚪"},
  {id:"c6",name:"已读不回",cost:1,type:"skill",desc:"敌人跳过下一回合。",stun:1,emoji:"📵"},
  {id:"c7",name:"画饼",cost:1,type:"skill",desc:"敌人获得 2 层虚弱。",weak:2,emoji:"🥞"},
  {id:"c8",name:"摸鱼",cost:1,type:"skill",desc:"回复 6 点精神值，获得 4 点护盾。",heal:6,block:4,emoji:"🐟"},
  {id:"c9",name:"咖啡续命",cost:0,type:"skill",desc:"获得 2 点能量，抽 1 张牌。",energy:2,draw:1,emoji:"☕"},
  {id:"c10",name:"带薪拉屎",cost:1,type:"skill",desc:"回复 8 点精神值，获得 5 存款。",heal:8,coins:5,emoji:"🚽"},
  {id:"c11",name:"电子木鱼",cost:1,type:"skill",desc:"获得 8 点护盾，回复 2 点精神值。",block:8,heal:2,emoji:"🪵"},
  {id:"c12",name:"深呼吸",cost:1,type:"skill",desc:"获得 10 点护盾。",block:10,emoji:"🌬️"},
  {id:"c13",name:"装死",cost:2,type:"skill",desc:"获得 16 点护盾。",block:16,emoji:"💀"},
  {id:"c14",name:"反向PUA",cost:1,type:"skill",desc:"敌人获得 3 层虚弱。",weak:3,emoji:"🪞"},
  {id:"c15",name:"充电",cost:1,type:"skill",desc:"回复 10 点精神值。",heal:10,emoji:"🔋"},
  {id:"c16",name:"存钱",cost:1,type:"skill",desc:"获得 15 存款。",coins:15,emoji:"🏦"},
  {id:"c17",name:"摸鱼哲学",cost:0,type:"skill",desc:"抽 2 张牌。",draw:2,emoji:"🧘"},
  {id:"c18",name:"精神状态良好",cost:2,type:"skill",desc:"回复 12 点精神值，获得 6 点护盾。",heal:12,block:6,emoji:"🙂"},
  {id:"c19",name:"破防",cost:1,type:"attack",desc:"造成 8 点伤害；敌人低于半血时额外 4 点。",dmg:8,execute:4,emoji:"💥"},
  {id:"c20",name:"带薪摸鱼",cost:2,type:"skill",desc:"回复 10 点精神值，获得 10 存款。",heal:10,coins:10,emoji:"🛋️"}
];
const GAME_START_DECK=["c1","c1","c1","c1","c8","c8","c9","c3","c2","c12"];
const GAME_ENEMIES=[
  {name:"老板",emoji:"👔",tie:"#c0392b",hp:40,intents:["attack:8","buff:2","attack:12","attack:10"],flavor:"画饼中……"},
  {name:"甲方",emoji:"📋",tie:"#3b6ea5",hp:50,intents:["attack:9","attack:13","attack:7","attack:11"],flavor:"再改一版……"},
  {name:"亲戚",emoji:"🧧",tie:"#d9a441",hp:60,intents:["attack:7","heal:6","attack:12","attack:10"],flavor:"怎么还不结婚……"}
];

const BOSS_SVG=`<svg viewBox="0 0 200 200" class="portrait-svg" aria-hidden="true">
<defs>
<radialGradient id="bossBg" cx="50%" cy="30%" r="75%"><stop offset="0%" stop-color="#5a2436"/><stop offset="100%" stop-color="#160e1c"/></radialGradient>
<linearGradient id="bossSuit" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2b2b36"/><stop offset="100%" stop-color="#101016"/></linearGradient>
</defs>
<rect width="200" height="200" fill="url(#bossBg)"/>
<path d="M34 200 Q40 152 72 140 L100 132 L128 140 Q160 152 166 200 Z" fill="url(#bossSuit)"/>
<path d="M78 136 L100 154 L122 136 L116 200 L84 200 Z" fill="#f1eee6"/>
<path d="M96 150 L104 150 L109 168 L100 192 L91 168 Z" fill="var(--tie,#c0392b)"/>
<rect x="89" y="112" width="22" height="26" rx="9" fill="#d8a078"/>
<path d="M61 74 Q61 42 100 40 Q139 42 139 74 L137 98 Q133 126 100 132 Q67 126 63 98 Z" fill="#f0c39b"/>
<ellipse cx="60" cy="92" rx="7" ry="11" fill="#dfa77d"/><ellipse cx="140" cy="92" rx="7" ry="11" fill="#dfa77d"/>
<path d="M57 78 Q50 38 100 30 Q150 38 143 78 Q133 54 100 50 Q67 54 57 78 Z" fill="#17141a"/>
<path d="M62 58 Q84 40 118 44 Q140 48 144 64 Q124 52 100 52 Q78 52 62 58 Z" fill="#2b2430" opacity=".75"/>
<path d="M74 76 L92 72" stroke="#17141a" stroke-width="4" stroke-linecap="round"/>
<path d="M108 72 L126 76" stroke="#17141a" stroke-width="4" stroke-linecap="round"/>
<g fill="none" stroke="#d9b45a" stroke-width="2.4"><rect x="70" y="80" width="26" height="17" rx="6"/><rect x="104" y="80" width="26" height="17" rx="6"/><path d="M96 88 L104 88"/><path d="M70 86 L61 84"/><path d="M130 86 L139 84"/></g>
<ellipse cx="83" cy="89" rx="4" ry="3" fill="#351b1b"/><ellipse cx="117" cy="89" rx="4" ry="3" fill="#351b1b"/>
<circle cx="84.5" cy="88" r="1.1" fill="#fff"/><circle cx="118.5" cy="88" r="1.1" fill="#fff"/>
<path d="M100 92 L98 103 L103 103" fill="none" stroke="#c98a63" stroke-width="2" stroke-linecap="round"/>
<path d="M88 111 Q100 119 116 108" fill="none" stroke="#7a3b35" stroke-width="3" stroke-linecap="round"/>
<path d="M64 101 Q74 113 87 115" fill="none" stroke="#d79b73" stroke-width="3" opacity=".55"/>
</svg>`;

const PLAYER_SVG=`<svg viewBox="0 0 200 200" class="portrait-svg" aria-hidden="true">
<defs>
<radialGradient id="playerBg" cx="50%" cy="30%" r="75%"><stop offset="0%" stop-color="#21475a"/><stop offset="100%" stop-color="#0c1620"/></radialGradient>
<linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2e4d68"/><stop offset="100%" stop-color="#152130"/></linearGradient>
</defs>
<rect width="200" height="200" fill="url(#playerBg)"/>
<path d="M34 200 Q40 152 72 140 L100 132 L128 140 Q160 152 166 200 Z" fill="url(#hoodie)"/>
<path d="M72 140 Q100 162 128 140 Q124 172 100 178 Q76 172 72 140 Z" fill="#22384f"/>
<path d="M88 160 L84 190" stroke="#9fc7e0" stroke-width="3" stroke-linecap="round"/><path d="M112 160 L116 190" stroke="#9fc7e0" stroke-width="3" stroke-linecap="round"/>
<rect x="89" y="112" width="22" height="26" rx="9" fill="#e7b38c"/>
<path d="M60 74 Q60 42 100 40 Q140 42 140 74 L138 100 Q134 128 100 134 Q66 128 62 100 Z" fill="#f3c9a4"/>
<ellipse cx="60" cy="92" rx="7" ry="11" fill="#e3aa81"/><ellipse cx="140" cy="92" rx="7" ry="11" fill="#e3aa81"/>
<path d="M55 82 Q46 34 100 30 Q154 34 145 82 Q137 58 118 50 Q112 66 100 50 Q86 66 78 50 Q62 60 55 82 Z" fill="#241c26"/>
<path d="M66 62 Q84 42 106 46 Q128 48 141 66 Q120 54 100 54 Q80 54 66 62 Z" fill="#3a2c3c" opacity=".75"/>
<path d="M74 79 Q84 75 92 79" fill="none" stroke="#241c26" stroke-width="3" stroke-linecap="round"/><path d="M108 79 Q116 75 126 79" fill="none" stroke="#241c26" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="82" cy="93" rx="6" ry="7" fill="#2a1d22"/><ellipse cx="118" cy="93" rx="6" ry="7" fill="#2a1d22"/>
<circle cx="84" cy="91" r="1.8" fill="#fff"/><circle cx="120" cy="91" r="1.8" fill="#fff"/>
<path d="M76 103 Q82 106 88 103" fill="none" stroke="#b06a7a" stroke-width="2" opacity=".5"/><path d="M112 103 Q118 106 124 103" fill="none" stroke="#b06a7a" stroke-width="2" opacity=".5"/>
<ellipse cx="71" cy="107" rx="7" ry="3.5" fill="#e88a9a" opacity=".4"/><ellipse cx="129" cy="107" rx="7" ry="3.5" fill="#e88a9a" opacity=".4"/>
<path d="M92 119 Q100 115 108 119" fill="none" stroke="#8a4a4a" stroke-width="3" stroke-linecap="round"/>
<g transform="translate(138,158)"><rect width="24" height="28" rx="4" fill="#f2ead8"/><path d="M24 7 Q35 7 35 17 Q35 25 24 25" fill="none" stroke="#f2ead8" stroke-width="4"/><rect width="24" height="6" fill="#c0392b"/></g>
</svg>`;

document.querySelectorAll(".portrait-slot").forEach(el=>{
  el.innerHTML=el.dataset.portrait==="boss"?BOSS_SVG:PLAYER_SVG;
});

const CARD_LINES={
  c1:"这锅，我不背。",
  c2:"您说得都对，但我就是不听。",
  c3:"这活儿，真不归我。",
  c4:"谁也别拦我，我今天就要发疯！",
  c5:"世界那么大，我想去看看。",
  c6:"已读，不回，勿扰。",
  c7:"这饼，我先给您画回去。",
  c8:"带薪摸鱼，天经地义。",
  c9:"再撑一下，咖啡还没凉。",
  c10:"带薪如厕，人生高光。",
  c11:"功德+1，烦恼-1。",
  c12:"吸气，呼气，别跟钱过不去。",
  c13:"我已经死了，有事烧纸。",
  c14:"您这格局，确实需要打开。",
  c15:"充会儿电，再战。",
  c16:"钱要存，班要上，人要疯。",
  c17:"只要我摸得够久，工作就追不上我。",
  c18:"精神状态良好，只是有点想死。",
  c19:"别说了，我破防了。",
  c20:"工资照拿，鱼照摸。"
};
const ENEMY_LINES={
  "老板":{attack:"这个需求，今天必须上线。",buff:"年轻人，要有格局。",heal:"公司不会亏待你的。",stun:"？？？"},
  "甲方":{attack:"再改一版，马上就好。",buff:"感觉不对，再找找。",heal:"预算还没批下来。",stun:"你先等等。"},
  "亲戚":{attack:"怎么还不结婚？",buff:"我都是为你好。",heal:"你看别人家孩子。",stun:"哎呀，我不说了。"}
};
const RELICS=[
  {id:"thermos",name:"保温杯",emoji:"🍵",desc:"每场战斗开始获得 8 点护盾。"},
  {id:"badge",name:"工牌",emoji:"🪪",desc:"每场战斗第一回合额外获得 1 点能量。"},
  {id:"muyu",name:"电子木鱼",emoji:"🪵",desc:"每回合开始获得 3 点护盾。"},
  {id:"coffee",name:"咖啡券",emoji:"☕",desc:"每回合多抽 1 张牌。"},
  {id:"piggy",name:"存钱罐",emoji:"🐷",desc:"每场战斗胜利额外获得 15 存款。"}
];
const EVENTS=[
  {title:"加班费",desc:"老板临时加了个需求，说做完有加班费。",choices:[
    {text:"接，钱要紧",effect:()=>{G.player.coins+=25;G.player.hp-=8;},log:"你接下了加班，存款+25，精神值-8。"},
    {text:"拒绝，命要紧",effect:()=>{G.player.hp=Math.min(G.player.maxHp,G.player.hp+8);},log:"你拒绝了加班，精神值+8。"},
    {text:"装死",effect:()=>{if(Math.random()<.5){G.player.coins+=15;G.player.hp-=4;}else{G.player.hp=Math.min(G.player.maxHp,G.player.hp+5);}},log:"你选择装死，听天由命。"}
  ]},
  {title:"同事的奶茶",desc:"同事点了奶茶，问你要不要。",choices:[
    {text:"喝，续命",effect:()=>{G.player.hp=Math.min(G.player.maxHp,G.player.hp+12);},log:"你喝了奶茶，精神值+12。"},
    {text:"不喝，省钱",effect:()=>{G.player.coins+=12;},log:"你忍住了，存款+12。"},
    {text:"帮同事干活换一杯",effect:()=>{G.player.coins+=8;G.player.hp-=3;},log:"你帮了点忙，存款+8，精神值-3。"}
  ]},
  {title:"电梯里的老板",desc:"电梯里遇到老板，他说「最近辛苦了」。",choices:[
    {text:"谢谢老板",effect:()=>{G.player.hp=Math.min(G.player.maxHp,G.player.hp+6);},log:"老板笑了笑，精神值+6。"},
    {text:"应该的",effect:()=>{G.player.coins+=10;},log:"老板很满意，存款+10。"},
    {text:"沉默",effect:()=>{},log:"电梯里安静得可怕。"}
  ]}
];

let audioCtx=null,soundOn=true;
try{soundOn=localStorage.getItem("oneline_sound")!=="0";}catch(e){}
function initAudio(){
  try{
    if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==="suspended")audioCtx.resume();
  }catch(e){}
}
function tone(freq,dur,type="sine",vol=.06,slideTo){
  if(!soundOn)return;
  initAudio();if(!audioCtx)return;
  const o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type=type;o.frequency.setValueAtTime(freq,audioCtx.currentTime);
  if(slideTo)o.frequency.exponentialRampToValueAtTime(Math.max(20,slideTo),audioCtx.currentTime+dur);
  g.gain.setValueAtTime(vol,audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+dur);
  o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+dur);
}
function playSfx(type){
  if(!soundOn)return;
  if(type==="click")tone(320,.06,"square",.025);
  else if(type==="whoosh")tone(700,.18,"sawtooth",.035,160);
  else if(type==="hit")tone(110,.22,"sine",.1,60);
  else if(type==="heal")tone(440,.3,"sine",.05,660);
  else if(type==="crit"){tone(880,.12,"square",.04);tone(140,.25,"sine",.1,70);}
  else if(type==="win"){tone(523,.12,"triangle",.06);setTimeout(()=>tone(659,.12,"triangle",.06),120);setTimeout(()=>tone(784,.2,"triangle",.06),240);}
  else if(type==="lose")tone(300,.5,"sine",.07,90);
}
function updateSoundBtn(){if(els.gSound)els.gSound.textContent=soundOn?"🔊":"🔇";}

function dateKey(){
  const n=new Date();const p=x=>String(x).padStart(2,"0");
  return `${n.getFullYear()}-${p(n.getMonth()+1)}-${p(n.getDate())}`;
}
function dailySign(){
  const name=els.dailyName.value.trim()||"有缘人";
  try{localStorage.setItem("oneline_name",els.dailyName.value.trim());}catch(e){}
  const h=fnv1a(name+"|"+dateKey());
  const sign=DAILY_SIGNS[h%DAILY_SIGNS.length];
  const g=h%10;
  const grade=g<3?"上上签":g<7?"上签":"中签";
  const yi=YI[(h>>>5)%YI.length];
  const ji=JI[(h>>>9)%JI.length];
  const col=LUCKY_COLORS[(h>>>13)%LUCKY_COLORS.length];
  const num=(h%9)+1;
  const stars=3+(h%3);
  state.extra=`宜 ${yi} · 忌 ${ji} · 幸运色 ${col[0]} · 数字 ${num}`;
  els.quote.value=sign;
  els.author.value=grade;
  els.dailyInfo.innerHTML=`<div class="grade">${grade} · 运势 ${"★".repeat(stars)}${"☆".repeat(5-stars)}</div>`+
    `<div>宜 <b>${yi}</b>　忌 <b>${ji}</b></div>`+
    `<div><span class="dot" style="background:${col[1]}"></span>幸运色 ${col[0]}　·　幸运数字 ${num}</div>`;
  render();
  flash("今日一签已生成");
}

function setFont(ctx,key,size,bold){
  const base=FONTS[key]||FONTS.yahei;
  const w=(key==="hei"||key==="yahei"||key==="yuan")&&bold?"700":"400";
  ctx.font=`${w} ${size}px ${base}`;
}
function chW(ctx,ch){return ctx.measureText(ch).width;}

function drawBG(ctx,theme,bgImage){
  if(bgImage){
    const cw=bgImage.width, chh=bgImage.height, s=Math.max(W/cw,H/chh);
    const dw=cw*s, dh=chh*s;
    ctx.drawImage(bgImage,(W-dw)/2,(H-dh)/2,dw,dh);
    ctx.fillStyle=theme.dark?"rgba(0,0,0,.46)":"rgba(255,255,255,.56)";
    ctx.fillRect(0,0,W,H);
    return;
  }
  if(theme.bg.type==="solid"){ctx.fillStyle=theme.bg.color;ctx.fillRect(0,0,W,H);}
  else{const g=ctx.createLinearGradient(0,0,0,H);for(const [c,p] of theme.bg.stops)g.addColorStop(p,c);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}
}

function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}

function drawCorner(ctx,x,y,len,sx,sy){ctx.beginPath();ctx.moveTo(x+len*sx,y);ctx.lineTo(x,y);ctx.lineTo(x,y+len*sy);ctx.stroke();}

function drawDecor(ctx,theme){
  switch(theme.decor){
    case "dot":ctx.fillStyle=theme.accent;ctx.beginPath();ctx.arc(W/2,175,10,0,Math.PI*2);ctx.fill();break;
    case "quote":
      ctx.fillStyle=hexA(theme.accent,.45);ctx.font="300px serif";ctx.fillText("“",PAD-10,330);
      ctx.textAlign="right";ctx.fillText("”",W-PAD+10,H-290);ctx.textAlign="left";break;
    case "line":ctx.fillStyle=theme.accent;ctx.fillRect(W/2-70,160,140,6);break;
    case "bar":ctx.fillStyle=theme.accent;ctx.fillRect(PAD,160,8,80);break;
    case "dots":{
      const pts=[[90,210],[175,420],[W-100,250],[W-180,490],[100,H-310],[W-125,H-190]];
      ctx.fillStyle=hexA(theme.sub,.85);
      for(const [x,y] of pts){ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);ctx.fill();}
      break;
    }
    case "frame":
      ctx.strokeStyle=hexA(theme.text,.55);ctx.lineWidth=3;
      ctx.strokeRect(68,68,W-136,H-136);ctx.strokeRect(86,86,W-172,H-172);break;
    case "corner":{
      ctx.strokeStyle=theme.accent;ctx.lineWidth=8;ctx.lineCap="round";const L=66,m=100;
      drawCorner(ctx,m,m,L,1,1);drawCorner(ctx,W-m,m,L,-1,1);
      drawCorner(ctx,m,H-m,L,1,-1);drawCorner(ctx,W-m,H-m,L,-1,-1);break;
    }
    case "seal":{
      ctx.fillStyle="#b03a2e";roundRect(ctx,W-PAD-120,H-PAD-160,120,120,10);ctx.fill();
      ctx.fillStyle="#f7efe2";ctx.font="600 58px KaiTi,serif";ctx.textAlign="center";
      ctx.fillText("签",W-PAD-60,H-PAD-82);ctx.textAlign="left";break;
    }
    case "stars":{
      const pts=[[90,180],[250,300],[W-140,220],[W-220,420],[170,560],[W-120,700],[110,H-360],[W-240,H-220]];
      for(const [x,y] of pts){ctx.fillStyle="rgba(255,255,255,.55)";ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();}
      break;
    }
  }
}

const NO_START="，。、；：！？）》」』】…—.,;:!?)]}";
const NO_END="（《「『【([{";
function measureStr(ctx,s,font,size,ls){
  setFont(ctx,font,size,true);
  let w=0;
  for(let i=0;i<s.length;i++){w+=chW(ctx,s[i]);if(i<s.length-1)w+=ls;}
  return w;
}
function wrapH(ctx,text,font,size,ls){
  setFont(ctx,font,size,true);
  const out=[];let line="";
  for(const ch of text){
    const cand=line+ch;
    if(line&&measureStr(ctx,cand,font,size,ls)>MAXW){
      if(NO_START.includes(ch)&&line.length>1){
        out.push(line.slice(0,-1));
        line=line.slice(-1)+ch;
      }else if(NO_END.includes(line.slice(-1))&&line.length>1){
        out.push(line.slice(0,-1));
        line=line.slice(-1)+ch;
      }else{
        out.push(line);
        line=ch;
      }
    }else{
      line=cand;
    }
  }
  if(line)out.push(line);
  if(out.length>=2&&out[out.length-1].length<=2){
    const last=out.pop();
    const prev=out[out.length-1];
    const move=Math.min(3,Math.max(0,prev.length-1));
    out[out.length-1]=prev.slice(0,prev.length-move);
    out.push(prev.slice(prev.length-move)+last);
  }
  return out;
}
function lineWidth(ctx,line,font,size,ls){
  setFont(ctx,font,size,true);
  let w=0;for(let i=0;i<line.length;i++){w+=chW(ctx,line[i]);if(i<line.length-1)w+=ls;}
  return w;
}

function drawHorizontal(ctx,text,font,size,ls,lh,theme,o){
  setFont(ctx,font,size,true);
  const lines=wrapH(ctx,text,font,size,ls);
  const lineH=Math.round(size*lh);
  const authorH=o.author?Math.round(size*.58)+50:0;
  const totalH=lines.length*lineH+authorH;
  let y=Math.max(PAD+80,(H-totalH)/2);
  ctx.fillStyle=theme.text;ctx.textBaseline="alphabetic";ctx.textAlign="left";
  lines.forEach((ln,i)=>{
    const lw=lineWidth(ctx,ln,font,size,ls);
    let x=PAD;
    if(o.align==="center")x=(W-lw)/2;
    else if(o.align==="right")x=W-PAD-lw;
    let cx=x;
    for(const ch of ln){ctx.fillText(ch,cx,y+size+i*lineH);cx+=chW(ctx,ch)+ls;}
  });
  let endY=y+lines.length*lineH;
  if(o.author){
    const ay=y+lines.length*lineH+Math.round(size*.58)+22;
    ctx.fillStyle=theme.sub;setFont(ctx,font,Math.round(size*.56),false);
    ctx.textAlign=o.align==="left"?"left":o.align==="right"?"right":"center";
    const ax=o.align==="left"?PAD:o.align==="right"?W-PAD:W/2;
    ctx.fillText("—— "+o.author,ax,ay);
    endY=ay+16;
  }
  return endY;
}

function drawVertical(ctx,text,font,size,ls,lh,theme,o){
  setFont(ctx,font,size,true);
  const charStep=Math.round(size*lh);
  const top=PAD+60,bottom=H-PAD-190;
  const cols=[];let col=[],y=top;
  for(const ch of text){
    if(y+charStep>bottom){cols.push(col);col=[];y=top;}
    col.push(ch);y+=charStep;
  }
  if(col.length)cols.push(col);
  const colGap=Math.round(size*.88);
  const totalW=(cols.length-1)*colGap;
  let x=W/2+totalW/2;
  ctx.fillStyle=theme.text;ctx.textAlign="center";
  cols.forEach(col=>{
    let cy=top;
    for(const ch of col){ctx.fillText(ch,x,cy+size);cy+=charStep;}
    x-=colGap;
  });
  if(o.author){
    ctx.fillStyle=theme.sub;setFont(ctx,font,Math.round(size*.52),false);ctx.textAlign="center";
    ctx.fillText("—— "+o.author,W/2,H-PAD-150);
  }
  return H-PAD-120;
}

function drawFooter(ctx,theme,o){
  ctx.font='400 26px "Microsoft YaHei","PingFang SC",sans-serif';
  ctx.fillStyle=hexA(theme.sub,.85);
  if(o.cat&&o.cat!=="全部"){ctx.textAlign="left";ctx.fillText("#"+o.cat,PAD,64);}
  if(o.showDate){
    const now=new Date();const p=n=>String(n).padStart(2,"0");
    const d=`${now.getFullYear()}.${p(now.getMonth()+1)}.${p(now.getDate())}`;
    ctx.textAlign="left";ctx.fillText(d,PAD,H-66);
  }
}

function drawWatermark(ctx,theme,o){
  if(!o.wmOn)return;
  const wm=o.wmText;
  const hasImg=!!o.wmImage;
  if(hasImg){
    const s=150;
    let ix=W-PAD-s, iy=H-PAD-s;
    if(o.wmPos==="bl")ix=PAD;
    if(o.wmPos==="bc")ix=(W-s)/2;
    ctx.fillStyle="#ffffff";roundRect(ctx,ix-10,iy-10,s+20,s+20,18);ctx.fill();
    ctx.drawImage(o.wmImage,ix,iy,s,s);
  }
  if(wm){
    ctx.font='400 28px "Microsoft YaHei","PingFang SC",sans-serif';
    ctx.fillStyle=theme.dark?"rgba(255,255,255,.62)":hexA(theme.sub,.9);
    const tx=W-PAD, ty=hasImg?H-PAD-172:H-PAD-66;
    ctx.textAlign="right";
    if(o.wmPos==="bl"){ctx.textAlign="left";ctx.fillText(wm,PAD,ty);}
    else if(o.wmPos==="bc"){ctx.textAlign="center";ctx.fillText(wm,W/2,ty);}
    else ctx.fillText(wm,tx,ty);
  }
}

function drawCard(cv,o){
  const ctx=cv.getContext("2d");
  const theme=o.theme;
  ctx.clearRect(0,0,W,H);
  drawBG(ctx,theme,o.bgImage);
  drawDecor(ctx,theme);
  const text=o.text||"写一句你的话";
  let bottom;
  if(o.vertical)bottom=drawVertical(ctx,text,o.font,o.size,o.ls,o.lh,theme,o);
  else bottom=drawHorizontal(ctx,text,o.font,o.size,o.ls,o.lh,theme,o);
  if(o.extra){
    ctx.font='400 30px "Microsoft YaHei","PingFang SC",sans-serif';
    ctx.fillStyle=hexA(theme.sub,.95);
    ctx.textAlign="center";
    ctx.fillText(o.extra,W/2,Math.min(H-160,bottom+86));
  }
  drawFooter(ctx,theme,o);
  drawWatermark(ctx,theme,o);
}

function buildRenderOpts(textOverride,authorOverride){
  return {
    text:textOverride!==undefined?textOverride:(els.quote.value.trim()||"写一句你的话"),
    author:authorOverride!==undefined?authorOverride:els.author.value.trim(),
    theme:THEMES[state.theme],font:state.font,size:state.size,ls:state.ls,lh:state.lh,
    align:state.align,vertical:state.vertical,showDate:state.showDate,cat:state.cat,
    wmText:isPro()?els.wmText.value.trim():"oneline.",
    wmOn:isPro()?state.wmOn:true,
    wmPos:state.wmPos,
    wmImage:isPro()?state.wmImage:null,
    bgImage:isPro()?state.bgImage:null,
    extra:state.extra
  };
}

function render(){drawCard(els.canvas,buildRenderOpts());}

function applyTheme(i){
  state.theme=i;
  const t=THEMES[i];
  state.font=t.font;state.align=t.align;state.vertical=t.vertical;
  if(t.size)state.size=t.size;
  syncControls();buildSwatches();render();
}

function pickQuote(){
  const pool=state.cat==="全部"?QUOTES:QUOTES.filter(q=>q.c===state.cat);
  const q=pool[Math.floor(Math.random()*pool.length)];
  state.extra="";
  els.quote.value=q.t;els.author.value=q.a;render();
}

function buildChips(){
  els.chips.innerHTML="";
  CATS.forEach(cat=>{
    const el=document.createElement("button");
    el.className="chip"+(cat===state.cat?" on":"");
    el.textContent=cat;
    el.onclick=()=>{state.cat=cat;buildChips();render();};
    els.chips.appendChild(el);
  });
}

function swatchBG(t){
  if(t.bg.type==="solid")return t.bg.color;
  return `linear-gradient(135deg, ${t.bg.stops.map(s=>s[0]).join(",")})`;
}
function buildSwatches(){
  els.swatches.innerHTML="";
  THEMES.forEach((t,i)=>{
    const locked=i>=FREE_THEME_COUNT&&!isPro();
    const el=document.createElement("div");
    el.className="swatch"+(i===state.theme?" on":"")+(t.dark?"":" light")+(locked?" locked":"");
    el.style.background=swatchBG(t);
    el.innerHTML=`<span>${locked?"🔒 "+t.name:t.name}</span>`;
    el.onclick=()=>{if(locked){promptUpgrade("「"+t.name+"」是 Pro 主题，升级后解锁全部 22 套");return;}applyTheme(i);};
    els.swatches.appendChild(el);
  });
}

function buildFontSel(){
  els.fontSel.innerHTML="";
  Object.keys(FONTS).forEach(k=>{
    const o=document.createElement("option");o.value=k;o.textContent=FONT_LABELS[k];
    els.fontSel.appendChild(o);
  });
}

function syncControls(){
  els.fontSel.value=state.font;
  els.sizeRange.value=state.size;els.sizeVal.textContent=state.size;
  els.lsRange.value=state.ls;els.lsVal.textContent=state.ls;
  els.lhRange.value=state.lh;els.lhVal.textContent=state.lh;
  els.verticalToggle.checked=state.vertical;
  [...els.alignSeg.querySelectorAll(".btn")].forEach(b=>b.classList.toggle("on",b.dataset.a===state.align));
}

function refreshLockUI(){
  const pro=isPro();
  els.proTitle.textContent=pro?"Pro 已解锁":"免费版";
  els.proTitle.classList.toggle("on",pro);
  els.proDesc.textContent=pro?"全部功能已开放，感谢支持":"解锁全部 22 套主题 · 批量打包 · 去水印 · 自定义二维码";
  els.codeInput.style.display=pro?"none":"";
  els.activateBtn.style.display=pro?"none":"";
  els.buyBtn.style.display=pro?"none":"";
  els.buyBtn.textContent=PURCHASE_URL?"去购买激活码":"购买链接待配置";
  els.wmOn.disabled=!pro;
  els.wmText.disabled=!pro;
  els.wmFile.disabled=!pro;
  els.wmClear.disabled=!pro;
  els.bgFile.disabled=!pro;
  els.bgClear.disabled=!pro;
  if(!pro){els.wmOn.checked=true;}
}

function exportPNG(){
  els.canvas.toBlob(b=>{
    if(!b){flash("导出失败");return;}
    downloadBlob(b,`oneline_${stamp()}_${THEMES[state.theme].name}.png`);
    flash("已导出 PNG");
  },"image/png");
}
async function copyPNG(){
  try{
    const blob=await new Promise(r=>els.canvas.toBlob(r,"image/png"));
    await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
    flash("已复制到剪贴板");
  }catch(e){flash("复制失败，请改用导出");}
}
function stamp(){
  const now=new Date();const p=n=>String(n).padStart(2,"0");
  return `${now.getFullYear()}${p(now.getMonth()+1)}${p(now.getDate())}`;
}
function downloadBlob(blob,name){
  const a=document.createElement("a");const u=URL.createObjectURL(blob);
  a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);
}

const crcTable=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?(0xEDB88320^(c>>>1)):(c>>>1);t[n]=c>>>0;}return t;})();
function crc32(u8){let c=0xFFFFFFFF;for(let i=0;i<u8.length;i++)c=(c>>>8)^crcTable[(c^u8[i])&0xFF];return (c^0xFFFFFFFF)>>>0;}
function buildZip(entries){
  const enc=new TextEncoder();const parts=[];const central=[];let offset=0;
  for(const e of entries){
    const name=enc.encode(e.name),data=e.data,crc=crc32(data);
    const lh=new DataView(new ArrayBuffer(30));
    lh.setUint32(0,0x04034b50,true);lh.setUint16(4,20,true);lh.setUint16(6,0x0800,true);
    lh.setUint16(8,0,true);lh.setUint32(14,crc,true);lh.setUint32(18,data.length,true);
    lh.setUint32(22,data.length,true);lh.setUint16(26,name.length,true);lh.setUint16(28,0,true);
    parts.push(lh.buffer,name,data);
    const cd=new DataView(new ArrayBuffer(46));
    cd.setUint32(0,0x02014b50,true);cd.setUint16(4,20,true);cd.setUint16(6,20,true);cd.setUint16(8,0x0800,true);
    cd.setUint16(10,0,true);cd.setUint32(16,crc,true);cd.setUint32(20,data.length,true);
    cd.setUint32(24,data.length,true);cd.setUint16(28,name.length,true);
    cd.setUint32(42,offset,true);
    central.push(cd.buffer,name);
    offset+=30+name.length+data.length;
  }
  let cdSize=0;for(const c of central)cdSize+=c.byteLength;
  const eo=new DataView(new ArrayBuffer(22));
  eo.setUint32(0,0x06054b50,true);eo.setUint16(8,entries.length,true);eo.setUint16(10,entries.length,true);
  eo.setUint32(12,cdSize,true);eo.setUint32(16,offset,true);
  parts.push(...central,eo.buffer);
  return new Blob(parts,{type:"application/zip"});
}

function wrapSquare(ctx,text,font,size,ls,maxW){
  setFont(ctx,font,size,true);
  const out=[];let line="";
  for(const ch of text){
    const cand=line+ch;
    if(line&&measureStr(ctx,cand,font,size,ls)>maxW){
      if(NO_START.includes(ch)&&line.length>1){
        out.push(line.slice(0,-1));
        line=line.slice(-1)+ch;
      }else if(NO_END.includes(line.slice(-1))&&line.length>1){
        out.push(line.slice(0,-1));
        line=line.slice(-1)+ch;
      }else{
        out.push(line);
        line=ch;
      }
    }else{
      line=cand;
    }
  }
  if(line)out.push(line);
  if(out.length>=2&&out[out.length-1].length<=2){
    const last=out.pop();
    const prev=out[out.length-1];
    const move=Math.min(3,Math.max(0,prev.length-1));
    out[out.length-1]=prev.slice(0,prev.length-move);
    out.push(prev.slice(prev.length-move)+last);
  }
  return out;
}
function shuffleArr(a){
  const b=a.slice();
  for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}
  return b;
}
let diagState={answers:[],index:0};
function showDiagView(name){
  els.diagStart.style.display=name==="start"?"flex":"none";
  els.diagQuiz.style.display=name==="quiz"?"flex":"none";
  els.diagResult.style.display=name==="result"?"flex":"none";
}
function openDiag(){
  diagState={answers:[],index:0};
  showDiagView("start");
  els.diagModal.classList.add("show");
}
function startDiag(){
  diagState={answers:[],index:0};
  showDiagView("quiz");
  renderDiagQuestion();
}
function renderDiagQuestion(){
  const q=DIAG_QUESTIONS[diagState.index];
  els.diagProgress.textContent=`${diagState.index+1} / ${DIAG_QUESTIONS.length}`;
  els.diagQ.textContent=q.q;
  els.diagOpts.innerHTML="";
  q.opts.forEach(([text,score])=>{
    const b=document.createElement("button");
    b.className="diag-opt";b.textContent=text;
    b.onclick=()=>{
      diagState.answers.push(score);
      diagState.index++;
      if(diagState.index>=DIAG_QUESTIONS.length)finishDiag();
      else renderDiagQuestion();
    };
    els.diagOpts.appendChild(b);
  });
}
function finishDiag(){
  const sum=diagState.answers.reduce((a,b)=>a+b,0);
  const band=sum<=6?0:sum<=12?1:sum<=18?2:3;
  const h=fnv1a(diagState.answers.join(",")+"|diag");
  const result=DIAG_RESULTS[band*4+(h%4)];
  drawDiagnosisCard(els.diagCanvas,result,els.diagName.value.trim(),diagState.answers);
  showDiagView("result");
  els.diagHint.textContent=`确诊：${result.name} · ${result.rarity==="N"?"普通":result.rarity==="SR"?"稀有":"SSR"}`;
}
function drawDiagnosisCard(cv,result,name,answers){
  const ctx=cv.getContext("2d"),W=1080,H=1440;
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle="#f4f1ea";ctx.fillRect(0,0,W,H);
  for(let i=0;i<420;i++){
    ctx.fillStyle=`rgba(0,0,0,${(0.015+Math.random()*0.025).toFixed(3)})`;
    ctx.fillRect(Math.random()*W,Math.random()*H,2,2);
  }
  ctx.strokeStyle="rgba(31,31,31,.5)";ctx.lineWidth=2;
  ctx.strokeRect(46,46,W-92,H-92);
  ctx.strokeRect(58,58,W-116,H-116);
  ctx.textAlign="left";ctx.fillStyle="#1f1f1f";
  ctx.font='700 30px "Microsoft YaHei",sans-serif';
  ctx.fillText("ONELINE 精神状态诊断所",90,128);
  ctx.fillStyle="#6b6b6b";ctx.font='400 18px "Microsoft YaHei",sans-serif';
  ctx.fillText("MENTAL STATUS CLINIC · EST. 2026",90,162);
  ctx.fillStyle="#c0392b";ctx.fillRect(W-150,96,46,12);ctx.fillRect(W-133,79,12,46);
  ctx.fillStyle="#1f1f1f";ctx.textAlign="center";
  ctx.font='700 56px "Microsoft YaHei",sans-serif';
  ctx.fillText("精 神 状 态 诊 断 书",W/2,258);
  ctx.strokeStyle="rgba(31,31,31,.3)";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(90,298);ctx.lineTo(W-90,298);ctx.stroke();
  const now=new Date();const p=n=>String(n).padStart(2,"0");
  const date=`${now.getFullYear()}.${p(now.getMonth()+1)}.${p(now.getDate())}`;
  const id="ONL-"+String((fnv1a(answers.join(","))%900000)+100000);
  ctx.textAlign="left";ctx.font='400 26px "Microsoft YaHei",sans-serif';ctx.fillStyle="#4a4a4a";
  ctx.fillText(`姓名：${(name||"匿名患者").slice(0,10)}`,90,352);
  ctx.fillText(`编号：${id}`,90,394);
  ctx.fillText(`日期：${date}`,90,436);
  ctx.fillText("科室：情绪内科",560,352);
  ctx.fillText("门诊：网络冲浪门诊",560,394);
  ctx.fillText("医师：Dr. oneline",560,436);
  ctx.fillStyle="#6b6b6b";ctx.font='700 22px "Microsoft YaHei",sans-serif';
  ctx.fillText("DIAGNOSIS / 诊断结果",90,512);
  ctx.strokeStyle="rgba(31,31,31,.2)";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(90,532);ctx.lineTo(W-90,532);ctx.stroke();
  ctx.fillStyle="#c0392b";ctx.font='700 84px "Microsoft YaHei",sans-serif';
  ctx.fillText(result.name,90,634);
  ctx.fillStyle="#1f1f1f";ctx.font='700 34px "Microsoft YaHei",sans-serif';
  let ty=704;
  for(const ln of wrapSquare(ctx,result.tag,"yahei",34,0,W-180)){ctx.fillText(ln,90,ty);ty+=48;}
  ctx.fillStyle="#4a4a4a";ctx.font='400 30px "Microsoft YaHei",sans-serif';
  ty+=10;
  let dl=wrapSquare(ctx,result.desc,"yahei",30,0,W-180);
  if(dl.length>3)dl=dl.slice(0,3);
  for(const ln of dl){ctx.fillText(ln,90,ty);ty+=46;}
  if(ty<880){
    ctx.fillStyle="#6b6b6b";ctx.font='700 18px "Microsoft YaHei",sans-serif';ctx.textAlign="left";
    ctx.fillText("答题记录 / ANSWERS",90,865);
    for(let i=0;i<8;i++){
      const s=answers[i]||0,ax=100+i*96,ay=915;
      ctx.beginPath();ctx.arc(ax,ay,14,0,Math.PI*2);
      ctx.fillStyle=`rgba(192,57,43,${0.12+s*0.22})`;ctx.fill();
      ctx.strokeStyle="rgba(192,57,43,.45)";ctx.lineWidth=1.5;ctx.stroke();
    }
  }
  ctx.fillStyle="#6b6b6b";ctx.font='700 22px "Microsoft YaHei",sans-serif';
  ctx.fillText("ADVICE / 医嘱",90,990);
  ctx.strokeStyle="rgba(31,31,31,.2)";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(90,1010);ctx.lineTo(W-90,1010);ctx.stroke();
  result.advice.forEach((a,i)=>{
    const ay=1066+i*54;
    ctx.fillStyle="#c0392b";ctx.font='700 26px "Microsoft YaHei",sans-serif';
    ctx.fillText(`${i+1}.`,90,ay);
    ctx.fillStyle="#1f1f1f";ctx.font='400 30px "Microsoft YaHei",sans-serif';
    ctx.fillText(a,132,ay);
  });
  ctx.save();
  ctx.translate(W-175,1170);ctx.rotate(-0.18);
  const rl=result.rarity==="N"?"普通":result.rarity==="SR"?"稀有":"SSR";
  ctx.strokeStyle="rgba(192,57,43,.72)";ctx.lineWidth=5;
  ctx.beginPath();ctx.arc(0,0,78,0,Math.PI*2);ctx.stroke();
  ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,66,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle="rgba(192,57,43,.85)";ctx.textAlign="center";
  ctx.font='700 38px "Microsoft YaHei",sans-serif';
  ctx.fillText(rl,0,8);
  ctx.font='700 15px "Microsoft YaHei",sans-serif';
  ctx.fillText("ONELINE CLINIC",0,36);
  ctx.restore();
  ctx.fillStyle="#1f1f1f";
  let bx=90;
  for(let i=0;i<42;i++){
    const bw=Math.random()<.3?2:4,bh=64+Math.random()*26;
    ctx.fillRect(bx,1236,bw,bh);
    bx+=bw+4+Math.random()*4;
  }
  ctx.fillStyle="#6b6b6b";ctx.font='400 16px Consolas,monospace';ctx.textAlign="left";
  ctx.fillText(id,90,1326);
  ctx.fillStyle="#8a8a8a";ctx.font='400 22px "Microsoft YaHei",sans-serif';ctx.textAlign="center";
  ctx.fillText("本诊断仅供娱乐，请勿当真 · oneline.",W/2,1370);
}
function downloadDiag(){
  els.diagCanvas.toBlob(b=>{
    if(!b){flash("导出失败");return;}
    downloadBlob(b,`oneline_diagnosis_${stamp()}.png`);
    flash("诊断书已保存");
  },"image/png");
}
function shareDiag(){
  const nm=encodeURIComponent(els.diagName.value.trim());
  const url=`https://morefree-lab.github.io/jinshu-cards/?diagresult=${diagState.answers.join("")}${nm?"&name="+nm:""}`;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(()=>flash("分享链接已复制")).catch(()=>flash("复制失败，请手动复制链接"));
  }else{
    flash("请手动复制："+url);
  }
}

let G={player:null,deck:[],hand:[],draw:[],discard:[],enemy:null,encounter:0,turn:1,running:false,log:[],ending:null,busy:false,relics:[],deal:false,combo:0};
function showGameView(name){
  els.gameMenu.style.display=name==="menu"?"flex":"none";
  els.gameBattle.style.display=name==="battle"?"flex":"none";
  els.gameReward.style.display=name==="reward"?"flex":"none";
  els.gameEvent.style.display=name==="event"?"flex":"none";
  els.gameEnd.style.display=name==="end"?"flex":"none";
}
function openGame(){
  showGameView("menu");
  els.gameModal.classList.add("show");
}
function startGame(){
  G.player={hp:70,maxHp:70,energy:3,maxEnergy:3,block:0,coins:0};
  G.deck=GAME_START_DECK.map(id=>GAME_CARDS.find(c=>c.id===id));
  G.encounter=0;G.log=[];G.running=true;G.ending=null;G.busy=false;G.relics=[];G.combo=0;
  initAudio();updateSoundBtn();
  startBattle();
}
function startBattle(){
  const base=GAME_ENEMIES[G.encounter];
  G.enemy={name:base.name,emoji:base.emoji,tie:base.tie,hp:base.hp,maxHp:base.hp,strength:0,weak:0,vulnerable:0,stun:0,intentIndex:0,intents:base.intents.slice(),flavor:base.flavor};
  G.hand=[];G.draw=shuffleArr(G.deck.slice());G.discard=[];G.turn=1;
  G.player.block=0;G.player.energy=G.player.maxEnergy;G.running=true;G.busy=false;
  if(G.relics.some(r=>r.id==="thermos"))G.player.block+=8;
  if(G.relics.some(r=>r.id==="muyu"))G.player.block+=3;
  if(G.relics.some(r=>r.id==="badge"))G.player.energy+=1;
  logGame(`遭遇「${G.enemy.name}」：${G.enemy.flavor}`);
  drawCards(5);
  G.deal=true;G.combo=0;
  showGameView("battle");
  renderGame();
  showBattleIntro();
  setTimeout(()=>showTurnBanner("你的回合"),1600);
}
function drawCards(n){
  for(let i=0;i<n;i++){
    if(!G.draw.length){G.draw=shuffleArr(G.discard);G.discard=[];}
    if(!G.draw.length)break;
    G.hand.push(G.draw.pop());
  }
}
function logGame(s){
  G.log.push(s);
  if(G.log.length>8)G.log.shift();
  if(els.gLog)els.gLog.innerHTML=G.log.map(x=>`<div>· ${x}</div>`).join("");
}
function floatGameText(text,color,side){
  const layer=els.gFloatLayer;
  if(!layer)return;
  const el=document.createElement("div");
  el.className="gfloat";
  el.textContent=text;
  el.style.color=color;
  el.style.left=side==="enemy"?"58%":"34%";
  el.style.top=side==="enemy"?"24%":"62%";
  layer.appendChild(el);
  setTimeout(()=>el.remove(),900);
}
function showTurnBanner(text){
  const b=els.gTurnBanner;
  if(!b)return;
  b.textContent=text;
  b.classList.remove("show");
  void b.offsetWidth;
  b.classList.add("show");
  setTimeout(()=>b.classList.remove("show"),1100);
}
function showBattleIntro(){
  const b=els.gBattleIntro;
  if(!b)return;
  els.gIntroKicker.textContent=`ENCOUNTER ${G.encounter+1}`;
  els.gIntroName.textContent=G.enemy.name;
  els.gIntroSub.textContent=G.enemy.flavor;
  b.classList.remove("show");
  void b.offsetWidth;
  b.classList.add("show");
  setTimeout(()=>b.classList.remove("show"),1550);
}
function showCombo(){
  if(!els.gCombo)return;
  els.gCombo.textContent=`COMBO ×${G.combo}`;
  els.gCombo.classList.remove("show");
  void els.gCombo.offsetWidth;
  els.gCombo.classList.add("show");
  setTimeout(()=>els.gCombo.classList.remove("show"),900);
}
function showBubble(side,text){
  const el=side==="player"?els.gPlayerBubble:els.gEnemyBubble;
  if(!el)return;
  el.textContent=text;
  el.classList.add("show");
  clearTimeout(el._bubbleTimer);
  el._bubbleTimer=setTimeout(()=>el.classList.remove("show"),1800);
}
function impactAt(side){
  const layer=els.gFloatLayer;
  if(!layer)return;
  const pos=side==="enemy"?{x:"68%",y:"30%"}:{x:"30%",y:"64%"};
  const fx=document.createElement("div");
  fx.className="impact";
  fx.style.left=pos.x;fx.style.top=pos.y;
  layer.appendChild(fx);
  setTimeout(()=>fx.remove(),520);
  for(let i=0;i<8;i++){
    const s=document.createElement("i");
    s.className="spark";
    s.style.left=pos.x;s.style.top=pos.y;
    s.style.color=side==="enemy"?"#ffd76a":"#ff6b81";
    const a=Math.random()*Math.PI*2,dist=40+Math.random()*60;
    s.style.setProperty("--dx",Math.cos(a)*dist+"px");
    s.style.setProperty("--dy",Math.sin(a)*dist+"px");
    layer.appendChild(s);
    setTimeout(()=>s.remove(),620);
  }
  const board=els.gameBattle.querySelector(".game-board");
  if(board){
    board.classList.remove("shake-board");
    void board.offsetWidth;
    board.classList.add("shake-board");
  }
  playSfx("hit");
}
function intentLabel(e){
  const it=e.intents[e.intentIndex],parts=it.split(":"),t=parts[0],v=+parts[1];
  if(t==="attack")return `攻击 ${v+e.strength}`;
  if(t==="buff")return `加攻 +${v}`;
  if(t==="heal")return `回血 ${v}`;
  return it;
}
function renderGame(){
  els.gHp.textContent=`${Math.max(0,G.player.hp)}/${G.player.maxHp}`;
  els.gBlock.textContent=G.player.block;
  els.gCoins.textContent=G.player.coins;
  els.gEnergy.textContent=`${G.player.energy}/${G.player.maxEnergy}`;
  els.gEnemyName.textContent=G.enemy.name;
  els.gEnemyHp.textContent=`${Math.max(0,G.enemy.hp)}/${G.enemy.maxHp}`;
  els.gEnemyHpFill.style.width=`${Math.max(0,G.enemy.hp)/G.enemy.maxHp*100}%`;
  els.gPlayerHpFill.style.width=`${Math.max(0,G.player.hp)/G.player.maxHp*100}%`;
  els.gEnemyPortrait.style.setProperty("--tie",G.enemy.tie||"#c0392b");
  els.gIntent.textContent="意图："+intentLabel(G.enemy);
  if(els.gEnergyGems){
    els.gEnergyGems.innerHTML="";
    for(let i=0;i<G.player.maxEnergy;i++){
      const d=document.createElement("i");
      if(i<G.player.energy)d.className="on";
      els.gEnergyGems.appendChild(d);
    }
  }
  if(els.gRelics){
    els.gRelics.innerHTML=G.relics.map(r=>`<span class="relic-chip" title="${r.desc}">${r.emoji} ${r.name}</span>`).join("");
  }
  els.gHand.innerHTML="";
  G.hand.forEach((card,i)=>{
    const b=document.createElement("button");
    b.className="game-card "+card.type+(G.player.energy<card.cost?" disabled":"");
    b.innerHTML=`<span class="cost">${card.cost}</span><div class="cicon">${card.emoji}</div><div class="cname">${card.name}</div><div class="cdesc">${card.desc}</div>`;
    b.style.setProperty("--i",i);
    b.onclick=()=>playGameCard(i);
    els.gHand.appendChild(b);
  });
  if(G.deal){
    els.gHand.classList.remove("dealing");
    void els.gHand.offsetWidth;
    els.gHand.classList.add("dealing");
    G.deal=false;
  }
}
function playerDamage(base){
  let d=base;
  if(G.enemy.vulnerable>0)d=Math.round(d*1.5);
  G.enemy.hp-=d;
  logGame(`对 ${G.enemy.name} 造成 ${d} 点伤害`);
  floatGameText(`-${d}`,"#ff6b81","enemy");
  if(d>=12&&els.gCrit){
    els.gCrit.classList.remove("show");
    void els.gCrit.offsetWidth;
    els.gCrit.classList.add("show");
    playSfx("crit");
  }
  impactAt("enemy");
  const ebar=els.gEnemyHpFill.parentElement;
  if(ebar){ebar.classList.remove("damage");void ebar.offsetWidth;ebar.classList.add("damage");}
}
function playGameCard(i){
  if(!G.running||G.busy)return;
  const card=G.hand[i];
  if(!card||G.player.energy<card.cost)return;
  G.busy=true;
  playSfx("whoosh");
  const el=els.gHand.children[i];
  if(el){
    el.classList.add("being-played");
    const board=els.gameBattle.querySelector(".game-board");
    if(board){
      const br=el.getBoundingClientRect(),brd=board.getBoundingClientRect();
      const ghost=el.cloneNode(true);
      ghost.classList.remove("being-played","disabled");
      ghost.classList.add("card-ghost");
      ghost.style.left=(br.left-brd.left)+"px";
      ghost.style.top=(br.top-brd.top)+"px";
      ghost.style.width=br.width+"px";
      ghost.style.height=br.height+"px";
      els.gFloatLayer.appendChild(ghost);
      const dx=brd.width/2-(br.left-brd.left)-br.width/2;
      const dy=brd.height*0.3-(br.top-brd.top)-br.height/2;
      ghost.animate([
        {transform:"translate(0,0) scale(1) rotate(0deg)",opacity:1},
        {transform:`translate(${dx}px,${dy}px) scale(1.35) rotate(-3deg)`,opacity:1,offset:.7},
        {transform:`translate(${dx}px,${dy}px) scale(1.55) rotate(-3deg)`,opacity:0}
      ],{duration:420,easing:"cubic-bezier(.2,.8,.2,1)"});
      setTimeout(()=>ghost.remove(),450);
    }
  }
  setTimeout(()=>{G.busy=false;resolveCard(i);},420);
}
function resolveCard(i){
  if(!G.running)return;
  const card=G.hand[i];
  if(!card)return;
  G.player.energy-=card.cost;
  G.hand.splice(i,1);
  G.discard.push(card);
  logGame(`打出「${card.name}」`);
  showBubble("player",CARD_LINES[card.id]||"……");
  if(card.dmg){
    let d=card.dmg;
    if(card.execute&&G.enemy.hp<G.enemy.maxHp/2)d+=card.execute;
    playerDamage(d);
  }
  if(card.heal){G.player.hp=Math.min(G.player.maxHp,G.player.hp+card.heal);playSfx("heal");}
  if(card.block)G.player.block+=card.block;
  if(card.coins)G.player.coins+=card.coins;
  if(card.energy)G.player.energy+=card.energy;
  if(card.draw)drawCards(card.draw);
  if(card.selfDmg)G.player.hp-=card.selfDmg;
  if(card.vuln)G.enemy.vulnerable+=card.vuln;
  if(card.weak)G.enemy.weak+=card.weak;
  if(card.stun)G.enemy.stun+=card.stun;
  G.combo++;
  if(G.combo>=2)showCombo();
  if(G.enemy.hp<=0){winBattle();return;}
  if(G.player.hp<=0){showEnding(true);return;}
  renderGame();
}
function enemyAct(){
  const e=G.enemy;
  if(e.stun>0){e.stun--;logGame(`${e.name} 被「已读不回」，跳过了回合`);showBubble("enemy",ENEMY_LINES[e.name]?.stun||"？？？");return;}
  const it=e.intents[e.intentIndex],parts=it.split(":"),t=parts[0],n=+parts[1];
  if(t==="attack"){
    els.gEnemyPortrait.classList.add("attacking");
    setTimeout(()=>els.gEnemyPortrait.classList.remove("attacking"),420);
    let d=n+e.strength;
    if(e.weak>0)d=Math.round(d*0.75);
    const blocked=Math.min(G.player.block,d);
    G.player.block-=blocked;
    const dmg=Math.max(0,d-blocked);
    G.player.hp-=dmg;
    logGame(`${e.name} 攻击 ${d}，护盾挡下 ${blocked}，你受到 ${dmg} 点伤害`);
    floatGameText(`-${dmg}`,"#ff8a5c","player");
    showBubble("enemy",ENEMY_LINES[e.name]?.attack||"……");
    impactAt("player");
    const pbar=els.gPlayerHpFill.parentElement;
    if(pbar){pbar.classList.remove("damage");void pbar.offsetWidth;pbar.classList.add("damage");}
    els.gHurtFlash.classList.add("on");
    setTimeout(()=>els.gHurtFlash.classList.remove("on"),180);
  }else if(t==="buff"){e.strength+=n;logGame(`${e.name} 加攻 +${n}`);showBubble("enemy",ENEMY_LINES[e.name]?.buff||"……");}
  else if(t==="heal"){e.hp=Math.min(e.maxHp,e.hp+n);logGame(`${e.name} 回复 ${n} 点`);showBubble("enemy",ENEMY_LINES[e.name]?.heal||"……");}
  e.intentIndex=(e.intentIndex+1)%e.intents.length;
}
function endTurn(){
  if(!G.running||G.busy)return;
  G.busy=true;
  G.discard.push(...G.hand);G.hand=[];
  showTurnBanner("敌方回合");
  logGame("—— 敌方回合 ——");
  setTimeout(()=>{
    enemyAct();
    if(G.player.hp<=0){G.busy=false;showEnding(true);return;}
    if(G.enemy.weak>0)G.enemy.weak--;
    if(G.enemy.vulnerable>0)G.enemy.vulnerable--;
    G.turn++;
    G.combo=0;
    if(els.gCombo)els.gCombo.classList.remove("show");
    G.player.block=0;
    if(G.relics.some(r=>r.id==="muyu"))G.player.block+=3;
    G.player.energy=G.player.maxEnergy;
    drawCards(5+(G.relics.some(r=>r.id==="coffee")?1:0));
    G.busy=false;
    G.deal=true;
    renderGame();
    showTurnBanner("你的回合");
  },420);
}
function winBattle(){
  G.running=false;
  const coins=10+G.encounter*5;
  G.player.coins+=coins;
  if(G.relics.some(r=>r.id==="piggy"))G.player.coins+=15;
  logGame(`击败「${G.enemy.name}」，获得 ${coins} 存款`);
  G.encounter++;
  playSfx("win");
  const board=els.gameBattle.querySelector(".game-board");
  if(board)board.classList.add("ko-zoom");
  if(els.gKO){els.gKO.classList.remove("show");void els.gKO.offsetWidth;els.gKO.classList.add("show");}
  setTimeout(()=>{
    if(board)board.classList.remove("ko-zoom");
    if(els.gKO)els.gKO.classList.remove("show");
    if(G.encounter>=GAME_ENEMIES.length)showEnding(false);
    else showEvent();
  },950);
}
function showEvent(){
  const ev=EVENTS[Math.floor(Math.random()*EVENTS.length)];
  els.gEventTitle.textContent=ev.title;
  els.gEventDesc.textContent=ev.desc;
  els.gEventChoices.innerHTML="";
  ev.choices.forEach(c=>{
    const b=document.createElement("button");
    b.className="event-choice";
    b.textContent=c.text;
    b.onclick=()=>{c.effect();logGame(c.log);showReward();};
    els.gEventChoices.appendChild(b);
  });
  showGameView("event");
}
function showReward(){
  G.busy=false;
  showGameView("reward");
  els.gRewards.innerHTML="";
  shuffleArr(GAME_CARDS).slice(0,3).forEach(card=>{
    const b=document.createElement("button");
    b.className="game-card "+card.type;
    b.innerHTML=`<span class="cost">${card.cost}</span><div class="cicon">${card.emoji}</div><div class="cname">${card.name}</div><div class="cdesc">${card.desc}</div>`;
    b.onclick=()=>{G.deck.push(card);logGame(`获得新卡「${card.name}」`);startBattle();};
    els.gRewards.appendChild(b);
  });
  const available=RELICS.filter(r=>!G.relics.some(x=>x.id===r.id));
  if(available.length){
    const relic=shuffleArr(available)[0];
    const b=document.createElement("button");
    b.className="game-card relic-card";
    b.innerHTML=`<div class="cicon">${relic.emoji}</div><div class="cname">${relic.name}</div><div class="cdesc">${relic.desc}</div>`;
    b.onclick=()=>{G.relics.push(relic);logGame(`获得遗物「${relic.name}」`);startBattle();};
    els.gRewards.appendChild(b);
  }
}
function showEnding(defeated){
  G.running=false;G.busy=false;
  if(defeated)playSfx("lose");
  const hp=Math.max(0,G.player.hp),coins=G.player.coins;
  let ending,line,grade;
  if(defeated){ending="精神值归零";line="你倒在了工位上，电脑还亮着。";grade="D";}
  else if(coins>=60){ending="辞职创业";line="你带着存款跑了。世界那么大，你想去看看。";grade="S";}
  else if(hp>=45){ending="升职加薪";line="你活下来了，甚至还升了职。老板说：明年继续。";grade="A";}
  else if(hp<=15){ending="带薪躺平";line="你没能升职，但你成功地在工位上躺平了。";grade="B";}
  else{ending="苟到下班";line="今天也平安地下班了，明天继续。";grade="B";}
  G.ending={ending,line,grade};
  drawEndingCard(els.gameEndCanvas,ending,line,grade);
  showGameView("end");
}
function drawEndingCard(cv,ending,line,grade){
  const ctx=cv.getContext("2d"),W2=1080,H2=1440;
  ctx.clearRect(0,0,W2,H2);
  const g=ctx.createLinearGradient(0,0,0,H2);
  g.addColorStop(0,"#0f0f18");g.addColorStop(.6,"#1b1428");g.addColorStop(1,"#0b0b12");
  ctx.fillStyle=g;ctx.fillRect(0,0,W2,H2);
  for(let i=0;i<160;i++){
    ctx.fillStyle=`rgba(255,255,255,${(0.04+Math.random()*0.2).toFixed(2)})`;
    ctx.beginPath();ctx.arc(Math.random()*W2,Math.random()*H2,Math.random()*1.5+.4,0,Math.PI*2);ctx.fill();
  }
  ctx.strokeStyle="rgba(245,215,110,.5)";ctx.lineWidth=3;
  roundRect(ctx,50,50,W2-100,H2-100,28);ctx.stroke();
  ctx.strokeStyle="rgba(183,139,255,.3)";ctx.lineWidth=1.5;
  roundRect(ctx,66,66,W2-132,H2-132,22);ctx.stroke();
  ctx.textAlign="center";
  ctx.fillStyle="#f5d76e";ctx.font='700 24px "Microsoft YaHei",sans-serif';
  ctx.fillText("ONELINE · WORKLOG",W2/2,130);
  ctx.fillStyle="#fff";ctx.font='700 50px "Microsoft YaHei",sans-serif';
  ctx.fillText("打工人求生战绩",W2/2,214);
  ctx.strokeStyle="rgba(245,215,110,.35)";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(240,260);ctx.lineTo(W2-240,260);ctx.stroke();
  ctx.beginPath();ctx.arc(W2/2,420,110,0,Math.PI*2);
  ctx.strokeStyle="rgba(245,215,110,.8)";ctx.lineWidth=5;ctx.stroke();
  ctx.beginPath();ctx.arc(W2/2,420,95,0,Math.PI*2);
  ctx.strokeStyle="rgba(183,139,255,.5)";ctx.lineWidth=2;ctx.stroke();
  ctx.fillStyle="#f5d76e";ctx.font='700 96px "Microsoft YaHei",sans-serif';
  ctx.fillText(grade,W2/2,455);
  ctx.fillStyle="#fff";ctx.font='700 54px "Microsoft YaHei",sans-serif';
  ctx.fillText(ending,W2/2,650);
  ctx.fillStyle="rgba(255,255,255,.85)";ctx.font='400 34px "Microsoft YaHei",sans-serif';
  const lines=wrapSquare(ctx,line,"yahei",34,0,W2-240);
  let ly=730;
  for(const ln of lines){ctx.fillText(ln,W2/2,ly);ly+=50;}
  const stats=[
    ["精神值",`${Math.max(0,G.player.hp)} / ${G.player.maxHp}`],
    ["存款",`${G.player.coins}`],
    ["击败",`${Math.min(G.encounter,3)} / 3`],
    ["坚持回合",`${G.turn}`]
  ];
  ctx.font='400 36px "Microsoft YaHei",sans-serif';
  stats.forEach((s,i)=>{
    const y=920+i*80;
    ctx.textAlign="left";ctx.fillStyle="rgba(255,255,255,.55)";ctx.fillText(s[0],260,y);
    ctx.textAlign="right";ctx.fillStyle="#fff";ctx.fillText(s[1],W2-260,y);
  });
  ctx.textAlign="center";ctx.fillStyle="rgba(255,255,255,.45)";ctx.font='400 22px "Microsoft YaHei",sans-serif';
  ctx.fillText("oneline. · 打工人求生指南 · 仅供娱乐",W2/2,1350);
}
function saveEnding(){
  els.gameEndCanvas.toBlob(b=>{
    if(!b){flash("导出失败");return;}
    downloadBlob(b,`oneline_worklog_${stamp()}.png`);
    flash("战绩卡已保存");
  },"image/png");
}

async function batchGenerate(){
  if(!isPro()){promptUpgrade("批量生成是 Pro 功能，升级后一次生成整套卡片并打包下载");return;}
  const lines=els.batchText.value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  if(!lines.length){els.batchMsg.textContent="请先在文本框里粘贴文案（每行一句）";return;}
  if(lines.length>200){els.batchMsg.textContent="一次最多 200 句，请分批";return;}
  els.batchBtn.disabled=true;
  const entries=[];
  for(let i=0;i<lines.length;i++){
    els.batchMsg.textContent=`正在生成 ${i+1}/${lines.length}…`;
    const cv=document.createElement("canvas");cv.width=W;cv.height=H;
    drawCard(cv,buildRenderOpts(lines[i],""));
    const blob=await new Promise(r=>cv.toBlob(r,"image/png"));
    const buf=new Uint8Array(await blob.arrayBuffer());
    entries.push({name:`oneline_${String(i+1).padStart(2,"0")}.png`,data:buf});
    await new Promise(r=>setTimeout(r,0));
  }
  const zip=buildZip(entries);
  downloadBlob(zip,`oneline_cards_${stamp()}.zip`);
  els.batchMsg.textContent=`完成！已打包 ${entries.length} 张卡片`;
  els.batchBtn.disabled=false;
}

async function aiGenerate(){
  const key=els.aiKey.value.trim();
  if(!key){els.aiMsg.textContent="请先填入 API Key";els.aiMsg.className="ai-msg err";return;}
  const base=(els.aiBase.value.trim()||"https://api.openai.com/v1").replace(/\/+$/,"");
  const model=els.aiModel.value.trim()||"gpt-4o-mini";
  const prompt=els.aiPrompt.value.trim()||"写一句关于「搞钱」的原创金句，25字内，有冲击力";
  els.aiMsg.className="ai-msg";els.aiMsg.textContent="生成中…";els.aiBtn.disabled=true;
  try{
    const r=await fetch(base+"/chat/completions",{method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+key},
      body:JSON.stringify({model,messages:[{role:"user",content:prompt}],temperature:1,max_tokens:120})});
    if(!r.ok){let m=r.statusText;try{m=(await r.json()).error?.message||m;}catch(_){}throw new Error(m);}
    const d=await r.json();
    const text=(d.choices?.[0]?.message?.content||"").trim().replace(/^["“"]+|["”"]+$/g,"");
    if(!text)throw new Error("返回内容为空");
    els.quote.value=text;els.author.value="";render();
    els.aiMsg.textContent="已生成，可在左侧微调";
  }catch(err){
    els.aiMsg.className="ai-msg err";els.aiMsg.textContent="出错："+err.message+"（浏览器可能被 CORS 拦截）";
  }finally{els.aiBtn.disabled=false;}
}

function loadImageFile(file,done){
  if(!file)return;
  const fr=new FileReader();
  fr.onload=()=>{const img=new Image();img.onload=()=>done(img);img.src=fr.result;};
  fr.readAsDataURL(file);
}

let coverTimer=null,coverGen=0;
function stopCoverLoop(){
  coverGen++;
  if(coverTimer){clearTimeout(coverTimer);coverTimer=null;}
}
function startCoverLoop(){
  stopCoverLoop();
  const gen=coverGen;
  const step=(fn,ms)=>setTimeout(()=>{if(gen===coverGen)fn();},ms);
  function reset(){
    els.coverBossFill.style.width="64%";
    els.coverPlayerFill.style.width="100%";
    els.coverPlayCard.classList.remove("playing");
    els.coverDmgBoss.classList.remove("show");
    els.coverDmgPlayer.classList.remove("show");
    els.coverBoss.classList.remove("hit");
    els.coverPlayer.classList.remove("hit");
    els.coverIntent.classList.remove("danger");
  }
  function loop(){
    if(gen!==coverGen)return;
    reset();
    step(()=>els.coverPlayCard.classList.add("playing"),700);
    step(()=>{els.coverDmgBoss.classList.add("show");els.coverBoss.classList.add("hit");els.coverBossFill.style.width="36%";},1300);
    step(()=>els.coverBoss.classList.remove("hit"),1750);
    step(()=>{els.coverDmgPlayer.classList.add("show");els.coverPlayer.classList.add("hit");els.coverPlayerFill.style.width="78%";els.coverIntent.classList.add("danger");},2450);
    step(()=>els.coverPlayer.classList.remove("hit"),2900);
    step(()=>{els.coverDmgBoss.classList.remove("show");els.coverDmgPlayer.classList.remove("show");els.coverIntent.classList.remove("danger");},3300);
    coverTimer=setTimeout(loop,4400);
  }
  loop();
}
function showCover(){
  els.coverView.style.display="flex";
  els.appView.style.display="none";
  startCoverLoop();
  try{history.replaceState(null,"","#cover");}catch(e){}
}
function showApp(){
  stopCoverLoop();
  els.coverView.style.display="none";
  els.appView.style.display="block";
  try{history.replaceState(null,"","#play");}catch(e){}
  render();
}

els.randomBtn.onclick=pickQuote;
els.enterApp.onclick=showApp;
els.backCover.onclick=showCover;
els.dailyHub.onclick=()=>{els.dailyDetails.open=true;els.dailyDetails.scrollIntoView({behavior:"smooth",block:"center"});};
[els.gameBtn,els.diagBtn,els.dailyHub].forEach(el=>el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();el.click();}}));
window.addEventListener("hashchange",()=>{if(location.hash==="#play")showApp();else if(location.hash==="#cover")showCover();});
els.exportBtn.onclick=exportPNG;
els.copyBtn.onclick=copyPNG;
els.dailyBtn.onclick=dailySign;
els.diagBtn.onclick=openDiag;
els.diagStartBtn.onclick=startDiag;
els.diagClose.onclick=()=>els.diagModal.classList.remove("show");
els.diagRetry.onclick=startDiag;
els.diagDownload.onclick=downloadDiag;
els.diagShare.onclick=shareDiag;
els.diagModal.addEventListener("click",e=>{if(e.target===els.diagModal)els.diagModal.classList.remove("show");});
els.gameBtn.onclick=openGame;
els.gSound.onclick=()=>{soundOn=!soundOn;try{localStorage.setItem("oneline_sound",soundOn?"1":"0");}catch(e){}updateSoundBtn();if(soundOn)playSfx("click");};
updateSoundBtn();
els.gameClose.onclick=()=>els.gameModal.classList.remove("show");
els.gameStart.onclick=startGame;
els.gEndTurn.onclick=endTurn;
els.gSkip.onclick=()=>{G.player.hp=Math.min(G.player.maxHp,G.player.hp+15);logGame("跳过奖励，回复 15 点精神值");startBattle();};
els.gameAgain.onclick=startGame;
els.gameSave.onclick=saveEnding;
els.gameModal.addEventListener("click",e=>{if(e.target===els.gameModal)els.gameModal.classList.remove("show");});
(function makeEmbers(){
  const box=els.gEmbers;
  if(!box)return;
  for(let i=0;i<18;i++){
    const e=document.createElement("i");
    e.style.left=(Math.random()*100)+"%";
    e.style.animationDuration=(5+Math.random()*6)+"s";
    e.style.animationDelay=(-Math.random()*8)+"s";
    box.appendChild(e);
  }
})();
els.batchBtn.onclick=batchGenerate;
els.fillQuotesBtn.onclick=()=>{els.batchText.value=QUOTES.map(q=>q.t).join("\n");els.batchMsg.textContent=`已填入 ${QUOTES.length} 句金句`;};
els.aiBtn.onclick=aiGenerate;
els.activateBtn.onclick=()=>{
  const code=els.codeInput.value.trim();
  if(!code){setProMsg("请输入激活码","");return;}
  if(verifyCode(code)){setPro(true);refreshLockUI();buildSwatches();render();setProMsg("已解锁 Pro，感谢支持！","ok");flash("已解锁 Pro");}
  else{setProMsg("激活码无效，请检查后重试","");}
};
els.buyBtn.onclick=()=>{
  if(PURCHASE_URL){window.open(PURCHASE_URL,"_blank","noopener");}
  else{setProMsg("购买链接暂未配置，请联系站长获取激活码","");}
};

els.quote.addEventListener("input",()=>{state.extra="";render();});
els.author.addEventListener("input",render);
els.wmText.addEventListener("input",render);
els.showDate.addEventListener("change",()=>{state.showDate=els.showDate.checked;render();});
els.wmOn.addEventListener("change",()=>{
  if(!isPro()){els.wmOn.checked=true;promptUpgrade("去水印是 Pro 功能");return;}
  state.wmOn=els.wmOn.checked;render();
});
els.wmPos.addEventListener("change",()=>{state.wmPos=els.wmPos.value;render();});
els.verticalToggle.addEventListener("change",()=>{state.vertical=els.verticalToggle.checked;render();});
els.fontSel.addEventListener("change",()=>{state.font=els.fontSel.value;render();});
els.sizeRange.addEventListener("input",()=>{state.size=+els.sizeRange.value;els.sizeVal.textContent=state.size;render();});
els.lsRange.addEventListener("input",()=>{state.ls=+els.lsRange.value;els.lsVal.textContent=state.ls;render();});
els.lhRange.addEventListener("input",()=>{state.lh=+els.lhRange.value;els.lhVal.textContent=state.lh;render();});
els.alignSeg.querySelectorAll(".btn").forEach(b=>b.onclick=()=>{state.align=b.dataset.a;syncControls();render();});
els.bgFile.addEventListener("change",e=>{loadImageFile(e.target.files[0],img=>{state.bgImage=img;render();});});
els.bgClear.onclick=()=>{state.bgImage=null;els.bgFile.value="";render();};
els.wmFile.addEventListener("change",e=>{loadImageFile(e.target.files[0],img=>{state.wmImage=img;render();});});
els.wmClear.onclick=()=>{state.wmImage=null;els.wmFile.value="";render();};

els.quote.value=QUOTES[0].t;els.author.value=QUOTES[0].a;
try{const saved=localStorage.getItem("oneline_name");if(saved)els.dailyName.value=saved;}catch(e){}
buildChips();buildSwatches();buildFontSel();syncControls();refreshLockUI();render();
try{
  const q=new URLSearchParams(location.search);
  const qc=q.get("cat");if(qc&&CATS.includes(qc)){state.cat=qc;buildChips();}
  const qt=q.get("theme");if(qt!==null){const ti=+qt;if(ti>=0&&ti<THEMES.length)applyTheme(ti);}
  if(q.get("daily")==="1"){els.dailyName.value=q.get("name")||els.dailyName.value;dailySign();}
  if(q.get("diag")==="1"){els.diagName.value=q.get("name")||"";openDiag();}
  if(q.get("diagq")==="1"){openDiag();startDiag();}
  if(q.get("game")==="1"){openGame();}
  if(q.get("gamebattle")==="1"){openGame();startGame();}
  if(q.get("gamebubble")==="1"){openGame();startGame();setTimeout(()=>showBubble("player","谁也别拦我，我今天就要发疯！"),300);setTimeout(()=>showBubble("enemy","这个需求，今天必须上线。"),900);}
  if(q.get("gamereward")==="1"){openGame();startGame();G.encounter=1;showReward();}
  if(q.get("gameplay")==="1"){openGame();startGame();setTimeout(()=>playGameCard(0),300);}
  if(q.get("gameevent")==="1"){openGame();startGame();setTimeout(()=>showEvent(),200);}
  if(q.get("gameend")==="1"){openGame();G.player={hp:32,maxHp:70,energy:3,maxEnergy:3,block:0,coins:42};G.encounter=3;G.turn=8;showEnding(false);}
  const dr=q.get("diagresult");
  if(dr&&dr.length>=8){
    const arr=[...dr].slice(0,8).map(Number).filter(n=>n>=0&&n<=3);
    if(arr.length===8){diagState={answers:arr,index:8};els.diagName.value=q.get("name")||"";finishDiag();els.diagModal.classList.add("show");}
  }
  const direct=location.hash==="#play"||["daily","diag","diagq","diagresult","game","gamebattle","gameend","app"].some(k=>q.has(k));
  if(direct)showApp();else showCover();
}catch(e){}

(function makeStars(){
  const bg=document.getElementById("bg");
  if(!bg)return;
  const N=150;
  for(let i=0;i<N;i++){
    const s=document.createElement("span");
    s.className="star";
    const size=(Math.random()*2.2+0.8).toFixed(1);
    s.style.width=size+"px";
    s.style.height=size+"px";
    s.style.left=(Math.random()*100).toFixed(2)+"%";
    s.style.top=(Math.random()*100).toFixed(2)+"%";
    s.style.setProperty("--d",(3+Math.random()*5).toFixed(1)+"s");
    s.style.setProperty("--dl",(Math.random()*5).toFixed(1)+"s");
    bg.appendChild(s);
  }
  const shoots=[
    {t:"6%",l:"70%",d:6,dl:0},
    {t:"18%",l:"88%",d:7.5,dl:2.2},
    {t:"34%",l:"78%",d:9,dl:5}
  ];
  shoots.forEach(s=>{
    const e=document.createElement("span");
    e.className="shooting";
    e.style.top=s.t;e.style.left=s.l;
    e.style.setProperty("--sd",s.d+"s");
    e.style.setProperty("--sdly",s.dl+"s");
    bg.appendChild(e);
  });
})();
