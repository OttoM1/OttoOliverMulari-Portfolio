







document.getElementById("poks").addEventListener("click", function() {
    let button = this;
    button.classList.add("pulse");

    setTimeout(() => {
        button.classList.remove("pulse"); 
    }, 400);
});



document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .kuva-otto img"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0 }); 

    fadeElements.forEach(el => observer.observe(el)); 
});










(function() {
    emailjs.init("f83myWnHa8CJyFiQg"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nimiInput = document.getElementById("Nimi");
    let sähköpostiInput = document.getElementById("Sähköposti");
    let viestisiInput = document.getElementById("Viestisi");

    let templateParams = {
        name: nimiInput.value,        // Fixed
        email: sähköpostiInput.value, 
        message: viestisiInput.value  
    };
    
    emailjs.send("service_i1244mo", "template_ffu9jtk", templateParams)
        .then(function(response) {
            showPopup("successMessage");

            nimiInput.value = "";
            sähköpostiInput.value = "";
            viestisiInput.value = "";
        }, function(error) {
            showPopup("errorMessage");
        });
});

function showPopup(id) {
    let popup = document.getElementById(id);
    popup.style.display = "flex";
    
    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
}






function isWebView() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /FBAN|FBAV|Instagram|Twitter|LinkedIn|FB_IAB|FB4A|FBAN|FBIOS/i.test(userAgent);
}

if (isWebView()) {
    document.body.classList.add("webview-mode"); 
}