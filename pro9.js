var num1= parseInt(prompt("enter the number"))
var num2= parseInt(prompt("enter the number"))
var num3= parseInt(prompt("enter the number"))


if(num1>=num2 && num2>=num3){
	console.log("largest is num1")
}
else if(num2>=num1 && num2>=num3){
	console.log("largest is num2")
}
else{
	console.log("num3")
}