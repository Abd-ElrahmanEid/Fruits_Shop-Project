let arrow = document.querySelector("#dd")


let shadow = document.querySelector(".navbar .dropdown")

arrow.addEventListener("click" , function(){

    if(shadow.style.display == "none"){
        shadow.style.display = "block"
    } else{
        shadow.style.display = "none"
    }
})
