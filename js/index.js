// Your code goes here
// console.log("something else still");


// //addEventListener works on elements, document and widndow
// document.querySelector('nav').addEventListener('click',()=>{
//     console.log('the nav got clicked');
// })

// BUS PIC 
const busPic = document.querySelector(".intro").addEventListener("dblclick", function(){
    document.getElementById("fBus").style.width = "75%";
})

//BUS TEXT
const busText = document.querySelector(".nav-container").addEventListener("mouseover", function(){
    document.querySelector(".logo-heading").textContent = "WELCOME TO THE FUN BUS!";
})

// LET'S GO Text
const adventurePic = document.querySelector(".img-content").addEventListener("dblclick", function(){
    document.querySelector("img").textContent = "BOO!";
})

// const busPic = document.querySelector(".intro").addEventListener("mouseover", function(){
//     document.getElementById("fBus").style.width = "50%";
// })
