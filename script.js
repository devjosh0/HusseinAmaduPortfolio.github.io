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



const certificateContainer = document.querySelector('.certificates-container');
const certificatesSection = document.getElementById('certificates');

// Get the width of the #certificates section
const containerWidth = certificatesSection.offsetWidth;

function moveCertificates() {
    let position = containerWidth;
    const contentWidth = certificateContainer.scrollWidth;

    function move() {
        if (position + contentWidth > 0) {
            position -= 2; // Adjust speed here
            certificateContainer.style.transform = `translateX(${position}px)`;
        } else {
            position = containerWidth; // Reset position when it reaches the end
        }
        requestAnimationFrame(move);
    }

    move();
}

moveCertificates();
