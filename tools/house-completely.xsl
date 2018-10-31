<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="US-ASCII" omit-xml-declaration="yes" include-content-type="no" />



<xsl:template match="/">

 <!-- use html not text mode for embedded elements in js strings -->
 <xsl:result-document indent="no" href="../home/houses/housesearch.js">
  //<script>
  <xsl:text>&#10;</xsl:text>
  <xsl:apply-templates mode="js" select="/"/>
  <xsl:text>&#10;</xsl:text>
  //</script>
 </xsl:result-document>

<xsl:result-document indent="no" href="../home/houses/index.html">
 <xsl:text>---&#10;layout: default&#10;title: Souldern House Search&#10;extracss: search&#10;---&#10;&#10;</xsl:text>
 <script src="housesearch.js"><xsl:text> </xsl:text></script>
  <xsl:text>&#10;</xsl:text>
  <xsl:text>&#10;</xsl:text>
  <div>
   <div>
    <input type="button" value="Clear Form" onClick="p.setText('');p.input.focus();rc.innerHTML= '\u00a0';r.innerHTML='';"/>
    <xsl:text> &#160; </xsl:text>
    <input type="button" value="Update URL" onClick="window.location.href=window.location.href.replace(/\?.*/,'') + '?h=' +p.getText().replace(/ +/g,'+')"/>
    </div><br/>
    <div id="rtncount">&#160;</div>
    <div id='kwinput' ></div>
    <br/>
    
    <div id="results">
    </div>
  </div>
  
  <h3 id="notes">Notes</h3>
  <ul>
   <li>Enter keywords from house names, road names, or postcodes into
   the box above, the menu will show any keywords that match the
   houses in the current list.</li>
   <li>Each house is shown with an image (which is also a link to
   Google Street View). Initial images derived from Google Street
   view, in accordance with their <a
   href="https://www.google.com/permissions/geoguidelines/">terms of
   use</a>, or photographs by David Carlisle for this site, or in some
   cases from freely available images.</li>
   <li>Villagers are welcome to submit new (square) images for their
   houses, or any other details that they wish to list by the house
   entry.</li>
   <li> If you use the <b>Update URL</b> button you can save a search
   and use it in an email etc. So that for exampple you can link to <a
   href="https://www.souldern.org/home/houses/?h=willow">https://www.souldern.org/home/houses/?h=willow</a>
   to list the houses with <b>Willow</b> in their name.</li>
  </ul>
</xsl:result-document>
</xsl:template>


<xsl:template mode="js" match="/">
 <xsl:text>
 <![CDATA[
// http://complete-ly.appspot.com/
// MIT Licence
function completely(c,f){f=f||{};f.fontSize=f.fontSize||"16px";f.fontFamily=f.fontFamily||"sans-serif";f.promptInnerHTML=f.promptInnerHTML||"";f.color=f.color||"#333";f.hintColor=f.hintColor||"#aaa";f.backgroundColor=f.backgroundColor||"#fff";f.dropDownBorderColor=f.dropDownBorderColor||"#aaa";f.dropDownZIndex=f.dropDownZIndex||"100";f.dropDownOnHoverBackgroundColor=f.dropDownOnHoverBackgroundColor||"#ddd";var l=document.createElement("input");l.type="text";l.spellcheck=false;l.style.fontSize=f.fontSize;l.style.fontFamily=f.fontFamily;l.style.color=f.color;l.style.backgroundColor=f.backgroundColor;l.style.width="100%";l.style.outline="0";l.style.border="0";l.style.margin="0";l.style.padding="0";var k=l.cloneNode();k.disabled="";k.style.position="absolute";k.style.top="0";k.style.left="0";k.style.borderColor="transparent";k.style.boxShadow="none";k.style.color=f.hintColor;l.style.backgroundColor="transparent";l.style.verticalAlign="top";l.style.position="relative";var b=document.createElement("div");b.style.position="relative";b.style.outline="0";b.style.border="0";b.style.margin="0";b.style.padding="0";var e=document.createElement("div");e.style.position="absolute";e.style.outline="0";e.style.margin="0";e.style.padding="0";e.style.border="0";e.style.fontSize=f.fontSize;e.style.fontFamily=f.fontFamily;e.style.color=f.color;e.style.backgroundColor=f.backgroundColor;e.style.top="0";e.style.left="0";e.style.overflow="hidden";e.innerHTML=f.promptInnerHTML;e.style.background="transparent";if(document.body===undefined){throw"document.body is undefined. The library was wired up incorrectly."}document.body.appendChild(e);var p=e.getBoundingClientRect().right;b.appendChild(e);e.style.visibility="visible";e.style.left="-"+p+"px";b.style.marginLeft=p+"px";b.appendChild(k);b.appendChild(l);var j=document.createElement("div");j.style.position="absolute";j.style.visibility="hidden";j.style.outline="0";j.style.margin="0";j.style.padding="0";j.style.textAlign="left";j.style.fontSize=f.fontSize;j.style.fontFamily=f.fontFamily;j.style.backgroundColor=f.backgroundColor;j.style.zIndex=f.dropDownZIndex;j.style.cursor="default";j.style.borderStyle="solid";j.style.borderWidth="1px";j.style.borderColor=f.dropDownBorderColor;j.style.overflowX="hidden";j.style.whiteSpace="pre";j.style.overflowY="scroll";var q=function(u){var v=[];var s=0;var y=-1;var t=function(){this.style.outline="1px solid #ddd"};var r=function(){this.style.outline="0"};var x=function(){w.o3();w.o1(this.__hint)};var w={o3:function(){u.style.visibility="hidden"},refresh:function(B,G){u.style.visibility="hidden";s=0;u.innerHTML="";var F=(window.innerHeight||document.documentElement.clientHeight);var D=u.parentNode.getBoundingClientRect();var A=D.top-6;var C=F-D.bottom-6;v=[];for(var z=0;z<G.length;z++){if(G[z].indexOf(B)!==0){continue}var E=document.createElement("div");E.style.color=f.color;E.onmouseover=t;E.onmouseout=r;E.onmousedown=x;E.__hint=G[z];E.innerHTML=B+"<b>"+G[z].substring(B.length)+"</b>";v.push(E);u.appendChild(E)}if(v.length===0){return}if(v.length===1&&B===v[0].__hint){return}if(v.length<2){return}w.o0(0);if(A>C*3){u.style.maxHeight=A+"px";u.style.top="";u.style.bottom="100%"}else{u.style.top="100%";u.style.bottom="";u.style.maxHeight=C+"px"}u.style.visibility="visible"},o0:function(z){if(y!=-1&&v[y]){v[y].style.backgroundColor=f.backgroundColor}v[z].style.backgroundColor=f.dropDownOnHoverBackgroundColor;y=z},o2:function(z){if(u.style.visibility==="hidden"){return""}if(s+z===-1||s+z===v.length){return v[s].__hint}s+=z;w.o0(s);return v[s].__hint},o1:function(){}};return w};var d=q(j);d.o1=function(r){l.value=k.value=m+r;i.onChange(l.value);n=l.value;setTimeout(function(){l.focus()},0)};b.appendChild(j);c.appendChild(b);var o;var m;function h(r){if(o===undefined){o=document.createElement("span");o.style.visibility="hidden";o.style.position="fixed";o.style.outline="0";o.style.margin="0";o.style.padding="0";o.style.border="0";o.style.left="0";o.style.whiteSpace="pre";o.style.fontSize=f.fontSize;o.style.fontFamily=f.fontFamily;o.style.fontWeight="normal";document.body.appendChild(o)}o.innerHTML=String(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return o.getBoundingClientRect().right}var i={onArrowDown:function(){},onArrowUp:function(){},onEnter:function(){},onTab:function(){},onChange:function(){i.repaint()},startFrom:0,options:[],wrapper:b,input:l,hint:k,dropDown:j,prompt:e,setText:function(r){k.value=r;l.value=r},getText:function(){return l.value},o3DropDown:function(){d.o3()},repaint:function(){var x=l.value;var w=i.startFrom;var s=i.options;var r=s.length;var v=x.substring(w);m=x.substring(0,w);k.value="";for(var u=0;u<r;u++){var t=s[u];if(t.indexOf(v)===0){k.value=m+t;break}}j.style.left=h(m)+"px";d.refresh(v,i.options)}};var n;var g=function(r,t){n=r.value;var s=function(){var u=r.value;if(n!==u){n=u;t(u)}};if(r.addEventListener){r.addEventListener("input",s,false);r.addEventListener("keyup",s,false);r.addEventListener("change",s,false)}else{r.attachEvent("oninput",s);r.attachEvent("onkeyup",s);r.attachEvent("onchange",s)}};g(l,function(r){i.onChange(r)});var a=function(u){u=u||window.event;var t=u.keyCode;if(t==33){return}if(t==34){return}if(t==27){d.o3();k.value=l.value;l.focus();return}if(t==39||t==35||t==9){if(t==9){u.preventDefault();u.stopPropagation();if(k.value.length==0){i.onTab()}}if(k.value.length>0){d.o3();l.value=k.value;var v=n!=l.value;n=l.value;if(v){i.onChange(l.value)}}return}if(t==13){if(k.value.length==0){i.onEnter()}else{var s=(j.style.visibility=="hidden");d.o3();if(s){k.value=l.value;l.focus();i.onEnter();return}l.value=k.value;var v=n!=l.value;n=l.value;if(v){i.onChange(l.value)}}return}if(t==40){var r=d.o2(+1);if(r==""){i.onArrowDown()}k.value=m+r;return}if(t==38){var r=d.o2(-1);if(r==""){i.onArrowUp()}k.value=m+r;u.preventDefault();u.stopPropagation();return}k.value=""};if(l.addEventListener){l.addEventListener("keydown",a,false)}else{l.attachEvent("onkeydown",a)}return i};
]]>
</xsl:text>
<xsl:text>&#10;var availableTags = [&#10;</xsl:text>
<xsl:for-each-group
    select="/houses/house/*/tokenize(.,'[, '']+')" group-by=".">
 <xsl:sort lang="en"/>
 <xsl:if test="position()!=1">",&#10;</xsl:if>
 <xsl:text>"</xsl:text>
 <xsl:value-of select="lower-case(.)"/>
</xsl:for-each-group>
<xsl:text>"&#10;];&#10;</xsl:text>
 
<xsl:text>var kwj  = {&#10;</xsl:text>
<xsl:for-each
    select="/houses/house">
 <xsl:if test="position()!=1">,&#10;</xsl:if>
 <xsl:text> "</xsl:text>
 <xsl:value-of select="translate(lower-case(name),' ''-(),','')"/>
 <xsl:text>": {&#10;kw: [</xsl:text>
 <xsl:for-each-group
     select="*/tokenize(.,'[, '']+')"
     group-by=".">
  <xsl:sort lang="en"/>
  <xsl:if test="position()!=1">, </xsl:if>
  <xsl:text>'</xsl:text><xsl:value-of select="lower-case(.)"/><xsl:text>'</xsl:text>
 </xsl:for-each-group>
 <xsl:text>],&#10;nm: '</xsl:text>
 <xsl:value-of select="replace(name,'''','\\''')"/>
 <xsl:text>',&#10;</xsl:text>
 <xsl:text>pc: '</xsl:text>
 <xsl:value-of select="pc"/>
 <xsl:text>',&#10;</xsl:text>
 <xsl:text>rd: '</xsl:text>
 <xsl:value-of select="rd"/>
 <xsl:text>',&#10;</xsl:text>
 <xsl:text>sv: '</xsl:text>
 <xsl:value-of select="@sv"/>
 <xsl:text>',&#10;}&#10;</xsl:text>
</xsl:for-each>
<xsl:text>};&#10;</xsl:text>

<![CDATA[
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
]]>
<!--
    <div class='m'>" + kwj[key].m + "</div>
    <div class='m' style='vertical-align:bottom'><b>Mark of Introduction</b></div>
-->

</xsl:template>



</xsl:stylesheet>

