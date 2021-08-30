function add(str){
    let temp=document.getElementById("TEXTBOX").value 
    document.getElementById("TEXTBOX").value=temp+str
}
function calcula(){
    let str=document.getElementById("TEXTBOX").value
    document.getElementById("TEXTBOX").value=eval(str)
}
function empty(){
    document.getElementById("TEXTBOX").value=""
}
function hover(element){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor="#"+randomColor
}
function checkTabPress(e) {
    'use strict';
    var ele = document.activeElement;

    if (e.keyCode === 9 && ele.nodeName.toLowerCase() === 'a') {
        console.log(ele.href);
        document.getElementById("TEXTBOX").value=""
    }
}

document.addEventListener('keyup', function (e) {
    checkTabPress(e);
}, true);