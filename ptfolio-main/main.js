var typed = new Typed(".text", {
    strings: ["UI/UX Developer& Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(content => {
        content.classList.remove('active-tab');
    });

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => {
        link.classList.remove('active-link'); // Correct class name
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active-tab');

    // Set the clicked tab as active
    const activeLink = Array.from(tabLinks).find(link => link.onclick.toString().includes(tabName));
    if (activeLink) {
        activeLink.classList.add('active-link'); // Correct class name
    }
}


document.getElementById("Email").addEventListener("click", function() {
    const emailId = document.getElementById("Email").textContent; // Get the email address
    window.open(`mailto:${emailId}, '_blank'`); // Open the email client
});