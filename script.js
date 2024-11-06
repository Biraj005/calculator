let buttons = document.querySelectorAll(".box");
let input = document.querySelector(".result");

let string = "";

// Convert NodeList to Array to use forEach
let arr = Array.from(buttons);

arr.forEach(button => {
   button.addEventListener("click", (e) => {
     if(e.target.innerHTML==='='){
       string=eval(string);
       input.value=string;
     }else if(e.target.innerHTML==='AC'){
        string="";
        input.value=string;
     }else if(e.target.innerHTML==='00'){
           string+="00";
           input.value=string;
     }else if(e.target.innerHTML==="%"){
      string=eval(string)/100;
      input.value=string;
     }
      else if(e.target.innerHTML==="DEL"){
      string=string.substring(0,string.length-1);
      input.value=string;
     }
     else{
      string+=e.target.innerHTML;
      input.value=string;
 
     }
    
   });
});
