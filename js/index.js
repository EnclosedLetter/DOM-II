// Your code goes here
// console.log("something else still");

//BUS TEXT
const busText = document.querySelector(".nav-container").addEventListener("mouseover", function(){
    document.querySelector(".logo-heading").textContent = "HOP ON THE FUN BUS!";
})

// BUS PIC 
const busPic = document.querySelector(".intro").addEventListener("dblclick", function(){
    document.getElementById("fBus").style.width = "75%";
})

// LET'S GO Text
// const letsgoText = document.querySelector(".text-content").addEventListener("keydown", function(){
document.addEventListener("keydown", event => {
    if (event.key === "q"){
        document.body.style.color = "purple"; 
        }
    if(event.key === "p"){
        document.body.style = " ";
         }
})
// YOU CAN PUT MULTIPLE TAGS IN QUERY SELECTOR

// ADVENTURE pic
const adventurePic = document.querySelector(".img-content").addEventListener("dblclick", function(){
    document.querySelector("#advPic").style.width = "50%";
})

// CHANGE BOAT SCALE
const boatPic = document.querySelector(".content-section .img-fluid-rounded");
boatPic.addEventListener('mouseenter', ()=>{
    boatPic.style.transform = "scale(1.2)";
    adventPic.style.transition = "all 0.3s";
});

boatPic.addEventListener("mouseleave", () => {
    boatPic.style.transform = "scale(1)";
});


// CHANGE BACKGROUND BY PRESSING ANY KEY
const backgroundClr = document.querySelector("*");
backgroundClr.addEventListener('keypress', event =>{
    backgroundClr.style.backgroundColor = "orange";
})

// const otherVar = document.querySelector("*"); THIS CHANGES THE BACKGROUND BACK TO WHITE
document.addEventListener('keydown', event => {
    if (event.key === "w"){
        document.body.style.backgroundColor = "white";
    }
})


// -------------



