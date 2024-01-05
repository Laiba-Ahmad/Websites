var head = prompt("Enter name who want to get Head?")
var tail = prompt("Enter name who want to get Tail")

var toss = Math.random()*2
var toss2 = Math.floor(toss)

if(toss2 == 0){
    document.write("Heads " + head + "  Wins");

}else{
    document.write("Tails " + tail + "  Wins");

}
