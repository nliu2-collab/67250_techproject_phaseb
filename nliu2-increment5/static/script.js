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

function loadLeafletMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  if (typeof L === "undefined") {
    console.log("Leaflet did not load.");
    return;
  }

  if (mapElement._leaflet_id) return;

  const museumLat = 40.4443;
  const museumLng = -80.0020;

  const map = L.map("map").setView([museumLat, museumLng], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([museumLat, museumLng])
    .addTo(map)
    .bindPopup("Museum Location")
    .openPopup();
}

document.addEventListener("DOMContentLoaded", function () {
  loadLeafletMap();
});

addYear();
ActiveNav();