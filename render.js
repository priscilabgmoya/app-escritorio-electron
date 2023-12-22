const count = document.getElementById("count"),
btnClickMe = document.getElementById("btnClickMe"); 

btnClickMe.addEventListener("click", () =>{
  count.innerText = parseInt(count.innerText) +1; 
})