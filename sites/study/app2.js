for (var score = prompt("Enter your score"); score == 'null' || score == ''; score = prompt("Enter your score")){
  alert("please Enter Your Score")
}


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
}else {
  document.getElementById("result").innerHTML = "You get D"
 document.getElementById("score").innerHTML = `Your Score: ${score}`
}

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
