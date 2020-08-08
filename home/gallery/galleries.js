var galleryheight = galleryheight || "20em";
var gallerybg = gallerybg || "#555";
var galleryspeed = galleryspeed || 5000;

  function imgNext(n) {
      var g=galleries[n];
      var album=g.album;
      g.i++;
      if(album.length == g.i) g.i = 0;
      document.getElementById(n).style.backgroundImage="url(" + album[g.i] +")";          
  }
  function imgPrev(n) {
      var g=galleries[n];
      var album=g.album;
      g.i--;
      if(-1 == g.i) g.i = album.length - 1;
      document.getElementById(n).style.backgroundImage="url(" + album[g.i] +")";        
  }
  
  function imgLoop (n) {
      return setInterval(function(){imgNext(n)},galleryspeed)}
  
  
  function imgStart (n) {
      document.getElementById(n+'buttons').style.display='none';
      galleries[n].renew=imgLoop(n)
  }
  
  function imgStop (n) {
      document.getElementById(n+'buttons').style.display='block';
      clearInterval(galleries[n].renew);
  }


for (n in galleries) {
    var d=document.getElementById(n);
    d.setAttribute("title",galleries[n].title);
    d.setAttribute("onclick","imgStop('" + n + "')");
    d.style.clear="both";
    d.style.height=galleryheight;
    d.style.backgroundColor=gallerybg;
    d.style.backgroundSize="contain";
    d.style.backgroundRepeat="no-repeat";
    d.style.backgroundPosition="center";
      galleries[n].i = Math.floor(galleries[n].album.length*Math.random());
      imgNext(n);
      var b= document.createElement("div");
      b.innerHTML="<div id='" + n +
	  "buttons'> <button onclick=\"imgStart('" + n +
	  "')\">Start</button> <button onclick=\"imgNext('" + n +
	  "')\">Next</button> <button onclick=\"imgPrev('" + n +
	  "')\">Previous</button> <a href=\"" +
	  galleries[n].url +
	  "\">" +
	  galleries[n].title +
	  " album</a> </div>";
      d.parentNode.insertBefore(b, d.nextSibling);
      imgStart(n);
  }
  
