alert("We will never send your information to another user")
var fulName = prompt("Enter Your First Name")
var age = prompt("Enter Your Age")
var email = prompt("Enter Your Email")

document.write("User Ful Name" + "  "+ fulName)
document.write("</br>")
document.write("User Age" + "   " +  age)
document.write("</br>")
document.write("User Email" + "   " +  email)

var gender2 = prompt("Enter Your Gender")
if(gender2 === "Male"){
    alert("Hello, Sir")
}
else if(gender2 === "M"){
    alert("Hello, Sir")
}
 else if(gender2 === "m"){
    alert("Hello, Sir")
}
else if(gender2 === "male"){
    alert("Hello, Sir")
}
else if(gender2 === "MALE"){
    alert("Hello, Sir")
}
else if(gender2 === "Female"){
    alert("Hello, Sister")
}
else if(gender2 === "female"){
    alert("Hello, Sister")
}
else if(gender2 === "FEMALE"){
    alert("Hello, Sister")
}
else if(gender2 === "F"){
    alert("Hello, Sister")
}
else if(gender2 === "f"){
    alert("Hello, Sister")
}
else{
    alert("Please Enter Your Gender")
       
}