// Search Bar Interaction
document.getElementById('search-input').addEventListener('input', function () {
    console.log('User is typing in the search bar:', this.value);
});

// Cart Interaction
var cartIcon = document.querySelector('.nav-cart');
cartIcon.addEventListener('mouseover', function () {
    console.log('User is hovering over nth cart icon.');
});

// Footer Link Interaction
var footerLinks = document.querySelectorAll('.foot-panel2 a');
footerLinks.forEach(function (link) {
    link.addEventListener('mouseover', function () {
        this.style.color = 'orange'; // Change the color to orange on hover
    });
    link.addEventListener('mouseout', function () {
        this.style.color = 'white'; // Change it back to white when the mouse leaves
    });
});