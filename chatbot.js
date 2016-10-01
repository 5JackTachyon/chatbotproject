

var inputTalk
var question








function talkInput(){
inputTalk = document.getElementById("input").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
question = "LeSean James: " + inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;


var n = question.search(/how are you/i);
var o = question.search(/old/i);
var t = question.search(/time/i);
var u = question.search(/year/i);
var v = question.search(/day/i);
var w = question.search(/date/i);
var e = question.search(/picture/i);
var f = question.search(/bored/i);
var x = question.search(/link/i);
var y = question.search(/special/i);
var z = question.search(/mistake/i);
var da = new Date(Date.now());
var img = ["http://new3.fjcdn.com/comments/Fun+fact+diamonds+are+not+valuable+previous+or+rare+but+_c6d2a1d43b3782715a23aadfc13b0050.jpg",
"http://i2.kym-cdn.com/photos/images/original/000/783/510/50f.jpg"];

var reaction = ["I am well, I am glad to see the direction that society has gone.", "I am the MASTER OF THE UNIVERSE!!!!, I am always well",
"I ponder, I think, Mind wanders, it's pink, I leave, I arrive, I am Steve, and  I sure can jive.", "I is not my time.",
"Nothing has an end or a beginning because nothing ever existed in the first place."];

var notListening = ["Huh, I never noticed how grey the sky looks when you look at it through cement.",
"I have an answer to a lot, but my knowledge in not infinte.",
"You have a chance to talk to the MASTER OF THE UNIVERSE!!!! and you choose to talk about this!!!!",
"NO, just no, I have a history with that that you can't understand!"];

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(n);

inputTalk = document.getElementById("input").value = null;




if(n > -1){
  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: "+ reaction[randomNumberGenerator(0,4)] + "<br>";
}

else if(o > -1){
  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: I am a little past my prime. " + "<br>";
}

else if(t > -1){
document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: The time is " + da + "." + "<br>";
}
else if(u > -1){
  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: According to my primary sources, the year is " + da.getFullYear() + "." + "<br>";
}
else if(v > -1){
  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: Today is the " + da.getDay() + "th day of the week not that that matters much." + "<br>";
}
else if(w > -1){
  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: The date is the " + da.getDate() + "th day of the " + da.getMonth() + "th + 1th month. Is that that the type of date you meant?" + "<br>";
}
 else if(e > -1){
  var x = document.createElement("IMG");
  x.setAttribute("src", img[randomNumberGenerator(0,1)]);
  x.setAttribute("width", "350");
  x.setAttribute("alt", "img");
  document.getElementById("chat-area").innerHTML +=  "MASTER OF THE UNIVERSE!!!!: So you want a picture do you?";
  document.getElementById("chat-area").appendChild(x);
  document.getElementById("chat-area").innerHTML += "<br>";

}
else if(x > -1){
  document.getElementById("chat-area").innerHTML +=  " MASTER OF THE UNIVERSE!!!!: So you want a webpage link do you?  Backwards words" + "<bdo dir = " + "rtl" + ">"
   + "  MASTER OF THE UNIVERSE!!!!: So you want a webpage link do you?  " + "</bdo>" + "<a href=" + "http://www.hostgator.com/" + ">Link</a> <br>";
}
else if(y > -1){
document.getElementById("chat-area").innerHTML += "<marquee>" + "MASTER OF THE UNIVERSE!!!!: So you want to see something special do you?" + "<bdi>" + "إيان" + "</bdi>" + "</marquee>" + "<br>";
}
else if(z > -1){
document.getElementById("chat-area").innerHTML += "<strike>" + "<dl>" + "<dt>" + "MASTER OF THE UNIVERSE!!!!:" + "</dt>" + "<dd>" + "This is a bigger mistake. " + "</dd>" + "</dl>" + "</strike>" + "<br>";
}
else if(f > -1){
document.getElementById("chat-area").innerHTML += "<details>" + "<summary>" + "<dfn>" + "MASTER OF THE UNIVERSE!!!!: This is the best I can offer." + "</dfn>" + "</summary>" + "<p>" + "Just kidding" + "</p>" + "</details>" + "<br>";
}

else{
  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: " + notListening[randomNumberGenerator(0,3)]  + "<br>";
}

}

function askInput(){
var asker = ["What is your occupation?", "How old are you?", "Do you even code bro?"];

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: " + asker[randomNumberGenerator(0,2)] + "<br>";


}


function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 13){
      talkInput();
    }
}
