document.addEventListener("DOMContentLoaded", function () {

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
        {
            text: 'Projects', href: '#projects', class: 'pro', dropdown: true, subitems: [
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

    // Create Portfolio Section
    const sections = [
        {
            title: 'Portfolio', items: [
                { img: 'assets/images/image4.jpg', mobileImg: 'assets/images/portfoli/portimgmob1.jpg', name: 'Portfolio', description: 'Portfolio Website', link: 'projects.html' },
                { img: 'assets/images/portfoli/otherimg2.jpg', name: 'Mayra', description: 'Mayra Portfolio Website', link: 'projects.html' }
            ]
        },
        {
            title: 'Business', items: [
                { img: 'assets/images/image1.jpg', mobileImg: 'assets/images/busimg/busimgmob1.jpg', name: 'Sweet Cake', description: 'Online Cake Shop Website', link: 'projects.html' },
                { img: 'assets/images/image2.jpg', mobileImg: 'assets/images/busimg/busimgmob2.jpg', name: 'RedStore', description: 'Online E-commerce Website', link: 'projects.html' },
                { img: 'assets/images/image3.jpg', mobileImg: 'assets/images/otherimg/otherimgmob2.jpg', name: 'QWERy', description: 'Travel and Tour Website', link: 'projects.html' },
                { img: 'assets/images/busimg/busimg5.jpg', mobileImg: 'assets/images/busimg/busimgmob5.jpg', name: 'Fittness', description: 'Gym Fitness Website', link: 'projects.html' },
                { img: 'assets/images/busimg/busimg6.jpg', mobileImg: 'assets/images/busimg/busimgmob6.jpg', name: 'Coffee Shop', description: 'Online Coffee Website', link: 'projects.html' },
                { img: 'assets/images/busimg/busimg7.jpg', mobileImg: 'assets/images/busimg/busimgmob7.jpg', name: 'Barber', description: 'Unisex Salon Website', link: 'projects.html' },
                { img: 'assets/images/otherimg/otherimg4.jpg', mobileImg: 'assets/images/otherimg/otherimgmob4.jpg', name: 'McLaren', description: 'Sports Car Website', link: 'projects.html' }
            ]
        },
        {
            title: 'Other', items: [
                { img: 'assets/images/otherimg/otherimg1.jpg', mobileImg: 'assets/images/otherimg/otherimgmob1.jpg', name: 'Seasons', description: 'Seasons set Website', link: 'projects.html' },
                { img: 'assets/images/otherimg/otherimg3.jpg', mobileImg: 'assets/images/otherimg/otherimgmob3.jpg', name: 'Eduford', description: 'University Education Website', link: 'projects.html' },
                { img: 'assets/images/otherimg/otherimg5.jpg', name: 'SocialBook', description: 'Social Media Website', link: 'projects.html' },
                { img: 'assets/images/otherimg/otherimg6.jpg', name: 'Travel', description: 'Travel Video Website', link: 'projects.html' }
            ]
        }
    ];

    sections.forEach(section => {
        const sec = document.createElement('section');
        sec.className = 'portfolio';
        const h2 = document.createElement('h2');
        h2.textContent = section.title;
        sec.appendChild(h2);

        section.items.forEach(item => {
            const inco = document.createElement('div');
            inco.className = 'inco';

            const incoimg = document.createElement('div');
            incoimg.className = 'incoimg';
            const desimg = document.createElement('div');
            desimg.className = 'desimg';
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = "image";
            desimg.appendChild(img);
            incoimg.appendChild(desimg);

            if (item.mobileImg) {
                const mobimg = document.createElement('div');
                mobimg.className = 'mobimg';
                const mobileImage = document.createElement('img');
                mobileImage.src = item.mobileImg;
                mobileImage.alt = "image";
                mobimg.appendChild(mobileImage);
                incoimg.appendChild(mobimg);
            }

            inco.appendChild(incoimg);

            const h3 = document.createElement('h3');
            h3.textContent = item.name;
            inco.appendChild(h3);

            const p = document.createElement('p');
            p.textContent = item.description;
            inco.appendChild(p);

            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = "Visit Site";
            inco.appendChild(link);

            sec.appendChild(inco);
        });

        body.appendChild(sec);
    });

    // Create footer
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.innerHTML = 'Made with <i></i> &copy; 2024 Ketan Sharma';
    footer.appendChild(footerText);
    body.appendChild(footer);

    // Script
    let script = document.createElement('script');
    script.setAttribute('src', 'assets/js/script.js');
    body.appendChild(script);
});
