var name = prompt("What is your Name?")
document.getElementById("name").innerHTML = `Hello!  ${name}`
var rnd = Math.floor(Math.random() * 100)
var num = prompt("random Numbers")
document.getElementById("guess").innerHTML = `The Number you Guessed: ${num}`
document.getElementById("result").innerHTML = `The Correct Number is: ${rnd}`
