

var inputTalk
var question

var answer






function talkInput(){
inputTalk = document.getElementById("input").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
question = "LeSean James: " + inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;

var n = question.search(/how are you/i);
console.log(n);

inputTalk = document.getElementById("input").value = null;

if(n > -1){
  answer = "Martin Luther: I am well";
}
