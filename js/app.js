/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const navigationBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavLinks() {
    for (const section of allSections) {
        //create li for each section
        let newLink = document.createElement("li");

        //add the name for each li
        sectionName = section.querySelector("h2");
        newLink.innerText = `${sectionName.innerText}`
        navigationBar.appendChild(newLink);

        //add class .menu__link
        newLink.classList.toggle("menu__link");
    };
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavLinks();

// Scroll to section on link click

// Set sections as active


