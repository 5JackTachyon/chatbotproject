

var inputTalk
var question








function talkInput(){
inputTalk = document.getElementById("input").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
question = "LeSean James: " + inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;


var n = question.search(/how are you/i);
var o = question.search(/how old are you/i);
console.log(n);

inputTalk = document.getElementById("input").value = null;


if(n > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: I am well, I am glad to see the direction that society has gone. " + "<br>";
}

if(o > -1){
  document.getElementById("chat-area").innerHTML += "Martin Luther: I am a little past my prime. " + "<br>";
}
}
