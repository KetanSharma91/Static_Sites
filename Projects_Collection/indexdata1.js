// Set up the <head> section
document.title = "My Projects";

// Meta tags
let metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaCharset);

let metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaViewport);

// Stylesheets
let linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', 'assets/css/style.css');
document.head.appendChild(linkStylesheet);

let linkFavicon = document.createElement('link');
linkFavicon.setAttribute('rel', 'shortcut icon');
linkFavicon.setAttribute('href', 'assets/images/logo1.png');
linkFavicon.setAttribute('type', 'image/x-icon');
document.head.appendChild(linkFavicon);

// Create <body> section
let body = document.body;

// Header
let header = document.createElement('header');
body.appendChild(header);

// Logo inside <h1>
let h1Logo = document.createElement('h1');
let logoLink = document.createElement('a');
logoLink.setAttribute('href', '#');
let logoImg = document.createElement('img');
logoImg.setAttribute('src', 'assets/images/logo.png');
logoImg.setAttribute('alt', 'logo');
logoLink.appendChild(logoImg);
h1Logo.appendChild(logoLink);
header.appendChild(h1Logo);

// Navigation
let nav = document.createElement('nav');
let ulNav = document.createElement('ul');

let navItems = [
    { text: 'Home', href: '#home' },
    {
        text: 'Projects', href: '', dropdown: [
            { text: 'Webpages', href: 'webpages.html' },
            { text: 'Ui/UX designs', href: 'uidesigns.html' },
            { text: 'Apps', href: 'apps.html' }
        ]
    },
    { text: 'About Me', href: '#about' },
    { text: 'Contact', href: '#contact' }
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

    ulNav.appendChild(li);
});
nav.appendChild(ulNav);
header.appendChild(nav);

// Menu button
let menuButton = document.createElement('button');
menuButton.classList.add('menu');
header.appendChild(menuButton);

// Hero Section
let heroSection = document.createElement('section');
heroSection.id = 'home';
heroSection.classList.add('hero');
let heroH1 = document.createElement('h1');
heroH1.textContent = 'Welcome to My Portfolio';
let heroP = document.createElement('p');
heroP.textContent = 'Click on the projects below to explore!';
let heroBtn = document.createElement('a');
heroBtn.classList.add('mainbtn');
heroBtn.setAttribute('href', 'webpages.html');
heroBtn.innerHTML = '<span></span>Discover';

heroSection.appendChild(heroH1);
heroSection.appendChild(heroP);
heroSection.appendChild(heroBtn);
body.appendChild(heroSection);

// Projects Section
let projectSection = document.createElement('section');
projectSection.classList.add('projectsec');
projectSection.id = 'projects';

let projectContent = document.createElement('div');
projectContent.classList.add('procontent');
let projectH2 = document.createElement('h2');
projectH2.textContent = 'Projects';

let projects = [
    { title: 'Sweet Cake', desc: 'Cake Website', imgSrc: 'assets/images/image1.jpg', href: 'webpages.html#business' },
    { title: 'RedStore', desc: 'E-commerce Website', imgSrc: 'assets/images/image2.jpg', href: 'webpages.html#business' },
    { title: 'QWERy', desc: 'Travel and Tour Website', imgSrc: 'assets/images/image3.jpg', href: 'webpages.html#business' },
    { title: 'Ketan Sharma', desc: 'Portfolio Website', imgSrc: 'assets/images/image4.jpg', href: 'webpages.html#portfolio' }
];

projects.forEach((project, index) => {
    let projectLink = document.createElement('a');
    projectLink.classList.add(index % 2 === 0 ? 'proje1' : 'proje2');
    projectLink.setAttribute('href', project.href);

    let projectDiv = document.createElement('div');
    projectDiv.classList.add('proimg');
    let projectImg = document.createElement('img');
    projectImg.setAttribute('src', project.imgSrc);
    projectImg.setAttribute('alt', 'image');
    projectDiv.appendChild(projectImg);

    let projectH3 = document.createElement('h3');
    projectH3.textContent = project.title;

    let projectP = document.createElement('p');
    projectP.textContent = project.desc;

    projectLink.appendChild(projectDiv);
    projectLink.appendChild(projectH3);
    projectLink.appendChild(projectP);

    projectContent.appendChild(projectLink);
});

projectSection.appendChild(projectH2);
projectSection.appendChild(projectContent);
body.appendChild(projectSection);

// About Section
let aboutSection = document.createElement('section');
aboutSection.classList.add('about');
aboutSection.id = 'about';
let aboutH3 = document.createElement('h3');
aboutH3.textContent = 'About ME';

let aboutContent = document.createElement('div');
aboutContent.classList.add('content');

let imgTextDiv = document.createElement('div');
imgTextDiv.classList.add('imgtext');
let imgi = document.createElement('i');
let aboutImg = document.createElement('img');
aboutImg.setAttribute('src', 'assets/images/personalimage.jpg');
aboutImg.setAttribute('alt', 'image');
imgTextDiv.appendChild(imgi);
imgi.appendChild(aboutImg)

let aboutH1 = document.createElement('h1');
aboutH1.textContent = '<KETAN SHARMA>';
imgTextDiv.appendChild(aboutH1);

let aboutTextDiv = document.createElement('div');
aboutTextDiv.classList.add('text');

let aboutP1 = document.createElement('p');
aboutP1.innerHTML = `Welcome to <span>KETAN SHARMA</span>, where innovation meets creativity. We
            specialize in designing, developing, and deploying high-quality
            digital solutions that push the boundaries of web development and
            design. Our portfolio showcases a diverse range of projects that
            highlight our passion for building functional, visually striking
            websites and apps that meet modern needs.`;
let aboutP2 = document.createElement('p');
aboutP2.textContent = `We believe in bringing ideas to life through clean code, seamless
            user experiences, and a focus on detail. Whether it's a fully
            responsive website, a cutting-edge app, or a custom interface
            design,
            each project reflects our commitment to delivering excellence.`;
let aboutP3 = document.createElement('p');
aboutP3.textContent = `Take a look through our projects to see how we turn visions into
            reality, and feel free to connect with us for any collaboration.`;

aboutTextDiv.appendChild(aboutP1);
aboutTextDiv.appendChild(aboutP2);
aboutTextDiv.appendChild(aboutP3);

aboutContent.appendChild(imgTextDiv);
aboutContent.appendChild(aboutTextDiv);

aboutSection.appendChild(aboutH3);
aboutSection.appendChild(aboutContent);
body.appendChild(aboutSection);

// Contact Section
let contactSection = document.createElement('section');
contactSection.classList.add('contact');
contactSection.id = 'contact';

let contactSecDiv = document.createElement('div');
contactSecDiv.classList.add('contactsec');
let contactH3 = document.createElement('h3');
contactH3.textContent = 'Your final impact statement goes here. Make it memorable!';
let addressP = document.createElement('p');
addressP.classList.add('address');
addressP.innerHTML = 'Nagasandra Post, <br> Bangalore North, <br> Bangaluru, KA 560057 <br> +91 91132 83433';

let contactEmail = document.createElement('h5');
contactEmail.textContent = 'ketbusiness12@gmail.com';

contactSecDiv.appendChild(contactH3);
contactSecDiv.appendChild(addressP);
contactSecDiv.appendChild(contactEmail);
contactSection.appendChild(contactSecDiv);

// Social Links
let socialLinksDiv = document.createElement('div');
socialLinksDiv.classList.add('sociallinks');
let socialUl = document.createElement('ul');

let socialLinks = [
    'https://www.instagram.com/ketansharma911/',
    'https://www.linkedin.com/in/ketan-sharma-b1b0a5288/',
    'https://github.com/KetanSharma91',
    'https://x.com/KetanSharm37993',
    'https://ketan.rf.gd'
];

socialLinks.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', link);
    li.appendChild(a);
    socialUl.appendChild(li);
});

socialLinksDiv.appendChild(socialUl);
contactSection.appendChild(socialLinksDiv);

// Footer Logo
let footerLogoH1 = document.createElement('h1');
let footerLogoLink = document.createElement('a');
footerLogoLink.setAttribute('href', 'https://ketan.rf.gd');
let footerLogoImg = document.createElement('img');
footerLogoImg.setAttribute('src', 'assets/images/logo.png');
footerLogoImg.setAttribute('alt', 'logo');
footerLogoLink.appendChild(footerLogoImg);
footerLogoH1.appendChild(footerLogoLink);
contactSection.appendChild(footerLogoH1);

// Create and append the footer
let footer = document.createElement('footer');
let footerP = document.createElement('p');
footerP.innerHTML = `Made with <i></i> &copy; 2024 Ketan Sharma`;
footer.appendChild(footerP);

// Append footer to the contact section
contactSection.appendChild(footer);

// Finally, append the contact section to the body
body.appendChild(contactSection);

// Script
let script = document.createElement('script');
script.setAttribute('src', 'assets/js/script.js');
body.appendChild(script);

