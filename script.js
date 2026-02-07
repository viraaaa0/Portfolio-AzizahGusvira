(function () {
  emailjs.init("Q0SkckuvTBCtdw9LF"); // 🔴 GANTI
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.style.color = "#64748b";

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send(
        "service_portfolio",   // 🔴 GANTI
        "template_nbc15fz",  // 🔴 GANTI
        params
      )
      .then(
        function () {
          status.textContent = "Message sent successfully. Thank you!";
          status.style.color = "#16a34a";
          form.reset();
        },
        function (error) {
          status.textContent =
            "Failed to send message. Please try again later.";
          status.style.color = "#dc2626";
          console.error("EmailJS Error:", error);
        }
      );
  });
});
