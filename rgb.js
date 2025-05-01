const button=document.querySelector(".btn");
console.log(button)
const body=document.body;
const randomColor=document.querySelector(".rgb");
console.log(randomColor)

function randomColorGen(){
  const red=Math.floor(Math.random()*256);
  const green=Math.floor(Math.random()*256);
  const blue=Math.floor(Math.random()*256);
  const randomcolor=`RGB(${red},${green},${blue})`;
  return randomcolor;
}
 button.addEventListener("click",()=>{
  const random=randomColorGen();
  console.log(random);
  body.style.backgroundColor=random;
  randomColor.textContent=random;
 })