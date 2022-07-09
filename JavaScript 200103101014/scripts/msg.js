function demoExternalAlert(){
    alert("Hello there!!")
}

function demoExternalConfirm(){
    if(confirm("Are you sure?")){
        alert("Yes")
    }
    else{
        alert("No")
    }
}

function demoExternalPrompt(){
    var fname = prompt('Enter Firstname:')
    var lname = prompt('Enter Lastname:')
    alert("Hello "+fname+" "+lname)
}

function bodyBGGreen(){
    document.body.style.backgroundColor="green"
}
function divBGGray(){
    document.getElementById("mdiv").style.backgroundColor='grey'
}
function bodyBGDynamic(){
    document.body.style.backgroundColor=prompt("Enter a color for body background:")
}
function divBGDynamic(){
    document.getElementById('mdiv').style.backgroundColor=prompt("Enter a color for div background:")
}
function bodyBGCP1(){
    document.body.style.backgroundColor=document.getElementById('CP1').value
}
function divBGCP2(){
    document.getElementById('mdiv').style.backgroundColor=document.getElementById('CP2').value
}