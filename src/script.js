document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const toggleButton = document.getElementById("toggle-button")
    const sidebar = document.getElementById('sidebar');
  
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = "var(--black)"; // Change the color as needed
            navbar.style.color = "var(--white)"
            toggleButton.style.stroke = "var(--white)"
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.color = "var(--black)"
            toggleButton.style.stroke = "var(--black)"
        }
    });
    
    function toggleSidebar() {
        if (sidebar.style.width === '300px') {
            sidebar.style.width = '0';
            if (window.scrollY > 0) {
                toggleButton.style.stroke = "var(--white)"
            } else {
                toggleButton.style.stroke = "var(--black)"
            }
        } else {
            sidebar.style.width = '300px';
            toggleButton.style.stroke = "var(--white)"
        }
    }

    document.getElementById('toggle-button').addEventListener('click', function() {
        toggleSidebar();
    });    
});  

