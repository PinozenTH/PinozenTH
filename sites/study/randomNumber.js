var name = prompt("What is your Name?")
document.getElementById("name").innerHTML = `Hello!  ${name}`
var rnd = Math.floor(Math.random() * 100)
var num = prompt("random Numbers")
if (num == rnd) {
  alert("🎉Congrate🎉 Your Guess is Correct!!\nThe Number is " + rnd)
}
if (num !== rnd) {
  alert("💔Poor Guy💔 Your Guess is Incorrect!!\nThe correct Number is " + rnd)
}
document.getElementById("guess").innerHTML = `The Number you Guessed: ${num}`
document.getElementById("result").innerHTML = `The Correct Number is: ${rnd}`
