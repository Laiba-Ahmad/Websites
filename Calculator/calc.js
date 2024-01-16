function button(butt1){
    var store1 = document.getElementById("input")
    store1.value += butt1
}
function answer(){
    var answer1 = document.getElementById("input")
    answer1.value = eval(answer1.value)
}
function clrall(){
    var clr1 = document.getElementById("input")
    clr1.value = " "
}
function clr(){
    var clr2 = document.getElementById("input");
    clr2.value = clr2.value.slice(0,-1);
}