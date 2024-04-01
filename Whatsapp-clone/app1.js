// Sign up Page Code :
function signup() {
    var fname = document.getElementById('fname').value;
    localStorage.setItem('First Name', fname)
    var lname = document.getElementById('lname').value;
    localStorage.setItem('Last Name', lname)
    var email1 = document.getElementById('email1').value;
    localStorage.setItem('Email', email1)
    var pass1 = document.getElementById('pass1').value;
    localStorage.setItem('Password', pass1)
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Account is Sign up.Thankyou.",
        showConfirmButton: false,
        timer: 1500
    });

}
// Sign in page Code:
function signin() {
    var email2 = document.getElementById('email2').value;
    var pass2 = document.getElementById('pass2').value;
    var email = localStorage.getItem('Email')
    var pass = localStorage.getItem('Password')
    if (pass2 == pass && email2 == email) {
        window.location.href = 'comment.html'
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your Data is not mach to sign up data.",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}
// Comments page Code:
const inputbox = document.getElementById('iptMess')
const ul = document.getElementById('praipt')
function send() {
    var inpt = document.getElementById('iptMess')
    var li = document.createElement('li')
    li.className = 'ulli'
    var textinsert = document.createTextNode(inpt.value)
    li.appendChild(textinsert)
    ul.appendChild(li)
    inpt.value = ''
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


