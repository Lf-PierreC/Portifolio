function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open'); 

    
}

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener("click", () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('open');
    });
});