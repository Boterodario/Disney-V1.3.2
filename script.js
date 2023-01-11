window.addEventListener("scroll" , function (){
    var body = document.querySelector("body");
    body.classList.toggle("down" , window.scrollY>0);
})