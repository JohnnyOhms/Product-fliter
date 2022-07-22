const itemCollection = document.querySelector(".items-collection")
const selectProduct = document.querySelectorAll('.select-product')
const product = document.querySelectorAll(".items")


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