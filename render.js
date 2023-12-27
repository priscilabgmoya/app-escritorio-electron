const count = document.getElementById("count"),
btnClickMe = document.getElementById("btnClickMe"), 
btnDelete = document.getElementById("btnDelete"),
btnReset = document.getElementById("btnReset"); 

btnClickMe.addEventListener("click", () =>{
  count.innerText = parseInt(count.innerText) +1; 
})
btnReset.addEventListener("click", () =>{
  count.innerText = 0; 
})
btnDelete.addEventListener("click", () =>{
  if(parseInt( count.innerText) > 0){
    count.innerText =  parseInt(count.innerText) - 1; 
  }
})