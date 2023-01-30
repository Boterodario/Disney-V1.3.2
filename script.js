

//MENU CON SCROLL

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav__menu").style.display = "none";
  }
  else {
    document.getElementById("nav").style.top = "-600px";
    document.getElementById("nav__menu").style.display = "block";

  }
  prevScrollpos = currentScrollPos
}


//MENU DESPLEGABLE

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

