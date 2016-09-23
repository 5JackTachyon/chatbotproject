

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
var e = question.search(/picture/);
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
  document.getElementById("chat-area").innerHTML += "Martin Luther: The date is the " + da.getDate() + "th day of the " + da.getMonth() + "th + 1th month. Is that that the type of date you meant?" + "<br>";
}
else if(e > -1){
  var x = document.createElement("IMG");
  x.setAttribute("src", "http://cdn.funnyisms.com/c6269df2-fc86-42e9-8aa3-28943c490e19.jpg");
  x.setAttribute("width", "350");
  x.setAttribute("alt", "img");
  document.getElementById("chat-area").innerHTML += "Martin Luther: So you want a picture do you?";
  document.getElementById("chat-area").appendChild(x);
  document.getElementById("chat-area").innerHTML += "<br>";
}
}
