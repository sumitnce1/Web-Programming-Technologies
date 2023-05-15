/*
	setInterval()
	setTimeout()
	clearInterval()
	clearTimeout()
*/

var timer = setTimeout(function(){
	console.log("Hi")
}, 6000) // time in ms

clearTimeout(timer)

var int = setInterval(function(){
	console.log("hi2")
},5000)

setTimeout(() => {
	clearInterval(int)
},20000)

setImmediate(function(){}) // Not part of timer functions