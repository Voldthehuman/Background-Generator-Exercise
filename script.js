let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient")
let bgRandom = document.getElementById("bgRandom");

function setGradient(){
  body.style.background = "linear-gradient(to right, " 
  + color1.value 
  + "," 
  + color2.value 
  + ")";

  css.textContent = body.style.background + ";";
}

function randomBackground(){
    color1.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    color2.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
bgRandom.addEventListener("click", randomBackground);
bgRandom.addEventListener("click", setGradient);