// var std1 = {
// 	name : "Siddhant",
// 	age : 23
// }

// var std2 = std1
// std2.email = "sid@gmail.com"
// console.log(std1)
// console.log(std2)

// var std2 = {
// 	data: 1
// }

// var arr =["Siddhant", "23478"]
// var x = arr
// x.push(32894792479)
// console.log(arr)
// console.log(x)
//________________________________
var std1 = {
	name : "Siddhant",
	age : 23
}
//spread operator ...
// var std2 = {...std1}
// std2.email = "sid@gmail.com"
// console.log(std1)
// console.log(std2)

var std2 = {
	...std1,
	email : "sid@gmail.com"
}

var std1 = {
	name : "Siddhant",
	age : 23,
	contact :{
		phone : "348972487294"
	}
}

var std2 = {
	...std1,
	contact : {
		...std1.contact
	}
}
std2.contact.email ="sid@gmail.com"
std2.a = 20

console.log(std1)
console.log(std2)

var arr = [1,7,3,5]
// var x= [...arr]
// x.push(30)
var x = [...arr, 30] // [1,7,3,5,30]

console.log(arr)
console.log(x)
var arr = [
	{id: 1, name: "Sid"},
	{id: 2, name: "Sid"},
	{id: 3, name: "Sid"}
]

var x = [...arr]
x[0].email = "sid@gmail.com"

console.log(arr)
console.log(x)
//_____________________________________


var name="Siddhant"
var data = 42342
function sum(){
	return "None"
}

// var obj = {
// 	name : name,
// 	data: data,
// 	sum : sum
// }
var obj = {name,data,sum}
//_____________________________________

function print(name){
	console.log("Hi "+ name)
	return "Welcome"
}

var x = (function(name){
	console.log("Hi "+ name)
	return "Welcome"
})("Sid")
//Always use return and assign to variable
var x = ((name) =>{
	console.log("Hi "+ name)
	return "Welcome"
})("Sid")

//________________________________________

var x = function(name){console.log("Hi "+name)}


var arr = [
	function(name){console.log("Hi "+name)}, // 0
	function(name){console.log("Welcome "+name)} // 1
]

arr[0]("Siddhant")
arr[1]("Sid")
//_________________________________________













































