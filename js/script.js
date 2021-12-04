const mobileNav = document.querySelector("#burger-menu");
const burgerBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const links = document.querySelectorAll(".mobile__nav-link");
const searchBtn = document.querySelector("#search-icon");
const inputBox = document.querySelector("#inputBox");
const cartBtn = document.querySelector("#cart-icon");
const menuCart = document.querySelector("#menu__cart");

links.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open")  
    })
});

// Burger 

burgerBtn.addEventListener("click",() => {
    mobileNav.classList.add("open")
});
burgerBtn.addEventListener("click",() => {
    if (inputBox.style.display == "flex")
        inputBox.style.display = "none";
    if (menuCart.style.display == "block")
        menuCart.style.display = "none";
});

// Mobile Navigation X

closeBtn.addEventListener("click",() => {
    mobileNav.classList.remove("open")
});

// Search Button

searchBtn.addEventListener("click", () => {
    if (inputBox.style.display == "flex")
        inputBox.style.display = "none"
    else
        inputBox.style.display = "flex";
    if (menuCart.style.display == "block")
        menuCart.style.display = "none";
});

// Cart Btn

cartBtn.addEventListener("click", () => {
    if (menuCart.style.display == "block")
        menuCart.style.display = "none"
    else
        menuCart.style.display = "block";
    if (inputBox.style.display == "flex")
        inputBox.style.display = "none";
});
