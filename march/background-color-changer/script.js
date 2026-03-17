const boxes = document.querySelectorAll(".container div");

boxes.forEach(box =>{
    box.addEventListener("click",()=>{
        const color = box.getAttribute("data-color");
        document.body.style.backgroundColor = color;
    });
});