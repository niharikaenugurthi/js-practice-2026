let count=0;
let num = document.getElementById("value");

function increase(){
    count = count+1;
    num.textContent = count;
}

function decrease(){
    count = count-1;
    num.textContent = count;
}

function reset(){
    count = 0;
    num.textContent = count;
}
