var bulbImg = document.getElementById("bulbImg")
function bulbOn(){
    console.log("Bulb On", bulbImg.src)
    bulbImg.src="./images/bulbon.png" 
}

function bulbOff(){
    console.log("Bulb Off")
    bulbImg.src="./images/bulboff.png"
}