window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader')

    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500);
    }, 1500);
    

    const mobileNav = document.querySelector("#burger-menu");
    const burgerBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const links = document.querySelectorAll(".mobile__nav-link");
    const searchBtn = document.querySelector("#search-icon");
    const cartBtn = document.querySelector("#cart-icon");

    window.addEventListener('load', () => {
        let sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
        // for Search Icon
            // creating new elements
            let inputBox = document.createElement("div") ;
            let inputBoxSearch = document.createElement("input");
            let span = document.createElement("span");

            // adding styles to new elements
            inputBox.classList.add("inputBox_search");
            inputBox.setAttribute('id', 'inputBox')
            inputBoxSearch.classList.add("inputBoxSearch");
            span.classList.add("fas", "fa-search", "inputBox__span");

            // connecting elements each other
            inputBox.appendChild(inputBoxSearch);
            inputBox.appendChild(span);
            section.appendChild(inputBox);        
        
        // for Cart Icon
            //creating element
            let mainCart = document.createElement('div');

            // adding style to element
            mainCart.classList.add('main__cart');
            mainCart.setAttribute('id', 'menu__cart');

            // Cart Btn

            cartBtn.addEventListener("click", () => {
                if (mainCart.style.display == "block")
                    mainCart.style.display = "none"
                else
                    mainCart.style.display = "block";
                if (inputBox.style.display == "flex")
                    inputBox.style.display = "none";
            });

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
                if (mainCart.style.display == "block")
                    mainCart.style.display = "none";
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
                if (mainCart.style.display == "block")
                    mainCart.style.display = "none";
            });
        })
    });
})