// Select img Landing Page Element 
let landingPhoto = document.querySelector(".landing .container .image img")
// Get Array Of Images 
let imgsArray = ["landing.jpg","landing-02.jpg","landing-03.jpg","landing-04.jpg"];
//  random background option 
let imgOption = true;
// variable to control the interval 

let imgInterval;

// function to randomize images 
function randomizeImgs () {
    if (imgOption === true) {
        imgInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // Change Background img
            landingPhoto.src = `imgs/${imgsArray[randomNumber]}`;

        },10000)
    }

}
randomizeImgs();

// select all a in info in menu 
let orderBtn = document.querySelectorAll(".menu .box .info a")
let icon = document.querySelector(".icon .counter")

orderBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        icon.innerHTML++;
    });
});

// form 
let form = document.querySelector("form")
let inputs = document.querySelectorAll("form .main-input");



form.onsubmit = function () {
    inputs.forEach(input => {
        input.value !== '' ? true : false
    })

} 
// burger btn
let burger = document.querySelector(".burger");
let sideBar = document.querySelector(".side-bar");
let closeBtn = document.querySelector(".close-btn");

burger.onclick = function () {
    sideBar.classList.toggle("open");
}
closeBtn.onclick = function () {
    sideBar.classList.remove("open")
}