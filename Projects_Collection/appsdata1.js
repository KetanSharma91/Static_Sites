document.addEventListener("DOMContentLoaded", () => {
    // Create header
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/images/logo.png';
    logoImg.alt = 'logo';
    logoLink.appendChild(logoImg);
    h1.appendChild(logoLink);
    header.appendChild(h1);

    // Create navigation
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const homeLi = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Home';
    homeLi.appendChild(homeLink);

    const projectsLi = document.createElement('li');
    projectsLi.className = 'drop';
    const projectsLink = document.createElement('a');
    projectsLink.href = '#projects';
    projectsLink.className = 'pro';
    projectsLink.textContent = 'Projects';
    projectsLi.appendChild(projectsLink);

    const projectsUl = document.createElement('ul');
    projectsUl.className = 'projectscont';
    
    const webpagesLi = document.createElement('li');
    const webpagesLink = document.createElement('a');
    webpagesLink.href = 'webpages.html';
    webpagesLink.textContent = 'Webpages';
    webpagesLi.appendChild(webpagesLink);
    
    const uiuxLi = document.createElement('li');
    const uiuxLink = document.createElement('a');
    uiuxLink.href = 'uidesigns.html';
    uiuxLink.textContent = 'Ui/UX designs';
    uiuxLi.appendChild(uiuxLink);

    const appsLi = document.createElement('li');
    const appsLink = document.createElement('a');
    appsLink.href = '#';
    appsLink.textContent = 'Apps';
    appsLi.appendChild(appsLink);

    projectsUl.appendChild(webpagesLi);
    projectsUl.appendChild(uiuxLi);
    projectsUl.appendChild(appsLi);
    projectsLi.appendChild(projectsUl);

    const aboutLi = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.href = 'index.html#about';
    aboutLink.textContent = 'About Me';
    aboutLi.appendChild(aboutLink);

    const contactLi = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = 'index.html#contact';
    contactLink.textContent = 'Contact';
    contactLi.appendChild(contactLink);

    ul.appendChild(homeLi);
    ul.appendChild(projectsLi);
    ul.appendChild(aboutLi);
    ul.appendChild(contactLi);
    nav.appendChild(ul);
    header.appendChild(nav);

    // Create and append menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu';
    menuButton.textContent = '☰';
    header.appendChild(menuButton);
    document.body.appendChild(header);

    // Create portfolio section
    const portfolioSection = document.createElement('section');
    portfolioSection.className = 'portfolio';
    const portfolioTitle = document.createElement('h2');
    portfolioTitle.textContent = 'Apps';
    portfolioSection.appendChild(portfolioTitle);

    const incoDiv = document.createElement('div');
    incoDiv.className = 'inco';
    const h5 = document.createElement('h5');
    h5.style.fontSize = '4.4em';
    h5.textContent = 'Projects Coming Soon';
    incoDiv.appendChild(h5);
    portfolioSection.appendChild(incoDiv);
    document.body.appendChild(portfolioSection);

    // Create footer
    const footer = document.createElement('footer');
    const footerParagraph = document.createElement('p');
    footerParagraph.innerHTML = 'Made with <i></i> &copy; 2024 Ketan Sharma';
    footer.appendChild(footerParagraph);
    document.body.appendChild(footer);

    // Create and append link to external CSS file
    const linkCSS = document.createElement('link');
    linkCSS.rel = 'stylesheet';
    linkCSS.href = 'assets/css/style.css';
    document.head.appendChild(linkCSS);

    // Create and append link to favicon
    const linkFavicon = document.createElement('link');
    linkFavicon.rel = 'shortcut icon';
    linkFavicon.href = 'assets/images/logo1.png';
    linkFavicon.type = 'image/x-icon';
    document.head.appendChild(linkFavicon);

    // Create and append script for external JavaScript file
    const script = document.createElement('script');
    script.src = 'assets/js/script.js';
    document.body.appendChild(script);
});
