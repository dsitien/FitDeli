document.getElementById("contact-btn").addEventListener("click", function () {
    var form = document.getElementById("contact-form");
    if (form.style.opacity === "0") {
        form.style.opacity = "1";
        form.style.pointerEvents = "auto";
    } else {
        form.style.opacity = "0";
        form.style.pointerEvents = "none";
    }
});


document.querySelector('#contact-form').addEventListener('submit', function (e) {
    var button = document.querySelector('.frm-btn');
    if (button.innerText === 'Request Free Quote') {
        e.preventDefault();
        button.innerText = 'Done, please wait for our mail';
        button.classList.add('accepted');
        setTimeout(function () {
            e.target.submit();
        }, 2000);
    }
    else {
        e.preventDefault();
    }

});

var menu = document.querySelector('.menu')
var img = document.querySelector('.menu-btn img')

var check = false
function toggleMenu() {
   
    if (check == false) {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";
        img.src = "./assets/images/header/close.png";
        check = true
    }else{
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
        img.src = "./assets/images/header/menu.png";
        check = false
    }
}
function setupMenuToggle() {
    if (window.matchMedia("(max-width: 666px)").matches) {
        document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
        console.log('hi')
    } else {
        document.querySelector('.menu-btn').removeEventListener('click', toggleMenu);
       
        console.log('hello')
    }
}
setupMenuToggle()



