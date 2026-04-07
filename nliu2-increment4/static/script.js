function greeting(x) {
    if (x < 12) return "Good morning!";
    else if (x < 18) return "Good afternoon!";
    else if (x < 20) return "Good evening!";
    else return "Good night!";
}

var isIndexPage = window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");
var greetingEl = document.getElementById("greeting");

if (isIndexPage && greetingEl) {
    greetingEl.textContent = greeting(new Date().getHours());
}

function addYear() {
    var year = new Date().getFullYear();
    var copyYearEl = document.getElementById("copyYear");
    if (copyYearEl) {
        copyYearEl.textContent = "© " + year + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl || 
            (currentUrl.endsWith('/') && link.href.endsWith('/index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function showForm() {
    var form = document.getElementById("purchaseForm");
    if (form) {
        form.style.display = "block";
    }
}

$(document).ready(function(){

    $("#readLess").click(function(){ 
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });

    $("#readMore").click(function(){
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });

});

addYear();
ActiveNav();