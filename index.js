let starsBox = document.querySelectorAll(".stars")
let tstBox = document.querySelectorAll(".tstBox")
let arrowRight = document.querySelector("[alt='arrowRight']")
let arrowLeft = document.querySelector("[alt='arrowLeft']")
let barsBox = document.querySelector(".barsBox")

// Mobile Menu Bar
barsBox.addEventListener("click",function(){
    let barOne = document.querySelector(".bars")
    let barTwo = document.querySelector(".bars-stragged")
    let navLinks = document.querySelector(".navLinks")
        barOne.classList.toggle("none")
        navLinks.classList.toggle("visible")
        barTwo.classList.toggle("block")
})

// Adding Stars
for(i = 0; i < starsBox.length; i++){
    for(k = 0; k < 5; k++){
        let img = document.createElement("img")
        img.src = "./images/star-solid.svg"
        img.alt = "star"
        starsBox[i].appendChild(img)
    }
}

// Arrow Of Comments
console.log(tstBox.item(0).previousElementSibling)
arrowLeft.addEventListener("click",function(){
    tstBox.item(0).classList.add("seen")
    tstBox.item(1).classList.remove("seen")
    
    if(tstBox.item(2).classList.contains("seen")){
        tstBox.item(1).classList.add("seen")
        tstBox.item(0).classList.remove("seen")
        tstBox.item(2).classList.remove("seen")
    }
})
arrowRight.addEventListener("click",function(){
    tstBox.item(1).nextElementSibling.classList.add("seen")
    tstBox.item(1).classList.remove("seen")
    if(tstBox.item(0).classList.contains("seen")){
        tstBox.item(0).classList.remove("seen")
        tstBox.item(1).classList.add("seen")
        tstBox.item(2).classList.remove("seen")
    }
})
