function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
    }

    emailjs.send("service_jt0di1i", "template_0rdn6cj", parms).then(function(response) {
        alert("Email sent successfully!");
    }, function(error) {
        alert("Failed to send email.");
    });
}