


var thisQ=1;
var answers=[];
var showprev=false;

function squiz () {
    document.getElementById("top").scrollIntoView(true);
    var q=document.getElementById("q");
    var fdiv=document.getElementById("fdiv");
    var im=document.getElementById("im");
    if(thisQ > questions.length ) {
	document.getElementById("next").style.display="none";
	im.style.display="none";
	q.innerHTML="Results";
	var total=0;
	fdiv.style.fontSize="80%";
	for (var i=0;i< questions.length; i++) {
	    var l = document.createElement("div");
	    if(answers[i] == questions[i][3]) {
		l.style.backgroundColor="#AFA";
		total+=1;
		l.innerHTML=i+1 + ": " + questions[i][2][answers[i]] + " \u2714";
	    } else {
		l.style.backgroundColor="#FAA";
		l.innerHTML=i+1 + ": " + questions[i][2][answers[i]] + " \u2718";
	    }
	    fdiv.appendChild(l);
	}
	var l = document.createElement("div");
//	l.id="total";
	l.innerHTML="<b class=\"total\">Your total: " + total + " / " + questions.length + "</b>" ;
	fdiv.parentNode.appendChild(l);
       if(total == questions.length)  {
       document.getElementById("win").style.display="block";
	   document.getElementById("lose").style.display="none";
	   	   document.getElementById("previous").style.display="none";
       } else {
	   document.getElementById("win").style.display="none";
	   document.getElementById("lose").style.display="block";
	   document.getElementById("previous").style.display="inline";
	   showprev=true;
       }

    } else {
	   document.getElementById("win").style.display="none";
	   document.getElementById("lose").style.display="none";
	document.getElementById("next").style.display="inline";
	if((thisQ > 1) && showprev) {
	    	document.getElementById("previous").style.display="inline";
	} else {
	    	document.getElementById("previous").style.display="none";
	}
	q.innerHTML="Question " + thisQ + "/" + questions.length + ": " + questions[thisQ - 1][0];
	if(questions[thisQ - 1][1] == "") {
	    im.style.display="none";
	} else {
	    im.style.display="block";
	    im.setAttribute("src",questions[thisQ - 1][1]);
	}
	for (var i=0;i< questions[thisQ - 1][2].length; i++) {
	var l = document.createElement("div");
	    l.innerHTML="<label><input type=\"radio\" name=\"ans\" class=\"a\"" +
		((answers.length >= thisQ && answers[thisQ - 1] == i) ? " checked" : "") +
               " value=\"" + i + "\">" + questions[thisQ - 1][2][i] + "</label>";
	fdiv.appendChild(l);
    }
    }
}

function nextpage() {
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    if (radios.length>0) {
	answers[thisQ-1]=radios[0].value;
    thisQ+=1;
    document.getElementById("fdiv").innerHTML="";
	squiz();
    } else {
	alert("Please select an answer");
    }
}

function prevpage() {
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    if (radios.length>0) {        
	answers[thisQ-1]=radios[0].value;
    }
    if (thisQ != 1) {
    thisQ -= 1 ;
    document.getElementById("fdiv").innerHTML="";
	squiz();
    }
}

window.addEventListener('load', squiz, false);
