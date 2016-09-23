

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
var da = new Date(Date.now());
console.log(n);

inputTalk = document.getElementById("input").value = null;


if(n > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: I am well, I am glad to see the direction that society has gone. " + "<br>";
}

if(o > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: I am a little past my prime. " + "<br>";
}

if(t > -1){
document.getElementById("chat-area").innerHTML += "Martin Luther: The time is " + da + "." + "<br>";
}
if(u > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: According to my primary sources, the year is " + da.getFullYear() + "." + "<br>";
}
if(v > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: Today is the " + da.getDay() + "th day of the week not that that matters much." + "<br>";
}
if(w > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: The date is " + da.getDate() + " is that that the type of date you meant?" + "<br>";
}
}
