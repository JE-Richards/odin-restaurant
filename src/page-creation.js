import svgLogo from "./assets/img/coffee-beans-left-svgrepo-com.svg";
import coffeePortafilters from "./assets/img/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";
import data from "./assets/data/menu-items.csv";

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

    for (let i=0; i < descContent.length; i++) {
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

    for (let i = 0; i < days.length; i++) {
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

    for (let i=0; i < timeTableContent.length; i++) {
        openingTimes.appendChild(timeTableContent[i]);
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

    const contactContent = [
        contactTitle,
        emailPara,
        phonePara
    ]

    for (let i=0; i < contactContent.length; i++) {
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

    for (let i=0; i < aboutContent.length; i++) {
        aboutDiv.appendChild(aboutContent[i]);
    }

    contentDiv.appendChild(aboutDiv);

}

function populateMenuPage() {
    // clear content div
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";

    // create the content for the menu tab
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // create a title and description section
    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    
    // create articles for content
    const articleList = [
        "menuDescription",
        "drinks",
        "food",
        "offers"
    ]

    const articles = {};
    for (let i=0; i < articleList.length; i++) {
        articles[articleList[i]] = document.createElement('article');
        articles[articleList[i]].setAttribute('id', articleList[i]);
    }

    // create content for Menu description
    const menuDescPara = document.createElement('p');
    menuDescPara.innerHTML = "At Daily Grind, our expert baristas take pride in transforming our rich, premium Cuban coffee beans into an excquisite cup of coffee perfection. Our commitment to quality extends beyond our coffee to our freshly baked pastries, crafted daily to complement your favourite brew. Whether you're seeking a robust espresso, velvety latte, or a sweet treat, each visit promises a taste of passion and dedication in every sip and bite.";
    const menuImg = new Image();
    menuImg.src = coffeePortafilters;
    menuImg.alt = "Coffee Portafilters";
    menuImg.id = "menuImg";

    const menuContent = [
        menuDescPara, 
        menuImg
    ]

    for (let i=0; i < menuContent.length; i++) {
        articles["menuDescription"].appendChild(menuContent[i]);
    }

    // create an empty object to store the drink DOM items
    const drinksDOMElements = [];
    // create an empty object to store the food DOM items
    const foodDOMElements = [];
    // function to create menu DOM items
    function createMenuItems (item) {
        const line = document.createElement('hr');
        // need different options for food and drink because of the different price structure
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('drinks');
        itemDiv.setAttribute('id', item['realName']);
        
        const itemHeader = document.createElement('h3');
        itemHeader.innerHTML = item['menuName'];
        
        const desc = document.createElement('p');
        desc.innerHTML = item['description'];

        const prices = document.createElement('p');
        if (item['itemType'] === "drink") {
            prices.innerHTML = `<b>S:</b> ${item['priceDrinkSmall']}&emsp;<b>M:</b> ${item['priceDrinkMed']}&emsp;<b>L:</b> ${item['priceDrinkLarge']}`
        }
        else {
            prices.innerHTML = `${item['priceFood']}`
        }

        const itemElements = [itemHeader, desc, line, prices]
        for (let i=0; i < itemElements.length; i++) {
            itemDiv.appendChild(itemElements[i]);
        }

        if (item['itemType'] === "drink") {
            drinksDOMElements.push(itemDiv);
        }
        else {
            foodDOMElements.push(itemDiv);
        }
    }

    data.forEach(item => {
        createMenuItems(item);
    })

    // sort out the drink section of the page
    const drinkMenuTitleDiv = document.createElement('div');
    drinkMenuTitleDiv.setAttribute('id', "menuDrinkTitle");
    const drinkMenuTitle = document.createElement('h2');
    drinkMenuTitle.innerHTML = "Drinks";
    drinkMenuTitleDiv.appendChild(drinkMenuTitle);

    articles['drinks'].appendChild(drinkMenuTitleDiv);
    drinksDOMElements.forEach(item => {
        articles['drinks'].appendChild(item);
    })

    // sort out food section of the page
    const foodMenuTitleDiv = document.createElement('div');
    foodMenuTitleDiv.setAttribute('id', "foodMenuTitle");
    const foodMenuTitle = document.createElement('h2');
    foodMenuTitle.innerHTML = "Pastries";
    foodMenuTitleDiv.appendChild(foodMenuTitle);

    articles['food'].appendChild(foodMenuTitleDiv);
    foodDOMElements.forEach(item => {
        articles['food'].appendChild(item);
    })

    // create the elements to go in the offer section
    const offersTitle = document.createElement('h2');
    offersTitle.innerHTML = "Offers";
    const offersPara = document.createElement('p');
    offersPara.innerHTML = "Before 10am, buy any coffee and get £0.50 off any pastry.";

    articles['offers'].appendChild(offersTitle, offersPara);

    for (let i=0; i < articleList.length; i++) {
        contentDiv.appendChild(articles[articleList[i]]);
    }
}

export { populateHomePage, populateAboutPage, populateMenuPage };