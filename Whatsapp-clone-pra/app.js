
var ul = document.getElementById('praipt')
function send() {
    var inpt = document.getElementById('iptMess')
    var li = document.createElement('li')
    var textinsert = document.createTextNode(inpt.value)
    li.appendChild(textinsert)
    ul.appendChild(li)
    inpt.value = ''
    var delbtn = document.createElement('button')
    var delbtntxt = document.createTextNode('Delete')
    delbtn.appendChild(delbtntxt)
    li.appendChild(delbtn)
    delbtn.setAttribute('onclick', 'delmess(this)')
    var editbtn = document.createElement('button')
    var editbtntxt = document.createTextNode('Edit')
    editbtn.appendChild(editbtntxt)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editmess(this)')
}
function editmess(ed){
    var pro = prompt("Type your Message",ed.parentNode.firstChild.nodeValue)
    ed.parentNode.firstChild.nodeValue = pro  
}
function delmess(dele) {
    dele.parentNode.remove()
}
function deleteall() {
    ul.innerHTML = ''
}