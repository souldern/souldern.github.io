
  //<!DOCTYPE HTML><script>

 
// http://complete-ly.appspot.com/
// MIT Licence
function completely(c,f){f=f||{};f.fontSize=f.fontSize||"16px";f.fontFamily=f.fontFamily||"sans-serif";f.promptInnerHTML=f.promptInnerHTML||"";f.color=f.color||"#333";f.hintColor=f.hintColor||"#aaa";f.backgroundColor=f.backgroundColor||"#fff";f.dropDownBorderColor=f.dropDownBorderColor||"#aaa";f.dropDownZIndex=f.dropDownZIndex||"100";f.dropDownOnHoverBackgroundColor=f.dropDownOnHoverBackgroundColor||"#ddd";var l=document.createElement("input");l.type="text";l.spellcheck=false;l.style.fontSize=f.fontSize;l.style.fontFamily=f.fontFamily;l.style.color=f.color;l.style.backgroundColor=f.backgroundColor;l.style.width="100%";l.style.outline="0";l.style.border="0";l.style.margin="0";l.style.padding="0";var k=l.cloneNode();k.disabled="";k.style.position="absolute";k.style.top="0";k.style.left="0";k.style.borderColor="transparent";k.style.boxShadow="none";k.style.color=f.hintColor;l.style.backgroundColor="transparent";l.style.verticalAlign="top";l.style.position="relative";var b=document.createElement("div");b.style.position="relative";b.style.outline="0";b.style.border="0";b.style.margin="0";b.style.padding="0";var e=document.createElement("div");e.style.position="absolute";e.style.outline="0";e.style.margin="0";e.style.padding="0";e.style.border="0";e.style.fontSize=f.fontSize;e.style.fontFamily=f.fontFamily;e.style.color=f.color;e.style.backgroundColor=f.backgroundColor;e.style.top="0";e.style.left="0";e.style.overflow="hidden";e.innerHTML=f.promptInnerHTML;e.style.background="transparent";if(document.body===undefined){throw"document.body is undefined. The library was wired up incorrectly."}document.body.appendChild(e);var p=e.getBoundingClientRect().right;b.appendChild(e);e.style.visibility="visible";e.style.left="-"+p+"px";b.style.marginLeft=p+"px";b.appendChild(k);b.appendChild(l);var j=document.createElement("div");j.style.position="absolute";j.style.visibility="hidden";j.style.outline="0";j.style.margin="0";j.style.padding="0";j.style.textAlign="left";j.style.fontSize=f.fontSize;j.style.fontFamily=f.fontFamily;j.style.backgroundColor=f.backgroundColor;j.style.zIndex=f.dropDownZIndex;j.style.cursor="default";j.style.borderStyle="solid";j.style.borderWidth="1px";j.style.borderColor=f.dropDownBorderColor;j.style.overflowX="hidden";j.style.whiteSpace="pre";j.style.overflowY="scroll";var q=function(u){var v=[];var s=0;var y=-1;var t=function(){this.style.outline="1px solid #ddd"};var r=function(){this.style.outline="0"};var x=function(){w.o3();w.o1(this.__hint)};var w={o3:function(){u.style.visibility="hidden"},refresh:function(B,G){u.style.visibility="hidden";s=0;u.innerHTML="";var F=(window.innerHeight||document.documentElement.clientHeight);var D=u.parentNode.getBoundingClientRect();var A=D.top-6;var C=F-D.bottom-6;v=[];for(var z=0;z<G.length;z++){if(G[z].indexOf(B)!==0){continue}var E=document.createElement("div");E.style.color=f.color;E.onmouseover=t;E.onmouseout=r;E.onmousedown=x;E.__hint=G[z];E.innerHTML=B+"<b>"+G[z].substring(B.length)+"</b>";v.push(E);u.appendChild(E)}if(v.length===0){return}if(v.length===1&&B===v[0].__hint){return}if(v.length<2){return}w.o0(0);if(A>C*3){u.style.maxHeight=A+"px";u.style.top="";u.style.bottom="100%"}else{u.style.top="100%";u.style.bottom="";u.style.maxHeight=C+"px"}u.style.visibility="visible"},o0:function(z){if(y!=-1&&v[y]){v[y].style.backgroundColor=f.backgroundColor}v[z].style.backgroundColor=f.dropDownOnHoverBackgroundColor;y=z},o2:function(z){if(u.style.visibility==="hidden"){return""}if(s+z===-1||s+z===v.length){return v[s].__hint}s+=z;w.o0(s);return v[s].__hint},o1:function(){}};return w};var d=q(j);d.o1=function(r){l.value=k.value=m+r;i.onChange(l.value);n=l.value;setTimeout(function(){l.focus()},0)};b.appendChild(j);c.appendChild(b);var o;var m;function h(r){if(o===undefined){o=document.createElement("span");o.style.visibility="hidden";o.style.position="fixed";o.style.outline="0";o.style.margin="0";o.style.padding="0";o.style.border="0";o.style.left="0";o.style.whiteSpace="pre";o.style.fontSize=f.fontSize;o.style.fontFamily=f.fontFamily;o.style.fontWeight="normal";document.body.appendChild(o)}o.innerHTML=String(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return o.getBoundingClientRect().right}var i={onArrowDown:function(){},onArrowUp:function(){},onEnter:function(){},onTab:function(){},onChange:function(){i.repaint()},startFrom:0,options:[],wrapper:b,input:l,hint:k,dropDown:j,prompt:e,setText:function(r){k.value=r;l.value=r},getText:function(){return l.value},o3DropDown:function(){d.o3()},repaint:function(){var x=l.value;var w=i.startFrom;var s=i.options;var r=s.length;var v=x.substring(w);m=x.substring(0,w);k.value="";for(var u=0;u<r;u++){var t=s[u];if(t.indexOf(v)===0){k.value=m+t;break}}j.style.left=h(m)+"px";d.refresh(v,i.options)}};var n;var g=function(r,t){n=r.value;var s=function(){var u=r.value;if(n!==u){n=u;t(u)}};if(r.addEventListener){r.addEventListener("input",s,false);r.addEventListener("keyup",s,false);r.addEventListener("change",s,false)}else{r.attachEvent("oninput",s);r.attachEvent("onkeyup",s);r.attachEvent("onchange",s)}};g(l,function(r){i.onChange(r)});var a=function(u){u=u||window.event;var t=u.keyCode;if(t==33){return}if(t==34){return}if(t==27){d.o3();k.value=l.value;l.focus();return}if(t==39||t==35||t==9){if(t==9){u.preventDefault();u.stopPropagation();if(k.value.length==0){i.onTab()}}if(k.value.length>0){d.o3();l.value=k.value;var v=n!=l.value;n=l.value;if(v){i.onChange(l.value)}}return}if(t==13){if(k.value.length==0){i.onEnter()}else{var s=(j.style.visibility=="hidden");d.o3();if(s){k.value=l.value;l.focus();i.onEnter();return}l.value=k.value;var v=n!=l.value;n=l.value;if(v){i.onChange(l.value)}}return}if(t==40){var r=d.o2(+1);if(r==""){i.onArrowDown()}k.value=m+r;return}if(t==38){var r=d.o2(-1);if(r==""){i.onArrowUp()}k.value=m+r;u.preventDefault();u.stopPropagation();return}k.value=""};if(l.addEventListener){l.addEventListener("keydown",a,false)}else{l.attachEvent("onkeydown",a)}return i};


var availableTags = [
"1",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"2",
"20",
"21",
"22",
"2thepaddocks",
"3",
"3thepaddocks",
"4",
"5",
"5bateslane",
"5thepaddocks",
"6",
"6lr",
"6ls",
"7",
"7hs",
"7ht",
"7hu",
"7hx",
"7hy",
"7hz",
"7ja",
"7jb",
"7jd",
"7je",
"7jf",
"7jh",
"7jj",
"7jl",
"7jn",
"7jp",
"7jq",
"7jr",
"7jt",
"7ju",
"7jw",
"7jx",
"7jy",
"7jz",
"7la",
"7lb",
"7ld",
"7le",
"7lg",
"7lj",
"7lq",
"8",
"9",
"a",
"above",
"abovethewellcottage",
"acacia",
"acaciabungalow",
"aeprentice",
"alley",
"alleycottage",
"annunciation",
"anvil",
"anvilcottage",
"applegarth",
"appleton",
"appletonlodge",
"ardeen",
"ardeenhouse",
"argyll",
"argyllhouse",
"audrey",
"audreywestburyhall",
"avondale",
"b4100",
"back",
"bakery",
"barn",
"barncottage",
"barnend",
"barnhouse",
"bates",
"bayleys",
"bear",
"bearcottage",
"beech",
"beechhouse",
"bicester",
"blessed",
"bovewell",
"bowcombe",
"bowling",
"bowlingleas",
"brambles",
"breeze",
"breezecottage",
"bulls",
"bullsheadcottage",
"bullsheadgarage",
"bungalow",
"burgess",
"cedar",
"cedarhouse",
"chapel",
"cheviot",
"church",
"cider",
"cidercottage",
"circles",
"close",
"coach",
"cotswold",
"cottage",
"cottages",
"court",
"courtcottage",
"croft",
"crooks",
"crooksfirs",
"crooksfirscottage",
"crown",
"crowncottage",
"daleview",
"deep",
"deepwell",
"deepwellcottage",
"dodgers",
"dodgerscottage",
"dovecote",
"dovecotebarn",
"dovetail",
"e",
"end",
"fairview",
"farm",
"field",
"fields",
"find",
"firs",
"forge",
"fox",
"foxglove",
"foxglovehouse",
"foxhill",
"foxhill",
"foxhillbarn",
"foxhillhouse",
"foxhollies",
"foxinn",
"fritwell",
"garage",
"garden",
"gardencottage",
"gate",
"gibbs",
"gibbsfieldhouse",
"granary",
"grandpas",
"grandpasbarn",
"grannys",
"grannyscottage",
"great",
"greystones",
"grounds",
"hackertys",
"hackertyslodge",
"hackertysway",
"halfpenny",
"halfpennycottage",
"hall",
"harrow",
"haven",
"head",
"hermitage",
"high",
"highland",
"highlandcottage",
"hill",
"hillcottage",
"hillhouse",
"hillside",
"hillviewcottage",
"hollies",
"holliesfarm",
"holly",
"hollycottage",
"home",
"homefarmhouse",
"house",
"inkerman",
"inkermanbarn",
"inkermanfarm",
"inkermanhouse",
"inn",
"josephs",
"k",
"keepers",
"keeperscottage",
"kenchs",
"kenchscottage",
"lane",
"lane",
"leas",
"leycroft",
"leycroftbarn",
"lilacs",
"little",
"littlecot",
"littleslam",
"lodge",
"lower",
"lowersoulderngrounds",
"magpie",
"magpiecottage",
"mallards",
"manor",
"manorbungalow",
"manorfarm",
"manorfarmbarn",
"mary",
"marys",
"mill",
"mount",
"mountpleasant",
"mullions",
"new",
"newcottage",
"nutcracker",
"nutcrackercottage",
"oakley",
"oakleycottage",
"of",
"office",
"old",
"oldchapel",
"olde",
"oldesaddlerscottage",
"orchard",
"ox25",
"ox27",
"paddocks",
"park",
"parkhouse",
"parklodge",
"phoenix",
"phoenixhouse",
"pleasant",
"pleasantview",
"ploughley",
"ploughleycottage",
"pond",
"pondcottage",
"portland",
"portlandcottage",
"post",
"postofficecottage",
"potting",
"prentice",
"pye",
"pyecottage",
"rectory",
"rectorycottage",
"reform",
"rest",
"restharrow",
"road",
"rock",
"rockcottage",
"rose",
"rosecottage",
"rosecroft",
"row",
"ryleens",
"saddlers",
"scaffolding",
"school",
"shed",
"silver",
"silverfindcottage",
"slam",
"smiths",
"smithscottage",
"somerton",
"souldern",
"soulderncourt",
"soulderngroundsfarm",
"souldernhouse",
"souldernhousecottage",
"souldernmanor",
"souldernmill",
"spring",
"springcottage",
"springhouse",
"st",
"st.",
"st.josephs",
"stable",
"stablecottage",
"stables",
"steeple",
"steeplehouse",
"stmaryschurch",
"stone",
"stonecroft",
"stonehaven",
"stores",
"street",
"sulthorn",
"sunnybank",
"sunrise",
"sunrisecottage",
"sunset",
"sunsetcottage",
"swan",
"tack",
"tackcottage",
"tchure",
"tchurehouse",
"the",
"the",
"thebarnhouse",
"thebrambles",
"thecottage",
"thegranary",
"thehermitage",
"thelodge",
"theoldbakery",
"theoldforge",
"theoldrectory",
"theoldschool",
"theoldstables",
"theorchard",
"thepottingshed",
"therock",
"theswanhouse",
"thewallhouse",
"tillys",
"tillyscottage",
"timber",
"timbercottage",
"tollgate",
"tollgatecottage",
"toosan",
"tower",
"towerfarmcottages",
"towerfields",
"towerhouse",
"treetops",
"trelawne",
"tudor",
"tudorcottage",
"turnpike",
"tusmore",
"view",
"village",
"villagehall",
"virgin",
"wall",
"way",
"well",
"wesleyan",
"westbury",
"westend",
"westendhouse",
"wharf",
"wharffarm",
"wharffarmcottage",
"willow",
"willowcottage",
"willowhouse",
"yew",
"yewcottage",
"yogis",
"yogiscottage"
];
var kwj  = {
 "hillhouse": {
kw: ['6ls', 'hill', 'hillhouse', 'house', 'ox25', 'road', 'somerton'],
nm: 'Hill House',
pc: 'OX25 6LS',
rd: 'Hill House, Somerton Road',
sv: 'https://goo.gl/maps/v33eRbJciTJ2',
}
,
 "thelodgehillhouse": {
kw: ['6lr', 'hill', 'house', 'lodge', 'ox25', 'road', 'somerton', 'the', 'thelodge'],
nm: 'The Lodge, Hill House',
pc: 'OX25 6LR',
rd: 'Hill House, Somerton Road',
sv: 'https://goo.gl/maps/MhJLsEhhMEk',
}
,
 "breezecottage": {
kw: ['6ls', 'breeze', 'breezecottage', 'cottage', 'hill', 'house', 'ox25', 'road', 'somerton'],
nm: 'Breeze Cottage',
pc: 'OX25 6LS',
rd: 'Hill House, Somerton Road',
sv: 'https://goo.gl/maps/iLaKd5uReeL2',
}
,
 "barncottage": {
kw: ['6ls', 'barn', 'barncottage', 'cottage', 'hill', 'house', 'ox25', 'road', 'somerton'],
nm: 'Barn Cottage',
pc: 'OX25 6LS',
rd: 'Hill House, Somerton Road',
sv: 'https://goo.gl/maps/v33eRbJciTJ2',
}
,
 "newcottage": {
kw: ['6ls', 'cottage', 'hill', 'house', 'new', 'newcottage', 'ox25', 'road', 'somerton'],
nm: 'New Cottage',
pc: 'OX25 6LS',
rd: 'Hill House, Somerton Road',
sv: 'https://goo.gl/maps/v33eRbJciTJ2',
}
,
 "tackcottage": {
kw: ['6ls', 'cottage', 'hill', 'house', 'ox25', 'road', 'somerton', 'tack', 'tackcottage'],
nm: 'Tack Cottage',
pc: 'OX25 6LS',
rd: 'Hill House, Somerton Road',
sv: 'https://goo.gl/maps/v33eRbJciTJ2',
}
,
 "lowersoulderngrounds": {
kw: ['6ls', 'grounds', 'lower', 'lowersoulderngrounds', 'ox25', 'road', 'somerton', 'souldern'],
nm: 'Lower Souldern Grounds',
pc: 'OX25 6LS',
rd: 'Somerton Road',
sv: 'https://goo.gl/maps/uMzKQKcJs2N2',
}
,
 "foxhillbarn": {
kw: ['7hs', 'barn', 'foxhill', 'foxhillbarn', 'lane', 'ox27', 'road', 'somerton'],
nm: 'Foxhill Barn',
pc: 'OX27 7HS',
rd: 'Foxhill Lane, Somerton Road',
sv: 'https://goo.gl/maps/BT1yRtQwLxv',
}
,
 "inkermanbarn": {
kw: ['7hs', 'barn', 'fritwell', 'inkerman', 'inkermanbarn', 'ox27', 'road'],
nm: 'Inkerman Barn',
pc: 'OX27 7HS',
rd: 'Fritwell Road',
sv: 'https://goo.gl/maps/6TsGGPqMS572',
}
,
 "inkermanfarm": {
kw: ['7hs', 'farm', 'fritwell', 'inkerman', 'inkermanfarm', 'ox27', 'road'],
nm: 'Inkerman Farm',
pc: 'OX27 7HS',
rd: 'Fritwell Road',
sv: 'https://goo.gl/maps/AAEUZRQ3aBH2',
}
,
 "inkermanhouse": {
kw: ['7hs', 'house', 'inkerman', 'inkermanhouse', 'ox27', 'road', 'somerton'],
nm: 'Inkerman House',
pc: 'OX27 7HS',
rd: 'Somerton Road',
sv: 'https://goo.gl/maps/BNf7FuSMb5S2',
}
,
 "aeprenticesoulderngate": {
kw: ['7ht', 'a', 'aeprentice', 'b4100', 'e', 'gate', 'k', 'ox27', 'prentice', 'scaffolding', 'souldern'],
nm: 'A E Prentice, Souldern Gate',
pc: 'OX27 7HT',
rd: 'B4100',
sv: 'https://goo.gl/maps/CpDqttiXnE12',
}
,
 "burgesssoulderngate": {
kw: ['7ht', 'b4100', 'burgess', 'gate', 'ox27', 'souldern'],
nm: 'Burgess, Souldern Gate',
pc: 'OX27 7HT',
rd: 'B4100',
sv: 'https://goo.gl/maps/pEURWWvJz2C2',
}
,
 "tollgatecottage": {
kw: ['7ht', 'b4100', 'cottage', 'ox27', 'tollgate', 'tollgatecottage'],
nm: 'Tollgate Cottage',
pc: 'OX27 7HT',
rd: 'B4100',
sv: 'https://goo.gl/maps/V6vKxkfYG8A2',
}
,
 "stmaryschurch": {
kw: ['7hu', 'annunciation', 'blessed', 'church', 'lane', 'mary', 'marys', 'of', 'ox27', 'st', 'stmaryschurch', 'the', 'the', 'virgin'],
nm: 'St Mary\'s Church',
pc: 'OX27 7HU',
rd: 'Church Lane',
sv: 'https://goo.gl/maps/TDm6AyrosgB2',
}
,
 "rectorycottage": {
kw: ['7hu', 'church', 'cottage', 'lane', 'ox27', 'rectory', 'rectorycottage'],
nm: 'Rectory Cottage',
pc: 'OX27 7HU',
rd: 'Church Lane',
sv: 'https://goo.gl/maps/TDm6AyrosgB2',
}
,
 "smithscottage": {
kw: ['7hu', 'church', 'cottage', 'lane', 'ox27', 'smiths', 'smithscottage'],
nm: 'Smiths Cottage',
pc: 'OX27 7HU',
rd: 'Church Lane',
sv: 'https://goo.gl/maps/LAE8UNejHiR2',
}
,
 "theoldrectory": {
kw: ['7hu', 'church', 'lane', 'old', 'ox27', 'rectory', 'the', 'theoldrectory'],
nm: 'The Old Rectory',
pc: 'OX27 7HU',
rd: 'Church Lane',
sv: 'https://goo.gl/maps/LAE8UNejHiR2',
}
,
 "crooksfirs": {
kw: ['7hx', 'crooks', 'crooksfirs', 'firs', 'ox27', 'road', 'tusmore'],
nm: 'Crooks Firs',
pc: 'OX27 7HX',
rd: 'Tusmore Road',
sv: 'https://goo.gl/maps/nCvEtwEwgSA2',
}
,
 "crooksfirscottage": {
kw: ['7hx', 'cottage', 'crooks', 'crooksfirscottage', 'firs', 'ox27', 'road', 'tusmore'],
nm: 'Crooks Firs Cottage',
pc: 'OX27 7HX',
rd: 'Tusmore Road',
sv: 'https://goo.gl/maps/nCvEtwEwgSA2',
}
,
 "towerfarmcottages": {
kw: ['7hy', 'cottages', 'farm', 'ox27', 'road', 'tower', 'towerfarmcottages', 'tusmore'],
nm: 'Tower Farm Cottages',
pc: 'OX27 7HY',
rd: 'Tusmore Road',
sv: 'https://goo.gl/maps/EtEeD3toJaN2',
}
,
 "towerfields": {
kw: ['7hy', 'fields', 'ox27', 'road', 'tower', 'towerfields', 'tusmore'],
nm: 'Tower Fields',
pc: 'OX27 7HY',
rd: 'Tusmore Road',
sv: 'https://goo.gl/maps/nCvEtwEwgSA2',
}
,
 "towerhouse": {
kw: ['7hy', 'house', 'ox27', 'road', 'tower', 'towerhouse', 'tusmore'],
nm: 'Tower House',
pc: 'OX27 7HY',
rd: 'Tusmore Road',
sv: 'https://goo.gl/maps/roCaWtXzWKG2',
}
,
 "bearcottage": {
kw: ['7hz', 'b4100', 'bear', 'bearcottage', 'cottage', 'ox27'],
nm: 'Bear Cottage',
pc: 'OX27 7HZ',
rd: 'B4100',
sv: 'https://goo.gl/maps/fLs2sqSVPuS2',
}
,
 "ploughleycottage": {
kw: ['7hz', 'b4100', 'cottage', 'ox27', 'ploughley', 'ploughleycottage'],
nm: 'Ploughley Cottage',
pc: 'OX27 7HZ',
rd: 'B4100',
sv: 'https://goo.gl/maps/gRJj4UfxqiS2',
}
,
 "theoldstables": {
kw: ['7hz', 'b4100', 'old', 'ox27', 'stables', 'the', 'theoldstables'],
nm: 'The Old Stables',
pc: 'OX27 7HZ',
rd: 'B4100',
sv: 'https://goo.gl/maps/NYwGkWvFniT2',
}
,
 "yogiscottage": {
kw: ['7hz', 'b4100', 'cottage', 'ox27', 'yogis', 'yogiscottage'],
nm: 'Yogis Cottage',
pc: 'OX27 7HZ',
rd: 'B4100',
sv: 'https://goo.gl/maps/FCePc4po8XE2',
}
,
 "1theturnpike": {
kw: ['1', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '1, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
sv: 'https://goo.gl/maps/dc8jMdnBznv',
}
,
 "2theturnpike": {
kw: ['2', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '2, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
sv: 'https://goo.gl/maps/kMt9YohxQc12',
}
,
 "3theturnpike": {
kw: ['3', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '3, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
sv: 'https://goo.gl/maps/JPMsvvcW6xn',
}
,
 "4theturnpike": {
kw: ['4', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '4, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
sv: 'https://goo.gl/maps/3h3A1R746wq',
}
,
 "1bovewell": {
kw: ['1', '7jb', 'bovewell', 'ox27'],
nm: '1, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/LJGuqeqbfP62',
}
,
 "2bovewell": {
kw: ['2', '7jb', 'bovewell', 'ox27'],
nm: '2, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/AQVQWvaYU9S2',
}
,
 "3bovewell": {
kw: ['3', '7jb', 'bovewell', 'ox27'],
nm: '3, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/YFYsoAgH5532',
}
,
 "4bovewell": {
kw: ['4', '7jb', 'bovewell', 'ox27'],
nm: '4, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/t14rz1mNJzt',
}
,
 "5bovewell": {
kw: ['5', '7jb', 'bovewell', 'ox27'],
nm: '5, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/L9YSPsaV8ir',
}
,
 "6bovewell": {
kw: ['6', '7jb', 'bovewell', 'ox27'],
nm: '6, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/ekBjRxhiyeF2',
}
,
 "7bovewell": {
kw: ['7', '7jb', 'bovewell', 'ox27'],
nm: '7, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/Gtau3Vuax1G2',
}
,
 "8bovewell": {
kw: ['7jb', '8', 'bovewell', 'ox27'],
nm: '8, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/FPdyb39fgjF2',
}
,
 "9bovewell": {
kw: ['7jb', '9', 'bovewell', 'ox27'],
nm: '9, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/ZgKqHNgMp352',
}
,
 "10bovewell": {
kw: ['10', '7jb', 'bovewell', 'ox27'],
nm: '10, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/YdNGVmZUo8E2',
}
,
 "11bovewell": {
kw: ['11', '7jb', 'bovewell', 'ox27'],
nm: '11, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/5EeSJn7LJfG2',
}
,
 "12bovewell": {
kw: ['12', '7jb', 'bovewell', 'ox27'],
nm: '12, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/39pGh783Ygs',
}
,
 "13bovewell": {
kw: ['13', '7jb', 'bovewell', 'ox27'],
nm: '13, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/9WaMLE4bfCq',
}
,
 "14bovewell": {
kw: ['14', '7jb', 'bovewell', 'ox27'],
nm: '14, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/Drvvo8csUd62',
}
,
 "15bovewell": {
kw: ['15', '7jb', 'bovewell', 'ox27'],
nm: '15, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/9WaMLE4bfCq',
}
,
 "16bovewell": {
kw: ['16', '7jb', 'bovewell', 'ox27'],
nm: '16, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/7YBKSfXN8xC2',
}
,
 "17bovewell": {
kw: ['17', '7jb', 'bovewell', 'ox27'],
nm: '17, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/9WaMLE4bfCq',
}
,
 "18bovewell": {
kw: ['18', '7jb', 'bovewell', 'ox27'],
nm: '18, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/WtSZ9etj34B2',
}
,
 "19bovewell": {
kw: ['19', '7jb', 'bovewell', 'ox27'],
nm: '19, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/9WaMLE4bfCq',
}
,
 "20bovewell": {
kw: ['20', '7jb', 'bovewell', 'ox27'],
nm: '20, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/hUcRJiRnunu',
}
,
 "21bovewell": {
kw: ['21', '7jb', 'bovewell', 'ox27'],
nm: '21, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/9WaMLE4bfCq',
}
,
 "22bovewell": {
kw: ['22', '7jb', 'bovewell', 'ox27'],
nm: '22, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
sv: 'https://goo.gl/maps/w1HeQA1yUAR2',
}
,
 "villagehall": {
kw: ['7jb', 'hall', 'hill', 'ox27', 'the', 'village', 'villagehall'],
nm: 'Village Hall',
pc: 'OX27 7JB',
rd: 'The Hill',
sv: 'https://goo.gl/maps/wmL4wvx8hpD2',
}
,
 "ardeenhouse": {
kw: ['7jd', 'ardeen', 'ardeenhouse', 'hill', 'house', 'ox27', 'the'],
nm: 'Ardeen House',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/FNW8DbdCoVx',
}
,
 "argyllhouse": {
kw: ['7jd', 'argyll', 'argyllhouse', 'hill', 'house', 'ox27', 'the'],
nm: 'Argyll House',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/nkDZdKpGssC2',
}
,
 "bowlingleas": {
kw: ['7jd', 'bowling', 'bowlingleas', 'hill', 'leas', 'ox27', 'the'],
nm: 'Bowling Leas',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/TCCYz9RLPuE2',
}
,
 "hillviewcottage": {
kw: ['7jd', 'cottage', 'hill', 'hillviewcottage', 'ox27', 'the', 'view'],
nm: 'Hill View Cottage',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/B38jTUw5ULU2',
}
,
 "hollycottage": {
kw: ['7jd', 'cottage', 'hill', 'holly', 'hollycottage', 'ox27', 'the'],
nm: 'Holly Cottage',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/X7VVNbKCBfo',
}
,
 "magpiecottage": {
kw: ['7jd', 'cottage', 'hill', 'magpie', 'magpiecottage', 'ox27', 'the'],
nm: 'Magpie Cottage',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/2EGLCWqnKnJ2',
}
,
 "mountpleasant": {
kw: ['7jd', 'hill', 'mount', 'mountpleasant', 'ox27', 'pleasant', 'the'],
nm: 'Mount Pleasant',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/7WGk7ij7Ky62',
}
,
 "trelawne": {
kw: ['7jd', 'hill', 'ox27', 'the', 'trelawne'],
nm: 'Trelawne',
pc: 'OX27 7JD',
rd: 'The Hill',
sv: 'https://goo.gl/maps/A9NSX61b3z62',
}
,
 "abovethewellcottage": {
kw: ['7je', 'above', 'abovethewellcottage', 'cottage', 'hill', 'ox27', 'the', 'the', 'well'],
nm: 'Above the Well Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/n1UpB5DgfGK2',
}
,
 "highlandcottage": {
kw: ['7je', 'bayleys', 'cottage', 'highland', 'highlandcottage', 'hill', 'ox27', 'the'],
nm: 'Highland Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/PnDN9yEn6FU2',
}
,
 "hillcottage": {
kw: ['7je', 'cottage', 'hill', 'hillcottage', 'ox27', 'the'],
nm: 'Hill Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/hCy13gTyJAK2',
}
,
 "hillside": {
kw: ['7je', 'hill', 'hillside', 'ox27', 'the'],
nm: 'Hillside',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/PnDN9yEn6FU2',
}
,
 "oakleycottage": {
kw: ['7je', 'cottage', 'hill', 'oakley', 'oakleycottage', 'ox27', 'the'],
nm: 'Oakley Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/EWapX1JYNGH2',
}
,
 "pondcottage": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'pond', 'pondcottage', 'the'],
nm: 'Pond Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/oGwziWjSKj52',
}
,
 "rockcottage": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'rock', 'rockcottage', 'the'],
nm: 'Rock Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/JM9WtGXyp692',
}
,
 "thecottagethehill": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'the', 'thecottage'],
nm: 'The Cottage, The Hill',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/gALGepQYZvt',
}
,
 "therock": {
kw: ['7je', 'hill', 'ox27', 'rock', 'the', 'therock'],
nm: 'The Rock',
pc: 'OX27 7JE',
rd: 'The Hill',
sv: 'https://goo.gl/maps/LkdffFwPGV32',
}
,
 "alleycottage": {
kw: ['7jf', 'alley', 'alleycottage', 'back', 'cottage', 'lane', 'ox27'],
nm: 'Alley Cottage',
pc: 'OX27 7JF',
rd: 'Back Lane',
sv: 'https://goo.gl/maps/JAGKjT8JjLM2',
}
,
 "holliesfarm": {
kw: ['7jf', 'back', 'close', 'farm', 'great', 'hollies', 'holliesfarm', 'house', 'lane', 'ox27'],
nm: 'Hollies Farm',
pc: 'OX27 7JF',
rd: 'Back Lane',
sv: 'https://goo.gl/maps/rpCG3L59ibw',
}
,
 "springcottage": {
kw: ['7jf', 'back', 'cottage', 'lane', 'ox27', 'spring', 'springcottage'],
nm: 'Spring Cottage',
pc: 'OX27 7JF',
rd: 'Back Lane',
sv: 'https://goo.gl/maps/HhkFHoyz7RJ2',
}
,
 "springhouse": {
kw: ['7jf', 'back', 'house', 'lane', 'ox27', 'spring', 'springhouse'],
nm: 'Spring House',
pc: 'OX27 7JF',
rd: 'Back Lane',
sv: 'https://goo.gl/maps/AMkj2fyuhb32',
}
,
 "audreywestburyhall": {
kw: ['7jf', 'audrey', 'audreywestburyhall', 'back', 'chapel', 'hall', 'lane', 'ox27', 'reform', 'wesleyan', 'westbury'],
nm: 'Audrey Westbury Hall',
pc: 'OX27 7JF',
rd: 'Back Lane',
sv: 'https://goo.gl/maps/gr1DHrrMaPN2',
}
,
 "courtcottage": {
kw: ['7jh', 'cottage', 'court', 'courtcottage', 'high', 'ox27', 'street'],
nm: 'Court Cottage',
pc: 'OX27 7JH',
rd: 'High Street',
sv: 'https://goo.gl/maps/rdhUApnSEwN2',
}
,
 "soulderncourt": {
kw: ['7jh', 'back', 'court', 'lane', 'ox27', 'souldern', 'soulderncourt'],
nm: 'Souldern Court',
pc: 'OX27 7JH',
rd: 'Back lane',
sv: 'https://goo.gl/maps/qTsxnWPq4c32',
}
,
 "theoldbakery1highstreet": {
kw: ['1', '7jj', 'bakery', 'high', 'old', 'ox27', 'street', 'the', 'theoldbakery'],
nm: 'The Old Bakery, 1, High Street',
pc: 'OX27 7JJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/zGVesAkW3X52',
}
,
 "barnend": {
kw: ['7jj', 'barn', 'barnend', 'end', 'high', 'ox27', 'street'],
nm: 'Barn End',
pc: 'OX27 7JJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/4F2tnta3BLG2',
}
,
 "dodgerscottage": {
kw: ['7jj', 'cottage', 'dodgers', 'dodgerscottage', 'high', 'ox27', 'street'],
nm: 'Dodgers Cottage',
pc: 'OX27 7JJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/zdnmFrGbhRq',
}
,
 "mallards": {
kw: ['7jj', 'high', 'mallards', 'ox27', 'street'],
nm: 'Mallards',
pc: 'OX27 7JJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/cpwmV3cP3Jv',
}
,
 "beechhouse": {
kw: ['7jl', 'beech', 'beechhouse', 'farm', 'high', 'house', 'manor', 'ox27', 'road', 'street'],
nm: 'Beech House',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/cXgDqv44HXQ2',
}
,
 "manorfarm": {
kw: ['7jl', 'farm', 'high', 'manor', 'manorfarm', 'ox27', 'road', 'street'],
nm: 'Manor Farm',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/yHNAbisxrPE2',
}
,
 "barnhouse": {
kw: ['7jl', 'barn', 'barnhouse', 'farm', 'high', 'house', 'manor', 'ox27', 'road', 'street'],
nm: 'Barnhouse',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "dovecote": {
kw: ['7jl', 'dovecote', 'farm', 'high', 'manor', 'ox27', 'road', 'street'],
nm: 'Dovecote',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "manorfarmbarn": {
kw: ['7jl', 'barn', 'farm', 'high', 'manor', 'manorfarmbarn', 'ox27', 'road', 'street'],
nm: 'Manor Farm Barn',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "steeplehouse": {
kw: ['7jl', 'farm', 'high', 'house', 'manor', 'ox27', 'road', 'steeple', 'steeplehouse', 'street'],
nm: 'Steeple House',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "stonehaven": {
kw: ['7jl', 'farm', 'haven', 'high', 'manor', 'ox27', 'road', 'stone', 'stonehaven', 'street'],
nm: 'Stone Haven',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "thegranary": {
kw: ['7jl', 'farm', 'granary', 'high', 'manor', 'ox27', 'road', 'street', 'the', 'thegranary'],
nm: 'The Granary',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "thepottingshed": {
kw: ['7jl', 'farm', 'high', 'manor', 'ox27', 'potting', 'road', 'shed', 'street', 'the', 'thepottingshed'],
nm: 'The Potting Shed',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "treetops": {
kw: ['7jl', 'farm', 'high', 'manor', 'ox27', 'road', 'street', 'treetops'],
nm: 'Treetops',
pc: 'OX27 7JL',
rd: 'Manor Farm Road, High Street',
sv: 'https://goo.gl/maps/vYm8iLgVEVv',
}
,
 "mullions": {
kw: ['7jn', 'high', 'mullions', 'ox27', 'street'],
nm: 'Mullions',
pc: 'OX27 7JN',
rd: 'High Street',
sv: 'https://goo.gl/maps/Koc2NftFnVr',
}
,
 "thehermitage": {
kw: ['7jn', 'hermitage', 'high', 'ox27', 'street', 'the', 'thehermitage'],
nm: 'The Hermitage',
pc: 'OX27 7JN',
rd: 'High Street',
sv: 'https://goo.gl/maps/HLZeWb81vVP2',
}
,
 "theoldschool": {
kw: ['7jn', 'high', 'old', 'ox27', 'school', 'street', 'the', 'theoldschool'],
nm: 'The Old School',
pc: 'OX27 7JN',
rd: 'High Street',
sv: 'https://goo.gl/maps/9jEicNw9fFG2',
}
,
 "thewallhouse": {
kw: ['7jn', 'coach', 'high', 'house', 'ox27', 'street', 'the', 'thewallhouse', 'wall'],
nm: 'The Wall House',
pc: 'OX27 7JN',
rd: 'High Street',
sv: 'https://goo.gl/maps/CJLQ9A4dsDs',
}
,
 "anvilcottage": {
kw: ['7jp', 'anvil', 'anvilcottage', 'cottage', 'high', 'ox27', 'street'],
nm: 'Anvil Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/R9DTZfz5JKM2',
}
,
 "thebarnhouse": {
kw: ['7jp', 'barn', 'high', 'house', 'ox27', 'street', 'the', 'thebarnhouse'],
nm: 'The Barn House',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/4YF7o6xJ6pH2',
}
,
 "bullsheadgarage": {
kw: ['7jp', 'bulls', 'bullsheadgarage', 'garage', 'head', 'high', 'ox27', 'street'],
nm: 'Bulls Head Garage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/sTDkPfdjFEU2',
}
,
 "bullsheadcottage": {
kw: ['7jp', 'bulls', 'bullsheadcottage', 'cottage', 'head', 'high', 'ox27', 'street'],
nm: 'Bulls Head Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/onRN8hkbSvm',
}
,
 "deepwellcottage": {
kw: ['7jp', 'cottage', 'deep', 'deepwell', 'deepwellcottage', 'high', 'ox27', 'street', 'well'],
nm: 'Deep Well Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/U5cXcaqq9HN2',
}
,
 "postofficecottage": {
kw: ['7jp', 'cottage', 'high', 'office', 'ox27', 'post', 'postofficecottage', 'street'],
nm: 'Post Office Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/UD5h5AHt2iPufL167',
}
,
 "kenchscottage": {
kw: ['7jp', 'cottage', 'high', 'kenchs', 'kenchscottage', 'ox27', 'street'],
nm: 'Kenchs Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/jMZfv2ob77U2',
}
,
 "foxhillhouse": {
kw: ['7jp', 'foxhill', 'foxhillhouse', 'high', 'house', 'ox27', 'street'],
nm: 'Foxhill House',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/eqKBtdZQgor',
}
,
 "grandpasbarn": {
kw: ['7jp', 'barn', 'grandpas', 'grandpasbarn', 'high', 'ox27', 'street'],
nm: 'Grandpas Barn',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/36NidDWQBvJ2',
}
,
 "littleslam": {
kw: ['7jp', 'high', 'little', 'littleslam', 'ox27', 'slam', 'street'],
nm: 'Little Slam',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/G9qax8gADXw',
}
,
 "nutcrackercottage": {
kw: ['7jp', 'cottage', 'high', 'nutcracker', 'nutcrackercottage', 'ox27', 'street'],
nm: 'Nutcracker Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/EWWPgmremPG2',
}
,
 "theoldforge": {
kw: ['7jp', 'forge', 'high', 'old', 'ox27', 'street', 'the', 'theoldforge'],
nm: 'The Old Forge',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/tgzBBiRznBt',
}
,
 "portlandcottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'portland', 'portlandcottage', 'street'],
nm: 'Portland Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/RxFnQ4SwQdt',
}
,
 "ryleens": {
kw: ['7jp', 'high', 'ox27', 'ryleens', 'street'],
nm: 'Ryleens',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/47TMBr7TtA52',
}
,
 "thecottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'street', 'the', 'thecottage'],
nm: 'The Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/ve6jAwWdBEz',
}
,
 "timbercottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'street', 'timber', 'timbercottage'],
nm: 'Timber Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/N6CNaGu8hC42',
}
,
 "tudorcottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'street', 'tudor', 'tudorcottage'],
nm: 'Tudor Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/QW8sc68hvL42',
}
,
 "pyecottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'pye', 'pyecottage', 'street'],
nm: 'Pye Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
sv: 'https://goo.gl/maps/6oFNmiWnkmL2',
}
,
 "3churchlane": {
kw: ['3', '7jq', 'church', 'lane', 'ox27'],
nm: '3, Church Lane',
pc: 'OX27 7JQ',
rd: 'Church Lane',
sv: 'https://goo.gl/maps/pE8p5Qr2e5k',
}
,
 "grannyscottage": {
kw: ['7jq', 'church', 'cottage', 'grannys', 'grannyscottage', 'lane', 'ox27'],
nm: 'Grannys Cottage',
pc: 'OX27 7JQ',
rd: 'Church Lane',
sv: 'https://goo.gl/maps/1Pty2CL2yHt',
}
,
 "1chapelrow": {
kw: ['1', '7jr', 'chapel', 'ox27', 'row'],
nm: '1, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
sv: 'https://goo.gl/maps/7Bzmo8LSVJ72',
}
,
 "2chapelrow": {
kw: ['2', '7jr', 'chapel', 'ox27', 'row'],
nm: '2, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
sv: 'https://goo.gl/maps/7Bzmo8LSVJ72',
}
,
 "3chapelrow": {
kw: ['3', '7jr', 'chapel', 'ox27', 'row'],
nm: '3, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
sv: 'https://goo.gl/maps/7Bzmo8LSVJ72',
}
,
 "4chapelrow": {
kw: ['4', '7jr', 'chapel', 'ox27', 'row'],
nm: '4, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
sv: 'https://goo.gl/maps/7Bzmo8LSVJ72',
}
,
 "5chapelrow": {
kw: ['5', '7jr', 'chapel', 'ox27', 'row'],
nm: '5, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
sv: 'https://goo.gl/maps/7Bzmo8LSVJ72',
}
,
 "gardencottage": {
kw: ['7jt', 'bates', 'cottage', 'garden', 'gardencottage', 'lane', 'ox27'],
nm: 'Garden Cottage',
pc: 'OX27 7JT',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/6WT3wHATtE52',
}
,
 "manorbungalow": {
kw: ['7jt', 'bates', 'bungalow', 'lane', 'manor', 'manorbungalow', 'ox27'],
nm: 'Manor Bungalow',
pc: 'OX27 7JT',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/6WT3wHATtE52',
}
,
 "souldernmanor": {
kw: ['7jt', 'bates', 'lane', 'manor', 'ox27', 'souldern', 'souldernmanor'],
nm: 'Souldern Manor',
pc: 'OX27 7JT',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/DRp3KhKXdHU2',
}
,
 "5bateslane": {
kw: ['5', '5bateslane', '7ju', 'bates', 'lane', 'ox27'],
nm: '5 Bates Lane',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/5Hn65DWeFLL2',
}
,
 "applegarth": {
kw: ['7ju', 'applegarth', 'bates', 'lane', 'ox27'],
nm: 'Applegarth',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/3zRaevgUBNU2',
}
,
 "phoenixhouse": {
kw: ['7ju', 'bates', 'bowcombe', 'house', 'lane', 'ox27', 'phoenix', 'phoenixhouse'],
nm: 'Phoenix House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/PAMuzWQ47Nm',
}
,
 "cidercottage": {
kw: ['7ju', 'bates', 'cider', 'cidercottage', 'cottage', 'lane', 'ox27'],
nm: 'Cider Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/fj4n2JX5uuz',
}
,
 "crowncottage": {
kw: ['7ju', 'bates', 'cottage', 'crown', 'crowncottage', 'lane', 'ox27'],
nm: 'Crown Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/ZvQmvQXJdWL2',
}
,
 "dovecotebarn": {
kw: ['7ju', 'barn', 'bates', 'dovecote', 'dovecotebarn', 'lane', 'ox27'],
nm: 'Dovecote Barn',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/t1gat4nWs312',
}
,
 "keeperscottage": {
kw: ['7ju', 'bates', 'cottage', 'keepers', 'keeperscottage', 'lane', 'ox27'],
nm: 'Keepers Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/mygrR9e5Nks',
}
,
 "greystones": {
kw: ['7ju', 'bates', 'greystones', 'lane', 'ox27'],
nm: 'Greystones',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/ga8d666AgD92',
}
,
 "halfpennycottage": {
kw: ['7ju', 'bates', 'cottage', 'halfpenny', 'halfpennycottage', 'lane', 'ox27'],
nm: 'Halfpenny Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/i45X7Y938Kv',
}
,
 "homefarmhouse": {
kw: ['7ju', 'bates', 'farm', 'home', 'homefarmhouse', 'house', 'lane', 'ox27'],
nm: 'Home Farm House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/t9PijYf4VoP2',
}
,
 "littlecot": {
kw: ['7ju', 'bates', 'lane', 'littlecot', 'ox27'],
nm: 'Littlecot',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/fJHNDtTcrgu',
}
,
 "oldesaddlerscottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'olde', 'oldesaddlerscottage', 'ox27', 'saddlers'],
nm: 'Olde Saddlers Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/FY2WKGCrh3w',
}
,
 "tillyscottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'tillys', 'tillyscottage'],
nm: 'Tillys Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/w6sBNmLrd7Q2',
}
,
 "rosecottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'rose', 'rosecottage'],
nm: 'Rose Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/4Goo7qgsnMo',
}
,
 "silverfindcottage": {
kw: ['7ju', 'bates', 'cottage', 'find', 'lane', 'ox27', 'silver', 'silverfindcottage'],
nm: 'Silver Find Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/zhPfYdv4Two',
}
,
 "stablecottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'stable', 'stablecottage'],
nm: 'Stable Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/KP7ciTQVi5G2',
}
,
 "sunrisecottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'sunrise', 'sunrisecottage'],
nm: 'Sunrise Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/jfrB7BPyRfr',
}
,
 "sunsetcottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'sunset', 'sunsetcottage'],
nm: 'Sunset Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/jfrB7BPyRfr',
}
,
 "thebrambles": {
kw: ['7ju', 'bates', 'brambles', 'lane', 'ox27', 'the', 'thebrambles'],
nm: 'The Brambles',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/5xEQFioZ8LE2',
}
,
 "theorchard": {
kw: ['7ju', 'bates', 'lane', 'orchard', 'ox27', 'the', 'theorchard'],
nm: 'The Orchard',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/2ErSVDsoZNw',
}
,
 "westendhouse": {
kw: ['7ju', 'bates', 'house', 'lane', 'ox27', 'westend', 'westendhouse'],
nm: 'Westend House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/E24tjq1o9ir',
}
,
 "willowcottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'willow', 'willowcottage'],
nm: 'Willow Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/iPtUcb3SNzD2',
}
,
 "yewcottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'yew', 'yewcottage'],
nm: 'Yew Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
sv: 'https://goo.gl/maps/YQDj2yh8URq',
}
,
 "avondale": {
kw: ['7jw', 'avondale', 'fox', 'lane', 'ox27'],
nm: 'Avondale',
pc: 'OX27 7JW',
rd: 'Fox Lane',
sv: 'https://goo.gl/maps/6ZH3xupTdpH2',
}
,
 "1foxlane": {
kw: ['1', '7jw', 'fox', 'lane', 'lane', 'ox27'],
nm: '1, Fox lane',
pc: 'OX27 7JW',
rd: 'Fox Lane',
sv: 'https://goo.gl/maps/LbMYBHE4MD52',
}
,
 "fairview": {
kw: ['7jw', 'fairview', 'fox', 'lane', 'ox27'],
nm: 'Fairview',
pc: 'OX27 7JW',
rd: 'Fox Lane',
sv: 'https://goo.gl/maps/LbMYBHE4MD52',
}
,
 "foxinn": {
kw: ['7jw', 'fox', 'foxinn', 'inn', 'lane', 'ox27'],
nm: 'Fox Inn',
pc: 'OX27 7JW',
rd: 'Fox Lane',
sv: 'https://goo.gl/maps/gAP7AzafbLE2',
}
,
 "theswanhouse": {
kw: ['7jw', 'fox', 'house', 'lane', 'ox27', 'swan', 'the', 'theswanhouse'],
nm: 'The Swan House',
pc: 'OX27 7JW',
rd: 'Fox Lane',
sv: 'https://goo.gl/maps/pES9yL8qTTu',
}
,
 "leycroftbarn": {
kw: ['7jx', 'barn', 'leycroft', 'leycroftbarn', 'ox27', 'road', 'somerton'],
nm: 'Leycroft Barn',
pc: 'OX27 7JX',
rd: 'Somerton Road',
sv: 'https://goo.gl/maps/v33eRbJciTJ2',
}
,
 "soulderngroundsfarm": {
kw: ['7jy', 'farm', 'grounds', 'ox27', 'souldern', 'soulderngroundsfarm'],
nm: 'Souldern Grounds Farm',
pc: 'OX27 7JY',
rd: '',
sv: 'https://goo.gl/maps/fQGz46UwYdQ2',
}
,
 "acaciabungalow": {
kw: ['7jz', 'acacia', 'acaciabungalow', 'bungalow', 'foxhill', 'lane', 'ox27'],
nm: 'Acacia Bungalow',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/oB5hqnMiwbT2',
}
,
 "cheviot": {
kw: ['7jz', 'cheviot', 'foxhill', 'lane', 'ox27'],
nm: 'Cheviot',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/PaYSK3r8wGB2',
}
,
 "circles": {
kw: ['7jz', 'circles', 'foxhill', 'lane', 'ox27'],
nm: 'Circles',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/AVAsyzwZ7WU2',
}
,
 "daleview": {
kw: ['7jz', 'daleview', 'foxhill', 'lane', 'ox27'],
nm: 'Daleview',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/pHApH5XGN162',
}
,
 "dovetail": {
kw: ['7jz', 'dovetail', 'foxhill', 'lane', 'ox27'],
nm: 'Dovetail',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/52JiZqMkAxo',
}
,
 "foxhill": {
kw: ['7jz', 'fox', 'foxhill', 'foxhill', 'hill', 'lane', 'lilacs', 'ox27', 'the'],
nm: 'Fox Hill',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/zWg5TxKcE682',
}
,
 "foxhollies": {
kw: ['7jz', 'fox', 'foxhill', 'foxhollies', 'hollies', 'lane', 'ox27'],
nm: 'Fox Hollies',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/gwmfUBDn1iv',
}
,
 "gibbsfieldhouse": {
kw: ['7jz', 'field', 'foxhill', 'gibbs', 'gibbsfieldhouse', 'house', 'lane', 'ox27'],
nm: 'Gibbs Field House',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/xemKCdK3pkE2',
}
,
 "pleasantview": {
kw: ['7jz', 'bicester', 'close', 'foxhill', 'lane', 'ox27', 'pleasant', 'pleasantview', 'view'],
nm: 'Pleasant View',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/Yz4wvTwzkUo',
}
,
 "rosecroft": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'rosecroft'],
nm: 'Rosecroft',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/7iw5iTzuPEx',
}
,
 "stonecroft": {
kw: ['7jz', 'croft', 'foxhill', 'lane', 'ox27', 'stone', 'stonecroft'],
nm: 'Stone Croft',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/MvNoAanTVbE2',
}
,
 "sulthorn": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'sulthorn'],
nm: 'Sulthorn',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/fEkt4EjZrR82',
}
,
 "sunnybank": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'sunnybank'],
nm: 'Sunnybank',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/rmojpDQE5nr',
}
,
 "tchurehouse": {
kw: ['7jz', 'foxhill', 'house', 'lane', 'ox27', 'tchure', 'tchurehouse'],
nm: 'Tchure House',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/wqs2wBTZwDQ2',
}
,
 "toosan": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'toosan'],
nm: 'Toosan',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/KccxSAhc6tt',
}
,
 "willowhouse": {
kw: ['7jz', 'foxhill', 'house', 'lane', 'ox27', 'willow', 'willowhouse'],
nm: 'Willow House',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
sv: 'https://goo.gl/maps/Ne5xA8PLs7T2',
}
,
 "appletonlodge": {
kw: ['7la', 'appleton', 'appletonlodge', 'high', 'lane', 'lodge', 'ox27', 'street', 'wharf'],
nm: 'Appleton Lodge',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/erqeATaiHPv',
}
,
 "oldchapelsouldernmanor": {
kw: ['7la', 'chapel', 'high', 'manor', 'old', 'oldchapel', 'ox27', 'souldern', 'street'],
nm: 'Old Chapel, Souldern Manor',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/mKFTqNzuMJS2',
}
,
 "cedarhouse": {
kw: ['7la', 'cedar', 'cedarhouse', 'high', 'house', 'ox27', 'street'],
nm: 'Cedar House',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/VyrwUCpjXH72',
}
,
 "parkhouse": {
kw: ['7la', 'high', 'house', 'ox27', 'park', 'parkhouse', 'street'],
nm: 'Park House',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/xhrHwmGKBEU2',
}
,
 "parklodge": {
kw: ['7la', 'high', 'lodge', 'ox27', 'park', 'parklodge', 'street'],
nm: 'Park Lodge',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/QN49v9j8igx',
}
,
 "restharrow": {
kw: ['7la', 'harrow', 'high', 'ox27', 'rest', 'restharrow', 'street'],
nm: 'Rest Harrow',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/VyrwUCpjXH72',
}
,
 "souldernhouse": {
kw: ['7la', 'high', 'house', 'ox27', 'souldern', 'souldernhouse', 'street'],
nm: 'Souldern House',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/NBqjdeZnRo22',
}
,
 "souldernhousecottage": {
kw: ['7la', 'cottage', 'high', 'house', 'ox27', 'souldern', 'souldernhousecottage', 'street'],
nm: 'Souldern House Cottage',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/VyrwUCpjXH72',
}
,
 "st.josephs": {
kw: ['7la', 'high', 'josephs', 'ox27', 'st.', 'st.josephs', 'street'],
nm: 'St. Josephs',
pc: 'OX27 7LA',
rd: 'High Street',
sv: 'https://goo.gl/maps/PRiK415nXyE2',
}
,
 "hackertysway": {
kw: ['7lb', 'hackertys', 'hackertysway', 'lane', 'mill', 'ox27', 'way'],
nm: 'Hackerty\'s Way',
pc: 'OX27 7LB',
rd: 'Mill Lane',
sv: 'https://goo.gl/maps/g6PVW9v1d4S2',
}
,
 "hackertyslodge": {
kw: ['7lb', 'hackertys', 'hackertyslodge', 'lane', 'lodge', 'mill', 'ox27'],
nm: 'Hackerty\'s Lodge',
pc: 'OX27 7LB',
rd: 'Mill Lane',
sv: 'https://goo.gl/maps/g6PVW9v1d4S2',
}
,
 "souldernmill": {
kw: ['7lb', 'lane', 'mill', 'ox27', 'souldern', 'souldernmill'],
nm: 'Souldern Mill',
pc: 'OX27 7LB',
rd: 'Mill Lane',
sv: 'https://goo.gl/maps/g6PVW9v1d4S2',
}
,
 "1wharflane": {
kw: ['1', '7ld', 'lane', 'ox27', 'wharf'],
nm: '1, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
sv: 'https://goo.gl/maps/kVJesaCPhdF2',
}
,
 "2wharflane": {
kw: ['2', '7ld', 'lane', 'ox27', 'wharf'],
nm: '2, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
sv: 'https://goo.gl/maps/MfNyCwzGaUx',
}
,
 "3wharflane": {
kw: ['3', '7ld', 'lane', 'ox27', 'wharf'],
nm: '3, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
sv: 'https://goo.gl/maps/f4ZzgurU6vy',
}
,
 "4wharflane": {
kw: ['4', '7ld', 'lane', 'ox27', 'wharf'],
nm: '4, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
sv: 'https://goo.gl/maps/b1RMQ77gcb52',
}
,
 "wharffarm": {
kw: ['7le', 'farm', 'lane', 'ox27', 'wharf', 'wharffarm'],
nm: 'Wharf Farm',
pc: 'OX27 7LE',
rd: 'Wharf Lane',
sv: 'https://goo.gl/maps/rzAesE8YPyy',
}
,
 "wharffarmcottage": {
kw: ['7le', 'cottage', 'farm', 'lane', 'ox27', 'wharf', 'wharffarmcottage'],
nm: 'Wharf Farm Cottage',
pc: 'OX27 7LE',
rd: 'Wharf Lane',
sv: 'https://goo.gl/maps/WAiZYGf3zxF2',
}
,
 "1thepaddocks": {
kw: ['1', '7lg', 'ox27', 'paddocks', 'the'],
nm: '1, The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
sv: 'https://goo.gl/maps/YGKu8EYPto42',
}
,
 "2thepaddocks": {
kw: ['2', '2thepaddocks', '7lg', 'ox27', 'paddocks', 'the'],
nm: '2 The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
sv: 'https://goo.gl/maps/YGKu8EYPto42',
}
,
 "3thepaddocks": {
kw: ['3', '3thepaddocks', '7lg', 'ox27', 'paddocks', 'the'],
nm: '3 The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
sv: 'https://goo.gl/maps/YGKu8EYPto42',
}
,
 "foxglovehouse4thepaddocks": {
kw: ['4', '7lg', 'foxglove', 'foxglovehouse', 'house', 'ox27', 'paddocks', 'the'],
nm: 'Foxglove House, 4, The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
sv: 'https://goo.gl/maps/YGKu8EYPto42',
}
,
 "5thepaddocks": {
kw: ['5', '5thepaddocks', '7lg', 'ox27', 'paddocks', 'the'],
nm: '5 The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
sv: 'https://goo.gl/maps/YGKu8EYPto42',
}
,
 "1theoldstores": {
kw: ['1', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '1, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/CtqgciDT2FP2',
}
,
 "2theoldstores": {
kw: ['2', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '2, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/HMUWFxABfuu',
}
,
 "3theoldstores": {
kw: ['3', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '3, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/jq6PruM4p6Q2',
}
,
 "4theoldstores": {
kw: ['4', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '4, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
sv: 'https://goo.gl/maps/3kRxYAs9D8y',
}
,
 "1cotswoldcourt": {
kw: ['1', '7lq', 'cotswold', 'court', 'ox27'],
nm: '1, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
sv: 'https://goo.gl/maps/CPWDCVEHWBR2',
}
,
 "2cotswoldcourt": {
kw: ['2', '7lq', 'cotswold', 'court', 'ox27'],
nm: '2, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
sv: 'https://goo.gl/maps/CPWDCVEHWBR2',
}
,
 "3cotswoldcourt": {
kw: ['3', '7lq', 'cotswold', 'court', 'ox27'],
nm: '3, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
sv: 'https://goo.gl/maps/CPWDCVEHWBR2',
}
,
 "4cotswoldcourt": {
kw: ['4', '7lq', 'cotswold', 'court', 'ox27'],
nm: '4, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
sv: 'https://goo.gl/maps/CPWDCVEHWBR2',
}
};



function KeyWordMatch(kw,k2) {
    tr=0;

    var pos = k2.indexOf("*");
    if (pos < 0) {
        // exact match
        for (var j=0;j < kw.length;j++) {
            if (kw[j]==k2) {
                tr=1;
                break;
            }
        }
    } else {
        var this_k2 = k2.replace("*",".*");
        var re = new RegExp(this_k2);
        for (var j=0;j < kw.length;j++) {
            var pos = kw[j].search(re);
            if (pos==0) {
                tr=1;
                break;
            }
        }
    }
    
    return tr;
}

var r;
var rc;
var p;
function myupdate(terms) {
    var rtncount=0;
    var newhints={};
    var newhintsa = [];
    for (var key in kwj) {
        var tr=0;
        for (var i=0;i < terms.length-1; i++) {
            if (terms[i]==="") {
                break;
            }
            tr = KeyWordMatch(kwj[key].kw, terms[i]);
            if(tr==0) {
                break;
            } 
        }
        if(tr==1) {
            rtncount++;
            for (var j=0;j < kwj[key].kw.length;j++) {
                newhints[kwj[key].kw[j]]=kwj[key].kw[j];
            }
        }
    }
    
    for (var i=0;i < terms.length; i++) {
        newhints[terms[i]]="";
    }
    
    for(var k in newhints) {
        if(newhints[k] != "") {
            newhintsa.push(k);
        }
    }
    rc.innerHTML= "Results found: " +rtncount;
    return newhintsa.sort(
    function( a, b ) {
      return a < b ? -1 : a > b ? 1 : 0;
        }
    );
}

/*
  IE Doesn't have .startsWith
*/
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (str){
    return this.lastIndexOf(str, 0) === 0;
  };
}

var kwic=0;
function myresults(terms) {
    var rtncount=0;
    var t="";
    for (var key in kwj) {
        var tr=0;
        for (var i=0;i < terms.length; i++) {
            tr = KeyWordMatch(kwj[key].kw, terms[i]);
            if(tr==0 && terms[i]!='') {
                break;
            } 
        }
        
        if(tr==1) {
            rtncount++;
            t = t + "<div class='res'><div class='rtn'><b>"  + kwj[key].nm + "</b><br>" +
            (kwj[key].sv == "" ? "" : "<a href='" + kwj[key].sv + "'>") +
            "<img src='" +key + ".jpg'>" +
            (kwj[key].sv == "" ? "" : "</a>") +
            "</div><div class='sd'>" + kwj[key].rd + " " + kwj[key].pc + "</div></div>";;
        }
    }
    rc.innerHTML= "Results found: " +rtncount;
    if(rtncount > 0) {
        r.innerHTML="<h2>Results</h2><div class='res'><div class='rtn' style='vertical-align:bottom'><b>House<br/>Name</b></div><div class='sd' style='vertical-align:bottom;'><b>&#160;Details&#160;</b></div></div>" +t;
    }
    }
    

var initialkwic=0;

function startsouldernsearch () {
r=document.getElementById("results");
rc=document.getElementById("rtncount");
	p = completely(document.getElementById('kwinput'),
		       {
			   fontFamily:'sans-serif',
			   fontSize:'26px',
			   promptInnerHTML : ''
		       }
		       );
 p.options = [];
 p.onEnter = function () {
 var text=p.getText();
 var terms = text.split(' ');
 if(terms.length>0){myresults(terms);}
  };
 p.onChange = function (text) {
   text=text.toLowerCase().replace(/'/,"");
   p.setText(text);
   var terms = text.split(' ');
   if(terms.length>1){
    p.options=myupdate(terms);
   } else {
    if(initialkwic==0) rc.innerHTML= "\u00a0";
    p.options = availableTags;
    if (kwic==1 && initialkwic==0) r.innerHTML="";
 };
 initialkwic=0;
 p.startFrom = text.lastIndexOf(' ')+1;
 p.repaint();
};


if(kwic==1) setTimeout(function() { p.input.focus(); p.repaint(); },0);

if(window.location.search.indexOf('?h=') == 0) {
 initialkwic=1;
 p.setText(window.location.search.substring(window.location.search.lastIndexOf('?h=')+3).replace(/\+/g,' '));
 p.input.focus();
 p.onEnter();
 }
 }

if ( window.attachEvent && navigator.userAgent.match(/MSIE [6-9][^0-9]/)) {
    window.attachEvent("onload", startsouldernsearch);
} else if ( window.addEventListener) {
    window.addEventListener('load', startsouldernsearch, false);
} 





  //</script>