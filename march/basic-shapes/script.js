const shapes = document.querySelectorAll(".shapes > div");
const text = document.getElementById("shapeName");

shapes.forEach(shape=> {
    shape.addEventListener("click",() => {
    const name = shape.classList[0];
    text.innerText= name.toUpperCase();
});
});