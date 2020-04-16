


var thisQ=1;
var answers=[];

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
	l.innerHTML="<b>Your total: " + total + " / " + questions.length + "</b>" ;
	fdiv.parentNode.appendChild(l);
       if(total == questions.length)  {
       document.getElementById("win").style.display="block";
}

    } else {
	q.innerHTML="Question " + thisQ + "/" + questions.length + ": " + questions[thisQ - 1][0];
	if(questions[thisQ - 1][1] == "") {
	    im.style.display="none";
	} else {
	    im.style.display="block";
	    im.setAttribute("src",questions[thisQ - 1][1]);
	}
    for (var i=0;i< questions[thisQ - 1][2].length; i++) {
	var l = document.createElement("div");
	l.innerHTML="<label><input type=\"radio\" name=\"ans\" class=\"a\" value=\"" + i + "\">" + questions[thisQ - 1][2][i] + "</label>";
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

window.addEventListener('load', squiz, false);
