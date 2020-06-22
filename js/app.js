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
const firstSection = document.querySelector('#section1');
const secondSection = document.querySelector('#section2');
const thirdSection = document.querySelector('#section3');
const fourthSection = document.querySelector('#section4');

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
document.addEventListener("scroll", function makeSectionActive () {
    let position = window.scrollY;
    if (position === firstSection.offsetTop) {
        firstSection.classList.add("your-active-class");
        secondSection.classList.remove("your-active-class");
        thirdSection.classList.remove("your-active-class");
        fourthSection.classList.remove("your-active-class");
    } else if (position === secondSection.offsetTop) {
        firstSection.classList.remove("your-active-class");
        secondSection.classList.add("your-active-class");
        thirdSection.classList.remove("your-active-class");
        fourthSection.classList.remove("your-active-class");
    } else if (position === thirdSection.offsetTop) {
        firstSection.classList.remove("your-active-class");
        secondSection.classList.remove("your-active-class");
        thirdSection.classList.add("your-active-class");
        fourthSection.classList.remove("your-active-class");
    } else if (position === fourthSection.offsetTop) {
        firstSection.classList.remove("your-active-class");
        secondSection.classList.remove("your-active-class");
        thirdSection.classList.remove("your-active-class");
        fourthSection.classList.add("your-active-class");
    }
});

// Scroll to anchor ID using scrollTO event
navigationBar.addEventListener("click", function scroll_down_to(event){
    if (event.target.nodeName === "LI") {
        switch (event.target.innerText) {
            case "Section 1":
                window.scrollTo(0, firstSection.offsetTop);
                break;
            case "Section 2":
                window.scrollTo(0, secondSection.offsetTop);
                break;
            case "Section 3":
                window.scrollTo(0, thirdSection.offsetTop);
                break;
            case "Section 4":
                window.scrollTo(0, fourthSection.offsetTop);
                break;
            default:
                break;
        }
    }
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavLinks();

