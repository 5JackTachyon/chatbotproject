

var inputTalk
var question








function talkInput(){
inputTalk = document.getElementById("input").value;
//document.getElementById("chat-area").textContent += inputTalk;
question = inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;


inputTalk = document.getElementById("input").value = null;
}
