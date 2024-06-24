import svgLogo from "./assets/img/coffee-beans-left-svgrepo-com.svg";

function populateHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";

    const bodyLogo = document.createElement('div');
    bodyLogo.classList.add('body-logo');

    const logoImg = new Image();
    logoImg.src = svgLogo;
    logoImg.alt = "Coffee Beans Logo";
    logoImg.id = "body-coffee-logo";

    const logoTitle = document.createElement('h1');
    logoTitle.innerHTML = "Daily Grind";

    const logoMotto = document.createElement('h2');
    logoMotto.innerHTML = "Fuelling office heroes since 2024";

    bodyLogo.appendChild(logoImg);
    bodyLogo.appendChild(logoTitle);
    bodyLogo.appendChild(logoMotto);

    contentDiv.appendChild(bodyLogo);
}

function populateAboutPage() {
    // clear content div
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";

    // create the content for the about tab
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    // create a line to separate content sections
    const line = document.createElement('hr');

    const aboutTitle = document.createElement('h1');
    aboutTitle.innerHTML = "About";

    // create content to populate the description section
    const description = document.createElement('article');
    description.setAttribute('id', 'description');
    const descParaOne = document.createElement('p');
    const descParaTwo = document.createElement('p');
    const descParaThree = document.createElement('p');
    descParaOne.innerHTML = "Welcome to Daily Grind, where we celebrate the everyday hustle with a dash of humour and a lot of caffeine. Nestled in the heart of London, our cozy caf&#233; is your go-to spot for a well-deserved coffee break in the midst of your daily grind.";
    descParaTwo.innerHTML = "We believe in turning the ordinatry into the extraordinary. Whether you're fueling up for that early morning meeting or taking a well-earnted breather from the daily office chaos, our carefully crafted coffees and delectable pastries are here to make your day a little brighter.";
    descParaThree.innerHTML = "From our signature blends to our tongue-in-cheek menu, every sip and bite at Daily Grind is designed to uplift and energise. Our friendly baristas are passionate about coffee and dedicated to ensuring each cup is brewed to perfection, just for you.";
    
    const descContent = [
        descParaOne, 
        descParaTwo, 
        descParaThree
    ]

    for (i=0; i < descContent.length; i++) {
        description.appendChild(descContent[i]);
    }


    // create contnet to populate the opening times section
    const openingTimes = document.createElement('article');
    openingTimes.setAttribute('id', 'openingTimes');
    const openingTimesTitle = document.createElement('h2');
    openingTimesTitle.innerHTML = "Opening Times";

    const timeTable = document.createElement('table');

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const times = [
        "10:00 - 16:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 19:00",
        "06:00 - 18:00",
    ]

    for (i = 0; i < days.length; i++) {
        let row = timeTable.insertRow(i);
        let cellOne = row.insertCell(0);
        cellOne.classList.add('days');
        let cellTwo = row.insertCell(1);
        cellOne.innerHTML = days[i];
        cellTwo.innerHTML = times[i];
    }

    const timeTableContent = [
        openingTimesTitle,
        timeTable
    ]

    for (i=0; i < timeTableContent.length; i++) {
        timeTable.appendChild(timeTableContent[i]);
    }

    // create content for contact us section
    const contact = document.createElement('article');
    contact.setAttribute('id', 'contactUs');
    const contactTitle = document.createElement('h2');
    contactTitle.innerHTML = "Contact Us";
    const emailPara = document.createElement('p');
    const phonePara = document.createElement('p');
    emailPara.innerHTML = "<b>Email:</b> arealemail@dailygrindcoffee.com";
    phonePara.innerHTML = "<b>Phone:</b> 01234567890";

    contactContent = [
        contactTitle,
        emailPara,
        phonePara
    ]

    for (i=0; i < contactContent.length; i++) {
        contact.appendChild(contactContent[i]);
    }

    // append everything to about div
    const aboutContent = [
        aboutTitle,
        description,
        line,
        timeTable,
        line,
        contact
    ]

    for (i=0; i < aboutContent.length; i++) {
        aboutDiv.appendChild(aboutContent[i]);
    }

    contentDiv.appendChild(aboutContent);

}

export { populateHomePage, populateAboutPage };