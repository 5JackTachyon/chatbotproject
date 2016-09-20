

var inputTalk
var question








function talkInput(){
inputTalk = document.getElementById("input").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
question = "Lorenzo: " + inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;


inputTalk = document.getElementById("input").value = null;
}
