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
  diagModal:$("diagModal"),diagClose:$("diagClose"),diagStart:$("diagStart"),
  diagStartBtn:$("diagStartBtn"),diagQuiz:$("diagQuiz"),diagProgress:$("diagProgress"),diagQ:$("diagQ"),
  diagOpts:$("diagOpts"),diagResult:$("diagResult"),diagCanvas:$("diagCanvas"),diagRetry:$("diagRetry"),
  diagDownload:$("diagDownload"),diagShare:$("diagShare"),diagHint:$("diagHint"),diagName:$("diagName"),
  gameBtn:$("gameBtn"),startFromHub:$("startFromHub"),rulesBtn:$("rulesBtn"),dailyChallengeBtn:$("dailyChallengeBtn"),collectionBtn:$("collectionBtn"),hubPoints:$("hubPoints"),dailyStatus:$("dailyStatus"),
  gameModal:$("gameModal"),gameClose:$("gameClose"),gameMenu:$("gameMenu"),gameStart:$("gameStart"),
  gameCharacter:$("gameCharacter"),characterGrid:$("characterGrid"),characterBack:$("characterBack"),characterConfirm:$("characterConfirm"),charPoints:$("charPoints"),
  gameMulligan:$("gameMulligan"),gMulliganHand:$("gMulliganHand"),gMulliganCount:$("gMulliganCount"),
  mulliganKeep:$("mulliganKeep"),mulliganConfirm:$("mulliganConfirm"),
  gSound:$("gSound"),gSpeed:$("gSpeed"),gEmbers:$("gEmbers"),gBattleIntro:$("gBattleIntro"),gIntroKicker:$("gIntroKicker"),
  gIntroName:$("gIntroName"),gIntroSub:$("gIntroSub"),gCombo:$("gCombo"),gCrit:$("gCrit"),gKO:$("gKO"),
  gEnemyDecision:$("gEnemyDecision"),gEnemyOptions:$("gEnemyOptions"),gEnemyThought:$("gEnemyThought"),gEnemyClock:$("gEnemyClock"),gEnemyAvatar:$("gEnemyAvatar"),
  gameBattle:$("gameBattle"),gHp:$("gHp"),gBlock:$("gBlock"),gCoins:$("gCoins"),gEnergy:$("gEnergy"),
  gHeroPower:$("gHeroPower"),gEnemyBoard:$("gEnemyBoard"),gPlayerBoard:$("gPlayerBoard"),gBoardHint:$("gBoardHint"),gPlayerPortrait:$("gPlayerPortrait"),
  gEnemyName:$("gEnemyName"),gEnemyLevel:$("gEnemyLevel"),gEnemyHp:$("gEnemyHp"),gIntent:$("gIntent"),gEnemyPower:$("gEnemyPower"),gLog:$("gLog"),gHand:$("gHand"),
  gEnemyPortrait:$("gEnemyPortrait"),gEnemyHpFill:$("gEnemyHpFill"),gPlayerHpFill:$("gPlayerHpFill"),
  gTurnBanner:$("gTurnBanner"),gFloatLayer:$("gFloatLayer"),gEnergyGems:$("gEnergyGems"),
  gPlayerBubble:$("gPlayerBubble"),gEnemyBubble:$("gEnemyBubble"),gHurtFlash:$("gHurtFlash"),
  gRelics:$("gRelics"),
  gEndTurn:$("gEndTurn"),gameReward:$("gameReward"),gRewards:$("gRewards"),gSkip:$("gSkip"),gRemove:$("gRemove"),gUpgrade:$("gUpgrade"),
  gameDeck:$("gameDeck"),gDeckTitle:$("gDeckTitle"),gDeckSub:$("gDeckSub"),gDeckList:$("gDeckList"),gDeckCancel:$("gDeckCancel"),
  gameEvent:$("gameEvent"),gEventTitle:$("gEventTitle"),gEventDesc:$("gEventDesc"),gEventChoices:$("gEventChoices"),
  gameEnd:$("gameEnd"),gameEndCanvas:$("gameEndCanvas"),gameAgain:$("gameAgain"),gameSave:$("gameSave"),gameShare:$("gameShare"),gameEndHint:$("gameEndHint"),
  collectionModal:$("collectionModal"),collectionClose:$("collectionClose"),colPoints:$("colPoints"),colProgress:$("colProgress"),collectionGrid:$("collectionGrid"),collectionTabs:$("collectionTabs")
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
  {id:"c3",name:"甩锅",cost:1,type:"attack",desc:"造成 4 点伤害，获得 3 点护盾。",dmg:4,block:3,emoji:"🍳"},
  {id:"c4",name:"发疯",cost:2,type:"attack",desc:"造成 14 点伤害，失去 3 点精神值。",dmg:14,selfDmg:3,emoji:"🤯",rare:true},
  {id:"c5",name:"辞职",cost:3,type:"attack",desc:"造成 24 点伤害，失去 8 点精神值。",dmg:24,selfDmg:8,emoji:"🚪",rare:true},
  {id:"c6",name:"已读不回",cost:1,type:"skill",desc:"敌人跳过下一回合。",stun:1,emoji:"📵",rare:true},
  {id:"c7",name:"画饼",cost:1,type:"skill",desc:"敌人获得 2 层虚弱。",weak:2,emoji:"🥞"},
  {id:"c8",name:"摸鱼",cost:1,type:"skill",desc:"回复 3 点精神值，获得 2 点护盾。",heal:3,block:2,emoji:"🐟"},
  {id:"c9",name:"咖啡续命",cost:0,type:"skill",desc:"获得 1 点能量，抽 1 张牌。消耗。",energy:1,draw:1,exhaust:true,emoji:"☕"},
  {id:"c10",name:"带薪拉屎",cost:1,type:"skill",desc:"回复 4 点精神值，获得 5 存款。",heal:4,coins:5,emoji:"🚽"},
  {id:"c11",name:"电子木鱼",cost:1,type:"skill",desc:"获得 5 点护盾，回复 1 点精神值。",block:5,heal:1,emoji:"🪵"},
  {id:"c12",name:"深呼吸",cost:1,type:"skill",desc:"获得 6 点护盾。",block:6,emoji:"🌬️"},
  {id:"c13",name:"装死",cost:2,type:"skill",desc:"获得 10 点护盾。",block:10,emoji:"💀"},
  {id:"c14",name:"反向PUA",cost:1,type:"skill",desc:"敌人获得 3 层虚弱。",weak:3,emoji:"🪞"},
  {id:"c15",name:"充电",cost:1,type:"skill",desc:"回复 6 点精神值。",heal:6,emoji:"🔋"},
  {id:"c16",name:"存钱",cost:1,type:"skill",desc:"获得 15 存款。",coins:15,emoji:"🏦"},
  {id:"c17",name:"摸鱼哲学",cost:1,type:"skill",desc:"抽 2 张牌。",draw:2,emoji:"🧘",rare:true},
  {id:"c18",name:"精神状态良好",cost:2,type:"skill",desc:"回复 7 点精神值，获得 4 点护盾。",heal:7,block:4,emoji:"🙂"},
  {id:"c19",name:"破防",cost:1,type:"attack",desc:"造成 8 点伤害；敌人低于半血时额外 4 点。",dmg:8,execute:4,emoji:"💥",rare:true},
  {id:"c20",name:"带薪摸鱼",cost:2,type:"skill",desc:"回复 6 点精神值，获得 10 存款。",heal:6,coins:10,emoji:"🛋️"},
  {id:"c21",name:"实习生",cost:1,type:"minion",desc:"1/3 嘲讽。",minion:"intern",emoji:"🧑‍💼"},
  {id:"c22",name:"咖啡机",cost:2,type:"minion",desc:"0/4 亡语：抽 1 张。",minion:"coffee",emoji:"☕"},
  {id:"c23",name:"打印机",cost:2,type:"minion",desc:"2/2 战吼：造成 2 点伤害。",minion:"printer",emoji:"🖨️"},
  {id:"c24",name:"摸鱼搭子",cost:3,type:"minion",desc:"2/4 战吼：获得 5 点护盾。",minion:"mate",emoji:"🐟"},
  {id:"c25",name:"卷王",cost:4,type:"minion",desc:"4/3 冲锋。",minion:"grinder",emoji:"🔥"},
  {id:"c26",name:"老板的饼",cost:3,type:"minion",desc:"0/5 嘲讽，亡语：获得 10 存款。",minion:"pie",emoji:"🥞"},
  {id:"c27",name:"内耗",cost:1,type:"skill",desc:"抽 2 张牌，失去 3 点精神值。",draw:2,selfDmg:3,emoji:"🌀",rare:true},
  {id:"c28",name:"甩锅",cost:1,type:"attack",desc:"弃 1 张牌，造成 8 点伤害。",dmg:8,discardRandom:1,emoji:"🍳",rare:true},
  {id:"c29",name:"加班",cost:0,type:"skill",desc:"获得 2 法力，下回合少 2 法力。消耗。",energy:2,nextPenalty:2,exhaust:true,emoji:"🌃",rare:true}
];
const GAME_START_DECK=["c1","c1","c1","c1","c8","c8","c9","c3","c2","c12","c17","c21","c23"];
const GAME_ENEMIES=[
  {name:"老板",emoji:"👔",tie:"#c0392b",hp:58,starters:["demand","demand"],intents:["attack:12","summon:demand","charge:30","release"],flavor:"画饼中……"},
  {name:"甲方",emoji:"📋",tie:"#3b6ea5",hp:74,starters:["revision","revision","cousin"],intents:["attack:14","summon:revision","attack:18","charge:34","release"],flavor:"再改一版……"},
  {name:"亲戚",emoji:"🧧",tie:"#d9a441",hp:90,starters:["cousin","cousin","revision"],intents:["attack:11","summon:cousin","heal:8","charge:30","release"],flavor:"怎么还不结婚……"}
];
const MINIONS={
  intern:{name:"实习生",emoji:"🧑‍💼",atk:1,hp:3,taunt:true},
  coffee:{name:"咖啡机",emoji:"☕",atk:0,hp:4,deathrattle:{draw:1}},
  printer:{name:"打印机",emoji:"🖨️",atk:2,hp:2,battlecry:{dmg:2}},
  mate:{name:"摸鱼搭子",emoji:"🐟",atk:2,hp:4,battlecry:{block:5}},
  grinder:{name:"卷王",emoji:"🔥",atk:4,hp:3,charge:true},
  pie:{name:"老板的饼",emoji:"🥞",atk:0,hp:5,taunt:true,deathrattle:{coins:10}},
  demand:{name:"需求",emoji:"📄",atk:0,hp:3,taunt:true},
  revision:{name:"改稿",emoji:"✏️",atk:1,hp:2,charge:true},
  cousin:{name:"别人家的孩子",emoji:"👦",atk:2,hp:3,taunt:true}
};
const DEFAULT_UNLOCKS=["worker","c1","c2","c3","c4","c6","c8","c9","c12","c17","c21","c23","c27","c28","c29","thermos","badge"];
let unlocked=new Set(DEFAULT_UNLOCKS);
try{
  const saved=JSON.parse(localStorage.getItem("oneline_unlocked")||"null");
  if(Array.isArray(saved))unlocked=new Set(saved);
}catch(e){}
let points=0;
try{points=parseInt(localStorage.getItem("oneline_points")||"0",10)||0;}catch(e){}
try{
  if(!localStorage.getItem("oneline_welcome_bonus")){
    points+=120;
    localStorage.setItem("oneline_points",String(points));
    localStorage.setItem("oneline_welcome_bonus","1");
  }
}catch(e){}
function saveUnlocked(){try{localStorage.setItem("oneline_unlocked",JSON.stringify([...unlocked]));}catch(e){}}
function savePoints(){try{localStorage.setItem("oneline_points",String(points));}catch(e){}}
function isUnlocked(id){return unlocked.has(id);}
function addPoints(n){points+=n;savePoints();updateHubStatus();}
const CHARACTERS=[
  {id:"worker",name:"打工人",emoji:"🧑‍💻",hp:70,draw:5,passive:"均衡开局，稳定下班。",deck:["c1","c1","c1","c1","c8","c8","c9","c3","c2","c12","c17","c21","c23"],unlockCost:0},
  {id:"intern",name:"实习生",emoji:"🧑‍🎓",hp:55,draw:6,passive:"每回合多抽 1 张牌，但精神值更低。",deck:["c1","c1","c1","c9","c9","c17","c17","c21","c23","c3","c8"],unlockCost:120}
];
let selectedCharId="worker";
try{
  const saved=localStorage.getItem("oneline_character");
  if(saved&&CHARACTERS.some(c=>c.id===saved)&&isUnlocked(saved))selectedCharId=saved;
}catch(e){}
let ascension=0;
try{ascension=parseInt(localStorage.getItem("oneline_ascension")||"0",10)||0;}catch(e){}
let pendingCharacterMode="free";
let collectionTab="characters";
let seenRules=false;
try{seenRules=localStorage.getItem("oneline_seen_rules")==="1";}catch(e){}
function beginMode(mode){
  pendingCharacterMode=mode||"free";
  if(seenRules){
    openGame();
    openCharacterSelect(pendingCharacterMode);
  }else{
    openGame();
    showGameView("menu");
  }
}
function openCharacterSelect(mode){
  pendingCharacterMode=mode||"free";
  renderCharacterSelect();
  showGameView("character");
}
function renderCharacterSelect(){
  if(els.charPoints)els.charPoints.textContent=points;
  els.characterGrid.innerHTML="";
  CHARACTERS.forEach(c=>{
    const owned=isUnlocked(c.id);
    const sel=selectedCharId===c.id&&owned;
    const d=document.createElement("div");
    d.className="char-card"+(sel?" selected":"")+(owned?"":" locked");
    d.innerHTML=`<div class="char-portrait portrait-slot">${c.emoji}</div>`+
      `<div class="char-name">${c.name}</div>`+
      `<div class="char-stats">${c.hp} 精神 · 每回合抽 ${c.draw} 张</div>`+
      `<div class="char-passive">${c.passive}</div>`+
      `<div class="char-state">${owned?(sel?"已选择":"点击选择"):`🔒 ${c.unlockCost} 工分`}</div>`+
      (owned?"":`<button class="char-unlock" ${points<c.unlockCost?"disabled":""}>解锁</button>`);
    d.querySelector(".char-portrait").innerHTML=c.id==="intern"?INTERN_SVG:PLAYER_SVG;
    d.onclick=()=>{
      if(!owned){unlockCharacter(c);return;}
      selectedCharId=c.id;
      renderCharacterSelect();
    };
    els.characterGrid.appendChild(d);
  });
}
function unlockCharacter(c){
  if(isUnlocked(c.id))return;
  if(points<c.unlockCost){flash(`工分不足，还差 ${c.unlockCost-points} 工分`);return;}
  points-=c.unlockCost;savePoints();unlocked.add(c.id);saveUnlocked();
  selectedCharId=c.id;renderCharacterSelect();updateHubStatus();
  flash(`已解锁「${c.name}」`);
}
function confirmCharacter(){
  if(!isUnlocked(selectedCharId)){openCollection();return;}
  try{localStorage.setItem("oneline_character",selectedCharId);}catch(e){}
  startGame(pendingCharacterMode==="daily",selectedCharId);
}
function hashString(s){
  let h=2166136261;
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}
  return h>>>0;
}
function mulberry32(a){
  return function(){
    a|=0;a=(a+0x6D2B79F5)|0;
    let t=Math.imul(a^(a>>>15),1|a);
    t=(t+Math.imul(t^(t>>>7),61|t))^t;
    return ((t^(t>>>14))>>>0)/4294967296;
  };
}
function rand(){return G&&G.rng?G.rng():Math.random();}
function dailySeed(){return "oneline-"+dateKey();}

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

const INTERN_SVG=PLAYER_SVG
  .replaceAll("playerBg","internBg")
  .replaceAll("hoodie","internHoodie")
  .replaceAll("#2e4d68","#4f7a96")
  .replaceAll("#22384f","#3a5a70")
  .replaceAll("#241c26","#4a3527")
  .replaceAll("#3a2c3c","#6a4c36");
document.querySelectorAll(".portrait-slot").forEach(el=>{
  el.innerHTML=el.dataset.portrait==="boss"?BOSS_SVG:el.dataset.portrait==="intern"?INTERN_SVG:PLAYER_SVG;
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
  c20:"工资照拿，鱼照摸。",
  c27:"脑子在打架，手还在抽牌。",
  c28:"这锅，我先扔为敬。",
  c29:"加班换来的法力，迟早要还。"
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

let audioCtx=null,masterGain=null,soundOn=true;
try{soundOn=localStorage.getItem("oneline_sound")!=="0";}catch(e){}
function initAudio(){
  try{
    if(!audioCtx){
      audioCtx=new (window.AudioContext||window.webkitAudioContext)();
      masterGain=audioCtx.createGain();
      masterGain.gain.value=.5;
      masterGain.connect(audioCtx.destination);
    }
    if(audioCtx.state==="suspended")audioCtx.resume();
  }catch(e){}
}
function tone(freq,dur,type="sine",vol=.06,slideTo,delay=0){
  if(!soundOn)return;
  initAudio();if(!audioCtx||!masterGain)return;
  const t0=audioCtx.currentTime+delay;
  const o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type=type;o.frequency.setValueAtTime(freq,t0);
  if(slideTo)o.frequency.exponentialRampToValueAtTime(Math.max(20,slideTo),t0+dur);
  g.gain.setValueAtTime(.0001,t0);
  g.gain.exponentialRampToValueAtTime(vol,t0+.01);
  g.gain.exponentialRampToValueAtTime(.0001,t0+dur);
  o.connect(g);g.connect(masterGain);o.start(t0);o.stop(t0+dur+.02);
}
function noiseBurst(dur,filterFreq,vol=.05,slideTo,delay=0){
  if(!soundOn)return;
  initAudio();if(!audioCtx||!masterGain)return;
  const t0=audioCtx.currentTime+delay;
  const len=Math.max(1,Math.floor(audioCtx.sampleRate*dur));
  const buf=audioCtx.createBuffer(1,len,audioCtx.sampleRate);
  const data=buf.getChannelData(0);
  for(let i=0;i<len;i++)data[i]=(Math.random()*2-1)*(1-i/len);
  const src=audioCtx.createBufferSource();src.buffer=buf;
  const filter=audioCtx.createBiquadFilter();
  filter.type="bandpass";filter.frequency.setValueAtTime(filterFreq,t0);filter.Q.value=1.1;
  if(slideTo)filter.frequency.exponentialRampToValueAtTime(Math.max(80,slideTo),t0+dur);
  const g=audioCtx.createGain();
  g.gain.setValueAtTime(vol,t0);
  g.gain.exponentialRampToValueAtTime(.0001,t0+dur);
  src.connect(filter);filter.connect(g);g.connect(masterGain);
  src.start(t0);src.stop(t0+dur);
}
function playSfx(type){
  if(!soundOn)return;
  if(type==="draw"){noiseBurst(.12,3200,.03,900);tone(740,.06,"triangle",.02,620);}
  else if(type==="whoosh"){noiseBurst(.22,1800,.055,300);tone(520,.2,"sawtooth",.025,120);}
  else if(type==="hit"){tone(95,.28,"sine",.16,42);noiseBurst(.16,700,.1,180);}
  else if(type==="crit"){tone(980,.16,"square",.045);tone(120,.36,"sine",.18,45);noiseBurst(.22,1400,.12,200);}
  else if(type==="heal"){tone(523,.18,"triangle",.055);tone(659,.22,"triangle",.05,undefined,.08);tone(784,.26,"triangle",.04,undefined,.16);}
  else if(type==="shield"){tone(1200,.08,"triangle",.035);tone(1600,.12,"sine",.025,undefined,.03);}
  else if(type==="enemy"){tone(70,.45,"sine",.2,35);noiseBurst(.28,420,.12,120);}
  else if(type==="charge"){tone(80,.6,"sawtooth",.08,220);noiseBurst(.4,120,.06,300);}
  else if(type==="combo"){tone(659,.08,"triangle",.04);tone(880,.08,"triangle",.04,undefined,.07);tone(1175,.12,"triangle",.04,undefined,.14);}
  else if(type==="summon"){tone(330,.2,"triangle",.04,660);noiseBurst(.15,900,.03,1400);}
  else if(type==="win"){tone(523,.12,"triangle",.06);tone(659,.12,"triangle",.06,undefined,.12);tone(784,.12,"triangle",.06,undefined,.24);tone(1047,.3,"triangle",.05,undefined,.36);}
  else if(type==="lose"){tone(300,.5,"sine",.08,90);tone(180,.6,"triangle",.05,70,.2);}
  else if(type==="click"){tone(880,.04,"square",.02);}
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
  for(let i=b.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[b[i],b[j]]=[b[j],b[i]];}
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

let G={player:null,deck:[],hand:[],draw:[],discard:[],enemy:null,encounter:0,turn:1,running:false,log:[],ending:null,busy:false,relics:[],deal:false,combo:0,playerMinions:[],enemyMinions:[],selectedMinion:-1,mulliganHand:[],mulliganDraw:[],mulliganSelected:new Set(),pendingMulligan:false};
let gameSpeed=1;
function gs(ms){return Math.max(120,Math.round(ms/gameSpeed));}
function showGameView(name){
  els.gameMenu.style.display=name==="menu"?"flex":"none";
  els.gameCharacter.style.display=name==="character"?"flex":"none";
  els.gameMulligan.style.display=name==="mulligan"?"flex":"none";
  els.gameBattle.style.display=name==="battle"?"flex":"none";
  els.gameReward.style.display=name==="reward"?"flex":"none";
  els.gameDeck.style.display=name==="deck"?"flex":"none";
  els.gameEvent.style.display=name==="event"?"flex":"none";
  els.gameEnd.style.display=name==="end"?"flex":"none";
}
function openGame(){
  stopCoverLoop();
  showGameView("menu");
  els.gameModal.classList.add("show");
}
function startGame(daily=false,charId=selectedCharId){
  const char=CHARACTERS.find(c=>c.id===charId)||CHARACTERS[0];
  G.character=char;
  G.drawCount=char.draw;
  G.refillCount=char.id==="intern"?4:3;
  G.ascension=ascension;
  G.isDaily=!!daily;
  G.seed=G.isDaily?dailySeed():("free-"+Date.now());
  G.rng=mulberry32(hashString(G.seed));
  G.rewarded=false;G.lastPoints=0;G.streak=0;
  G.player={hp:char.hp,maxHp:char.hp,energy:3,maxEnergy:3,block:0,coins:0,heroPowerUsed:false,nextPenalty:0};
  G.deck=char.deck.map(id=>GAME_CARDS.find(c=>c.id===id));
  G.encounter=0;G.log=[];G.running=false;G.ending=null;G.busy=false;G.relics=[];G.combo=0;G.fatigue=0;
  G.playerMinions=[];G.enemyMinions=[];G.selectedMinion=-1;
  const shuffled=shuffleArr(G.deck.slice());
  G.mulliganHand=shuffled.slice(0,G.drawCount);
  G.mulliganDraw=shuffled.slice(G.drawCount);
  G.mulliganSelected=new Set();
  G.pendingMulligan=true;
  if(els.gPlayerPortrait)els.gPlayerPortrait.innerHTML=char.id==="intern"?INTERN_SVG:PLAYER_SVG;
  initAudio();updateSoundBtn();
  showMulligan();
}
function showMulligan(){
  els.gMulliganHand.innerHTML="";
  G.mulliganHand.forEach((card,i)=>{
    const b=document.createElement("button");
    b.className="game-card "+card.type+(card.rare?" rare":"");
    b.innerHTML=`<span class="cost">${card.cost}</span><div class="cicon">${card.emoji}</div><div class="cname">${card.name}</div><div class="cdesc">${card.desc}</div>`;
    b.onclick=()=>{
      if(G.mulliganSelected.has(i))G.mulliganSelected.delete(i);
      else if(G.mulliganSelected.size<2)G.mulliganSelected.add(i);
      renderMulligan();
    };
    els.gMulliganHand.appendChild(b);
  });
  renderMulligan();
  showGameView("mulligan");
}
function renderMulligan(){
  const cards=[...els.gMulliganHand.children];
  cards.forEach((el,i)=>el.classList.toggle("selected",G.mulliganSelected.has(i)));
  els.gMulliganCount.textContent=`已选 ${G.mulliganSelected.size} / 2`;
}
function confirmMulligan(){
  const selected=[...G.mulliganSelected];
  const kept=[],returned=[];
  G.mulliganHand.forEach((c,i)=>(selected.includes(i)?returned:kept).push(c));
  G.mulliganDraw=shuffleArr(G.mulliganDraw.concat(returned));
  const newCards=G.mulliganDraw.splice(0,returned.length);
  G.hand=kept.concat(newCards);
  G.draw=G.mulliganDraw;
  G.discard=[];
  G.pendingMulligan=false;
  startBattle(true);
}
function startGameFast(daily=false){
  startGame(daily,selectedCharId);
  G.mulliganSelected.clear();
  confirmMulligan();
}
function startBattle(prepared){
  const base=GAME_ENEMIES[G.encounter];
  const asc=G.ascension||0;
  const firstBattle=G.encounter===0&&asc===0;
  const ehp=Math.round(base.hp*(1+0.2*asc));
  G.enemy={name:base.name,emoji:base.emoji,tie:base.tie,hp:ehp,maxHp:ehp,strength:asc,weak:0,vulnerable:0,stun:0,charged:0,armor:0,turns:0,deadlineUsed:false,intentIndex:0,intents:base.intents.slice(),flavor:base.flavor,firstBattle};
  hideEnemyDecision();
  G.enemyMinions=[];G.playerMinions=[];G.selectedMinion=-1;
  G.enemyMinions=(base.starters||[]).map(k=>{
    const m=makeMinion(k);
    m.justSummoned=true;
    m.canAttack=false;
    return m;
  });
  if(!prepared){
    G.hand=[];G.draw=shuffleArr(G.deck.slice());G.discard=[];
    drawCards(G.drawCount||5);
  }
  G.turn=1;
  G.player.block=0;G.player.maxEnergy=3;G.player.energy=3;G.player.heroPowerUsed=false;G.player.nextPenalty=0;G.running=true;G.busy=false;
  if(firstBattle){
    G.player.block+=6;
    logGame("新人保护：获得 6 点护盾，第一轮敌方只会执行一个动作");
  }
  if(G.relics.some(r=>r.id==="thermos"))G.player.block+=8;
  if(G.relics.some(r=>r.id==="muyu"))G.player.block+=3;
  if(G.relics.some(r=>r.id==="badge"))G.player.energy+=1;
  logGame(`遭遇「${G.enemy.name}」：${G.enemy.flavor}`);
  if(asc>0)logGame(`进阶 ${asc}：敌人生命 +${asc*20}%，攻击 +${asc}`);
  playSfx("draw");
  G.deal=true;G.combo=0;
  showGameView("battle");
  renderGame();
  showBattleIntro();
  setTimeout(()=>showTurnBanner("你的回合"),gs(1600));
}
function drawCards(n){
  for(let i=0;i<n;i++){
    if(!G.draw.length&&G.discard.length){G.draw=shuffleArr(G.discard);G.discard=[];}
    if(!G.draw.length){
      G.fatigue=(G.fatigue||0)+1;
      G.player.hp-=G.fatigue;
      logGame(`牌库已空，精神内耗造成 ${G.fatigue} 点伤害`);
      floatGameText(`疲劳 -${G.fatigue}`,"#ff6b81","player");
      playSfx("hit");
      if(G.player.hp<=0&&G.running)setTimeout(()=>showEnding(true),gs(260));
      continue;
    }
    const card=G.draw.pop();
    if(G.hand.length>=7){
      G.discard.push(card);
      logGame(`手牌已满，「${card.name}」被挤掉了`);
      continue;
    }
    G.hand.push(card);
  }
}
function logGame(s){
  G.log.push(s);
  if(G.log.length>8)G.log.shift();
  if(els.gLog)els.gLog.innerHTML=`<div>· ${s}</div>`;
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
  setTimeout(()=>el.remove(),gs(900));
}
function showTurnBanner(text){
  const b=els.gTurnBanner;
  if(!b)return;
  b.textContent=text;
  b.classList.remove("show");
  void b.offsetWidth;
  b.classList.add("show");
  setTimeout(()=>b.classList.remove("show"),gs(1100));
}
function showBattleIntro(){
  const b=els.gBattleIntro;
  if(!b)return;
  els.gIntroKicker.textContent=`ENCOUNTER ${G.encounter+1}${G.enemy.firstBattle?" · 试岗局":""}`;
  els.gIntroName.textContent=G.enemy.name;
  els.gIntroSub.textContent=G.enemy.firstBattle
    ?"先观察、再出牌。犯错也有容错空间。"
    :G.encounter===1
      ?"加压局：对手会连续执行两个动作。"
      :"决胜局：先算清敌方随从的持续威胁。";
  b.classList.remove("show");
  void b.offsetWidth;
  b.classList.add("show");
  setTimeout(()=>b.classList.remove("show"),gs(1550));
}
function showCombo(text){
  if(!els.gCombo)return;
  els.gCombo.textContent=text||`COMBO ×${G.combo}`;
  els.gCombo.classList.remove("show");
  void els.gCombo.offsetWidth;
  els.gCombo.classList.add("show");
  setTimeout(()=>els.gCombo.classList.remove("show"),gs(900));
}
function showBubble(side,text){
  const el=side==="player"?els.gPlayerBubble:els.gEnemyBubble;
  if(!el)return;
  el.textContent=text;
  el.classList.add("show");
  clearTimeout(el._bubbleTimer);
  el._bubbleTimer=setTimeout(()=>el.classList.remove("show"),gs(1800));
}
function impactAt(side){
  const layer=els.gFloatLayer;
  if(!layer)return;
  const pos=side==="enemy"?{x:"68%",y:"30%"}:{x:"30%",y:"64%"};
  const fx=document.createElement("div");
  fx.className="impact";
  fx.style.left=pos.x;fx.style.top=pos.y;
  layer.appendChild(fx);
  setTimeout(()=>fx.remove(),gs(520));
  for(let i=0;i<8;i++){
    const s=document.createElement("i");
    s.className="spark";
    s.style.left=pos.x;s.style.top=pos.y;
    s.style.color=side==="enemy"?"#ffd76a":"#ff6b81";
    const a=Math.random()*Math.PI*2,dist=40+Math.random()*60;
    s.style.setProperty("--dx",Math.cos(a)*dist+"px");
    s.style.setProperty("--dy",Math.sin(a)*dist+"px");
    layer.appendChild(s);
    setTimeout(()=>s.remove(),gs(620));
  }
  const board=els.gameBattle.querySelector(".game-board");
  if(board){
    board.classList.remove("shake-board");
    void board.offsetWidth;
    board.classList.add("shake-board");
  }
  playSfx("hit");
}
function boardPoint(el){
  const layer=els.gFloatLayer;
  if(!layer||!el)return null;
  const lr=layer.getBoundingClientRect(),r=el.getBoundingClientRect();
  return {x:r.left-lr.left+r.width/2,y:r.top-lr.top+r.height/2};
}
function floatAtElement(text,color,el,extra=""){
  const point=boardPoint(el);
  if(!point||!els.gFloatLayer)return;
  const n=document.createElement("div");
  n.className="gfloat "+extra;
  n.textContent=text;
  n.style.color=color;
  n.style.left=point.x+"px";
  n.style.top=point.y+"px";
  n.style.transform="translate(-50%,-50%)";
  els.gFloatLayer.appendChild(n);
  setTimeout(()=>n.remove(),gs(900));
}
function launchAttackTrail(fromEl,toEl,color="#ffd76a"){
  if(!fromEl||!toEl||!els.gFloatLayer)return;
  const a=boardPoint(fromEl),b=boardPoint(toEl);
  if(!a||!b)return;
  const dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy),angle=Math.atan2(dy,dx);
  const trail=document.createElement("div");
  trail.className="attack-trail";
  trail.style.left=a.x+"px";
  trail.style.top=a.y+"px";
  trail.style.width=length+"px";
  trail.style.setProperty("--angle",angle+"rad");
  trail.style.setProperty("--trail",color);
  els.gFloatLayer.appendChild(trail);
  setTimeout(()=>trail.remove(),gs(460));
}
function impactAtElement(target,color="#ffd76a",withSpark=true){
  const point=boardPoint(target);
  if(!point||!els.gFloatLayer)return;
  const ring=document.createElement("div");
  ring.className="clash-ring";
  ring.style.left=point.x+"px";
  ring.style.top=point.y+"px";
  ring.style.setProperty("--ring",color);
  els.gFloatLayer.appendChild(ring);
  setTimeout(()=>ring.remove(),gs(500));
  if(withSpark){
    for(let i=0;i<12;i++){
      const s=document.createElement("i");
      s.className="spark";
      s.style.left=point.x+"px";
      s.style.top=point.y+"px";
      s.style.color=i%3===0?"#fff":color;
      const angle=Math.random()*Math.PI*2,distance=34+Math.random()*76;
      s.style.setProperty("--dx",Math.cos(angle)*distance+"px");
      s.style.setProperty("--dy",Math.sin(angle)*distance+"px");
      els.gFloatLayer.appendChild(s);
      setTimeout(()=>s.remove(),gs(640));
    }
  }
  const board=els.gameBattle.querySelector(".game-board");
  if(board){
    board.classList.remove("shake-board");
    void board.offsetWidth;
    board.classList.add("shake-board");
  }
}
function showSweepWave(){
  const board=els.gameBattle.querySelector(".game-board");
  if(!board)return;
  const wave=document.createElement("div");
  wave.className="sweep-wave";
  board.appendChild(wave);
  setTimeout(()=>wave.remove(),gs(760));
}
function makeMinion(key){
  const d=MINIONS[key];
  return {key,name:d.name,emoji:d.emoji,atk:d.atk,hp:d.hp,maxHp:d.hp,taunt:!!d.taunt,charge:!!d.charge,divineShield:!!d.divineShield,battlecry:d.battlecry,deathrattle:d.deathrattle,canAttack:!!d.charge,hasAttacked:false};
}
function renderMinions(){
  const tauntExists=G.enemyMinions.some(m=>m.taunt);
  const hud=els.gameBattle.querySelector(".enemy-hud");
  if(hud)hud.classList.toggle("targetable",G.selectedMinion>=0&&!tauntExists);
  const build=(container,list,side)=>{
    container.innerHTML="";
    for(let i=0;i<3;i++){
      const m=list[i];
      const d=document.createElement("div");
      d.className="minion"+(m?"":" empty");
      if(!m){
        d.textContent="空位";
      }else{
        d.classList.toggle("taunt",!!m.taunt);
        d.classList.toggle("shield",!!m.divineShield);
        d.classList.toggle("exhausted",!m.canAttack||m.hasAttacked);
        if(["demand","revision","cousin"].includes(m.key))d.classList.add("danger-minion");
        if(m.justSummoned){d.classList.add("summoned");m.justSummoned=false;}
        if(side==="player"&&G.selectedMinion===i)d.classList.add("selected");
        if(side==="enemy"&&G.selectedMinion>=0&&(tauntExists?m.taunt:true))d.classList.add("targetable");
        const label=m.key==="demand"?"需求·增攻":m.key==="revision"?"改稿·成长":m.key==="cousin"?"别人家的孩子·回血":m.name;
        d.innerHTML=`<div class="mname">${label}</div><div class="memoji">${m.emoji}</div><div class="mstats"><span class="matk">${m.atk}</span><span class="mhp">${m.hp}</span></div>`;
        d.onclick=side==="player"?()=>selectMinion(i):()=>attackTarget("minion",i);
      }
      container.appendChild(d);
    }
  };
  build(els.gEnemyBoard,G.enemyMinions,"enemy");
  build(els.gPlayerBoard,G.playerMinions,"player");
  if(els.gBoardHint){
    els.gBoardHint.textContent=G.selectedMinion>=0&&G.playerMinions[G.selectedMinion]
      ? `已选择「${G.playerMinions[G.selectedMinion].name}」，点击敌方目标`
      : "点击自己的随从，再点敌方目标";
  }
}
function selectMinion(i){
  if(!G.running||G.busy)return;
  const m=G.playerMinions[i];
  if(!m||!m.canAttack||m.hasAttacked||m.atk<=0)return;
  G.selectedMinion=G.selectedMinion===i?-1:i;
  playSfx("click");
  renderGame();
}
function dealToMinion(m,amount){
  if(amount<=0)return 0;
  if(m.divineShield){m.divineShield=false;logGame(`「${m.name}」的圣盾挡下了伤害`);return 0;}
  m.hp-=amount;
  return amount;
}
function combat(a,b,side="enemy",attackerEl,targetEl){
  const aDmg=a.atk,bDmg=b.atk;
  const hitTarget=dealToMinion(b,aDmg);
  const hitAttacker=dealToMinion(a,bDmg);
  a.hasAttacked=true;
  const color=side==="enemy"?"#ffd76a":"#ff6b81";
  if(attackerEl){
    attackerEl.classList.remove("attacking");
    void attackerEl.offsetWidth;
    attackerEl.classList.add("attacking");
    setTimeout(()=>attackerEl.classList.remove("attacking"),gs(460));
  }
  launchAttackTrail(attackerEl,targetEl,color);
  if(targetEl){
    targetEl.classList.remove("under-attack");
    void targetEl.offsetWidth;
    targetEl.classList.add("under-attack");
    setTimeout(()=>targetEl.classList.remove("under-attack"),gs(460));
    floatAtElement(hitTarget?`-${hitTarget}`:"SHIELD",hitTarget?"#ff6b81":"#f5d76e",targetEl);
    impactAtElement(targetEl,color,true);
  }else{
    impactAt(side);
  }
  if(attackerEl&&hitAttacker>0)floatAtElement(`-${hitAttacker}`,"#ff9b73",attackerEl);
  logGame(`「${a.name}」与「${b.name}」交战：${aDmg} / ${bDmg}`);
  playSfx(Math.max(hitTarget,hitAttacker)>=8?"crit":"hit");
}
function processDeaths(){
  const deadPlayers=G.playerMinions.filter(m=>m.hp<=0);
  G.playerMinions=G.playerMinions.filter(m=>m.hp>0);
  deadPlayers.forEach(m=>{
    logGame(`「${m.name}」倒下了`);
    if(m.deathrattle){
      if(m.deathrattle.draw)drawCards(m.deathrattle.draw);
      if(m.deathrattle.coins)G.player.coins+=m.deathrattle.coins;
      if(m.deathrattle.heal)G.player.hp=Math.min(G.player.maxHp,G.player.hp+m.deathrattle.heal);
    }
  });
  const deadEnemies=G.enemyMinions.filter(m=>m.hp<=0);
  G.enemyMinions=G.enemyMinions.filter(m=>m.hp>0);
  deadEnemies.forEach(m=>logGame(`「${m.name}」倒下了`));
}
async function attackTarget(kind,index){
  if(!G.running||G.busy||G.selectedMinion<0)return;
  const attackerIndex=G.selectedMinion;
  const attacker=G.playerMinions[attackerIndex];
  if(!attacker||attacker.hasAttacked)return;
  const attackerEl=els.gPlayerBoard.children[attackerIndex];
  const taunts=G.enemyMinions.filter(m=>m.taunt);
  G.busy=true;
  if(kind==="minion"){
    const target=G.enemyMinions[index];
    if(!target)return;
    if(taunts.length&&!target.taunt){logGame("必须先攻击嘲讽随从");G.busy=false;return;}
    const targetEl=els.gEnemyBoard.children[index];
    combat(attacker,target,"enemy",attackerEl,targetEl);
  }else{
    if(taunts.length){logGame("必须先攻击嘲讽随从");G.busy=false;return;}
    attacker.hasAttacked=true;
    attackerEl?.classList.add("attacking");
    launchAttackTrail(attackerEl,els.gEnemyPortrait,"#ffd76a");
    await waitGame(120);
    logGame(`「${attacker.name}」攻击 ${G.enemy.name}，造成 ${attacker.atk} 点伤害`);
    damageEnemyHero(attacker.atk);
  }
  G.selectedMinion=-1;
  await waitGame(300);
  processDeaths();
  G.busy=false;
  renderGame();
  if(G.enemy.hp<=0){winBattle();return;}
  if(G.player.hp<=0){showEnding(true);return;}
}
function useHeroPower(){
  if(!G.running||G.busy||G.player.heroPowerUsed||G.player.energy<2)return;
  G.player.energy-=2;
  G.player.block+=4;
  G.player.heroPowerUsed=true;
  logGame("使用英雄技能「摸鱼」，获得 4 点护盾");
  playSfx("shield");
  renderGame();
}
function enemyProfile(e){
  if(e.name==="老板")return {
    strikeName:"交作业",strike:10,summon:"demand",buffName:"画饼",buff:2,sweepName:"优化名单",sweep:3,healName:"绩效回血",heal:6,
    lines:["先看他还剩多少精神值。","护盾厚？那就换个打法。","这套方案，你接得住吗？"],
    attackLine:"这个需求，今天必须上线。",summonLine:"再给你加一个需求。",buffLine:"年轻人，要有格局。"
  };
  if(e.name==="甲方")return {
    strikeName:"催终稿",strike:12,summon:"revision",buffName:"再改一版",buff:1,sweepName:"全盘推翻",sweep:4,healName:"追加预算",heal:7,
    lines:["感觉还是不对。","我再看看你的场面。","就按这个方向全部推翻。"],
    attackLine:"再改一版，马上就好。",summonLine:"这里再加一版。",buffLine:"方向对了，继续改。"
  };
  return {
    strikeName:"当众催婚",strike:9,summon:"cousin",buffName:"别人家孩子",buff:2,sweepName:"逐个比较",sweep:2,healName:"亲戚回血",heal:8,
    lines:["我是为你好。","你看别人家的孩子。","这件事，今天必须聊明白。"],
    attackLine:"怎么还不结婚？",summonLine:"你看别人家孩子。",buffLine:"人家孩子都二胎了。"
  };
}
function makeEnemyPlan(id,name,icon,forecast,actions,motive,score){
  return {id,name,icon,forecast,actions,motive,score};
}
function enemyActionLimit(e){
  return e.firstBattle&&e.turns<=1?1:2;
}
function buildEnemyPlans(e){
  const p=enemyProfile(e);
  const canSummon=G.enemyMinions.length<3;
  const playerBoard=G.playerMinions.length;
  const lowPlayer=G.player.hp<=Math.max(22,G.player.maxHp*.35);
  const plans=[];
  plans.push(makeEnemyPlan(
    "pressure","持续施压","⚔️",`${p.strikeName} + 强化`,
    [
      {kind:"strike",name:p.strikeName,icon:"⚔️",desc:`造成 ${p.strike} 点直伤`,amount:p.strike},
      {kind:"buff",name:p.buffName,icon:"📈",desc:`攻击力永久 +${p.buff}`,amount:p.buff}
    ],
    lowPlayer?"你快要撑不住了，直接压死。":"先用直伤逼你交资源和护盾。",
    52+(lowPlayer?22:0)+e.strength*2
  ));
  if(canSummon){
    const m=MINIONS[p.summon];
    plans.push(makeEnemyPlan(
      "swarm","继续铺场","🧩",`召唤「${m.name}」 + 强化`,
      [
        {kind:"summon",name:m.name,icon:m.emoji,desc:`召唤 ${m.atk}/${m.hp} 随从`,minion:p.summon},
        {kind:"buff",name:p.buffName,icon:"📈",desc:`攻击力永久 +${p.buff}`,amount:p.buff}
      ],
      playerBoard?"你的场面起来了，得继续加人。":"先占满场，让你每回合都要做选择。",
      43+(G.enemyMinions.length<3?26:0)+playerBoard*5
    ));
  }
  plans.push(makeEnemyPlan(
    "control","针对清场","🪓",`${p.sweepName} + 追击`,
    [
      {kind:"sweep",name:p.sweepName,icon:"💥",desc:`你的随从各受 ${p.sweep} 点伤害`,amount:p.sweep},
      {kind:"strike",name:"补刀",icon:"🗡️",desc:`造成 ${Math.max(4,p.strike-5)} 点直伤`,amount:Math.max(4,p.strike-5)}
    ],
    playerBoard>=2?"你铺得太多，全盘清掉更省事。":"小随从不构成威胁，顺手清掉。",
    28+playerBoard*14+(playerBoard>=2?10:0)
  ));
  plans.push(makeEnemyPlan(
    "recover","稳住节奏","♻️",`${p.healName} + 反击`,
    [
      {kind:"heal",name:p.healName,icon:"💚",desc:`回复 ${p.heal} 点生命`,amount:p.heal},
      {kind:"strike",name:"反手一击",icon:"⚔️",desc:`造成 ${Math.max(5,p.strike-4)} 点直伤`,amount:Math.max(5,p.strike-4)}
    ],
    e.hp<e.maxHp*.5?"血线不安全，先拖回安全区。":"保持血线，不给你速攻机会。",
    18+(1-e.hp/e.maxHp)*90
  ));
  if(e.turns>=4&&!e.deadlineUsed){
    plans.push(makeEnemyPlan(
      "deadline","终极截止日","☠️","高额直伤 + 永久强化",
      [
        {kind:"deadline",name:"截止日",icon:"☠️",desc:`造成 ${p.strike+14} 点直伤`,amount:p.strike+14},
        {kind:"buff",name:p.buffName,icon:"📈",desc:`攻击力永久 +3`,amount:3}
      ],
      "拖得够久了，该让项目结项。",
      110-(e.hp/e.maxHp)*20
    ));
  }
  return plans
    .sort((a,b)=>b.score-a.score)
    .slice(0,3)
    .map(plan=>({...plan,actions:plan.actions.slice(0,enemyActionLimit(e))}));
}
function chooseEnemyMove(e){
  return buildEnemyPlans(e)[0];
}
const waitGame=ms=>new Promise(resolve=>setTimeout(resolve,gs(ms)));
async function showEnemyDecision(plans){
  if(!els.gEnemyDecision||!plans.length)return plans[0];
  const chosen=plans[0];
  const profile=enemyProfile(G.enemy);
  els.gEnemyOptions.innerHTML="";
  plans.forEach((plan,i)=>{
    const s=document.createElement("div");
    s.className="ed-option";
    s.dataset.plan=plan.id;
    const forecast=plan.actions.length===1?plan.actions[0].name:plan.forecast;
    s.innerHTML=`<span class="ed-icon">${plan.icon}</span><b>${plan.name}</b><small>${forecast}</small><small>${plan.motive}</small>`;
    els.gEnemyOptions.appendChild(s);
  });
  if(els.gEnemyAvatar)els.gEnemyAvatar.textContent=G.enemy.emoji;
  if(els.gEnemyThought)els.gEnemyThought.textContent="读取你的手牌、护盾和场面……";
  els.gEnemyDecision.classList.add("show");
  els.gEnemyPortrait.classList.add("pondering");
  const children=[...els.gEnemyOptions.children];
  const order=[1,2,0].filter(i=>children[i]);
  for(let step=0;step<order.length;step++){
    children.forEach(x=>x.classList.remove("thinking"));
    const option=children[order[step]];
    option.classList.add("thinking");
    if(els.gEnemyThought)els.gEnemyThought.textContent=`${profile.lines[step%profile.lines.length]} ${plans[order[step]].motive}`;
    if(els.gEnemyClock)els.gEnemyClock.textContent=`00.0${step+2}`;
    playSfx("click");
    await waitGame(560);
  }
  children.forEach(x=>x.classList.remove("thinking"));
  children[0].classList.add("chosen");
  const chosenForecast=chosen.actions.length===1?chosen.actions[0].name:chosen.forecast;
  if(els.gEnemyThought)els.gEnemyThought.innerHTML=`决策锁定：<b>${chosen.name}</b> · ${chosenForecast}`;
  if(els.gEnemyClock)els.gEnemyClock.textContent="LOCK";
  playSfx("combo");
  await waitGame(1000);
  els.gEnemyPortrait.classList.remove("pondering");
  return chosen;
}
function hideEnemyDecision(){
  if(els.gEnemyDecision)els.gEnemyDecision.classList.remove("show");
  if(els.gEnemyPortrait)els.gEnemyPortrait.classList.remove("pondering");
}
function showEnemyCardCast(action){
  const el=document.createElement("div");
  el.className="enemy-card-cast";
  el.innerHTML=`<div class="ecc-icon">${action.icon||"🃏"}</div><div class="ecc-name">${action.name}</div><div class="ecc-desc">${action.desc||""}</div>`;
  els.gameBattle.querySelector(".game-board")?.appendChild(el);
  requestAnimationFrame(()=>el.classList.add("show"));
  setTimeout(()=>el.remove(),gs(950));
}
async function executeEnemyAction(action){
  const e=G.enemy,p=enemyProfile(e);
  showEnemyCardCast(action);
  if(action.kind==="strike"){
    showBubble("enemy",p.attackLine);
  }else if(action.kind==="summon"){
    showBubble("enemy",p.summonLine);
  }else if(action.kind==="buff"){
    showBubble("enemy",p.buffLine);
  }
  await waitGame(330);
  if(action.kind==="strike"){
    logGame(`${e.name} 打出「${action.name}」`);
    enemyStrike(action.amount||p.strike,action.name);
  }else if(action.kind==="deadline"){
    e.deadlineUsed=true;
    logGame(`${e.name} 打出「截止日」，项目进入最终倒计时`);
    playSfx("crit");
    enemyStrike(action.amount||24,"截止日");
  }else if(action.kind==="summon"){
    if(G.enemyMinions.length<3){
      const m=makeMinion(action.minion);
      m.justSummoned=true;
      m.canAttack=false;
      G.enemyMinions.push(m);
      logGame(`${e.name} 召唤了「${m.name}」`);
      playSfx("summon");
    }else{
      e.strength+=1;
      logGame(`${e.name} 的随从位已满，转化为攻击力 +1`);
    }
  }else if(action.kind==="buff"){
    e.strength+=action.amount||p.buff;
    logGame(`${e.name} 使用「${action.name}」，攻击力 +${action.amount||p.buff}`);
    playSfx("charge");
  }else if(action.kind==="sweep"){
    logGame(`${e.name} 使用「${action.name}」，你的随从各受 ${action.amount||p.sweep} 点伤害`);
    showSweepWave();
    [...els.gPlayerBoard.children].forEach(el=>{
      el.classList.remove("under-attack");
      void el.offsetWidth;
      el.classList.add("under-attack");
    });
    G.playerMinions.forEach(m=>dealToMinion(m,action.amount||p.sweep));
    playSfx("hit");
    processDeaths();
  }else if(action.kind==="heal"){
    const healed=Math.min(action.amount||p.heal,e.maxHp-e.hp);
    e.hp+=healed;
    logGame(`${e.name} 使用「${action.name}」，回复 ${healed} 点生命`);
    playSfx("heal");
  }
  renderGame();
  await waitGame(520);
}
function intentLabel(e){
  const it=e.intents[e.intentIndex],parts=it.split(":"),t=parts[0],v=+parts[1];
  if(t==="attack")return `攻击 ${v+e.strength}`;
  if(t==="buff")return `加攻 +${v}`;
  if(t==="heal")return `回血 ${v}`;
  if(t==="charge")return `蓄力：${v} 伤害`;
  if(t==="release")return `释放：${e.charged||20} 伤害`;
  if(t==="summon")return `召唤 ${MINIONS[parts[1]]?.name||""}`;
  return it;
}
function renderGame(){
  els.gHp.textContent=`${Math.max(0,G.player.hp)}/${G.player.maxHp}`;
  els.gBlock.textContent=G.player.block;
  els.gCoins.textContent=G.player.coins;
  els.gEnergy.textContent=`${G.player.energy}/${G.player.maxEnergy}`;
  els.gEnemyName.textContent=G.enemy.name;
  if(els.gEnemyLevel){
    els.gEnemyLevel.textContent=G.enemy.firstBattle
      ? "第 1 关 · 试岗局"
      : `第 ${G.encounter+1} 关 · ${["热身","加压","决胜"][G.encounter]||"加班"}${G.ascension?` · 进阶 ${G.ascension}`:""}`;
  }
  els.gEnemyHp.textContent=`${Math.max(0,G.enemy.hp)}/${G.enemy.maxHp}`;
  els.gEnemyHpFill.style.width=`${Math.max(0,G.enemy.hp)/G.enemy.maxHp*100}%`;
  els.gPlayerHpFill.style.width=`${Math.max(0,G.player.hp)/G.player.maxHp*100}%`;
  els.gEnemyPortrait.style.setProperty("--tie",G.enemy.tie||"#c0392b");
  let previewName="观察中";
  let previewForecast="";
  try{
    const preview=chooseEnemyMove(G.enemy);
    previewName=preview.name;
    previewForecast=preview.forecast;
  }catch(e){}
  els.gIntent.textContent=`预判：${previewName}${previewForecast?" · "+previewForecast:""}`;
  els.gEnemyPower.textContent=`力量 ${G.enemy.strength} · 护甲 ${G.enemy.armor||0}`;
  els.gIntent.classList.toggle("danger",previewName.includes("截止日"));
  const board=els.gameBattle.querySelector(".game-board");
  if(board)board.classList.toggle("low-hp",G.player.hp<=G.player.maxHp*.3);
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
  if(els.gHeroPower)els.gHeroPower.disabled=!G.running||G.player.heroPowerUsed||G.player.energy<2;
  if(els.gEndTurn){
    els.gEndTurn.disabled=!G.running||G.busy;
    els.gEndTurn.textContent=G.busy?"对手行动中…":"结束回合";
  }
  renderMinions();
  els.gHand.innerHTML="";
  G.hand.forEach((card,i)=>{
    const b=document.createElement("button");
    const full=card.type==="minion"&&G.playerMinions.length>=3;
    b.className="game-card "+card.type+(card.rare?" rare":"")+(G.player.energy<card.cost||full?" disabled":"");
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
  damageEnemyHero(d);
}
function damageEnemyHero(amount){
  let d=amount;
  const absorbed=Math.min(G.enemy.armor||0,d);
  if(absorbed>0){G.enemy.armor-=absorbed;d-=absorbed;logGame(`护甲吸收 ${absorbed} 点`);}
  if(d<=0){logGame("护甲挡住了这次伤害");return;}
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
      setTimeout(()=>ghost.remove(),gs(450));
    }
  }
  setTimeout(()=>{G.busy=false;resolveCard(i);},gs(420));
}
function resolveCard(i){
  if(!G.running)return;
  const card=G.hand[i];
  if(!card)return;
  if(card.type==="minion"&&G.playerMinions.length>=3){logGame("随从位已满");return;}
  G.player.energy-=card.cost;
  G.hand.splice(i,1);
  if(!card.exhaust)G.discard.push(card);
  logGame(`打出「${card.name}」`);
  showBubble("player",CARD_LINES[card.id]||"……");
  if(card.type==="minion"){
    const m=makeMinion(card.minion);
    if(card.upgraded){m.atk+=1;m.hp+=1;m.maxHp+=1;}
    G.playerMinions.push(m);
    logGame(`召唤「${m.name}」`);
    playSfx("summon");
    if(m.battlecry){
      if(m.battlecry.dmg)playerDamage(m.battlecry.dmg);
      if(m.battlecry.block){G.player.block+=m.battlecry.block;playSfx("shield");}
      if(m.battlecry.draw)drawCards(m.battlecry.draw);
    }
    G.combo++;
    if(G.combo%3===0){showCombo(`COMBO ×${G.combo} · 攻击 +2`);playSfx("combo");}
    if(G.enemy.hp<=0){winBattle();return;}
    renderGame();
    return;
  }
  if(card.dmg){
    const comboBonus=Math.min(6,Math.floor((G.combo+1)/3)*2);
    let d=card.dmg+comboBonus;
    if(card.execute&&G.enemy.hp<G.enemy.maxHp/2)d+=card.execute;
    if(comboBonus)showCombo(`COMBO ×${G.combo} · +${comboBonus} 伤害`);
    playerDamage(d);
  }
  if(card.heal){G.player.hp=Math.min(G.player.maxHp,G.player.hp+card.heal);playSfx("heal");}
  if(card.block){G.player.block+=card.block;playSfx("shield");}
  if(card.coins)G.player.coins+=card.coins;
  if(card.energy)G.player.energy+=card.energy;
  if(card.draw)drawCards(card.draw);
  if(card.discardRandom){
    for(let k=0;k<card.discardRandom&&G.hand.length;k++){
      const idx=Math.floor(rand()*G.hand.length);
      const discarded=G.hand.splice(idx,1)[0];
      G.discard.push(discarded);
      logGame(`弃掉「${discarded.name}」`);
    }
  }
  if(card.nextPenalty)G.player.nextPenalty=(G.player.nextPenalty||0)+card.nextPenalty;
  if(card.selfDmg)G.player.hp-=card.selfDmg;
  if(card.vuln)G.enemy.vulnerable+=card.vuln;
  if(card.weak)G.enemy.weak+=card.weak;
  if(card.stun)G.enemy.stun+=card.stun;
  G.combo++;
  if(G.combo%3===0){
    showCombo(`COMBO ×${G.combo} · 攻击 +2`);
    playSfx("combo");
  }else if(G.combo>=2){
    showCombo(`COMBO ×${G.combo}`);
  }
  if(G.enemy.hp<=0){winBattle();return;}
  if(G.player.hp<=0){showEnding(true);return;}
  renderGame();
}
function enemyAct(){
  const e=G.enemy;
  if(e.stun>0){e.stun--;logGame(`${e.name} 被「已读不回」，跳过了回合`);showBubble("enemy",ENEMY_LINES[e.name]?.stun||"？？？");return;}
  const it=e.intents[e.intentIndex],parts=it.split(":"),t=parts[0],n=+parts[1];
  if(t==="attack"){
    enemyStrike(n,"攻击");
  }else if(t==="charge"){
    e.charged=n;
    logGame(`${e.name} 开始蓄力，下回合释放 ${n} 点伤害`);
    showBubble("enemy","这个需求，下周上线。");
    playSfx("charge");
  }else if(t==="release"){
    const dmg=e.charged||20;
    e.charged=0;
    enemyStrike(dmg,"释放");
  }else if(t==="summon"){
    const key=parts[1];
    if(G.enemyMinions.length<3){
      G.enemyMinions.push(makeMinion(key));
      logGame(`${e.name} 召唤了「${MINIONS[key].name}」`);
      showBubble("enemy","这个需求，你来接一下。");
      playSfx("summon");
    }else{
      logGame(`${e.name} 想召唤，但随从位已满`);
    }
  }else if(t==="buff"){e.strength+=n;logGame(`${e.name} 加攻 +${n}`);showBubble("enemy",ENEMY_LINES[e.name]?.buff||"……");}
  else if(t==="heal"){e.hp=Math.min(e.maxHp,e.hp+n);logGame(`${e.name} 回复 ${n} 点`);showBubble("enemy",ENEMY_LINES[e.name]?.heal||"……");}
  e.intentIndex=(e.intentIndex+1)%e.intents.length;
}
function damagePlayerHero(amount,label){
  const d=Math.max(0,amount);
  const blocked=Math.min(G.player.block,d);
  G.player.block-=blocked;
  const dmg=Math.max(0,d-blocked);
  G.player.hp-=dmg;
  logGame(`${label} ${d}，护盾挡下 ${blocked}，你受到 ${dmg} 点伤害`);
  floatGameText(`-${dmg}`,"#ff8a5c","player");
  impactAt("player");
  const pbar=els.gPlayerHpFill.parentElement;
  if(pbar){pbar.classList.remove("damage");void pbar.offsetWidth;pbar.classList.add("damage");}
  els.gHurtFlash.classList.add("on");
  setTimeout(()=>els.gHurtFlash.classList.remove("on"),gs(180));
  return dmg;
}
function enemyStrike(base,label){
  const e=G.enemy;
  playSfx("enemy");
  els.gEnemyPortrait.classList.add("attacking");
  setTimeout(()=>els.gEnemyPortrait.classList.remove("attacking"),gs(420));
  launchAttackTrail(els.gEnemyPortrait,els.gPlayerPortrait,"#ff6b81");
  let d=base+e.strength;
  if(e.weak>0)d=Math.round(d*0.75);
  showBubble("enemy",ENEMY_LINES[e.name]?.attack||"……");
  return damagePlayerHero(d,`${e.name} 使用「${label}」`);
}
function animateMinion(index,className){
  const el=els.gEnemyBoard.children[index];
  if(!el)return;
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
  setTimeout(()=>el.classList.remove(className),gs(460));
}
async function enemyMinionsAttack(){
  const demandHit=Math.min(4,2+G.encounter);
  for(let i=0;i<G.enemyMinions.length;i++){
    const m=G.enemyMinions[i];
    if(m.hp<=0)continue;
    if(m.key==="demand"){
      animateMinion(i,"attacking");
      await waitGame(150);
      launchAttackTrail(els.gEnemyBoard.children[i],els.gPlayerPortrait,"#ff8a5c");
      G.enemy.strength+=1;
      damagePlayerHero(demandHit,"「需求」突然变更");
      logGame("「需求」让敌方攻击力永久 +1");
    }else if(m.key==="revision"){
      m.atk+=2;m.hp+=1;m.maxHp+=1;
      animateMinion(i,"buffed");
      logGame("「改稿」成长了：攻击 +2，生命 +1");
    }else if(m.key==="cousin"){
      animateMinion(i,"healed");
      G.enemy.hp=Math.min(G.enemy.maxHp,G.enemy.hp+5);
      logGame("「别人家的孩子」让敌人回复 5 点");
    }
    renderGame();
    await waitGame(240);
    if(G.player.hp<=0)return;
  }
  for(let i=0;i<G.enemyMinions.length;i++){
    const m=G.enemyMinions[i];
    if(!m.canAttack||m.hasAttacked||m.atk<=0)continue;
    const taunts=G.playerMinions.filter(x=>x.taunt);
    let target=null;
    if(taunts.length)target=taunts.slice().sort((a,b)=>b.atk-a.atk)[0];
    else if(G.playerMinions.length&&G.player.hp>14)target=G.playerMinions.slice().sort((a,b)=>(b.atk*2+b.hp)-(a.atk*2+a.hp))[0];
    animateMinion(i,"attacking");
    await waitGame(170);
    if(target){
      const targetIndex=G.playerMinions.indexOf(target);
      combat(m,target,"player",els.gEnemyBoard.children[i],els.gPlayerBoard.children[targetIndex]);
    }else{
      m.hasAttacked=true;
      launchAttackTrail(els.gEnemyBoard.children[i],els.gPlayerPortrait,"#ff8a5c");
      await waitGame(100);
      damagePlayerHero(m.atk,`「${m.name}」攻击你`);
    }
    processDeaths();
    renderGame();
    await waitGame(260);
    if(G.player.hp<=0)return;
  }
  processDeaths();
}
async function endTurn(){
  if(!G.running||G.busy)return;
  G.busy=true;
  G.selectedMinion=-1;
  showTurnBanner("敌方回合");
  logGame("—— 敌方回合 ——");
  const board=els.gameBattle.querySelector(".game-board");
  board?.classList.add("enemy-turn");
  try{
    await waitGame(420);
    const armorGain=G.enemy.firstBattle?(G.enemy.turns===0?1:2):3+Math.min(2,G.ascension||0);
    G.enemy.armor=(G.enemy.armor||0)+armorGain;
    G.enemy.turns=(G.enemy.turns||0)+1;
    logGame(`${G.enemy.name} 进入工作状态，护甲 +${armorGain}`);
    renderGame();
    if(G.enemy.turns===2&&!G.enemy.deadlineUsed){
      logGame("警告：下回合是截止日");
      showBubble("enemy","下回合是截止日，准备好了吗？");
    }
    G.enemyMinions.forEach(m=>{m.hasAttacked=false;m.canAttack=true;});
    const plans=buildEnemyPlans(G.enemy);
    const plan=await showEnemyDecision(plans);
    hideEnemyDecision();
    for(const action of plan.actions){
      if(!G.running)return;
      await executeEnemyAction(action);
      if(G.player.hp<=0){
        G.busy=false;
        showEnding(true);
        return;
      }
    }
    await enemyMinionsAttack();
    if(G.player.hp<=0){
      G.busy=false;
      showEnding(true);
      return;
    }
    if(G.enemy.weak>0)G.enemy.weak--;
    if(G.enemy.vulnerable>0)G.enemy.vulnerable--;
    G.turn++;
    G.combo=0;
    if(els.gCombo)els.gCombo.classList.remove("show");
    G.player.block=0;
    if(G.relics.some(r=>r.id==="muyu"))G.player.block+=3;
    G.player.maxEnergy=Math.min(5,G.player.maxEnergy+1);
    G.player.energy=Math.max(0,G.player.maxEnergy-(G.player.nextPenalty||0));
    G.player.nextPenalty=0;
    G.player.heroPowerUsed=false;
    G.playerMinions.forEach(m=>{m.hasAttacked=false;m.canAttack=true;});
    drawCards((G.refillCount||3)+(G.relics.some(r=>r.id==="coffee")?1:0));
    playSfx("draw");
    G.deal=true;
    renderGame();
    await waitGame(260);
    showTurnBanner("你的回合");
  }finally{
    board?.classList.remove("enemy-turn");
    hideEnemyDecision();
    if(G.running)G.busy=false;
    renderGame();
  }
}
function winBattle(){
  hideEnemyDecision();
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
  },gs(950));
}
function showDeck(mode){
  els.gDeckTitle.textContent=mode==="remove"?"删一张牌":"升级一张牌";
  els.gDeckSub.textContent=mode==="remove"?"从牌组中永久移除一张牌。":"让一张牌变强：伤害/治疗/护盾 +2，随从 +1/+1。";
  els.gDeckList.innerHTML="";
  G.deck.forEach((card,idx)=>{
    const b=document.createElement("button");
    b.className="game-card "+card.type+(card.rare?" rare":"")+(mode==="upgrade"&&card.upgraded?" disabled":"");
    b.innerHTML=`<span class="cost">${card.cost}</span><div class="cicon">${card.emoji}</div><div class="cname">${card.name}</div><div class="cdesc">${card.desc}</div>`;
    b.onclick=()=>{
      if(mode==="remove"){
        const removed=G.deck.splice(idx,1)[0];
        logGame(`删除了「${removed.name}」`);
      }else{
        if(card.upgraded)return;
        G.deck[idx]=upgradeCard(card);
        logGame(`升级了「${card.name}」`);
      }
      startBattle();
    };
    els.gDeckList.appendChild(b);
  });
  showGameView("deck");
}
function upgradeCard(card){
  const copy={...card,upgraded:true,name:card.name+"+",desc:card.desc+"（升级）"};
  if(copy.dmg)copy.dmg+=2;
  if(copy.heal)copy.heal+=2;
  if(copy.block)copy.block+=2;
  return copy;
}
function showEvent(){
  const ev=EVENTS[Math.floor(rand()*EVENTS.length)];
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
  shuffleArr(GAME_CARDS.filter(c=>isUnlocked(c.id))).slice(0,3).forEach((card,idx)=>{
    const b=document.createElement("button");
    b.className="game-card "+card.type+(card.rare?" rare":"");
    b.style.setProperty("--i",idx);
    b.innerHTML=`<span class="cost">${card.cost}</span><div class="cicon">${card.emoji}</div><div class="cname">${card.name}</div><div class="cdesc">${card.desc}</div>`;
    b.onclick=()=>{G.deck.push(card);logGame(`获得新卡「${card.name}」`);startBattle();};
    els.gRewards.appendChild(b);
  });
  const available=RELICS.filter(r=>!G.relics.some(x=>x.id===r.id)&&isUnlocked(r.id));
  if(available.length){
    const relic=shuffleArr(available)[0];
    const b=document.createElement("button");
    b.className="game-card relic-card";
    b.innerHTML=`<div class="cicon">${relic.emoji}</div><div class="cname">${relic.name}</div><div class="cdesc">${relic.desc}</div>`;
    b.onclick=()=>{G.relics.push(relic);logGame(`获得遗物「${relic.name}」`);startBattle();};
    els.gRewards.appendChild(b);
  }
}
function finishRun(defeated){
  if(G.rewarded)return;
  G.rewarded=true;
  const hp=Math.max(0,G.player.hp);
  const earned=10+Math.floor(hp/5)+Math.floor(G.player.coins/10)+(defeated?0:10)+(G.isDaily?10:0);
  addPoints(earned);
  G.lastPoints=earned;
  if(!defeated&&ascension<5){
    ascension++;
    try{localStorage.setItem("oneline_ascension",String(ascension));}catch(e){}
  }
  if(G.isDaily){
    const today=dateKey();
    let last=null,streak=0;
    try{last=localStorage.getItem("oneline_daily_last");streak=parseInt(localStorage.getItem("oneline_daily_streak")||"0",10)||0;}catch(e){}
    if(last!==today){
      if(last){
        const prev=new Date(last+"T00:00:00");
        const now=new Date(today+"T00:00:00");
        const diff=Math.round((now-prev)/86400000);
        streak=diff===1?streak+1:1;
      }else streak=1;
      try{localStorage.setItem("oneline_daily_last",today);localStorage.setItem("oneline_daily_streak",String(streak));}catch(e){}
    }
    G.streak=streak||1;
  }
  updateHubStatus();
}
function updateHubStatus(){
  if(els.hubPoints)els.hubPoints.textContent=points;
  if(els.dailyStatus){
    const today=dateKey();
    let last=null,streak=0;
    try{last=localStorage.getItem("oneline_daily_last");streak=parseInt(localStorage.getItem("oneline_daily_streak")||"0",10)||0;}catch(e){}
    els.dailyStatus.textContent=(last===today?`今日挑战已完成 · 连胜 ${streak||1} 天`:`今日挑战未完成 · 连胜 ${streak} 天`)+` · 进阶 ${ascension}`;
  }
}
function shareRun(){
  const name=G.ending?.ending||"未完成";
  const hp=Math.max(0,G.player.hp);
  const mode=G.isDaily?`每日挑战 ${G.seed}`:"自由模式";
  const url=G.isDaily?"https://morefree-lab.github.io/jinshu-cards/?dailygame=1":"https://morefree-lab.github.io/jinshu-cards/";
  const text=`oneline. 打工人求生指南 · ${mode}\n结局：${name}\n回合 ${G.turn} · 精神值 ${hp}/${G.player.maxHp} · 存款 ${G.player.coins}\n工分 +${G.lastPoints||0}${G.isDaily?` · 连胜 ${G.streak||0} 天`:""}\n来挑战：${url}`;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>flash("战绩已复制")).catch(()=>flash("复制失败"));
  }else flash("请手动复制战绩");
}
function openCollection(){
  renderCollection();
  els.collectionModal.classList.add("show");
}
function renderCollection(){
  if(els.colPoints)els.colPoints.textContent=points;
  const groups={
    characters:{label:"角色",items:CHARACTERS,cost:c=>c.unlockCost||0},
    cards:{label:"卡牌",items:GAME_CARDS,cost:c=>c.rare?60:30},
    relics:{label:"遗物",items:RELICS,cost:()=>40}
  };
  const group=groups[collectionTab]||groups.characters;
  if(els.colProgress)els.colProgress.textContent=`${group.label} ${group.items.filter(i=>isUnlocked(i.id)).length}/${group.items.length}`;
  els.collectionGrid.innerHTML="";
  const add=(id,name,emoji,cost)=>{
    const owned=unlocked.has(id);
    const d=document.createElement("div");
    d.className="collection-item"+(owned?" owned":"");
    d.innerHTML=`<div class="ci-emoji">${emoji}</div><div class="ci-name">${name}</div>`+
      (owned?`<div class="ci-cost">已拥有</div>`:`<div class="ci-cost">${cost} 工分</div><button ${points<cost?"disabled":""}>解锁</button>`);
    if(!owned){
      d.querySelector("button").onclick=()=>{
        if(points<cost)return;
        points-=cost;savePoints();unlocked.add(id);saveUnlocked();
        renderCollection();updateHubStatus();flash(`已解锁「${name}」`);
      };
    }
    els.collectionGrid.appendChild(d);
  };
  group.items.forEach(item=>add(item.id,item.name,item.emoji,group.cost(item)));
  if(els.collectionTabs){
    [...els.collectionTabs.querySelectorAll("button")].forEach(b=>b.classList.toggle("on",b.dataset.tab===collectionTab));
  }
}
function showEnding(defeated){
  hideEnemyDecision();
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
  finishRun(defeated);
  if(els.gameEndHint){
    els.gameEndHint.textContent=`工分 +${G.lastPoints||0}${G.isDaily?` · 每日挑战 · 连胜 ${G.streak||1} 天`:""} · 进阶 ${ascension}`;
  }
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
  ctx.fillStyle=G.isDaily?"#ff8a5c":"rgba(255,255,255,.5)";
  ctx.font='700 16px "Microsoft YaHei",sans-serif';
  ctx.fillText(G.isDaily?`DAILY · ${G.seed}`:"FREE RUN",W2/2,252);
  ctx.strokeStyle="rgba(245,215,110,.35)";ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(240,280);ctx.lineTo(W2-240,280);ctx.stroke();
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
  startCoverLoop();
  try{history.replaceState(null,"","#cover");}catch(e){}
}

els.enterApp.onclick=()=>beginMode("free");
els.rulesBtn.onclick=(e)=>{e.stopPropagation();pendingCharacterMode="free";openGame();const d=document.querySelector(".brief-more");if(d){d.open=true;setTimeout(()=>d.scrollIntoView({behavior:"smooth",block:"center"}),120);}};
els.dailyChallengeBtn.onclick=(e)=>{e.stopPropagation();beginMode("daily");};
els.collectionBtn.onclick=(e)=>{e.stopPropagation();openCollection();};
els.gSound.onclick=()=>{soundOn=!soundOn;try{localStorage.setItem("oneline_sound",soundOn?"1":"0");}catch(e){}updateSoundBtn();if(soundOn)playSfx("click");};
els.gSpeed.onclick=()=>{gameSpeed=gameSpeed===1?2:1;els.gSpeed.textContent=gameSpeed+"×";playSfx("click");};
updateSoundBtn();
updateHubStatus();
els.gameClose.onclick=()=>{els.gameModal.classList.remove("show");startCoverLoop();};
els.gameStart.onclick=()=>{seenRules=true;try{localStorage.setItem("oneline_seen_rules","1");}catch(e){}openCharacterSelect(pendingCharacterMode||"free");};
els.characterBack.onclick=()=>showGameView("menu");
els.characterConfirm.onclick=confirmCharacter;
els.mulliganKeep.onclick=()=>{G.mulliganSelected.clear();confirmMulligan();};
els.mulliganConfirm.onclick=confirmMulligan;
els.gHeroPower.onclick=useHeroPower;
els.gameBattle.querySelector(".enemy-hud").onclick=()=>attackTarget("hero");
els.gEndTurn.onclick=endTurn;
els.gSkip.onclick=()=>{G.player.hp=Math.min(G.player.maxHp,G.player.hp+15);logGame("跳过奖励，回复 15 点精神值");startBattle();};
els.gRemove.onclick=()=>showDeck("remove");
els.gUpgrade.onclick=()=>showDeck("upgrade");
els.gDeckCancel.onclick=()=>showGameView("reward");
els.gameAgain.onclick=()=>openCharacterSelect("free");
els.gameSave.onclick=saveEnding;
els.gameShare.onclick=shareRun;
els.collectionClose.onclick=()=>els.collectionModal.classList.remove("show");
els.collectionModal.addEventListener("click",e=>{if(e.target===els.collectionModal)els.collectionModal.classList.remove("show");});
els.collectionTabs.querySelectorAll("button").forEach(b=>b.onclick=()=>{collectionTab=b.dataset.tab;renderCollection();});
els.gameModal.addEventListener("click",e=>{if(e.target===els.gameModal){els.gameModal.classList.remove("show");startCoverLoop();}});
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
try{
  const q=new URLSearchParams(location.search);
  if(q.get("game")==="1"){openGame();}
  if(q.get("dailygame")==="1"){openGame();openCharacterSelect("daily");}
  if(q.get("collection")==="1"){openCollection();}
  if(q.get("characters")==="1"){openGame();openCharacterSelect("free");}
  if(q.get("intern")==="1"){unlocked.add("intern");selectedCharId="intern";openGame();startGameFast(false);}
  if(q.get("dailyresult")==="1"){openGame();startGameFast(true);G.player.hp=32;G.player.coins=42;G.turn=8;showEnding(false);}
  if(q.get("gamebattle")==="1"){openGame();startGameFast();}
  if(q.get("gamemulligan")==="1"){openGame();startGame();}
  if(q.get("gameminion")==="1"){openGame();startGameFast();G.playerMinions=[makeMinion("intern"),makeMinion("printer")];G.enemyMinions=[makeMinion("demand")];G.playerMinions.forEach(m=>{m.canAttack=true;m.hasAttacked=false;});renderGame();setTimeout(()=>{selectMinion(0);attackTarget("minion",0);},600);}
  if(q.get("gamebubble")==="1"){openGame();startGameFast();setTimeout(()=>showBubble("player","谁也别拦我，我今天就要发疯！"),300);setTimeout(()=>showBubble("enemy","这个需求，今天必须上线。"),900);}
  if(q.get("gamereward")==="1"){openGame();startGameFast();G.encounter=1;showReward();}
  if(q.get("gamedeck")==="1"){openGame();startGameFast();G.encounter=1;showDeck("remove");}
  if(q.get("gameplay")==="1"){openGame();startGameFast();setTimeout(()=>playGameCard(0),300);}
  if(q.get("gameevent")==="1"){openGame();startGameFast();setTimeout(()=>showEvent(),200);}
  if(q.get("gameenemy")==="1"){openGame();startGameFast();setTimeout(()=>endTurn(),1800);}
  if(q.get("gameend")==="1"){openGame();G.player={hp:32,maxHp:70,energy:3,maxEnergy:3,block:0,coins:42};G.encounter=3;G.turn=8;showEnding(false);}
  const direct=location.hash==="#play"||["game","dailygame","collection","characters","intern","dailyresult","gamebattle","gamemulligan","gameminion","gamebubble","gamereward","gameplay","gameevent","gameend","app"].some(k=>q.has(k));
  showCover();
  if(direct)stopCoverLoop();
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
