let menuIcon = document.querySelector('.menu');
let navbar = document.querySelector('nav ul');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('menu');
    navbar.classList.toggle('active');
};

let pro = document.querySelector('.pro')
let dropdown = document.querySelector('.projectscont')

pro.onclick = (event) => {
    // Prevent the default action (such as page reload or navigation)
    event.preventDefault();

    // Prevent the event from propagating up the DOM tree
    event.stopPropagation();

    // Toggle the 'show' class to display/hide the dropdown
    dropdown.classList.toggle('show');
};

// Close the dropdown when clicking outside
document.onclick = (event) => {
    if (!pro.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
};

