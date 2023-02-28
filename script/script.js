

let slideIndex = 1;
displaySlides(slideIndex);

function increaseSlides(n) {
    displaySlides(slideIndex += n);
}

function currentSlide(n) {
    displaySlides(slideIndex = n);
}

function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let circles = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    circles[slideIndex - 1].className += " active";
}


// function for download resume
let btnDownload = document.getElementById("btn");
btnDownload.addEventListener("click", startDownload);
async function startDownload() {
    let url = "../download/Raj_Resume_1.pdf";
    let fileName = "user_Resume";
    const res = await fetch(url);
    var blob = new Blob([res], { type: "application/pdf;charset=utf-8" }); s
    saveAs(blob, fileName);
}

$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("#navbar").addClass('bg-dark').removeClass('bg-transparent');
        }
        else {
            $("#navbar").addClass('bg-transparent').removeClass('bg-dark');
        }
    })
});

// function downloads() {

//     var link = document.createElement('a');
//     link.href = '../download/Raj_Resume_1.pdf';
//     link.download = 'file.pdf';
//     link.dispatchEvent(new MouseEvent('click'));
//     console.log('link =>', link);
// }

// function download(filename, textInput) {

//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
//     element.setAttribute('download', filename);
//     document.body.appendChild(element);
//     element.click();
//     //document.body.removeChild(element);
// }
// document.getElementById("btn")
//     .addEventListener("click", function () {
//         var text = document.getElementById("text").value;
//         var filename = "resume.pdf";
//         download(filename, text);
//     }, false);