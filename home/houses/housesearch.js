
  //<script>

 
// http://complete-ly.appspot.com/
// MIT Licence
function completely(c,f){f=f||{};f.fontSize=f.fontSize||"16px";f.fontFamily=f.fontFamily||"sans-serif";f.promptInnerHTML=f.promptInnerHTML||"";f.color=f.color||"#333";f.hintColor=f.hintColor||"#aaa";f.backgroundColor=f.backgroundColor||"#fff";f.dropDownBorderColor=f.dropDownBorderColor||"#aaa";f.dropDownZIndex=f.dropDownZIndex||"100";f.dropDownOnHoverBackgroundColor=f.dropDownOnHoverBackgroundColor||"#ddd";var l=document.createElement("input");l.type="text";l.spellcheck=false;l.style.fontSize=f.fontSize;l.style.fontFamily=f.fontFamily;l.style.color=f.color;l.style.backgroundColor=f.backgroundColor;l.style.width="100%";l.style.outline="0";l.style.border="0";l.style.margin="0";l.style.padding="0";var k=l.cloneNode();k.disabled="";k.style.position="absolute";k.style.top="0";k.style.left="0";k.style.borderColor="transparent";k.style.boxShadow="none";k.style.color=f.hintColor;l.style.backgroundColor="transparent";l.style.verticalAlign="top";l.style.position="relative";var b=document.createElement("div");b.style.position="relative";b.style.outline="0";b.style.border="0";b.style.margin="0";b.style.padding="0";var e=document.createElement("div");e.style.position="absolute";e.style.outline="0";e.style.margin="0";e.style.padding="0";e.style.border="0";e.style.fontSize=f.fontSize;e.style.fontFamily=f.fontFamily;e.style.color=f.color;e.style.backgroundColor=f.backgroundColor;e.style.top="0";e.style.left="0";e.style.overflow="hidden";e.innerHTML=f.promptInnerHTML;e.style.background="transparent";if(document.body===undefined){throw"document.body is undefined. The library was wired up incorrectly."}document.body.appendChild(e);var p=e.getBoundingClientRect().right;b.appendChild(e);e.style.visibility="visible";e.style.left="-"+p+"px";b.style.marginLeft=p+"px";b.appendChild(k);b.appendChild(l);var j=document.createElement("div");j.style.position="absolute";j.style.visibility="hidden";j.style.outline="0";j.style.margin="0";j.style.padding="0";j.style.textAlign="left";j.style.fontSize=f.fontSize;j.style.fontFamily=f.fontFamily;j.style.backgroundColor=f.backgroundColor;j.style.zIndex=f.dropDownZIndex;j.style.cursor="default";j.style.borderStyle="solid";j.style.borderWidth="1px";j.style.borderColor=f.dropDownBorderColor;j.style.overflowX="hidden";j.style.whiteSpace="pre";j.style.overflowY="scroll";var q=function(u){var v=[];var s=0;var y=-1;var t=function(){this.style.outline="1px solid #ddd"};var r=function(){this.style.outline="0"};var x=function(){w.o3();w.o1(this.__hint)};var w={o3:function(){u.style.visibility="hidden"},refresh:function(B,G){u.style.visibility="hidden";s=0;u.innerHTML="";var F=(window.innerHeight||document.documentElement.clientHeight);var D=u.parentNode.getBoundingClientRect();var A=D.top-6;var C=F-D.bottom-6;v=[];for(var z=0;z<G.length;z++){if(G[z].indexOf(B)!==0){continue}var E=document.createElement("div");E.style.color=f.color;E.onmouseover=t;E.onmouseout=r;E.onmousedown=x;E.__hint=G[z];E.innerHTML=B+"<b>"+G[z].substring(B.length)+"</b>";v.push(E);u.appendChild(E)}if(v.length===0){return}if(v.length===1&&B===v[0].__hint){return}if(v.length<2){return}w.o0(0);if(A>C*3){u.style.maxHeight=A+"px";u.style.top="";u.style.bottom="100%"}else{u.style.top="100%";u.style.bottom="";u.style.maxHeight=C+"px"}u.style.visibility="visible"},o0:function(z){if(y!=-1&&v[y]){v[y].style.backgroundColor=f.backgroundColor}v[z].style.backgroundColor=f.dropDownOnHoverBackgroundColor;y=z},o2:function(z){if(u.style.visibility==="hidden"){return""}if(s+z===-1||s+z===v.length){return v[s].__hint}s+=z;w.o0(s);return v[s].__hint},o1:function(){}};return w};var d=q(j);d.o1=function(r){l.value=k.value=m+r;i.onChange(l.value);n=l.value;setTimeout(function(){l.focus()},0)};b.appendChild(j);c.appendChild(b);var o;var m;function h(r){if(o===undefined){o=document.createElement("span");o.style.visibility="hidden";o.style.position="fixed";o.style.outline="0";o.style.margin="0";o.style.padding="0";o.style.border="0";o.style.left="0";o.style.whiteSpace="pre";o.style.fontSize=f.fontSize;o.style.fontFamily=f.fontFamily;o.style.fontWeight="normal";document.body.appendChild(o)}o.innerHTML=String(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return o.getBoundingClientRect().right}var i={onArrowDown:function(){},onArrowUp:function(){},onEnter:function(){},onTab:function(){},onChange:function(){i.repaint()},startFrom:0,options:[],wrapper:b,input:l,hint:k,dropDown:j,prompt:e,setText:function(r){k.value=r;l.value=r},getText:function(){return l.value},o3DropDown:function(){d.o3()},repaint:function(){var x=l.value;var w=i.startFrom;var s=i.options;var r=s.length;var v=x.substring(w);m=x.substring(0,w);k.value="";for(var u=0;u<r;u++){var t=s[u];if(t.indexOf(v)===0){k.value=m+t;break}}j.style.left=h(m)+"px";d.refresh(v,i.options)}};var n;var g=function(r,t){n=r.value;var s=function(){var u=r.value;if(n!==u){n=u;t(u)}};if(r.addEventListener){r.addEventListener("input",s,false);r.addEventListener("keyup",s,false);r.addEventListener("change",s,false)}else{r.attachEvent("oninput",s);r.attachEvent("onkeyup",s);r.attachEvent("onchange",s)}};g(l,function(r){i.onChange(r)});var a=function(u){u=u||window.event;var t=u.keyCode;if(t==33){return}if(t==34){return}if(t==27){d.o3();k.value=l.value;l.focus();return}if(t==39||t==35||t==9){if(t==9){u.preventDefault();u.stopPropagation();if(k.value.length==0){i.onTab()}}if(k.value.length>0){d.o3();l.value=k.value;var v=n!=l.value;n=l.value;if(v){i.onChange(l.value)}}return}if(t==13){if(k.value.length==0){i.onEnter()}else{var s=(j.style.visibility=="hidden");d.o3();if(s){k.value=l.value;l.focus();i.onEnter();return}l.value=k.value;var v=n!=l.value;n=l.value;if(v){i.onChange(l.value)}}return}if(t==40){var r=d.o2(+1);if(r==""){i.onArrowDown()}k.value=m+r;return}if(t==38){var r=d.o2(-1);if(r==""){i.onArrowUp()}k.value=m+r;u.preventDefault();u.stopPropagation();return}k.value=""};if(l.addEventListener){l.addEventListener("keydown",a,false)}else{l.attachEvent("onkeydown",a)}return i};


var availableTags = [
"",
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
"3",
"4",
"5",
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
"7lf",
"7lg",
"7lj",
"7lq",
"8",
"9",
"a",
"above",
"acacia",
"acume",
"alley",
"anvil",
"applegarth",
"appleton",
"ardeen",
"argyll",
"avondale",
"b4100",
"back",
"bakery",
"barn",
"bates",
"bear",
"beech",
"bovewell",
"bowcombe",
"bowling",
"brambles",
"breeze",
"bulls",
"bungalow",
"burgess",
"callows",
"cedar",
"chapel",
"cheviot",
"church",
"cider",
"circles",
"coach",
"cotswold",
"cottage",
"cottages",
"court",
"croft",
"crooks",
"crown",
"daleview",
"deep",
"dodgers",
"dovecote",
"dovetail",
"e",
"estate",
"fairview",
"farm",
"field",
"fields",
"find",
"firs",
"forge",
"fox",
"foxglove",
"foxhill",
"garage",
"garden",
"gate",
"gibbs",
"granary",
"grandpas",
"granny",
"greystones",
"grounds",
"hackertys",
"halfpenny",
"hall",
"harrow",
"haven",
"head",
"hermitage",
"high",
"highland",
"hill",
"hillside",
"hollies",
"holly",
"home",
"house",
"inkerman",
"inn",
"josephs",
"k",
"keepers",
"kenchs",
"lane",
"lane",
"leas",
"leycroft",
"little",
"littlecot",
"lodge",
"lower",
"magpie",
"mallards",
"manor",
"mary",
"mill",
"mount",
"mullions",
"new",
"nutcracker",
"oakley",
"office",
"old",
"olde",
"orchard",
"ox25",
"ox27",
"paddocks",
"park",
"pleasant",
"ploughley",
"pond",
"portland",
"post",
"potting",
"prentice",
"pye",
"rectory",
"reform",
"rest",
"road",
"rock",
"rose",
"rosecroft",
"row",
"ryleens",
"s",
"saddlers",
"scaffolding",
"school",
"shed",
"silver",
"slam",
"smiths",
"somerton",
"souldern",
"spring",
"st",
"st.",
"stable",
"stables",
"steeple",
"stone",
"stores",
"street",
"sul-thorn",
"sunnybank",
"sunrise",
"sunset",
"swan",
"tack",
"tchure",
"the",
"the",
"timber",
"tollgate",
"toosan",
"tower",
"treetops",
"trelawne",
"tudor",
"turnpike",
"tusmore",
"view",
"village",
"wall",
"way",
"well",
"wesleyan",
"westend",
"wharf",
"willow",
"yew"
];
var kwj  = {
 "The Lodge, Hill House": {
kw: ['6lr', 'hill', 'house', 'lodge', 'ox25', 'road', 'somerton', 'the'],
nm: 'The Lodge, Hill House',
pc: 'OX25 6LR',
rd: 'Somerton Road',
}
,
 "Breeze Cottage": {
kw: ['6ls', 'breeze', 'cottage', 'ox25', 'road', 'somerton'],
nm: 'Breeze Cottage',
pc: 'OX25 6LS',
rd: 'Somerton Road',
}
,
 "Hill House": {
kw: ['6ls', 'hill', 'house', 'ox25', 'road', 'somerton'],
nm: 'Hill House',
pc: 'OX25 6LS',
rd: 'Somerton Road',
}
,
 "Barn Cottage, Hill House": {
kw: ['6ls', 'barn', 'cottage', 'hill', 'house', 'ox25', 'road', 'somerton'],
nm: 'Barn Cottage, Hill House',
pc: 'OX25 6LS',
rd: 'Somerton Road',
}
,
 "New Cottage, Hill House": {
kw: ['6ls', 'cottage', 'hill', 'house', 'new', 'ox25', 'road', 'somerton'],
nm: 'New Cottage, Hill House',
pc: 'OX25 6LS',
rd: 'Somerton Road',
}
,
 "Lower Souldern Grounds": {
kw: ['6ls', 'grounds', 'lower', 'ox25', 'road', 'somerton', 'souldern'],
nm: 'Lower Souldern Grounds',
pc: 'OX25 6LS',
rd: 'Somerton Road',
}
,
 "Tack Cottage ": {
kw: ['', '6ls', 'cottage', 'ox25', 'road', 'somerton', 'tack'],
nm: 'Tack Cottage ',
pc: 'OX25 6LS',
rd: 'Somerton Road',
}
,
 "Inkerman Barn": {
kw: ['7hs', 'barn', 'inkerman', 'ox27', 'road', 'somerton'],
nm: 'Inkerman Barn',
pc: 'OX27 7HS',
rd: 'Somerton Road',
}
,
 "Inkerman Farm": {
kw: ['7hs', 'farm', 'inkerman', 'ox27', 'road', 'somerton'],
nm: 'Inkerman Farm',
pc: 'OX27 7HS',
rd: 'Somerton Road',
}
,
 "Inkerman House": {
kw: ['7hs', 'house', 'inkerman', 'ox27', 'road', 'somerton'],
nm: 'Inkerman House',
pc: 'OX27 7HS',
rd: 'Somerton Road',
}
,
 "A E Prentice, Souldern Gate": {
kw: ['7ht', 'a', 'b4100', 'e', 'gate', 'ox27', 'prentice', 'souldern'],
nm: 'A E Prentice, Souldern Gate',
pc: 'OX27 7HT',
rd: 'B4100',
}
,
 "Burgess, Souldern Gate": {
kw: ['7ht', 'b4100', 'burgess', 'gate', 'ox27', 'souldern'],
nm: 'Burgess, Souldern Gate',
pc: 'OX27 7HT',
rd: 'B4100',
}
,
 "K Scaffolding, Souldern Gate": {
kw: ['7ht', 'b4100', 'gate', 'k', 'ox27', 'scaffolding', 'souldern'],
nm: 'K Scaffolding, Souldern Gate',
pc: 'OX27 7HT',
rd: 'B4100',
}
,
 "Tollgate Cottage": {
kw: ['7ht', 'b4100', 'cottage', 'ox27', 'tollgate'],
nm: 'Tollgate Cottage',
pc: 'OX27 7HT',
rd: 'B4100',
}
,
 "St Mary's Church": {
kw: ['7hu', 'church', 'lane', 'mary', 'ox27', 's', 'st'],
nm: 'St Mary\'s Church',
pc: 'OX27 7HU',
rd: 'Church Lane',
}
,
 "Rectory Cottage": {
kw: ['7hu', 'church', 'cottage', 'lane', 'ox27', 'rectory'],
nm: 'Rectory Cottage',
pc: 'OX27 7HU',
rd: 'Church Lane',
}
,
 "Smiths Cottage": {
kw: ['7hu', 'church', 'cottage', 'lane', 'ox27', 'smiths'],
nm: 'Smiths Cottage',
pc: 'OX27 7HU',
rd: 'Church Lane',
}
,
 "The Old Rectory": {
kw: ['7hu', 'church', 'lane', 'old', 'ox27', 'rectory', 'the'],
nm: 'The Old Rectory',
pc: 'OX27 7HU',
rd: 'Church Lane',
}
,
 "Crooks Firs": {
kw: ['7hx', 'crooks', 'firs', 'ox27', 'road', 'tusmore'],
nm: 'Crooks Firs',
pc: 'OX27 7HX',
rd: 'Tusmore Road',
}
,
 "Crooks Firs Cottage": {
kw: ['7hx', 'cottage', 'crooks', 'firs', 'ox27', 'road', 'tusmore'],
nm: 'Crooks Firs Cottage',
pc: 'OX27 7HX',
rd: 'Tusmore Road',
}
,
 "1, Tower Farm Cottages": {
kw: ['1', '7hy', 'cottages', 'farm', 'ox27', 'road', 'tower', 'tusmore'],
nm: '1, Tower Farm Cottages',
pc: 'OX27 7HY',
rd: 'Tusmore Road',
}
,
 "Tower Fields": {
kw: ['7hy', 'fields', 'ox27', 'road', 'tower', 'tusmore'],
nm: 'Tower Fields',
pc: 'OX27 7HY',
rd: 'Tusmore Road',
}
,
 "Tower House": {
kw: ['7hy', 'house', 'ox27', 'road', 'tower', 'tusmore'],
nm: 'Tower House',
pc: 'OX27 7HY',
rd: 'Tusmore Road',
}
,
 "Bear Cottage": {
kw: ['7hz', 'b4100', 'bear', 'cottage', 'ox27'],
nm: 'Bear Cottage',
pc: 'OX27 7HZ',
rd: 'B4100',
}
,
 "Ploughley Cottage": {
kw: ['7hz', 'b4100', 'cottage', 'ox27', 'ploughley'],
nm: 'Ploughley Cottage',
pc: 'OX27 7HZ',
rd: 'B4100',
}
,
 "The Old Stables": {
kw: ['7hz', 'b4100', 'old', 'ox27', 'stables', 'the'],
nm: 'The Old Stables',
pc: 'OX27 7HZ',
rd: 'B4100',
}
,
 "1, The Turnpike": {
kw: ['1', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '1, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
}
,
 "2, The Turnpike": {
kw: ['2', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '2, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
}
,
 "3, The Turnpike": {
kw: ['3', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '3, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
}
,
 "4, The Turnpike": {
kw: ['4', '7ja', 'hill', 'ox27', 'the', 'turnpike'],
nm: '4, The Turnpike',
pc: 'OX27 7JA',
rd: 'The Hill',
}
,
 "1, Bovewell": {
kw: ['1', '7jb', 'bovewell', 'ox27'],
nm: '1, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "1, Bovewell": {
kw: ['1', '7jb', 'bovewell', 'ox27'],
nm: '1, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "1, Bovewell": {
kw: ['1', '7jb', 'bovewell', 'ox27'],
nm: '1, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "2, Bovewell": {
kw: ['2', '7jb', 'bovewell', 'ox27'],
nm: '2, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "3, Bovewell": {
kw: ['3', '7jb', 'bovewell', 'ox27'],
nm: '3, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "4, Bovewell": {
kw: ['4', '7jb', 'bovewell', 'ox27'],
nm: '4, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "5, Bovewell": {
kw: ['5', '7jb', 'bovewell', 'ox27'],
nm: '5, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "6, Bovewell": {
kw: ['6', '7jb', 'bovewell', 'ox27'],
nm: '6, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "7, Bovewell": {
kw: ['7', '7jb', 'bovewell', 'ox27'],
nm: '7, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "8, Bovewell": {
kw: ['7jb', '8', 'bovewell', 'ox27'],
nm: '8, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "9, Bovewell": {
kw: ['7jb', '9', 'bovewell', 'ox27'],
nm: '9, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "10, Bovewell": {
kw: ['10', '7jb', 'bovewell', 'ox27'],
nm: '10, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "11, Bovewell": {
kw: ['11', '7jb', 'bovewell', 'ox27'],
nm: '11, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "12, Bovewell": {
kw: ['12', '7jb', 'bovewell', 'ox27'],
nm: '12, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "13, Bovewell": {
kw: ['13', '7jb', 'bovewell', 'ox27'],
nm: '13, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "14, Bovewell": {
kw: ['14', '7jb', 'bovewell', 'ox27'],
nm: '14, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "15, Bovewell": {
kw: ['15', '7jb', 'bovewell', 'ox27'],
nm: '15, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "16, Bovewell": {
kw: ['16', '7jb', 'bovewell', 'ox27'],
nm: '16, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "17, Bovewell": {
kw: ['17', '7jb', 'bovewell', 'ox27'],
nm: '17, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "18, Bovewell": {
kw: ['18', '7jb', 'bovewell', 'ox27'],
nm: '18, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "19, Bovewell": {
kw: ['19', '7jb', 'bovewell', 'ox27'],
nm: '19, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "20, Bovewell": {
kw: ['20', '7jb', 'bovewell', 'ox27'],
nm: '20, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "21, Bovewell": {
kw: ['21', '7jb', 'bovewell', 'ox27'],
nm: '21, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "22, Bovewell": {
kw: ['22', '7jb', 'bovewell', 'ox27'],
nm: '22, Bovewell',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "Village Hall": {
kw: ['7jb', 'bovewell', 'hall', 'ox27', 'village'],
nm: 'Village Hall',
pc: 'OX27 7JB',
rd: 'Bovewell',
}
,
 "Ardeen House": {
kw: ['7jd', 'ardeen', 'hill', 'house', 'ox27', 'the'],
nm: 'Ardeen House',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Argyll House": {
kw: ['7jd', 'argyll', 'hill', 'house', 'ox27', 'the'],
nm: 'Argyll House',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Bowling Leas": {
kw: ['7jd', 'bowling', 'hill', 'leas', 'ox27', 'the'],
nm: 'Bowling Leas',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Hill View Cottage": {
kw: ['7jd', 'cottage', 'hill', 'ox27', 'the', 'view'],
nm: 'Hill View Cottage',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Holly Cottage": {
kw: ['7jd', 'cottage', 'hill', 'holly', 'ox27', 'the'],
nm: 'Holly Cottage',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Magpie Cottage": {
kw: ['7jd', 'cottage', 'hill', 'magpie', 'ox27', 'the'],
nm: 'Magpie Cottage',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Mount Pleasant": {
kw: ['7jd', 'hill', 'mount', 'ox27', 'pleasant', 'the'],
nm: 'Mount Pleasant',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Trelawne": {
kw: ['7jd', 'hill', 'ox27', 'the', 'trelawne'],
nm: 'Trelawne',
pc: 'OX27 7JD',
rd: 'The Hill',
}
,
 "Above the Well Cottage": {
kw: ['7je', 'above', 'cottage', 'hill', 'ox27', 'the', 'the', 'well'],
nm: 'Above the Well Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Highland Cottage": {
kw: ['7je', 'cottage', 'highland', 'hill', 'ox27', 'the'],
nm: 'Highland Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Hill Cottage": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'the'],
nm: 'Hill Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Hillside": {
kw: ['7je', 'hill', 'hillside', 'ox27', 'the'],
nm: 'Hillside',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Oakley Cottage": {
kw: ['7je', 'cottage', 'hill', 'oakley', 'ox27', 'the'],
nm: 'Oakley Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Pond Cottage": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'pond', 'the'],
nm: 'Pond Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Rock Cottage": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'rock', 'the'],
nm: 'Rock Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "The Cottage": {
kw: ['7je', 'cottage', 'hill', 'ox27', 'the'],
nm: 'The Cottage',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "The Rock": {
kw: ['7je', 'hill', 'ox27', 'rock', 'the'],
nm: 'The Rock',
pc: 'OX27 7JE',
rd: 'The Hill',
}
,
 "Alley Cottage": {
kw: ['7jf', 'alley', 'back', 'cottage', 'lane', 'ox27'],
nm: 'Alley Cottage',
pc: 'OX27 7JF',
rd: 'Back Lane',
}
,
 "Hollies Farm": {
kw: ['7jf', 'back', 'farm', 'hollies', 'lane', 'ox27'],
nm: 'Hollies Farm',
pc: 'OX27 7JF',
rd: 'Back Lane',
}
,
 "Spring Cottage": {
kw: ['7jf', 'back', 'cottage', 'lane', 'ox27', 'spring'],
nm: 'Spring Cottage',
pc: 'OX27 7JF',
rd: 'Back Lane',
}
,
 "Spring House": {
kw: ['7jf', 'back', 'house', 'lane', 'ox27', 'spring'],
nm: 'Spring House',
pc: 'OX27 7JF',
rd: 'Back Lane',
}
,
 "Wesleyan Reform Chapel": {
kw: ['7jf', 'back', 'chapel', 'lane', 'ox27', 'reform', 'wesleyan'],
nm: 'Wesleyan Reform Chapel',
pc: 'OX27 7JF',
rd: 'Back Lane',
}
,
 "Court Cottage": {
kw: ['7jh', 'back', 'cottage', 'court', 'lane', 'ox27'],
nm: 'Court Cottage',
pc: 'OX27 7JH',
rd: 'Back lane',
}
,
 "Souldern Court": {
kw: ['7jh', 'back', 'court', 'lane', 'ox27', 'souldern'],
nm: 'Souldern Court',
pc: 'OX27 7JH',
rd: 'Back lane',
}
,
 "The Old Bakery, 1, High Street": {
kw: ['1', '7jj', 'bakery', 'high', 'old', 'ox27', 'street', 'the'],
nm: 'The Old Bakery, 1, High Street',
pc: 'OX27 7JJ',
rd: 'High Street',
}
,
 "Little Slam, 5, High Street": {
kw: ['5', '7jj', 'high', 'little', 'ox27', 'slam', 'street'],
nm: 'Little Slam, 5, High Street',
pc: 'OX27 7JJ',
rd: 'High Street',
}
,
 "Dodgers Cottage": {
kw: ['7jj', 'cottage', 'dodgers', 'high', 'ox27', 'street'],
nm: 'Dodgers Cottage',
pc: 'OX27 7JJ',
rd: 'High Street',
}
,
 "Mallards": {
kw: ['7jj', 'high', 'mallards', 'ox27', 'street'],
nm: 'Mallards',
pc: 'OX27 7JJ',
rd: 'High Street',
}
,
 "Barn House": {
kw: ['7jl', 'barn', 'high', 'house', 'ox27', 'street'],
nm: 'Barn House',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Beech House": {
kw: ['7jl', 'beech', 'high', 'house', 'ox27', 'street'],
nm: 'Beech House',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Dovecote": {
kw: ['7jl', 'dovecote', 'high', 'ox27', 'street'],
nm: 'Dovecote',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Manor Farm": {
kw: ['7jl', 'farm', 'high', 'manor', 'ox27', 'street'],
nm: 'Manor Farm',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Manor Farm Barn": {
kw: ['7jl', 'barn', 'farm', 'high', 'manor', 'ox27', 'street'],
nm: 'Manor Farm Barn',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Steeple House": {
kw: ['7jl', 'high', 'house', 'ox27', 'steeple', 'street'],
nm: 'Steeple House',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Stone Haven": {
kw: ['7jl', 'haven', 'high', 'ox27', 'stone', 'street'],
nm: 'Stone Haven',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "The Granary": {
kw: ['7jl', 'granary', 'high', 'ox27', 'street', 'the'],
nm: 'The Granary',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "The Potting Shed": {
kw: ['7jl', 'high', 'ox27', 'potting', 'shed', 'street', 'the'],
nm: 'The Potting Shed',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Treetops": {
kw: ['7jl', 'high', 'ox27', 'street', 'treetops'],
nm: 'Treetops',
pc: 'OX27 7JL',
rd: 'High Street',
}
,
 "Mullions": {
kw: ['7jn', 'high', 'mullions', 'ox27', 'street'],
nm: 'Mullions',
pc: 'OX27 7JN',
rd: 'High Street',
}
,
 "The Coach House": {
kw: ['7jn', 'coach', 'high', 'house', 'ox27', 'street', 'the'],
nm: 'The Coach House',
pc: 'OX27 7JN',
rd: 'High Street',
}
,
 "The Hermitage": {
kw: ['7jn', 'hermitage', 'high', 'ox27', 'street', 'the'],
nm: 'The Hermitage',
pc: 'OX27 7JN',
rd: 'High Street',
}
,
 "The Old School": {
kw: ['7jn', 'high', 'old', 'ox27', 'school', 'street', 'the'],
nm: 'The Old School',
pc: 'OX27 7JN',
rd: 'High Street',
}
,
 "The Wall House": {
kw: ['7jn', 'high', 'house', 'ox27', 'street', 'the', 'wall'],
nm: 'The Wall House',
pc: 'OX27 7JN',
rd: 'High Street',
}
,
 "Anvil Cottage": {
kw: ['7jp', 'anvil', 'cottage', 'high', 'ox27', 'street'],
nm: 'Anvil Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Barn House": {
kw: ['7jp', 'barn', 'high', 'house', 'ox27', 'street'],
nm: 'Barn House',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Bulls Head Garage": {
kw: ['7jp', 'bulls', 'garage', 'head', 'high', 'ox27', 'street'],
nm: 'Bulls Head Garage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Deep Well Cottage": {
kw: ['7jp', 'cottage', 'deep', 'high', 'ox27', 'street', 'well'],
nm: 'Deep Well Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Kenchs Cottage": {
kw: ['7jp', 'cottage', 'high', 'kenchs', 'ox27', 'street'],
nm: 'Kenchs Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Foxhill House": {
kw: ['7jp', 'foxhill', 'high', 'house', 'ox27', 'street'],
nm: 'Foxhill House',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Grandpas Barn": {
kw: ['7jp', 'barn', 'grandpas', 'high', 'ox27', 'street'],
nm: 'Grandpas Barn',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Little Slam": {
kw: ['7jp', 'high', 'little', 'ox27', 'slam', 'street'],
nm: 'Little Slam',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Nutcracker Cottage": {
kw: ['7jp', 'cottage', 'high', 'nutcracker', 'ox27', 'street'],
nm: 'Nutcracker Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Old Forge": {
kw: ['7jp', 'forge', 'high', 'old', 'ox27', 'street'],
nm: 'Old Forge',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Portland Cottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'portland', 'street'],
nm: 'Portland Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Post Office Cottage": {
kw: ['7jp', 'cottage', 'high', 'office', 'ox27', 'post', 'street'],
nm: 'Post Office Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Ryleens": {
kw: ['7jp', 'high', 'ox27', 'ryleens', 'street'],
nm: 'Ryleens',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "The Cottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'street', 'the'],
nm: 'The Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Timber Cottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'street', 'timber'],
nm: 'Timber Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Tudor Cottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'street', 'tudor'],
nm: 'Tudor Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "Pye Cottage": {
kw: ['7jp', 'cottage', 'high', 'ox27', 'pye', 'street'],
nm: 'Pye Cottage',
pc: 'OX27 7JP',
rd: 'High Street',
}
,
 "3, Church Lane": {
kw: ['3', '7jq', 'church', 'lane', 'ox27'],
nm: '3, Church Lane',
pc: 'OX27 7JQ',
rd: 'Church Lane',
}
,
 "Granny Cottage, Church Lane": {
kw: ['7jq', 'church', 'cottage', 'granny', 'lane', 'ox27'],
nm: 'Granny Cottage, Church Lane',
pc: 'OX27 7JQ',
rd: 'Church Lane',
}
,
 "1, Chapel Row": {
kw: ['1', '7jr', 'chapel', 'ox27', 'row'],
nm: '1, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
}
,
 "2, Chapel Row": {
kw: ['2', '7jr', 'chapel', 'ox27', 'row'],
nm: '2, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
}
,
 "3, Chapel Row": {
kw: ['3', '7jr', 'chapel', 'ox27', 'row'],
nm: '3, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
}
,
 "4, Chapel Row": {
kw: ['4', '7jr', 'chapel', 'ox27', 'row'],
nm: '4, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
}
,
 "5, Chapel Row": {
kw: ['5', '7jr', 'chapel', 'ox27', 'row'],
nm: '5, Chapel Row',
pc: 'OX27 7JR',
rd: 'Chapel Row',
}
,
 "Appleton Lodge": {
kw: ['7jr', 'appleton', 'chapel', 'lodge', 'ox27', 'row'],
nm: 'Appleton Lodge',
pc: 'OX27 7JR',
rd: 'Chapel Row',
}
,
 "Garden Cottage": {
kw: ['7jt', 'bates', 'cottage', 'garden', 'lane', 'ox27'],
nm: 'Garden Cottage',
pc: 'OX27 7JT',
rd: 'Bates Lane',
}
,
 "Manor Bungalow": {
kw: ['7jt', 'bates', 'bungalow', 'lane', 'manor', 'ox27'],
nm: 'Manor Bungalow',
pc: 'OX27 7JT',
rd: 'Bates Lane',
}
,
 "Souldern Manor": {
kw: ['7jt', 'bates', 'lane', 'manor', 'ox27', 'souldern'],
nm: 'Souldern Manor',
pc: 'OX27 7JT',
rd: 'Bates Lane',
}
,
 "5 Bates Lane": {
kw: ['5', '7ju', 'bates', 'lane', 'ox27'],
nm: '5 Bates Lane',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Acume House": {
kw: ['7ju', 'acume', 'bates', 'house', 'lane', 'ox27'],
nm: 'Acume House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Applegarth": {
kw: ['7ju', 'applegarth', 'bates', 'lane', 'ox27'],
nm: 'Applegarth',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Bowcombe House": {
kw: ['7ju', 'bates', 'bowcombe', 'house', 'lane', 'ox27'],
nm: 'Bowcombe House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Callows Cottage": {
kw: ['7ju', 'bates', 'callows', 'cottage', 'lane', 'ox27'],
nm: 'Callows Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Cider Cottage": {
kw: ['7ju', 'bates', 'cider', 'cottage', 'lane', 'ox27'],
nm: 'Cider Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Crown Cottage": {
kw: ['7ju', 'bates', 'cottage', 'crown', 'lane', 'ox27'],
nm: 'Crown Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Dovecote": {
kw: ['7ju', 'bates', 'dovecote', 'lane', 'ox27'],
nm: 'Dovecote',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Keepers Cottage": {
kw: ['7ju', 'bates', 'cottage', 'keepers', 'lane', 'ox27'],
nm: 'Keepers Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Greystones": {
kw: ['7ju', 'bates', 'greystones', 'lane', 'ox27'],
nm: 'Greystones',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Halfpenny Cottage": {
kw: ['7ju', 'bates', 'cottage', 'halfpenny', 'lane', 'ox27'],
nm: 'Halfpenny Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Home Farm House": {
kw: ['7ju', 'bates', 'farm', 'home', 'house', 'lane', 'ox27'],
nm: 'Home Farm House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Littlecot": {
kw: ['7ju', 'bates', 'lane', 'littlecot', 'ox27'],
nm: 'Littlecot',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Olde Saddlers Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'olde', 'ox27', 'saddlers'],
nm: 'Olde Saddlers Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Rose Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'rose'],
nm: 'Rose Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Silver Find Cottage": {
kw: ['7ju', 'bates', 'cottage', 'find', 'lane', 'ox27', 'silver'],
nm: 'Silver Find Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Stable Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'stable'],
nm: 'Stable Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Sunrise Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'sunrise'],
nm: 'Sunrise Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Sunset Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'sunset'],
nm: 'Sunset Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "The Brambles": {
kw: ['7ju', 'bates', 'brambles', 'lane', 'ox27', 'the'],
nm: 'The Brambles',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "The Orchard": {
kw: ['7ju', 'bates', 'lane', 'orchard', 'ox27', 'the'],
nm: 'The Orchard',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Westend House": {
kw: ['7ju', 'bates', 'house', 'lane', 'ox27', 'westend'],
nm: 'Westend House',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Willow Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'willow'],
nm: 'Willow Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "Yew Cottage": {
kw: ['7ju', 'bates', 'cottage', 'lane', 'ox27', 'yew'],
nm: 'Yew Cottage',
pc: 'OX27 7JU',
rd: 'Bates Lane',
}
,
 "1, Fox Lane": {
kw: ['1', '7jw', 'fox', 'lane', 'ox27'],
nm: '1, Fox Lane',
pc: 'OX27 7JW',
rd: 'Fox Lane',
}
,
 "Avondale": {
kw: ['7jw', 'avondale', 'fox', 'lane', 'ox27'],
nm: 'Avondale',
pc: 'OX27 7JW',
rd: 'Fox Lane',
}
,
 "Fairview": {
kw: ['7jw', 'fairview', 'fox', 'lane', 'ox27'],
nm: 'Fairview',
pc: 'OX27 7JW',
rd: 'Fox Lane',
}
,
 "Fox Inn": {
kw: ['7jw', 'fox', 'inn', 'lane', 'ox27'],
nm: 'Fox Inn',
pc: 'OX27 7JW',
rd: 'Fox Lane',
}
,
 "The Swan House": {
kw: ['7jw', 'fox', 'house', 'lane', 'ox27', 'swan', 'the'],
nm: 'The Swan House',
pc: 'OX27 7JW',
rd: 'Fox Lane',
}
,
 "Leycroft Barn": {
kw: ['7jx', 'barn', 'leycroft', 'ox27', 'road', 'somerton'],
nm: 'Leycroft Barn',
pc: 'OX27 7JX',
rd: 'Somerton Road',
}
,
 "Souldern Grounds Farm": {
kw: ['7jy', 'farm', 'grounds', 'ox27', 'souldern'],
nm: 'Souldern Grounds Farm',
pc: 'OX27 7JY',
rd: '',
}
,
 "Acacia Bungalow": {
kw: ['7jz', 'acacia', 'bungalow', 'foxhill', 'lane', 'ox27'],
nm: 'Acacia Bungalow',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Cheviot": {
kw: ['7jz', 'cheviot', 'foxhill', 'lane', 'ox27'],
nm: 'Cheviot',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Circles": {
kw: ['7jz', 'circles', 'foxhill', 'lane', 'ox27'],
nm: 'Circles',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Daleview": {
kw: ['7jz', 'daleview', 'foxhill', 'lane', 'ox27'],
nm: 'Daleview',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Dovetail": {
kw: ['7jz', 'dovetail', 'foxhill', 'lane', 'ox27'],
nm: 'Dovetail',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Fox Hill": {
kw: ['7jz', 'fox', 'foxhill', 'hill', 'lane', 'ox27'],
nm: 'Fox Hill',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Fox Hollies": {
kw: ['7jz', 'fox', 'foxhill', 'hollies', 'lane', 'ox27'],
nm: 'Fox Hollies',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Gibbs Field House": {
kw: ['7jz', 'field', 'foxhill', 'gibbs', 'house', 'lane', 'ox27'],
nm: 'Gibbs Field House',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Pleasant View": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'pleasant', 'view'],
nm: 'Pleasant View',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Rosecroft": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'rosecroft'],
nm: 'Rosecroft',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Stone Croft": {
kw: ['7jz', 'croft', 'foxhill', 'lane', 'ox27', 'stone'],
nm: 'Stone Croft',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Sul-Thorn": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'sul-thorn'],
nm: 'Sul-Thorn',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Sunnybank": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'sunnybank'],
nm: 'Sunnybank',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Tchure House": {
kw: ['7jz', 'foxhill', 'house', 'lane', 'ox27', 'tchure'],
nm: 'Tchure House',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Toosan": {
kw: ['7jz', 'foxhill', 'lane', 'ox27', 'toosan'],
nm: 'Toosan',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Willow House": {
kw: ['7jz', 'foxhill', 'house', 'lane', 'ox27', 'willow'],
nm: 'Willow House',
pc: 'OX27 7JZ',
rd: 'Foxhill Lane',
}
,
 "Cedar House": {
kw: ['7la', 'cedar', 'high', 'house', 'ox27', 'street'],
nm: 'Cedar House',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "Park House": {
kw: ['7la', 'high', 'house', 'ox27', 'park', 'street'],
nm: 'Park House',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "Park Lodge": {
kw: ['7la', 'high', 'lodge', 'ox27', 'park', 'street'],
nm: 'Park Lodge',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "Rest Harrow": {
kw: ['7la', 'harrow', 'high', 'ox27', 'rest', 'street'],
nm: 'Rest Harrow',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "Souldern House": {
kw: ['7la', 'high', 'house', 'ox27', 'souldern', 'street'],
nm: 'Souldern House',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "Souldern House Cottage": {
kw: ['7la', 'cottage', 'high', 'house', 'ox27', 'souldern', 'street'],
nm: 'Souldern House Cottage',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "St. Josephs": {
kw: ['7la', 'high', 'josephs', 'ox27', 'st.', 'street'],
nm: 'St. Josephs',
pc: 'OX27 7LA',
rd: 'High Street',
}
,
 "Hackertys Way": {
kw: ['7lb', 'hackertys', 'lane', 'mill', 'ox27', 'way'],
nm: 'Hackertys Way',
pc: 'OX27 7LB',
rd: 'Mill Lane',
}
,
 "Souldern Mill": {
kw: ['7lb', 'lane', 'mill', 'ox27', 'souldern'],
nm: 'Souldern Mill',
pc: 'OX27 7LB',
rd: 'Mill Lane',
}
,
 "1, Wharf Lane": {
kw: ['1', '7ld', 'lane', 'ox27', 'wharf'],
nm: '1, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
}
,
 "2, Wharf Lane": {
kw: ['2', '7ld', 'lane', 'ox27', 'wharf'],
nm: '2, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
}
,
 "3, Wharf Lane": {
kw: ['3', '7ld', 'lane', 'ox27', 'wharf'],
nm: '3, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
}
,
 "4, Wharf Lane": {
kw: ['4', '7ld', 'lane', 'ox27', 'wharf'],
nm: '4, Wharf Lane',
pc: 'OX27 7LD',
rd: 'Wharf Lane',
}
,
 "Wharf Farm": {
kw: ['7le', 'farm', 'lane', 'ox27', 'wharf'],
nm: 'Wharf Farm',
pc: 'OX27 7LE',
rd: 'Wharf Lane',
}
,
 "Wharf Farm Cottage": {
kw: ['7le', 'cottage', 'farm', 'lane', 'ox27', 'wharf'],
nm: 'Wharf Farm Cottage',
pc: 'OX27 7LE',
rd: 'Wharf Lane',
}
,
 "Souldern Manor Estate": {
kw: ['7lf', 'estate', 'manor', 'ox27', 'souldern'],
nm: 'Souldern Manor Estate',
pc: 'OX27 7LF',
rd: '',
}
,
 "The Orchard, 1, The Paddocks": {
kw: ['1', '7lg', 'orchard', 'ox27', 'paddocks', 'the'],
nm: 'The Orchard, 1, The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
}
,
 "2 The Paddocks": {
kw: ['2', '7lg', 'ox27', 'paddocks', 'the'],
nm: '2 The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
}
,
 "3 The Paddocks": {
kw: ['3', '7lg', 'ox27', 'paddocks', 'the'],
nm: '3 The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
}
,
 "Foxglove House, 4, The Paddocks": {
kw: ['4', '7lg', 'foxglove', 'house', 'ox27', 'paddocks', 'the'],
nm: 'Foxglove House, 4, The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
}
,
 "5 The Paddocks": {
kw: ['5', '7lg', 'ox27', 'paddocks', 'the'],
nm: '5 The Paddocks',
pc: 'OX27 7LG',
rd: 'The Paddocks',
}
,
 "1, The Old Stores": {
kw: ['1', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '1, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
}
,
 "2, The Old Stores": {
kw: ['2', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '2, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
}
,
 "3, The Old Stores": {
kw: ['3', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '3, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
}
,
 "4, The Old Stores": {
kw: ['4', '7lj', 'high', 'old', 'ox27', 'stores', 'street', 'the'],
nm: '4, The Old Stores',
pc: 'OX27 7LJ',
rd: 'High Street',
}
,
 "1, Cotswold Court": {
kw: ['1', '7lq', 'cotswold', 'court', 'ox27'],
nm: '1, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
}
,
 "2, Cotswold Court": {
kw: ['2', '7lq', 'cotswold', 'court', 'ox27'],
nm: '2, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
}
,
 "3, Cotswold Court": {
kw: ['3', '7lq', 'cotswold', 'court', 'ox27'],
nm: '3, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
}
,
 "4, Cotswold Court": {
kw: ['4', '7lq', 'cotswold', 'court', 'ox27'],
nm: '4, Cotswold Court',
pc: 'OX27 7LQ',
rd: 'Cotswold Court',
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
            t = t + "<div class='res'><div class='rtn'>"  + key + "</a></div><div class='sd'>" + kwj[key].rd + " " + kwj[key].pc + "</div></div>";;
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
   text=text.toLowerCase();
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

if(kwic==1 && window.location.search.indexOf('?q=') == 0) {
 initialkwic=1;
 p.setText(window.location.search.substring(window.location.search.lastIndexOf('?q=')+3).replace(/\+/g,' '));
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