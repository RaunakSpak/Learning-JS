// const state = document.querySelector("h5");
// const add = document.querySelector("#add");
// // const remove = document.querySelector("#remove");

// var check = 0;

// add.addEventListener("click", () => {
//   if (check == 0) {
//     state.innerHTML = "Friends";
//     state.style.color = "green";
//     add.innerHTML = "Remove";
//     check = 1;
//   } else {
//     state.innerHTML = "Random Image";
//     state.style.color = "red";
//     add.innerHTML = "Add Friend";
//     check = 0;
//   }
// });

// remove.addEventListener("click", function(){
//     state.innerHTML = "Random Image";
//     state.style.color = "red";
// })


const doubleClick = document.querySelector("#container");

const heart = document.querySelector("i");

doubleClick.addEventListener("dblclick", () => {
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = "1";
    heart.style.color = "red";
    heart.style.fontSize = "70px";
    heart.style.position = "absolute";
    heart.style.top = "50%";
    heart.style.left = "50%";
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    
    setTimeout(() => {
        heart.style.opacity = "0";
        heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 500);
})
