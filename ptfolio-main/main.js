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

    
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => {
        link.classList.remove('active-link'); 
    });


    document.getElementById(tabName).classList.add('active-tab');

    
    const activeLink = Array.from(tabLinks).find(link => link.onclick.toString().includes(tabName));
    if (activeLink) {
        activeLink.classList.add('active-link'); 
    }
}

