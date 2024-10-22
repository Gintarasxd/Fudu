document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');

    burgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');  // Įjungiamas/išjungiamas meniu
    });
});

// Pasirinkti visus <li> elementus iš meniu
const menuItems = document.querySelectorAll('nav ul li a');

// Pridėti įvykį kiekvienam elementui
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Panaikinti 'active' klasę iš visų elementų
        menuItems.forEach(link => link.parentElement.classList.remove('active'));

        // Pridėti 'active' klasei šiuo metu spustelėtam elementui
        this.parentElement.classList.add('active');
    });
});
