var arr = [1,3,2,6,7,9]

//var new_arr = arr.map(function(item){ return item * item})
//var new_arr = arr.map((item)=> {return item * item})
var new_arr = arr.map(item=>  item * item)
// 1 -> 1
// 3 -> 9
// 2 -> 4
// 6 -> 36
// 7 -> 49
// 9 -> 81
//[1,9,4,36,49,81]
console.log(new_arr)

var arr = ["Siddhant", "ANubhav", "Rajat"]
var new_arr = arr.map((item) => {return item[1]})
//Siddhant -> i
//Anubhav -> n
//Rajat -> a
console.log(new_arr)

var new_arr = arr.map((item) => {return item[1] == 'i'})
console.log(new_arr)

var arr= [
	{id :1 , name : "Siddhant", salary: 3000, contact: {phone : "33782"},hobbies: ["Sleeping","traveling"]},
	{id :2 , name : "Anubhav", salary: 2000, contact: {phone : "33782"},hobbies: ["Cooking","traveling"]},
	{id :3 , name : "Rajat", salary: 5000, contact: {phone : "33782"},hobbies: ["Singing","Reading"]}
]

// var new_arr = arr.map(item => arr.salary)
//var new_arr = arr.map(item => arr.contact["phone"])
var new_arr = arr.map(item => arr.hobbies.map(ele => ele[0]))
//Object -> ["Sleeping","traveling"] -> [S,t]
//Object -> ["Cooking","traveling"] -> [C,t]
//Object -> ["Singing","Reading"] -> [S,R]
//[[S,t],[C,t],[S,R]]
//________________________________________________________
var arr = [1,3,2,6,7,9]

//false -> false, 0, "", null, undefined

var new_arr = arr.filter(item => item%2 == 0)
//1 -> false
//3 -> false
//2-> true
//6 -> true
//7 -> false
//9 -> false
//[2,6]

var arr = ["Siddhant", "ANubhav", "Rajat"]
var new_arr = arr.filter((item) => {return item[1] == 'i'})
//["Siddhant"]
var arr= [
	{id :1 , name : "Siddhant", salary: 3000, contact: {phone : "33782"},hobbies: ["Sleeping","traveling"]},
	{id :2 , name : "Anubhav", salary: 2000, contact: {phone : "33782"},hobbies: ["Cooking","traveling"]},
	{id :3 , name : "Rajat", salary: 5000, contact: {phone : "33782"},hobbies: ["Singing","Reading"]}
]
var new_arr = arr.filter(item => item.id)
//Object -> 1 true
//Object-> 2 true
//Object -> 3 true
//[same array]

//var new_arr = arr.filter(item => item.salary>4000) // [Object]
var new_arr = arr.filter(item => item.hobbies.length == 0)
//Object -> false
//Object -> false
//Object -> false
//[]









































































