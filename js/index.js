// Your code goes here
// console.log("something else still");


// //addEventListener works on elements, document and widndow
// document.querySelector('nav').addEventListener('click',()=>{
//     console.log('the nav got clicked');
// })


//BUS TEXT
const busText = document.querySelector(".nav-container").addEventListener("mouseover", function(){
    document.querySelector(".logo-heading").textContent = "WELCOME TO THE FUN BUS!";
})

// BUS PIC 
const busPic = document.querySelector(".intro").addEventListener("dblclick", function(){
    document.getElementById("fBus").style.width = "75%";
})

// LET'S GO Text
const letsgoText = document.querySelector(".text-content").addEventListener("dblclick", function(){
    document.querySelector(".text-content h2").style.color = "purple";
})

// YOU CAN PUT MULTIPLE TAGS IN QUERY SELECTOR

// ADVENTURE pic
const adventurePic = document.querySelector(".img-content").addEventListener("dblclick", function(){
    document.querySelector("#advPic").style.width = "50%";
})

const boatPic = document.querySelector(".content-section .img-fluid-rounded");
boatPic.addEventListener('mouseenter', ()=>{
    boatPic.style.transform = "scale(1.2)";
    adventPic.style.transition = "all 0.3s";
});

boatPic.addEventListener("mouseleave", () => {
    boatPic.style.transform = "scale(1)";
});

// const adventPic = document.querySelector(".img-content");
// // console.log(catImage);

// adventPic.addEventListener("mouseenter", () => {
//     adventPic.style.transform = "scale(1.2)";
//     adventPic.style.transition = "all 0.3s";
//    })

//    adventPic.addEventListener("mouseleave", () => {
//     adventPic.style.transform = "scale(1)";
//    })