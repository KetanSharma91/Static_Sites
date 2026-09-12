// Dynamically create the head elements
const head = document.head;

// Create meta, link, and title elements
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

const title = document.createElement('title');
title.textContent = 'My Projects';
head.appendChild(title);

const linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', 'assets/css/style.css');
head.appendChild(linkStylesheet);

const linkFavicon = document.createElement('link');
linkFavicon.setAttribute('rel', 'shortcut icon');
linkFavicon.setAttribute('href', 'assets/images/logo1.png');
linkFavicon.setAttribute('type', 'image/x-icon');
head.appendChild(linkFavicon);

// Dynamically create body elements
const body = document.body;

// Create header section
const header = document.createElement('header');
const h1 = document.createElement('h1');
const logoLink = document.createElement('a');
logoLink.setAttribute('href', '#');
const logoImg = document.createElement('img');
logoImg.setAttribute('src', 'assets/images/logo.png');
logoImg.setAttribute('alt', 'logo');
logoLink.appendChild(logoImg);
h1.appendChild(logoLink);
header.appendChild(h1);

// Create nav menu
const nav = document.createElement('nav');
const ul = document.createElement('ul');

// Add menu items
const menuItems = [
  { text: 'Home', href: 'index.html' },
  { text: 'Projects', href: '#projects', class: 'pro', dropdown: true, subitems: [
      { text: 'Webpages', href: 'webpages.html' },
      { text: 'Ui/UX designs', href: '#' },
      { text: 'Apps', href: 'apps.html' }
    ] 
  },
  { text: 'About Me', href: 'index.html#about' },
  { text: 'Contact', href: 'index.html#contact' }
];

menuItems.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('href', item.href);
  a.textContent = item.text;
  if (item.class) a.classList.add(item.class);

  li.appendChild(a);

  if (item.dropdown) {
    const subUl = document.createElement('ul');
    subUl.classList.add('projectscont');

    item.subitems.forEach(subitem => {
      const subLi = document.createElement('li');
      const subA = document.createElement('a');
      subA.setAttribute('href', subitem.href);
      subA.textContent = subitem.text;
      subLi.appendChild(subA);
      subUl.appendChild(subLi);
    });

    li.classList.add('drop');
    li.appendChild(subUl);
  }

  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

// Create menu button
const menuButton = document.createElement('button');
menuButton.classList.add('menu');
menuButton.textContent = '☰';
header.appendChild(menuButton);

body.appendChild(header);

// Create section for UI/UX projects
const section = document.createElement('section');
section.classList.add('projectsec', 'ui');

const divProContent = document.createElement('div');
divProContent.classList.add('procontent');

// Add section title
const h2 = document.createElement('h2');
h2.textContent = 'UI/UX Projects';
divProContent.appendChild(h2);

section.appendChild(divProContent);
body.appendChild(section);

// First Project
const project1 = document.createElement('div');
project1.classList.add('proje1');

const img1 = document.createElement('img');
img1.classList.add('proimg')
img1.setAttribute('src', 'assets/images/uiimgs/uiimage1.jpg');
img1.setAttribute('alt', 'Gamming Console');
project1.appendChild(img1);

const h3_1 = document.createElement('h3');
h3_1.textContent = 'Gamming Console';
project1.appendChild(h3_1);

const p1 = document.createElement('p');
p1.textContent = 'Gamming Website Design';
project1.appendChild(p1);

divProContent.appendChild(project1);

// Second Project
const project2 = document.createElement('div');
project2.classList.add('proje2');

const img2 = document.createElement('img');
img2.classList.add('proimg')
img2.setAttribute('src', 'assets/images/uiimgs/uiimage2.jpg');
img2.setAttribute('alt', 'Nike');
project2.appendChild(img2);

const h3_2 = document.createElement('h3');
h3_2.textContent = 'Nike';
project2.appendChild(h3_2);

const p2 = document.createElement('p');
p2.textContent = 'Shoe E-commerce Website Design';
project2.appendChild(p2);

divProContent.appendChild(project2);

// Third Project
const project3 = document.createElement('div');
project3.classList.add('proje1');

const img3 = document.createElement('img');
img3.classList.add('proimg')
img3.setAttribute('src', 'assets/images/uiimgs/uiimage3.jpg');
img3.setAttribute('alt', 'Design School');
project3.appendChild(img3);

const h3_3 = document.createElement('h3');
h3_3.textContent = 'Design School';
project3.appendChild(h3_3);

const p3 = document.createElement('p');
p3.textContent = 'Education Website Design';
project3.appendChild(p3);

divProContent.appendChild(project3);

// Fourth Project
const project4 = document.createElement('div');
project4.classList.add('proje2');

const img4 = document.createElement('img');
img4.classList.add('proimg')
img4.setAttribute('src', 'assets/images/uiimgs/uiimage4.jpg');
img4.setAttribute('alt', 'Wel|Dev');
project4.appendChild(img4);

const h3_4 = document.createElement('h3');
h3_4.textContent = 'Wel|Dev';
project4.appendChild(h3_4);

const p4 = document.createElement('p');
p4.textContent = 'Business Website Design';
project4.appendChild(p4);

// Add site link for fourth project
const a4 = document.createElement('a');
a4.classList.add('uion');
a4.style.margin = '-36px 0 0 480px';
a4.setAttribute('href', 'https://insett.rf.gd/');
a4.setAttribute('target', '_blank');
a4.textContent = 'Visit Site';
project4.appendChild(a4);

divProContent.appendChild(project4);

let footer = document.createElement('footer');
footer.style.margin = '65px 0 0 1020px';
let footerP = document.createElement('p');
footerP.innerHTML = `Made with <i></i> &copy; 2024 Ketan Sharma`;
footer.appendChild(footerP);
footer.style.margin = '65px 0 0 1020px;';

// Append footer to the contact section
body.appendChild(footer);

// Script
let script = document.createElement('script');
script.setAttribute('src', 'assets/js/script.js');
body.appendChild(script);
