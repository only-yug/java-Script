let btn=document.querySelector("button")
btn.addEventListener('click',call)

function call(){
    let h3=document.querySelector("h3")
    let newColour=randomColour()
    h3.innerText=newColour
    let div = document.querySelector(".maindiv");
    div.style.backgroundColor=newColour
    // div.style.backgroundColor=newColour
    console.log("The Colour Updated")
    console.log(colour)

}

// let red,green,blue;
let colour;
function randomColour(){
    let r=Math.floor(Math.random()*255+1)
    let g=Math.floor(Math.random()*255+1)
    let b=Math.floor(Math.random()*255+1)
    // console.log(r,g,b)
    // red=r
    // green=g
    // blue=b
    colour=`RGB(${r},${g},${b})`
    return colour
}
// randomColour()
// console.log(red,green,blue)
// console.log(colour)

