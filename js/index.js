// Your code goes here
// console.log("something else still");

//BUS TEXT 1
const busText = document.querySelector(".nav-container").addEventListener("mouseover", function(){
    document.querySelector(".logo-heading").textContent = "HOP ON THE FUN BUS!";
})

// BUS PIC 2
const busPic = document.querySelector(".intro").addEventListener("dblclick", function(){
    document.getElementById("fBus").style.width = "75%";
})

// LET'S GO Text 3
document.addEventListener("keydown", event => {
    if (event.key === "q"){
        document.body.style.color = "purple"; 
        }
    if(event.key === "p"){
        document.body.style = " ";
         }
})
// YOU CAN PUT MULTIPLE TAGS IN QUERY SELECTOR

// ADVENTURE pic 4 THIS METHOD YOU HAVE TO CALL THE PARENT THEN THE CHILD IN THE @2nd  querySELECTOR
const adventurePic = document.querySelector(".img-content").addEventListener("dblclick", function(){
    document.querySelector("#advPic").style.width = "50%";
})

// CHANGE BOAT PIC SCALE 5
const boatPic = document.querySelector(".content-section .img-fluid-rounded");
boatPic.addEventListener('mouseenter', ()=>{
    boatPic.style.transform = "scale(1.2)";
    adventPic.style.transition = "all 0.3s";
});

boatPic.addEventListener("mouseleave", () => {
    boatPic.style.transform = "scale(1)";
});


// CHANGE BACKGROUND BY PRESSING ANY KEY 6
const backgroundClr = document.querySelector("*");
backgroundClr.addEventListener('keypress', event =>{
    backgroundClr.style.backgroundColor = "orange";
})

// const otherVar = document.querySelector("*"); THIS CHANGES THE BACKGROUND BACK TO WHITE 7
document.addEventListener('keydown', event => {
    if (event.key === "w"){
        document.body.style.backgroundColor = "white";
    }
})

// CHANGED TO DOG PIC 8
const destPic = document.querySelector(".content-destination img")
destPic.addEventListener('click', ()=>{
    destPic.src="https://images-na.ssl-images-amazon.com/images/I/718vecXok%2BL.jpg"
})

// THIS CHANGES THE BACKGROUND BACK TO WHITE 9
document.addEventListener('keydown', event => {
    if (event.key === "b"){
        document.body.style.backgroundColor = "blue";
    }
})

// THIS CHANGES THE BACKGROUND BACK TO WHITE 10
document.addEventListener('keydown', event => {
    if (event.key === "t"){
        document.body.style.backgroundColor = "tan";
    }
})


// -------------
// NEST
document.querySelector("#link1").addEventListener('click', function(x){

    alert("MESSAGE IN HERE");
    x.stopPropagation();
})

// document.querySelector(".nav").addEventListener('click', function(){
//     document.querySelector(".nav").style.backgroundColor = "red";
// })
// I WASN'T ABLE TO CHANGE THE FONT BECAUSE I WAS TARGETING THE NAV, NOT THE LINKS.
const pinkNav = document.querySelector(".nav");
pinkNav.addEventListener('dblclick', event =>{
    pinkNav.style.backgroundColor = "blue";
})


// THIS IS ONLY SELECTING THE FIRST LINK BECAUSE QUERYSELECTOR ONLY CHOOSES THE FIRST ONE
const pinkNavLetters = document.querySelector(".nav .nav-link");
pinkNavLetters.addEventListener("click", event =>{
    pinkNavLetters.style.color = "pink";
})

// REFERENCE
// const backgroundClr = document.querySelector("*");
// backgroundClr.addEventListener('keypress', event =>{
//     backgroundClr.style.backgroundColor = "orange";
// })

// PREVENT DEFAULT

// const nav = document.querySelector(".nav-link");
// // console.log(nav);
// nav.forEach(element => element.preventDefault());


const nav = document.querySelectorAll('.nav-link');
nav.forEach(element => element.addEventListener('click', event => event.preventDefault()));