var x = 7;
var y = 5;
var z = x + y;
console.log(z);
var A = 'hello';
var B = 'world';
var C = A +B;
console.log(C);

// this is a js example
/*adkfj;asldkfja;sldkfja;lsdkfj*/

function myFirstFunction(x1, x2) {
    var x3 = x1 + x2;
   // window.alert(x3);
   console.log(x3);
}

myFirstFunction(x, y);
myFirstFunction(A, B);

var now = new Date();
console.log(now);

var currentYear = now.getFullYear();
console.log(currentYear);

if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
}
else {
    console.log("Good job!")
}

function greeting(x) {
    if (x < 12) {
        return "Good morning!";
    } else if (x < 18) {
        return "Good afternoon!";
    } else if (x < 20) {
        return "Good evening!";
    } else {
        return "Good night!";
    }
}

// greeting update should only run on home/index page (or when #greeting exists) to avoid errors on other pages
var isIndexPage = window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");
var greetingEl = document.getElementById("greeting");
if (isIndexPage && greetingEl) {
    greetingEl.textContent = greeting(new Date().getHours());
}

var footerCopyEl = document.getElementById("footer_copy");
if (footerCopyEl) {
    footerCopyEl.innerHTML = "Monomuse&copy; " + currentYear;
}

function addYear() {
    var year = new Date().getFullYear();
    var copyYearEl = document.getElementById("copyYear");
    if (copyYearEl) {
        copyYearEl.textContent = year;
    }
}

addYear();

// // function Active_Nav() {
//     var navLinks = document.querySelectorAll('nav li a');
//     console.log(navLinks);
//     var activePage = window.location.href;
//     console.log(activePage);
// }

// Active_Nav();