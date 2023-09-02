var con =document.querySelector("#container")
var lov =document.querySelector("i")

con.addEventListener("click",function(){
   lov.style.transform=('translate(-50% ,-50% )scale(1)')
   lov.style.color=("red")
   setTimeout(function(){
      lov.style.transform=('translate(-50% ,-50% )scale(0)')
   },3000);
})


   