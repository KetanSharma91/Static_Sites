// Create the document structure
document.documentElement.lang = "en";

// Set up the <head> section
let head = document.head;

// Meta tags
let metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

let metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

// Title
let title = document.createElement('title');
title.textContent = "My Projects";
head.appendChild(title);

// Stylesheets
let linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', 'assets/css/style.css');
head.appendChild(linkStylesheet);

let linkFavicon = document.createElement('link');
linkFavicon.setAttribute('rel', 'shortcut icon');
linkFavicon.setAttribute('href', 'assets/images/logo1.png');
linkFavicon.setAttribute('type', 'image/x-icon');
head.appendChild(linkFavicon);

// Create <body> section
let body = document.body;

// Inline styles
let style = document.createElement('style');
style.textContent = `
    .prohead {
        margin: 60px 0 0 200px;
        font-size: 8.5em;
    }
    
    footer p {
        margin: 155px 0 0 0;
    }

    @media (max-width: 428px) {
        .prohead {
            margin: 60px 0 0 55px;
            font-size: 3.5em;
        }
    }
`;
body.appendChild(style);

// Header
let header = document.createElement('header');
let h1 = document.createElement('h1');
let logoLink = document.createElement('a');
logoLink.setAttribute('href', '#');
let logoImg = document.createElement('img');
logoImg.setAttribute('src', 'assets/images/logo.png');
logoImg.setAttribute('alt', 'logo');
logoLink.appendChild(logoImg);
h1.appendChild(logoLink);
header.appendChild(h1);

// Navigation
let nav = document.createElement('nav');
let ul = document.createElement('ul');

// Navigation items
let navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Projects', href: '#projects', dropdown: [
        { text: 'Webpages', href: 'webpages.html' },
        { text: 'Ui/UX designs', href: 'uidesigns.html' },
        { text: 'Apps', href: 'apps.html' }
    ]},
    { text: 'About Me', href: 'index.html#about' },
    { text: 'Contact', href: 'index.html#contact' }
];

// Create list items for nav
navItems.forEach(item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = item.text;
    a.setAttribute('href', item.href);
    
    if (item.dropdown) {
        li.classList.add('drop');
        let subUl = document.createElement('ul');
        subUl.classList.add('projectscont');

        item.dropdown.forEach(subItem => {
            let subLi = document.createElement('li');
            let subA = document.createElement('a');
            subA.setAttribute('href', subItem.href);
            subA.textContent = subItem.text;
            subLi.appendChild(subA);
            subUl.appendChild(subLi);
        });
        li.appendChild(a);
        li.appendChild(subUl);
    } else {
        li.appendChild(a);
    }

    ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

// Menu button
let menuButton = document.createElement('button');
menuButton.classList.add('menu');
menuButton.textContent = '☰';
header.appendChild(menuButton);
body.appendChild(header);

// Main heading
let mainHeading = document.createElement('h1');
mainHeading.classList.add('prohead');
let mainLink = document.createElement('a');
mainLink.setAttribute('href', 'index.html#contact');
mainLink.textContent = 'Contact';
mainHeading.appendChild(mainLink);
mainHeading.appendChild(document.createTextNode(' Me to see this Project'));
document.body.appendChild(mainHeading);

// Footer
let footer = document.createElement('footer');
let footerP = document.createElement('p');
footerP.innerHTML = `Made with <i></i> &copy; 2024 Ketan Sharma`;
footer.appendChild(footerP);
body.appendChild(footer);

// Script
let script = document.createElement('script');
script.setAttribute('src', 'assets/js/script.js');
body.appendChild(script);
