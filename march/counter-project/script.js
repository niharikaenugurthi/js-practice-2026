let text = document.querySelector(".no");
let increase =  document.querySelector(".increase");
let decrease =  document.querySelector(".decrease");
let reset = document.querySelector(".reset");

reset.onclick = () => {
    text.innerText = 0;
};
increase.onclick=()=>{
    let value = Number(text.innerText)
    text.innerText = value+1;
}

decrease.onclick=()=>{
    let value = Number(text.innerText)
    text.innerText = value-1;
}