let outershape=document.querySelector(".round");
let innershape=document.querySelector("#triangle");
let btn1 = document.querySelector(".c");
let btn2 = document.querySelector(".s");

btn1.addEventListener("click" , changecolor)

function gencolor(){
    let gentdcolor = Math.floor(Math.random()*255);
    return gentdcolor;
}

function changecolor(){
    let newcolor = `rgb(${gencolor()} ,${gencolor()} ,${gencolor()})`
    outershape.style.backgroundColor=newcolor;
}

btn2.addEventListener("click", changeshape)

let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomshape(){
    let newshape = Math.floor(Math.random()*arr.length);
    return arr[newshape];
}

function changeshape(){
    let shapename = randomshape();
    innershape.id = shapename;
}