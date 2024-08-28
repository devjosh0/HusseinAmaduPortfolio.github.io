// Initialize AOS
AOS.init({
    duration: 1000, // default duration of the animations
    once: true // whether animation should happen only once - while scrolling down
});

// Open the menu modal
function openMenu() {
    document.getElementById('menu-modal').style.display = 'block';
}

// Close the menu modal
function closeMenu() {
    document.getElementById('menu-modal').style.display = 'none';
}

// Form validation
function validateForm() {
    // Add your form validation logic here
    return true; // Return true if the form is valid, false otherwise
}
