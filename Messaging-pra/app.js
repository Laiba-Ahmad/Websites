

// Comments page Code:
const inputbox = document.getElementById('iptMess')
const ul = document.getElementById('praipt')
function send() {
    var inpt1 = document.getElementById('iptMess')
    var li = document.createElement('li')
    li.className = 'ulli'
    var fname1 = document.getElementById('fname')
    var li = document.createElement('li')
    li.className = 'ulli'
    var textinsert1 = document.createTextNode(fname1.value + ' : ' + inpt1.value + " ")
    li.appendChild(textinsert1)
    ul.appendChild(li)
    inpt1.value = ''
    fname1.value = ''
    var delbtn = document.createElement('button')
    var delbtntxt = document.createTextNode('Delete')
    delbtn.appendChild(delbtntxt)
    li.appendChild(delbtn)
    delbtn.setAttribute('onclick', 'delmess(this)')

    saveData();
}
function delmess(dele) {
    dele.parentNode.remove()
    saveData();
}
function deleteall() {
    ul.innerHTML = ''
    saveData();
}
function saveData() {
    localStorage.setItem('Data', praipt.innerHTML)
}
function showData() {
    praipt.innerHTML = localStorage.getItem('Data');
}
showData();

