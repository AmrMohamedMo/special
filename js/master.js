// local [[Start]] Here

// Loacal Storage
let z3BolA = localStorage.getItem(`color_option`);
// We doNt Wand Null //
if (z3BolA === null){
    false;
} else {
    // get color value from local Storage
    // Default window . on load
    document.documentElement.style.setProperty(`--main-color`, z3BolA);
    // console.log(z3BolA)
    document.querySelectorAll(`.colors-list li`).forEach( (li) => {
        li.classList.remove(`active`);
    if(li.dataset.color === z3BolA){
        li.classList.add(`active`);
    };
    });
};


// Box Open
document.querySelector(`.toggle-settings .fa-gear`).onclick = function (){
    this.classList.toggle(`fa-spin`);
    document.querySelector(`.settings-box`).classList.toggle(`open`);
};

// Switch Color
const colorsLi = document.querySelectorAll(`.colors-list li`);
colorsLi.forEach(li => {
    li.addEventListener(`click`,(e) => {
        // Choose Root HTML Element && Set Property=> KeyColor : Valuee.target.dataset.color
        document.documentElement.style.setProperty(`--main-color`, e.target.dataset.color);
        // Set color in Local Storage
        localStorage.setItem(`color_option`, e.target.dataset.color);
        // set Active Cirle
        // e.target.parentElement.querySelectorAll(`.active`).forEach(a=>{
        //     a.classList.remove(`active`);
        // });
        // e.target.classList.add(`active`);
        handelActive(e);
    });
});

// Random BackGround
let landingPage = document.querySelector( `.landing-page` );
let imgsArray = [ `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg` ];
// Random backgroun option
let backOption = true;
// VAriable To Control The Interval
let backInterval;
// Ceck if There is Local Storage Random Background Item
// Default Local
let BackLocal = localStorage.getItem(`background_option`);
if (BackLocal === null){
    false;
} else {
    if (BackLocal === `true`) {
        backOption = true;
    } else {
        backOption = false;
    };
    document.querySelectorAll(`.random-backgrounds span`).forEach(e => {
        e.classList.remove(`active`);
    });
    if (BackLocal === `true`) {
        document.querySelector(`.random-backgrounds .yes`).classList.add(`active`);
    } else {
        document.querySelector(`.random-backgrounds .no`).classList.add(`active`);
    }
};
// Fundtion To Randomize Imgs
function RandomizeImgs() {
    if (backOption === true){
        backInterval = setInterval(() => {
            let randNum = Math.floor(Math.random()*imgsArray.length);
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randNum] + '")';
        }, 1000);
    };
};
RandomizeImgs();
// Switch Yes No
const RanBack = document.querySelectorAll(`.random-backgrounds span`);
// loop on All Spans
RanBack.forEach(span => {
    // click on Every Sapn
    span.addEventListener(`click`,(e) => {
        // Remove All Active Spans
        // e.target.parentElement.querySelectorAll(`.active`).forEach(a=>{
        //     a.classList.remove(`active`);
        // });
        // e.target.classList.add(`active`);
        handelActive(e);
        
        // instead of Randomize Imgs
        if (e.target.dataset.background === `yes`){
            backOption = true;
            RandomizeImgs();
            localStorage.setItem(`background_option`, backOption);
        } else {
            backOption = false;
            clearInterval(backInterval);
            localStorage.setItem(`background_option`, backOption);
        };
    });
});

// Skills
let skills = document.querySelector(`.skills`)

window.onscroll = function () {
    // skills offset top
    let Top = skills.offsetTop;         // console.log(Top)         // Top off Skills
    // Skills outer height
    let SHeight = skills.offsetHeight;  // console.log(SHeight)     // Skills Height section
    // window height
    let winDow = this.innerHeight;      // console.log(winDow)      // Your Window Height Now
    // window scrollTop
    let Scroll = this.pageYOffset;      // console.log(Scroll)      // Page Scroll
    if (Scroll > (Top + SHeight - winDow)){
        let allSkills  = document.querySelectorAll(`.skill-box .skill-progress span`);
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
};


// Create pop up with the imgs
let ourGallery = document.querySelectorAll(`.gallery img`);
ourGallery.forEach(img => {
    img.addEventListener(`click`,(e) => {
        // create overlay element
        let overLay = document.createElement(`div`);
        // add class
        overLay.className = `popup-overlay`;
        // add to body
        document.body.appendChild(overLay);

        // create the popup
        let popupBox = document.createElement(`div`);
        // add class
        popupBox.className = `popup-box`;

        // alter
        if(img.alt !== null){
            // create heading
            let imgHeading = document.createElement(`h3`);
            // Text
            let imgText = document.createTextNode(img.alt);
            // append
            imgHeading.appendChild(imgText);
            // append headding to popup
            popupBox.appendChild(imgHeading);
        }

        // create the img
        let popupImgs = document.createElement(`img`);
        // set img src
        popupImgs.src = img.src;
        // add img to opoup box
        popupBox.appendChild(popupImgs);
        // append to body
        document.body.appendChild(popupBox)
        

        // create close span
        let closebtn = document.createElement(`span`);
        // spanTxt
        let closeTxt = document.createTextNode(`X`);
        // append
        closebtn.appendChild(closeTxt);
        // add class
        closebtn.className = `close-button`;
        // append
        popupBox.appendChild(closebtn);
    });
});
// close popup
document.addEventListener(`click`, function (e) {
    if (e.target.className == `close-button`) {
        // remove pop
        e.target.parentNode.remove();    // console.log(e.target.parentNode)
        //e.target.parentElement.remove(); // console.log(e.target.parentElement)
        // remove overlay
        document.querySelector(`.popup-overlay`).remove()
    }
});

// sellect all bullets
const allBullets = document.querySelectorAll(`.nav-bullets .bullet`); // console.log(allBullets)
// allBullets.forEach(bullet => {
//     bullet.addEventListener(`click`,(e)=>{
//         let aboutSection = document.querySelector(e.target.dataset.section); 
//         aboutSection.scrollIntoView({
//             behavior: `smooth`,
//         });
//     });
// });

// sellect all Links
const AllLinks = document.querySelectorAll(`.links a`); // console.log(allBullets)
// AllLinks.forEach(Link => {
//     Link.addEventListener(`click`,(e)=>{ e.preventDefault();
//         let aboutSection = document.querySelector(e.target.dataset.section); 
//         aboutSection.scrollIntoView({
//             behavior: `smooth`,
//         });
//     });
// });

// Function Parameter Use
function scrollToSomeWhere(elements) {
    elements.forEach(el => {
        el.addEventListener(`click`,(e)=>{ e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: `smooth`,
            });
        });
    });
};
scrollToSomeWhere(allBullets);
scrollToSomeWhere(AllLinks);

// Handel Active
function handelActive(ev) {
    // Remove Active
    ev.target.parentElement.querySelectorAll(`.active`).forEach(a=>{
        a.classList.remove(`active`);
    }); // Add Active
    ev.target.classList.add(`active`);
};

// 
let bulletsSpan = document.querySelectorAll(`.bullets-option span`);    //console.log(bulletsSpan);
let bulletsContainer = document.querySelector(`.nav-bullets`);          //console.log(bulletsContainer);
let bullLocal = localStorage.getItem(`bullets_option`);
if (bullLocal === null){
    // console.log(`mfesh 3ndy 7d b el esm dh`)
} else {
    bulletsSpan.forEach(span => {
        span.classList.remove(`active`)
    });
    if (bullLocal === `block`) {
        bulletsContainer.style.display = `block`;
        document.querySelector(`.bullets-option .yes`).classList.add(`active`);
    } else {
        bulletsContainer.style.display = `none`;
        document.querySelector(`.bullets-option .no`).classList.add(`active`);
    };
};
bulletsSpan.forEach(span => {
    span.addEventListener(`click`, (e) => {
        if (span.dataset.display === `show`) {
            bulletsContainer.style.display = `block`;
            localStorage.setItem(`bullets_option`, `block`);
        } else {
            bulletsContainer.style.display = `none`;
            localStorage.setItem(`bullets_option`, `none`);
        };
        handelActive(e)
    });
});

// reset button
document.querySelector(`.reset-options`).onclick = function (){
    // clear (all) localStorage Items
    // localStorage.clear();

    // clear (some) localStorage Items
    localStorage.removeItem(`background_option`);
    localStorage.removeItem(`color_option`);
    localStorage.removeItem(`bullets_option`);
    
    // window reload
    window.location.reload();
    
}
// console.log(window)
// console.log(window.document)

// toggle menu
let toggleMenu = document.querySelector(`.toggle-menu`);
let theLinks = document.querySelector(`.links`);
toggleMenu.onclick = function (e){
    // stop propagation
    e.stopPropagation();
    this.classList.toggle(`menu-active`);
    theLinks.classList.toggle(`open`);
};
// document.addEventListener(`click`, (e) => {
//     if (e.target !== theLinks || e.target !== toggleMenu){
//         console.log(e.target);
//         // toggleMenu.classList.remove(`menu-active`);
//         // theLinks.classList.remove(`open`);
//     }
// });
document.addEventListener(`click`, (e) => {
    if (e.target !== theLinks && e.target !== toggleMenu){
        // 1- check menu is open
        if (theLinks.classList.contains(`open`)){
            toggleMenu.classList.toggle(`menu-active`);
            theLinks.classList.toggle(`open`);
        };
    };
});

// stop propagation
theLinks.onclick = e => e.stopPropagation();















// // Switch Color
// const colorsLi = document.querySelectorAll(`.colors-list li`);
// colorsLi.forEach(li => {
//     li.addEventListener(`click`,(e) => {
//         // Choose Root HTML Element && Set Property=> KeyColor : Valuee.target.dataset.color
//         document.documentElement.style.setProperty(`--main-color`, e.target.dataset.color);
//         // Set color in Local Storage
//         localStorage.setItem(`color_option`, e.target.dataset.color)
//         // 1- First Local Storage is Emty
//         // 2= if local is ! Not Emty
//         // 3= we call Value from Local-Storage
//         // if we call value from lstor without if=ls=null
//         // Local Storage Work Start from window.onload
//         // get work
//         // be fore you click on any element

        

//         // set Active Cirle
//         e.target.parentElement.querySelectorAll(`.active`).forEach(a=>{
//             a.classList.remove(`active`);
//         });
//         e.target.classList.add(`active`);
//     });
// });
// images
