var name = prompt("What is your Name?")
document.getElementById("name").innerHTML = `Hello!  ${name}`
var rnd = Math.floor(Math.random() * 100)

if (rnd == 50) {
  var number = ">= 50"
}else if (rnd <= 49) {
  number = "< 50"
}else if (rnd >= 51) {
  number = "> 50"
}
var num = prompt("Pick 0 - 99\nNumber Hint: " + number)
if (num == rnd) {
  alert("🎉Congrate🎉 Your Guess is Correct!!\nThe Number is " + rnd)
}
if (num !== rnd) {
  alert("💔Poor Guy💔 Your Guess is Incorrect!!\nThe correct Number is " + rnd)
}
document.getElementById("guess").innerHTML = `The Number you Guessed: ${num}`
document.getElementById("random").innerHTML = `The Correct Number is: ${rnd}`

let score = prompt("Enter your score")

if(score >= 90){
  document.getElementById("result").innerHTML = "You get A+"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score >= 80){ 
document.getElementById("result").innerHTML = "You get A"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score >= 75){
  document.getElementById("result").innerHTML = "You get B+"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score >= 70){
  document.getElementById("result").innerHTML = "You get B"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score >= 65){
  document.getElementById("result").innerHTML = "You get C+"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score <= 60){
  document.getElementById("result").innerHTML = "You get C"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score <= 55){
  document.getElementById("result").innerHTML = "You get D+"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}else if(score <= 50){
  document.getElementById("result").innerHTML = "You get D"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}
