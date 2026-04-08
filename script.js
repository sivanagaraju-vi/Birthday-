let pages=document.querySelectorAll("section");
let current=0;

function nextPage(){
 pages[current].classList.remove("active");
 current++;
 pages[current].classList.add("active");
}

let target=new Date("April 08, 2026 09:00:00").getTime();

setInterval(()=>{
 let now=new Date().getTime();
 let diff=target-now;

 if(diff<=0){
  enterBtn.disabled=false;
  enterBtn.innerText="Enter ❤️";
  enterBtn.onclick=nextPage;
 }else{
  countdown.innerText=Math.floor(diff/1000)+" sec";
 }
},1000);

let music=document.getElementById("music");
function toggleMusic(){
 if(music.paused){music.play();icon.innerText="⏸";}
 else{music.pause();icon.innerText="▶";}
}

let txt="You came into my life and made everything better. Every moment with you is special...";
let i=0;
function type(){
 if(i<txt.length){
  document.getElementById("text").innerHTML+=txt[i];
  i++;
  setTimeout(type,40);
 }
}
type();

let canvas=document.getElementById("fireworks");
let ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function firework(){
 let x=Math.random()*canvas.width;
 let y=canvas.height;
 let targetY=Math.random()*canvas.height/2;

 let interval=setInterval(()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,3,0,Math.PI*2);
  ctx.fillStyle="yellow";
  ctx.fill();
  y-=10;

  if(y<=targetY){
   clearInterval(interval);
   for(let i=0;i<20;i++){
    ctx.beginPath();
    ctx.arc(x+Math.random()*50-25,targetY+Math.random()*50-25,2,0,Math.PI*2);
    ctx.fillStyle="pink";
    ctx.fill();
   }
  }
 },30);
}
setInterval(firework,800);
