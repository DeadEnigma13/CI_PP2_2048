// Prevent contact form container going off the mobile screen when clicking on input field & keyboard being shown on screen
$(document).ready(function () {
    if ($(window).width() <= 740) { // common horizontal viewport dimension of mobile screens
        document.getElementsByTagName("input")[0].addEventListener("focus", function () {
            document.getElementById("grid").style.top = "75%";
        });
        document.getElementsByTagName("input")[0].addEventListener("blur", function () { // container returns to its default position when input not focused
            document.getElementById("grid").style.top = "45%";
        });
    }
});

// Add an eventListener to listen for the submit.
// Sends an email to site owner through emailJS if the submit is fired.
// Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
// and Email Templates Playground environment.
const btn = document.getElementById("btn-send-form");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    btn.value = 'Sending...';
    
    const serviceID = 'service_bvxfb89';
    const templateID = 'template_78924mr';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
})