
let = ubicacionPrincipal =window.pageYOffset;
window.onscroll = function() {
  let = Desplazamiento__Actual = window.pageYOffset;
  if(ubicacionPrincipal >= Desplazamiento__Actual){
    document.getElementById("nav__container").style.top = "0px";
  }
  else{
    document.getElementById("nav__container").style.top = "-500px";
  }
  ubicacionPrincipal = Desplazamiento__Actual
}



 var coll = document.getElementsByClassName("collapsible");
 var i;

 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var content = this.nextElementSibling;
   if (content.style.maxHeight){
     content.style.maxHeight = null;
   } else {
     content.style.maxHeight = content.scrollHeight + "px";
   } 
   });
 }

