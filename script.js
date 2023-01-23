
//  let = ubicacionPrincipal =window.pageYOffset;
//  window.onscroll = function() {
//  let = Desplazamiento__Actual = window.pageYOffset;
//  if( ubicacionPrincipal >= Desplazamiento__Actual){
// document.getElementById("nav").style.top = "0";
//  }
//  else{
//  document.getElementById("nav").style.top= "-600px";

//  }
//  ubicacionPrincipal = Desplazamiento__Actual
//  }







 function changeBackground() {
 // document.getElementById('nav').style.backgroundColor = color;
 document.getElementById("nav__menu").style.justifyContent = "space-around";
 document.getElementById("nav__menu").style.display = "block";
 document.getElementById("nav").style.display = "none";
 document.getElementById("nav__item1").style.display = "block";
 document.getElementById("nav__item2").style.display = "block";
 document.getElementById("nav__item3").style.display = "block";
 let = ubicacionPrincipal =window.pageYOffset;
window.onscroll = function() {
let = Desplazamiento__Actual = window.pageYOffset;
if( ubicacionPrincipal >= Desplazamiento__Actual){
ocument.getElementById("nav").style.top = "0";
}
else{
document.getElementById("nav").style.top= "-600px";
}
ubicacionPrincipal = Desplazamiento__Actual
}

}
 window.addEventListener("scroll",function() { changeBackground() });










var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

