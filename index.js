let starsBox = document.querySelectorAll(".stars")
let tstBox = document.querySelectorAll(".tstBox")
let arrowRight = document.querySelector("[alt='arrowRight']")
let arrowLeft = document.querySelector("[alt='arrowLeft']")

// Adding Star Comment

for(i = 0; i < starsBox.length; i++){
    for(k = 0; k < 5; k++){
        let img = document.createElement("img")
        img.src = "./images/star-solid.svg"
        img.alt = "star"
        starsBox[i].appendChild(img)
    }
}

// Making Arrow Comment

arrowLeft.addEventListener("click",function(){
    tstBox.forEach((e)=>{
        if(e.classList.contains("seen")){
            e.classList.toggle("seen")
        }else{
            e.classList.toggle("seen")
        }
    })
})
arrowRight.addEventListener("click",function(){
    tstBox.item(1).nextElementSibling.classList.toggle("seen")
    tstBox.item(1).classList.toggle("seen")
})