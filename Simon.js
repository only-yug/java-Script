let game=[]
let ans=[]
let status = 0
let level=0;
let randomlyGenrated;
let ranClass

let h2=document.querySelector("h2")
let c1=document.querySelector(".c1")
let c2=document.querySelector(".c2")
let c3=document.querySelector(".c3")
let c4=document.querySelector(".c4")
let btns=document.querySelectorAll("#btn")


document.addEventListener("keypress",welcome)
function welcome(){
 if (status == 0){
    console.log("So you are in game ;)")
    status = 1
    levelup()
    }
}


function start(){
   levelup()
}

function levelup(){
    ans=[];
    level++; 
    h2.innerText=`The Level = ${level}`
    select()
    game.push(ranClass)
    console.log(`the ans is`,game)
    // checkans()
}
function select(){
    let Element=Math.floor(Math.random()*4+1)
    ranClass=`c${Element}`
    randomlyGenrated=document.querySelector(`.c${Element}`)
    flash(randomlyGenrated);
}
 function flash(x){
    x.classList.add("c00");
    setTimeout(function (){
    x.classList.remove("c00");
    }, 500);
 }
 function userflash(x){
    x.classList.add("c99");
    setTimeout(function (){
    x.classList.remove("c99");
    }, 100);
 }


 for (i of btns){
    i.addEventListener("click",btnpress)}

function btnpress(){
    let btn=this
    let inp=btn.className
    userflash(btn);
    ans.push(inp)
    console.log(`You enterd`,ans)
    // if(ans.length==game.length){ checkans() }
    checkans(ans.length-1)
}
 

function checkans(i){
    // let i= level-1; 
    if(ans[i]===game[i]){
    if(ans.length==game.length){
        levelup()}
    }
    else{
        h2.innerHTML=`The game is over. <br> Your score was =${level}`
        document.querySelector("body").style.backgroundColor="black"
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},300)
        reset();
    }
}
function reset(){
    status = 0;
    level=0;
    game=[];
    ans=[];
}