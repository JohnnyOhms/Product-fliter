const itemCollection = document.querySelector(".items-collection")
const selectProduct = document.querySelectorAll('.select-product')
const product = document.querySelectorAll(".items")
const searchInput = document.querySelector(".input-search")
const productName = document.querySelectorAll(".items .item h2")
const menu = document.getElementById("menu")
const menu_bar = document.querySelector(".menu-bar")
let exist_menu =  document.getElementById("exist")
const alert_box = document.querySelector(".alert-box")

selectProduct.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        selectProduct.forEach((item)=>{
            item.classList.remove("active")
        })
        btn.className += " active"

        let fliter = btn.dataset.fliter;
        
        product.forEach((product)=>{
            if (fliter == "all") {
                product.style.display = "block"
            }else if (product.classList.contains(fliter)) {
                product.style.display = "block"
            }else{
                product.style.display = "none"
            }
        })

    })
})

searchInput.addEventListener("keyup", (e)=>{
   let text = e.target.value.toLowerCase();

    productName.forEach((name)=>{
       let names = name.textContent.toLowerCase()
        if (text.indexOf(names) != -1) {
            name.parentElement.parentElement.style.display = "block";
            alert_box.style.display = "none"
        }else{
            name.parentElement.parentElement.style.display = "none";
            alert_box.style.display = "block"
        }
    })
})

// menu bars

menu.addEventListener("click", showMenu)

function showMenu(e){
    e.preventDefault();
    menu.style.display = 'none'
    exist_menu.style.display = 'block'
    menu_bar.style.display = "block"
    // menu.removeEventListener(showMenu)
}

exist_menu.addEventListener("click", closeMenu)

function closeMenu(e){
    e.preventDefault();
    exist_menu.style.display = 'none'
    menu.style.display = 'block'
    menu_bar.style.display = "none"
    // menu.addEventListener("click", showMenu)
    

}




