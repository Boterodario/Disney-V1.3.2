
var  prevScrollpos =window.pageYOffset;
window.onscroll = function() {
var   currentScrollPos  = window.pageYOffset;
if( prevScrollpos > currentScrollPos){
  document.getElementById("nav").style.top = "0";
  document.getElementById("nav__menu").style.display = "none";
}
else{
  document.getElementById("nav").style.top = "-600px";
  document.getElementById("nav__menu").style.display = "block";
  
}
prevScrollpos = currentScrollPos
}

// var fax = window.pageYOffset;
  // window.onscroll= function (){
    // var superfax = window.pageYOffset;
    // if ( fax > superfax){
      // document.getElementById("nav__menu").style.display = "none"
    // }else{
      // document.getElementById("nav__menu").style.display = "block"
    // }
    // fax = superfax
// }

//  function changeBackground() {
  // var scrollTop = window.scrollY
  // if(scrollTop < 500){
  // document.getElementById("nav").style.display = "none";
  // document.getElementById("nav__menu").style.display = "block";
  // }
  // window.addEventListener("scroll",function() { changeBackground() });
//  }

 // document.getElementById('nav').style.backgroundColor = color;
//  document.getElementById("nav__menu").style.justifyContent = "space-around";
//  document.getElementById("nav__menu").style.display = "block";
//  document.getElementById("nav").style.display = "none";



 
// }
//  window.addEventListener("scroll",function() { changeBackground() });










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

