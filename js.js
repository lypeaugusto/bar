function toggleMenu() {
    var menu = document.querySelector('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Show the menu
    } else {
        menu.style.display = 'none'; // Hide the menu
    }
}