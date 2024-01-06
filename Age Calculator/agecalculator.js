// Age Calculator 
var dob = new Date(prompt("Enter your date of birth? By using this formate(27 dec,2009)"))
var dobmili = dob.getTime()
var today = new Date()
var todaymili = today.getTime()
var diff = todaymili-dobmili
var age = Math.floor(diff / (1000*60*60*24*30*12));
document.write(age)