let menu = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menu.onclick = () =>{
    menu.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
}

document.querySelectorAll(".service-box .btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".service-box");
    card.classList.toggle("flipped");
  });
});

const typed = new Typed('.multiple-text', {
   strings: ['B.Tech Graduate.','Java Full Stack Developer.'],
   typeSpeed: 69,
   backSpeed: 69,
   backDelay: 1806,
   loop: true,
 });



 (function () {
   emailjs.init("WnDCT6mTal0JMSCMX"); // EmailJS Public Key
 })();

 document
   .getElementById("contactForm")
   .addEventListener("submit", function (event) {
     event.preventDefault(); // Prevent page reload

     let formData = {
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       phone: document.getElementById("phone").value,
       subject: document.getElementById("subject").value,
       message: document.getElementById("message").value,
     };

     emailjs.send("service_9zk4hfo", "template_zyker78", formData).then(
       function (response) {
         document.getElementById("responseMessage").innerText =
           "Message sent successfully!";
       },
       function (error) {
         document.getElementById("responseMessage").innerText =
           "Error sending message. Try again.";
         console.error("Email error:", error);
       }
     );
   });