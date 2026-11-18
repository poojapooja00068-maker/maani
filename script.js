// MOBILE MENU

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}

// CLOSE MENU AFTER CLICKING

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        document.getElementById("navLinks")
        .classList.remove("active");

    });

});

// NOTICE BOARD

function showNotice() {

    const notice = document.getElementById("noticeList");

    const newNotice = document.createElement("div");

    newNotice.className = "notice-item";

    newNotice.innerHTML =
        "📢 New student innovation and project development activities.";

    notice.appendChild(newNotice);

}

// CONTACT FORM

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you " + name + "! Your message has been submitted.";

    document.getElementById("contactForm").reset();

});