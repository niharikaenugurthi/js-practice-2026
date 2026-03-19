function changeColor(){
    let leaves = document.querySelector(".leaves");
    let leaves1 = document.querySelector(".leaves1");
    let leaves2 = document.querySelector(".leaves2");
    let leaves3 = document.querySelector(".leaves3");

    let colors = ["yellow","darkgreen","orange","green","lightgreen"];
    let random = Math.floor(Math.random()*colors.length);

    leaves.style.borderBottomColor = colors[random];
     leaves1.style.borderBottomColor = colors[random];
      leaves2.style.borderBottomColor = colors[random];
       leaves3.style.borderBottomColor = colors[random];
}