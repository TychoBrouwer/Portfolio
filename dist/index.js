/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/index.ts":
/*!*****************************!*\
  !*** ./src/public/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_1 = __webpack_require__(/*! ./odk-ts/project */ "./src/public/odk-ts/project.ts");
const navigator_1 = __webpack_require__(/*! ./odk-ts/navigator */ "./src/public/odk-ts/navigator.ts");
const page_1 = __webpack_require__(/*! ./odk-ts/page */ "./src/public/odk-ts/page.ts");
const variables_1 = __webpack_require__(/*! ../utilities/variables */ "./src/utilities/variables.ts");
class Main {
    constructor() {
    }
    printPage(pageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const page = new page_1.Page(pageId, '', '', [], variables_1.pages[pageId].content, variables_1.pages[pageId].images, '');
                page.printPage();
                resolve();
            }));
        });
    }
}
const mainClass = new Main;
const navClass = new navigator_1.Navigator;
function printProjectsNav() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            for (const projectType in variables_1.projectTypes) {
                if (variables_1.projectTypes.hasOwnProperty(projectType)) {
                    const projects = variables_1.projectTypes[projectType];
                    navClass.newProjectType(projectType)
                        .then(() => {
                        const navProjectTypeTitle = document.querySelector('#' + projectType + ' .navTitle');
                        navProjectTypeTitle.addEventListener('click', function (event) {
                            const target = event.target.closest('.navObject');
                            if (target.classList.contains('active')) {
                                target.querySelector('.navArrow').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 63.64 98.995"><g transform="translate(-286.68 590.675) rotate(-90)"><line x2="50" transform="translate(505.822 300.822) rotate(45)" fill="none" stroke-linecap="round" stroke-width="20"/><line x2="50" transform="translate(541.178 336.178) rotate(-45)" fill="none" stroke-linecap="round" stroke-width="20"/></g></svg>';
                            }
                            else {
                                target.querySelector('.navArrow').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 98.995 63.64"><g transform="translate(-491.68 -286.68)"><line x2="50" transform="translate(505.822 300.822) rotate(45)" fill="none" stroke-linecap="round" stroke-width="20"/><line x2="50" transform="translate(541.178 336.178) rotate(-45)" fill="none" stroke-linecap="round" stroke-width="20"/></g></svg>';
                            }
                            target.classList.toggle('active');
                        });
                    });
                    for (let i = 0; i < projects.length; i++) {
                        const project = new project_1.ProjectClass(projects[i]);
                        navClass.newProject(project.projectIndex(), project.projectTitle(), projectType);
                    }
                }
            }
            resolve();
        }));
    });
}
function printPage(pageId) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (variables_1.projects[pageId]) {
                const project = new project_1.ProjectClass(pageId);
                project.printProjectPage();
            }
            else {
                mainClass.printPage(pageId);
            }
            resolve();
        }));
    });
}
printProjectsNav()
    .then(() => {
    const navPages = document.querySelectorAll('.navPage');
    for (let i = 0; i < navPages.length; i++) {
        const navPage = navPages[i];
        navPage.addEventListener('click', () => {
            for (let i = 0; i < navPages.length; i++) {
                const navPage = navPages[i];
                navPage.classList.remove('active');
            }
            navPage.classList.add('active');
            printPage(navPage.id);
        });
    }
});


/***/ }),

/***/ "./src/public/odk-ts/navigator.ts":
/*!****************************************!*\
  !*** ./src/public/odk-ts/navigator.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
const project_1 = __webpack_require__(/*! ./project */ "./src/public/odk-ts/project.ts");
const variables_1 = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
class Navigator {
    constructor() {
        this.projectDiv = document.getElementById('projectContainer');
        this.firstProjectType = true;
        this.firstProject = true;
    }
    ;
    newProjectType(projectType) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let active = '';
                if (this.firstProjectType) {
                    active = 'active';
                    this.firstProjectType = false;
                }
                this.projectDiv.innerHTML += `
                <div id='${projectType}' class='navObject ${active}'>
                    <div class='navTitle'>
                        <div class='navArrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 63.64 98.995"><g transform="translate(-286.68 590.675) rotate(-90)"><line x2="50" transform="translate(505.822 300.822) rotate(45)" fill="none" stroke-linecap="round" stroke-width="20"/><line x2="50" transform="translate(541.178 336.178) rotate(-45)" fill="none" stroke-linecap="round" stroke-width="20"/></g></svg>
                        </div>
                        <div class='navIcon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 384"><g transform="translate(-809 -153)"><path d="M464,128H272L217.37,73.37A32,32,0,0,0,194.74,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128Zm0,272H48V112H188.12l54.63,54.63A32,32,0,0,0,265.38,176H464Z" transform="translate(809 89)"/><rect width="426" height="289" transform="translate(848 217)"/></g></svg>
                        </div>
                        <div class='navName'>
                            <p>${variables_1.projectTypeNames[projectType]}</p>
                        </div>
                    </div>
                    <div class='navDropDownDiv'>

                    </div>
                </div>
            `;
                resolve();
            }));
        });
    }
    newProject(projectIndex, projectName, projectType) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const projectTypeDiv = document.querySelector('#' + projectType + ' .navDropDownDiv');
                let active = '';
                if (this.firstProject) {
                    active = 'active';
                    const project = new project_1.ProjectClass(projectIndex);
                    project.printProjectPage();
                    this.firstProject = false;
                }
                projectTypeDiv.innerHTML += `
            <div id='${projectIndex}' class='navDropDown navPage ${active}'>
                <div class='navTitle'>
                    <div class='navIcon'>

                    </div>
                    <div class='navName'>
                        <p>${projectName}</p>
                    </div>
                </div>
            </div>
            `;
                resolve();
            }));
        });
    }
}
exports.Navigator = Navigator;


/***/ }),

/***/ "./src/public/odk-ts/page.ts":
/*!***********************************!*\
  !*** ./src/public/odk-ts/page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const variables_1 = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
class Page {
    constructor(pageId, date, description, tags, content, images, links) {
        this.pageContainer = document.getElementById('mainContainer');
        this.pageId = pageId;
        this.pagedate = date;
        this.pageDescription = description;
        this.pageTags = tags;
        this.pageContent = content;
        this.pageImages = images;
        this.pageLinks = links;
    }
    printPage() {
        if (this.pagedate === 'current') {
            var d = new Date();
            this.pagedate = `${d.getDate()} ${variables_1.monthNames[d.getMonth()]} ${d.getFullYear()}`;
        }
        let tagHTML = '';
        for (let i = 0; i < this.pageTags.length; i++) {
            const tag = this.pageTags[i];
            tagHTML += `<div class="tag ${tag}"><p>${tag}</p></div>`;
        }
        let pageContent = '';
        for (let title in this.pageContent) {
            if (this.pageContent.hasOwnProperty(title)) {
                const alinea = this.pageContent[title];
                let imgHTML = '';
                if (this.pageImages[title]) {
                    imgHTML = `<div class="alineaImage"><img src="/images/projects/${this.pageImages[title]}.webp" alt="${this.pageImages[title]}"></div>`;
                }
                if (title.includes('title')) {
                    title = '';
                }
                else {
                    title = `<h3>${title}</h3>`;
                }
                pageContent += `
                <div class="pageAlinea ${title}">
                    ${title}
                    ${imgHTML}
                    <p>
                        ${alinea}
                    </p>
                </div>
                `;
            }
        }
        let pageLinks = '';
        for (let title in this.pageLinks) {
            if (this.pageLinks.hasOwnProperty(title)) {
                const link = this.pageLinks[title];
                pageLinks += `<a href="${link}" rel="noreferrer" target="_blank"><strong>${title}</strong></a>`;
            }
        }
        this.pageContainer.innerHTML = `
        <h2 id="pageTitle">${this.pageId}</h2>
        <p id="pageDate">${this.pagedate}</p>
        <div id="pageTags">${tagHTML}</div>
        <div id="pageContent">
            <div class="pageAlinea description"><p>${this.pageDescription}</p></div>
            ${pageContent}
        </div>
        <div id="pageLinks">
            ${pageLinks}
        </div>
        `;
    }
}
exports.Page = Page;


/***/ }),

/***/ "./src/public/odk-ts/project.ts":
/*!**************************************!*\
  !*** ./src/public/odk-ts/project.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectClass = void 0;
const page_1 = __webpack_require__(/*! ./page */ "./src/public/odk-ts/page.ts");
const variables_1 = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
class ProjectClass {
    constructor(projectName) {
        this.project = variables_1.projects[projectName];
    }
    projectTitle() {
        return this.project.title;
    }
    projectIndex() {
        return this.project.index;
    }
    printProjectPage() {
        const page = new page_1.Page(this.project.title, this.project.date, this.project.description, this.project.tags, this.project.content, this.project.images, this.project.links);
        page.printPage();
    }
}
exports.ProjectClass = ProjectClass;


/***/ }),

/***/ "./src/utilities/variables.ts":
/*!************************************!*\
  !*** ./src/utilities/variables.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.monthNames = exports.pages = exports.projectTypeNames = exports.projectTypes = exports.projects = void 0;
const projects = {
    'statsdb_overlay': {
        'date': 'current',
        'description': 'A Rainbow Six Siege ingame statistics overlay made in collaboration with Overwolf.',
        'index': 'statsdb_overlay',
        'links': {
            'StatsDB App': 'https://www.overwolf.com/app/StatsDB-StatsDB',
            'StatsDB Website': 'https://statsdb.net/',
            'Overwolf': 'https://www.overwolf.com/',
        },
        'tags': [
            'featured',
            'app',
        ],
        'title': 'StatsDB Overlay',
        'content': {
            'title0': 'This is a project in colaboration with Overwolf. Overwolf is a framework that allows 3rd party developers to easily build gaming apps and overlays in HTML and JavaScript. The goal of this project is to create an intuitive and easy to use Rainbow Six Siege overlay to track and see player statistics ingame. This project I have teamed up with JocularMarrow.',
            'Startup': 'The project started after we had started on a statistics website for Rainbow Six Siege, after we had mostly finished the website we decided to submit an app proposal to Overwolf. Not a lot later we got approved and started working on the overlay. Later in 2020 we decided to scrap the website and team up with StatsDB. After that we focused solely on the overlay.',
            'Code': 'This project I worked with HTML5, SCSS and TypeScript. SCSS was chosen for this project because it has an improved easier to interpret syntax compared to CSS3. And gives you the ability to easily import other style files. TypeScript was chosen for this project, because Overwolf has a sample project written in TypeScript. Other reasons for us to use TypeScript were, that it gives us the abbility to use Overwolfs TypeScript declaration file and early bug spotting during the compile stage.',
            'App': 'Our goal was to make a highly customizable overlay which the user can customize to their own preferences. The features of the app include the abiliy to get the statistics of the players in your game lobby, the tracking of statistics such as daily and weekly K/D and Win/Loss ratios. Furthermore you can revisit your played games and see your performance round by round. In terms of customising the overlay you can change tho color theme and chose with statistics to show ingame on the overlay.',
        },
        'images': {
            'title0': 'logo-overwolf',
            'Code': 'logo-scss-typescript',
        }
    },
    'portfolio_website': {
        'date': 'current',
        'description': 'My current portfolio website. Aka my coding sandbox for trying new programming languages and frameworks.',
        'index': 'portfolio_website',
        'links': {
            'Portfolio GitHub': 'https://github.com/TychoBrouwer/Portfolio',
        },
        'tags': [
            'featured',
            'website',
        ],
        'title': 'Portfolio Website',
        'content': {},
        'images': {},
    },
    'r6lookup_website': {
        'date': '29 December 2020',
        'description': 'A Rainbow Six Siege statistics website for searching your and your enemies game statistics.',
        'index': 'r6lookup_website',
        'links': {
            'R6Lookup GitHub': 'https://github.com/TychoBrouwer/R6Lookup-Website',
            'StatsDB Website': 'https://statsdb.net/',
        },
        'tags': [
            'website',
        ],
        'title': 'R6Lookup Website',
        'content': {
            'title0': 'This project originaly started as a small project to be able to check my own statistics and progression in Rainbow Six Siege. After I was unhappy with the currently available website that where serving the ability to check Rainbow Six Sieghe player statistics. After I while I started working on it with JocularMarrow. This was the begining of the accual website. The website is currently discontinued, because we decided to solely focus on de Overwolf overlay and work together with StatsDB.',
            'Code': 'This project was my first experience with working with PHP. And my first mayor project using HTML5, JavaScript and SCSS. Because I was quite the beginner at coding I had to clean up the code a lot after I got better at working with PHP. If I would start over I would like to believe the project would have been a lot less complex and messy.',
        },
        'images': {
            'title0': 'logo-r6lookup',
            'Code': 'php-logo',
        },
    },
    'aquazoo_leerdam': {
        'date': 'current',
        'description': 'Een school project in opdracht van AquaZoo Leerdam om de aquariumlichten van een afstand te besturen.',
        'index': 'aquazoo_leerdam',
        'links': {
            'AquaZoo Project GitHub': 'https://github.com/TychoBrouwer/AquaZoo-Leerdam',
        },
        'tags': [
            'featured',
            'technasium',
            'arduino',
        ],
        'title': 'AquaZoo Leerdam',
        'content': {
            'title0': 'Dit is een project namens de opdrachtgever AquaZoo Leerdam. Wij hadden de opdracht gekregen om een systeem te ontwikkelen waarmee AquaZoo Leerdam de lichten van hun aquariums van een afstand te kunnen aansturen. Binnen dit project had ik de taak van het programmeren en ontwikkelen van het Arduino prototype. Dit project heb ik samengewerkt met Cain Woestenburg en David Bagijn.',
            'Meesterproef': 'De Meesterproef is een eindexamenproject van het vak O&O. Hoet doel van het project is dat de leering alle vaardigheden laat zien die nodig zijn om een technasiumleerling te zijn. Tijdens dit project wordt er weinig door de docenten geregeld en moet de leerling dus veel zelfstandigheid laten zien. Het onderzoek gedeelte van de Meesterproef vormt het profielwerkstuk.',
            'Opdracht': 'AquaZoo Leerdam is een dierentuid in Leerdam met ruim 40 vivaria. De dierentuin wordt gerunt door vrijwilligers van de aquariumvereniging de Discus uit Leerdam. Hierdoor zijn er niet altijd dezelfde mensen aanwezig en is de kans groot dat er soms vergeten wordt de lichten uit te zetten. Daarom willen ze de aquaria van afstand uit kunnen zetten als dat vergeten is. Er is voor gekozen om te werken met een Arduino Mega 2560.',
            'Het Product': 'Ons product maakt gebruik van een Arduino om de lichten te kunnen besturen. Om de Arduino op afstand te kunnen besturen hebben we met behulp van een Ethernet Shield een webserver gemaakt. De webserver is beschermt met een wachtwoord. Via de webserver kunnen de lampen via de Arduino worden aangestuurd. AquaZoo wilde ook de mogelijkheid hebben om te kunnen controlleren wanneer en wie de lampen heeft bestuurd. Hiervoor slaan we de logs op op een SD-kaart.',
            'title1': 'Voor het product hebben we ook een behuizing ontworpen en 3D-geprint. We hebben het ontwerp voor de behuizing gemaakt met behulp van blender. Het ontwerp is geëxporteerd als STL om het te kunnen printen met de 3D-printer op school.',
            'Competenties': '<strong>Productgerichtheid</strong><br>Het belangrijkste deel van dit project bestaat uit het prototype. Aangezien ik daar veel werk en aandacht aan heb besteed vind ik dat ik goed productgericht heb gewerkt.<br><strong>Individueel werken</strong><br>Doordat het grootste deel van de periode van het profielwerkstuk tijdens de Corona lockdown en maatregelen was hebben we veel individueel moeten werken. Ondanks deze omstandigheden denk ik dat er goed zelfstandig thuis is gewerkt.',
        },
        'images': {
            'title0': 'logo-aquazoo',
            'Het Product': 'arduino-mega2560',
        }
    },
    'b4_techniek_circulair': {
        'date': '30 June 2020',
        'description': 'Een school onderzoek namens B4 Techniek naar de mogelijkheden voor B4 Techniek om een cirulaire leverancier te worden.',
        'index': 'b4_techniek_circulair',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'B4 Techniek Circulair',
        'content': {
            'Circulaire Leverancier': 'Marieke Melten heeft ons namens B4 Techniek de opdracht gegeven om van B4 Techniek een cirulaire leverancier te worden. Het probleem is dat het meubilair wat B4 verzorgt niet gerecycled en weinig hergebruikt wordt. B4 wil graag een circulaire leverancier worden. De opdracht was dus: "Wat kunnen we ontwikkelen waardoor B4 een circulaire leverancier kan worden?"',
            'Bezoek B4': 'We konden door Corona niet bij B4 Techniek in Giesen op bezoek, maar we hebben wel alle voorbereiding gedaan voor het bezoek. We hebben meerdere vragen en ideeën bedacht. Een deel van deze vragen hebben we later via WhatsApp wel kunnen vragen een van de monteurs van B4 Techniek, Richard van Bijnen.',
            'Onderzoek': 'We hebben vooral onderzoek gedaan naar alternatieven voor de huidige materialen van de B4 tafels. Daarvoor hebben we aan de monteur gevraagd welk materiaal gebruikt word voor de tafel, daarop kregen we het antwoord dat het een spaanplaat is met een HPL toplaag. HPL is eigenlijk alleen thermisch te recyclen, dat is het verbranden van het materiaal om er energie uit te halen. Een andere oplossing zou het hergebruiken kunnen zijn in een of andere vorm.',
            'Conclusie': 'Door Corona is het onderzoek naar duurzame materialen en circulaire economie korter dan bedoelt en hebben we bijvoorbeeld niet een deel van het tafelblad, wat we bij B4 zouden ophalen, kunnen onderzoeken. We zijn er wel achter gekomen dat er geen makkelijke oplossing is voor het probleem, omdat de tafels tegen veel verschillende chemische stoffen moet kunnen.',
            'Competenties': '<strong>Individueel werken</strong><br>Meden door Corona hebben we veel individueel thuis moeten werken. Zo heb ik vooral gewerkt aan het zoeken van eventuele materialen om het huidige materiaal van de tafels mee te verplaatsen. Ook heb ik nagedacht over oplossingen voor het scheiden van het houten deel van de tafel en de plastic coating.<br><strong>Kennisgerichtheid</strong><br>Dit project was vooral gericht op het zoeken naar een theoretische oplossing. Het was dus belangrijk dat er goed onderzoek gedaan werd.',
        },
        'images': {
            'Circulaire Leverancier': 'logo-b4techniek',
            'Onderzoek': 'ladder-van-lansink',
        }
    },
    'rolstoel_stappenteller': {
        'date': '13 December 2019',
        'description': 'Een school project en onderzoek naar de mogelijkheden rond het fitness tracken van fysiek beperkte mensen.',
        'index': 'rolstoel_stappenteller',
        'links': {
            'Rolstoel Project GitHub': 'https://github.com/TychoBrouwer/Rolstoel-Project',
        },
        'tags': [
            'technasium',
        ],
        'title': 'Rolstoel Stappenteller',
        'content': {
            'title0': 'Dit project is in opdracht van Arjan Sterk, namens het bedrijf Motionpower. Hierbij hebben we de opdracht gekregen om een prototype te maken voor een fitness tracker voor rolstoelgebruikers en mensen met een fysieke beperking. Om dit te realiseren hebben we eerst onderzoek gedaan naar welke mogelijkheden die mensen wel nog hebben. Ook hebben we onderzoek gedaan naar bestaande oplossingen voor.',
            'Product': 'Voor het eindproduct hebben we een prototype gemaakt voor een rolstoel stappenteller. Hij kan het aantal rotaties van een rolstoel tellen doormiddel van een gyroscoop aangesloten op een Arduino Uno. We hebben ook geken naar een hartslagmeter, maar mede door beperkte tijd is het niet gelukt om de hartslagmeter betrouwbaar te maken. Bovendien zijn er al betrouwbare hartslagmeters beschikbaar voor fysiek gehandicapte mensen.',
            'Competenties': '<strong>Doorzetten</strong><br>Bij het ontwikkelen van het prototype zijn we tegen veel tegenslagen gelopen. Er waren veel complicaties met de gyroscoop en het verzamelen van de gegevens van de gyroscoop. Zo had de gyroscoop last van drift, dit is wanneer een gyroscoop uit de lijn raakt. Drift kan voor een groot deel uit de data gefilterd worden door een Kalman filter op de gegevens toe te passen.<br><strong>Productgerichtheid</strong><br>Bij dit project hebben we goed gewerkt aan het ontwikkelen van het prototype. Hiervoor hebben veel nagedacht over wat de beste oplossing kan zijn voor het prototype.',
        },
        'images': {
            'title0': 'logo-motionpower',
        }
    },
    'plastic_soep': {
        'date': '23 September 2019',
        'description': 'Een school project namens het bedrijf de Waardemakers om een kenniscentrum op te zetten op het gebied van plastics in Gorinchem.',
        'index': 'plastic_soep',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'Plasic Soep',
        'content': {
            'title0': 'We hebben van Martin Bakker, namens het bedrijf de Waardemakers, de opdracht gekregen om met technasium een kenniscentrum op te richten. Dit kenniscentrum is bedoelt om het plastic in Gorinchem in kaart te brengen. Hiermee kunnen volgende klassen verder met het onderzoeken naar het plastic in Gorinchem en naar oplossingen ervoor zoeken.',
            'Probleem': 'In het begin was het probleem nog erg onduidelijk. Om dit probleem in kaart te brengen hebben we een onderzoek uitgevoerd naar het swerf plastic in Gorinchem. Maar een groot deel van het plastic in de natuur valt onder de microplastics die niet met het blote oog te zien zijn. Al dit maakt het heel moeilijk om het probleem goed in kaart te brengen. Ook maakt dit het moeilijk om het probleem over te brengen en communiseren naar het publiek.',
            'Onderzoek': 'Bij dit project hebben we ook veel onderzoek gedaan naar bestaande oplossingen voor het opruimen van plastic in de natuur en naar de herkomst van het plastic dat door Gorinchem komt. Daarbij is gekeken naar de verschillende rivieren die langs en door Goinchem stromen en andere bronnen van plastic.',
            'Competenties': '<strong>Samenwerken</strong><br>Voor dit project hebben we veel moeten samenwerken tussen de verschillende groepjes om samen één kenniscentrum te verzamelen. Hierbij hebben we goed moeten coördineren om niet dubbel onderzoek tussen de groepjes te doen.<br><strong>Kennisgerichtheid</strong><br>Dit project was volledig gericht op het onderzoek doen. Om het plastic probleem in Gorinchem eerst in kaart te brengen hebben we samen met alle groepjes een onderzoek gedaan gedaan naar hoeveel swerf plastic er nou echt in Gorinchem is.',
        },
        'images': {
            'Probleem': 'microplatics-gorinchem',
            'Onderzoek': 'de-rijn-bron',
        }
    },
    'b4_techniek_meubels': {
        'date': '24 June 2019',
        'description': 'Een onderzoek met als doel om B4 Techniek advies te geven op het gebied van het verduurzamen van BiNaS-lokalen.',
        'index': 'b4_techniek_meubels',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'B4 Techniek Meubilair',
        'content': {
            'title0': 'Dit project heeft als doel om B4 Techniek advies en informatie te geven over hoe B4 Techniek een circulaire leverancier kan worden. B4 Techniek is een elektrotechnisch installatiebedrijf voor BiNaS-lokalen. Ze installeren onder andere de gas en water installaties, maar maken ook speciaal meubilair voor BiNaS lokalen.',
            'Onderzoek': 'Wij hebben gekozen om vooral onderzoek te doen naar het milieuvriendelijker maken van de tafels. Uit ons onderzoek is gebleken dat daar veel te verbeteren is. Zo is de coating van de tafelbladen, die het onder andere beschermt tegen verschillende chemische stoffen, bijna onmogelijk te scheiden van de houten basis. Maar ook deze basis is een miz van houtsnippers en lijm en is dus moeilijk te recyclen',
            'Conclusie': 'Uit ons onderzoek is gebleken dat er op het gebied van duurzame chemisch resistente coatings weinig ontwikkeled is. Mede omdat het materiaal chemisch resistent is het moeilijk het materiaal zelf te recyclen. Wel kan er gekeken worden naar het hergebruiken van de coatings of de houten basis. Hiervoor moet er wel een oplossing bedacht worden om die van elkaar te scheiden . Door bijvoorbeeld een clicksysteem te ontwikkelen waarmee de basis en de coating makelijk te scheiden en hergebruiken zijn.',
            'Competenties': '<strong>Samenwerken</strong><br>Bij dit project hebben we veel moeten zoeken naar bestaande producten en oplossingen. wij hebben hierbij goed samengewerkt aan het onderzoeken naar mogelijkheden.<br><strong>Procesgerichtheid</strong><br>Voor dit project hebben we veel moeite gestoken in het scrummen en het documenteren van het proces. Zo hebben we sprints bijgehouden van twee weken en aan het begin van elke sprint goed bepaalt wat we die sprint gaan doen.',
        },
        'images': {
            'title0': 'logo-b4techniek',
            'Conclusie': 'binas-lokaal',
        }
    },
    'keuze_koffiebekers': {
        'date': '4 Februari 2019',
        'description': 'Een onderzoek naar welk materiaal koffiebeker voor een bedrijf het meest milieuvriendelijkst zou zijn.',
        'index': 'keuze_koffiebekers',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'Keuze van de Koffiebeker',
        'content': {
            'title0': 'Dit project heeft als doel om vast te stellen welke soort koffiebeker het milieuvriendelijkst is. Hierbij hebben we gekeken naar of de imago\'s van de verschillende koffiebekers terecht was of niet. Ook hebben we onderzoek gedaan naar bedrijven of organisaties van verschillende grote, om te kijken of de grote van het bedrijf uitmaakt bij het kiezen van een koffiebeker soort.',
            'Onderzoek': 'Bij dit project stond het onderzoeken centraal. Voor dit onderzoek hebben we veel bestaande onderzoeken en gegevens gezocht. Om deze informatie goed over te brengen hebben we met Google Sites een site gemaakt met onze conclusies en beredeneringen.',
            'Competenties': '<strong>Samenwerken</strong><br>Bij dit project hebben we veel samen moeten werken en moeten communiseren met elkaar. Doordat dit goed is gegaan zijn we samen tot de conclusie gekomen.<br><strong>Kennisgerichtheid</strong><br>Omdat dit project gericht is op onderzoek was het belangrijk dat er goed en veel onderzoek werd gedaan. Ik vind dat dit onderzoek goed is gegaan.',
        },
        'images': {
            'title0': 'best-coffee-cups',
        }
    },
    'flexibele_woonvormen': {
        'date': '5 November 2018',
        'description': 'Een project met als doel om een plan te maken voor flexibele woonvormen in de gemeente Gorinchem.',
        'index': 'flexibele_woonvormen',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'Flexibele Woonvormen',
        'content': {
            'title0': 'Dit project is in opdracht van de gemeente Gorinchem. De opdracht van de gemeente is om een flexibel woningcomplex te ontwikkelen, waarin rekening gehouden wordt met verschillende inkomensklassen. Als product hebben we een maquette gemaakt van een eventueel plan voor zo\'n woonwijk.',
            'Competenties': '<strong>Productgerichtheid</strong><br>Bij dit project hebben we vanaf het begin af aan goed nagedacht over het eindproduct, de maquette. Tijdens het project hebben we ook verbeteringen en aanpassing gemaakt om het eindproduct te verbeteren. Hierdoor hebben we uiteindelijk een goed product geleverd.<br><strong>Samenwerken</strong><br>Tijdens dit porject hebben we veel moeten samenwerken met het ontwerpen van de maquette en het onderzoek. Omdat we het scrummen goed hebben bijgehouden was het ook gemakelijk om goed samen te werken en de taken te verdelen.',
        },
        'images': {
            'title0': 'logo-gemeente-gorinchem',
        }
    },
};
exports.projects = projects;
const projectTypes = {
    'featured': [
        'statsdb_overlay',
        'aquazoo_leerdam',
        'portfolio_website',
    ],
    'freetimeProjects': [
        'statsdb_overlay',
        'portfolio_website',
        'r6lookup_website',
    ],
    'techProjects': [
        'aquazoo_leerdam',
        'b4_techniek_circulair',
        'rolstoel_stappenteller',
        'plastic_soep',
        'b4_techniek_meubels',
        'keuze_koffiebekers',
        'flexibele_woonvormen',
    ],
};
exports.projectTypes = projectTypes;
const projectTypeNames = {
    'featured': 'Featured',
    'freetimeProjects': 'Free-Time Projects',
    'techProjects': 'Technasium Projects',
};
exports.projectTypeNames = projectTypeNames;
const pages = {
    'about': {
        'content': {
            'title0': '119819@mymerewade.nl<br>tychobrouwer33@gmail.com',
            'title1': 'Fortes Lyceum, Gorinchem<br>Technasium jaar 4, 5 en 6',
            'title2': '<strong>My GitHub: </strong>https://github.com/TychoBrouwer',
        },
        'images': {}
    }
};
exports.pages = pages;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
exports.monthNames = monthNames;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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QUNmO0NBQ0osQ0FBQztBQVVFLHNCQUFLO0FBUlQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07SUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0NBQ2pFLENBQUM7QUFPRSxnQ0FBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFByb2plY3RDbGFzcyB9IGZyb20gJy4vb2RrLXRzL3Byb2plY3QnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9vZGstdHMvbmF2aWdhdG9yJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL29kay10cy9wYWdlJztcbmltcG9ydCB7IHByb2plY3RzLCBwcm9qZWN0VHlwZXMsIHBhZ2VzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHByaW50UGFnZShwYWdlSWQpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHBhZ2VJZCwgJycsICcnLCBbXSwgcGFnZXNbcGFnZUlkXS5jb250ZW50LCBwYWdlc1twYWdlSWRdLmltYWdlcywgJycpO1xuXG4gICAgICAgICAgICBwYWdlLnByaW50UGFnZSgpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtYWluQ2xhc3MgPSBuZXcgTWFpbjtcbmNvbnN0IG5hdkNsYXNzID0gbmV3IE5hdmlnYXRvcjtcblxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQcm9qZWN0c05hdigpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdFR5cGUgaW4gcHJvamVjdFR5cGVzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdFR5cGVzLmhhc093blByb3BlcnR5KHByb2plY3RUeXBlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFR5cGVzW3Byb2plY3RUeXBlXTtcblxuICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3RUeXBlKHByb2plY3RUeXBlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYXZQcm9qZWN0VHlwZVRpdGxlOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0VHlwZSArICcgLm5hdlRpdGxlJykhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZQcm9qZWN0VHlwZVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcubmF2T2JqZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0IS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCEucXVlcnlTZWxlY3RvcignLm5hdkFycm93JykhLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDYzLjY0IDk4Ljk5NVwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjg2LjY4IDU5MC42NzUpIHJvdGF0ZSgtOTApXCI+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDUuODIyIDMwMC44MjIpIHJvdGF0ZSg0NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0MS4xNzggMzM2LjE3OCkgcm90YXRlKC00NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48L2c+PC9zdmc+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQhLnF1ZXJ5U2VsZWN0b3IoJy5uYXZBcnJvdycpIS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA5OC45OTUgNjMuNjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ5MS42OCAtMjg2LjY4KVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwcm9qZWN0c1tpXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmF2Q2xhc3MubmV3UHJvamVjdChwcm9qZWN0LnByb2plY3RJbmRleCgpLCBwcm9qZWN0LnByb2plY3RUaXRsZSgpLCBwcm9qZWN0VHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByaW50UGFnZShwYWdlSWQ6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RzW3BhZ2VJZF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENsYXNzKHBhZ2VJZCk7XG5cbiAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbkNsYXNzLnByaW50UGFnZShwYWdlSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pXG59XG5cbnByaW50UHJvamVjdHNOYXYoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2UGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2UGFnZScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2UGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdlBhZ2UgPSBuYXZQYWdlc1tpXTtcblxuICAgICAgICAgICAgbmF2UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hdlBhZ2UgPSBuYXZQYWdlc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5hdlBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBwcmludFBhZ2UobmF2UGFnZS5pZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSk7XG4iLCJpbXBvcnQgeyBQcm9qZWN0Q2xhc3MgfSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBwcm9qZWN0VHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIHtcclxuICAgIHByaXZhdGUgcHJvamVjdERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbnRhaW5lcicpITs7XHJcbiAgICBwcml2YXRlIGZpcnN0UHJvamVjdFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBuZXdQcm9qZWN0VHlwZShwcm9qZWN0VHlwZTogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UHJvamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQcm9qZWN0VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3REaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9JyR7cHJvamVjdFR5cGV9JyBjbGFzcz0nbmF2T2JqZWN0ICR7YWN0aXZlfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZBcnJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDYzLjY0IDk4Ljk5NVwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjg2LjY4IDU5MC42NzUpIHJvdGF0ZSgtOTApXCI+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDUuODIyIDMwMC44MjIpIHJvdGF0ZSg0NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0MS4xNzggMzM2LjE3OCkgcm90YXRlKC00NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZJY29uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiB2aWV3Qm94PVwiMCAwIDUxMiAzODRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTgwOSAtMTUzKVwiPjxwYXRoIGQ9XCJNNDY0LDEyOEgyNzJMMjE3LjM3LDczLjM3QTMyLDMyLDAsMCwwLDE5NC43NCw2NEg0OEE0OCw0OCwwLDAsMCwwLDExMlY0MDBhNDgsNDgsMCwwLDAsNDgsNDhINDY0YTQ4LDQ4LDAsMCwwLDQ4LTQ4VjE3NkE0OCw0OCwwLDAsMCw0NjQsMTI4Wm0wLDI3Mkg0OFYxMTJIMTg4LjEybDU0LjYzLDU0LjYzQTMyLDMyLDAsMCwwLDI2NS4zOCwxNzZINDY0WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4MDkgODkpXCIvPjxyZWN0IHdpZHRoPVwiNDI2XCIgaGVpZ2h0PVwiMjg5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDg0OCAyMTcpXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdk5hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0VHlwZU5hbWVzW3Byb2plY3RUeXBlXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkRyb3BEb3duRGl2Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBuZXdQcm9qZWN0KHByb2plY3RJbmRleDogc3RyaW5nLCBwcm9qZWN0TmFtZTogc3RyaW5nLCBwcm9qZWN0VHlwZTogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VHlwZURpdjogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvamVjdFR5cGUgKyAnIC5uYXZEcm9wRG93bkRpdicpITtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENsYXNzKHByb2plY3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByaW50UHJvamVjdFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0VHlwZURpdi5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RJbmRleH0nIGNsYXNzPSduYXZEcm9wRG93biBuYXZQYWdlICR7YWN0aXZlfSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZUaXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2SWNvbic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdk5hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IG1vbnRoTmFtZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdmFyaWFibGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlIHtcclxuICAgIHByaXZhdGUgcGFnZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBhZ2VJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYWdlZGF0ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYWdlRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZVRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHBhZ2VDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIHBhZ2VJbWFnZXM6IE9iamVjdDtcclxuICAgIHByaXZhdGUgcGFnZUxpbmtzOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgdGFnczogQXJyYXk8c3RyaW5nPiwgY29udGVudDogT2JqZWN0LCBpbWFnZXM6IE9iamVjdCwgbGlua3M6IE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJykhO1xyXG4gICAgICAgIHRoaXMucGFnZUlkID0gcGFnZUlkO1xyXG4gICAgICAgIHRoaXMucGFnZWRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMucGFnZURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wYWdlVGFncyA9IHRhZ3M7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5wYWdlSW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgICAgIHRoaXMucGFnZUxpbmtzID0gbGlua3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRQYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VkYXRlID09PSAnY3VycmVudCcpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlZGF0ZSA9IGAke2QuZ2V0RGF0ZSgpfSAke21vbnRoTmFtZXNbZC5nZXRNb250aCgpXX0gJHtkLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YWdIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWdlVGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnBhZ2VUYWdzW2ldO1xyXG5cclxuICAgICAgICAgICAgdGFnSFRNTCArPSBgPGRpdiBjbGFzcz1cInRhZyAke3RhZ31cIj48cD4ke3RhZ308L3A+PC9kaXY+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYWdlQ29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0aXRsZSBpbiB0aGlzLnBhZ2VDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VDb250ZW50Lmhhc093blByb3BlcnR5KHRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxpbmVhID0gdGhpcy5wYWdlQ29udGVudFt0aXRsZV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0hUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlSW1hZ2VzW3RpdGxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hUTUwgPSBgPGRpdiBjbGFzcz1cImFsaW5lYUltYWdlXCI+PGltZyBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzLyR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX0ud2VicFwiIGFsdD1cIiR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX1cIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZS5pbmNsdWRlcygndGl0bGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gYDxoMz4ke3RpdGxlfTwvaDM+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgJHt0aXRsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICR7aW1nSFRNTH1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHthbGluZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUxpbmtzID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUxpbmtzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VMaW5rcy5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnBhZ2VMaW5rc1t0aXRsZV07XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUxpbmtzICs9IGA8YSBocmVmPVwiJHtsaW5rfVwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PC9hPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyIGlkPVwicGFnZVRpdGxlXCI+JHt0aGlzLnBhZ2VJZH08L2gyPlxyXG4gICAgICAgIDxwIGlkPVwicGFnZURhdGVcIj4ke3RoaXMucGFnZWRhdGV9PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlVGFnc1wiPiR7dGFnSFRNTH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgZGVzY3JpcHRpb25cIj48cD4ke3RoaXMucGFnZURlc2NyaXB0aW9ufTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgJHtwYWdlQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUxpbmtzXCI+XHJcbiAgICAgICAgICAgICR7cGFnZUxpbmtzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb2plY3Qge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIGluZGV4OiBzdHJpbmcsXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgbGlua3M6IHtcclxuICAgICAgICB2aWV3OiBzdHJpbmcsXHJcbiAgICAgICAgZ2l0aHViOiBzdHJpbmcsXHJcbiAgICB9XHJcbiAgICB0YWdzOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IE9iamVjdCxcclxuICAgIGltYWdlczogT2JqZWN0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdENsYXNzIHtcclxuICAgIHByaXZhdGUgcHJvamVjdDogSVByb2plY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RzW3Byb2plY3ROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFByb2plY3RQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLnByb2plY3QudGl0bGUsIHRoaXMucHJvamVjdC5kYXRlLCB0aGlzLnByb2plY3QuZGVzY3JpcHRpb24sIHRoaXMucHJvamVjdC50YWdzLCB0aGlzLnByb2plY3QuY29udGVudCwgdGhpcy5wcm9qZWN0LmltYWdlcywgdGhpcy5wcm9qZWN0LmxpbmtzKTtcclxuXHJcbiAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBwcm9qZWN0cyA9IHtcbiAgICAnc3RhdHNkYl9vdmVybGF5Jzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgUmFpbmJvdyBTaXggU2llZ2UgaW5nYW1lIHN0YXRpc3RpY3Mgb3ZlcmxheSBtYWRlIGluIGNvbGxhYm9yYXRpb24gd2l0aCBPdmVyd29sZi4nLFxuICAgICAgICAnaW5kZXgnOiAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ1N0YXRzREIgQXBwJzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS9hcHAvU3RhdHNEQi1TdGF0c0RCJyxcbiAgICAgICAgICAgICdTdGF0c0RCIFdlYnNpdGUnOiAnaHR0cHM6Ly9zdGF0c2RiLm5ldC8nLFxuICAgICAgICAgICAgJ092ZXJ3b2xmJzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAnYXBwJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1N0YXRzREIgT3ZlcmxheScsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdUaGlzIGlzIGEgcHJvamVjdCBpbiBjb2xhYm9yYXRpb24gd2l0aCBPdmVyd29sZi4gT3ZlcndvbGYgaXMgYSBmcmFtZXdvcmsgdGhhdCBhbGxvd3MgM3JkIHBhcnR5IGRldmVsb3BlcnMgdG8gZWFzaWx5IGJ1aWxkIGdhbWluZyBhcHBzIGFuZCBvdmVybGF5cyBpbiBIVE1MIGFuZCBKYXZhU2NyaXB0LiBUaGUgZ29hbCBvZiB0aGlzIHByb2plY3QgaXMgdG8gY3JlYXRlIGFuIGludHVpdGl2ZSBhbmQgZWFzeSB0byB1c2UgUmFpbmJvdyBTaXggU2llZ2Ugb3ZlcmxheSB0byB0cmFjayBhbmQgc2VlIHBsYXllciBzdGF0aXN0aWNzIGluZ2FtZS4gVGhpcyBwcm9qZWN0IEkgaGF2ZSB0ZWFtZWQgdXAgd2l0aCBKb2N1bGFyTWFycm93LicsXG4gICAgICAgICAgICAnU3RhcnR1cCc6ICdUaGUgcHJvamVjdCBzdGFydGVkIGFmdGVyIHdlIGhhZCBzdGFydGVkIG9uIGEgc3RhdGlzdGljcyB3ZWJzaXRlIGZvciBSYWluYm93IFNpeCBTaWVnZSwgYWZ0ZXIgd2UgaGFkIG1vc3RseSBmaW5pc2hlZCB0aGUgd2Vic2l0ZSB3ZSBkZWNpZGVkIHRvIHN1Ym1pdCBhbiBhcHAgcHJvcG9zYWwgdG8gT3ZlcndvbGYuIE5vdCBhIGxvdCBsYXRlciB3ZSBnb3QgYXBwcm92ZWQgYW5kIHN0YXJ0ZWQgd29ya2luZyBvbiB0aGUgb3ZlcmxheS4gTGF0ZXIgaW4gMjAyMCB3ZSBkZWNpZGVkIHRvIHNjcmFwIHRoZSB3ZWJzaXRlIGFuZCB0ZWFtIHVwIHdpdGggU3RhdHNEQi4gQWZ0ZXIgdGhhdCB3ZSBmb2N1c2VkIHNvbGVseSBvbiB0aGUgb3ZlcmxheS4nLFxuICAgICAgICAgICAgJ0NvZGUnOiAnVGhpcyBwcm9qZWN0IEkgd29ya2VkIHdpdGggSFRNTDUsIFNDU1MgYW5kIFR5cGVTY3JpcHQuIFNDU1Mgd2FzIGNob3NlbiBmb3IgdGhpcyBwcm9qZWN0IGJlY2F1c2UgaXQgaGFzIGFuIGltcHJvdmVkIGVhc2llciB0byBpbnRlcnByZXQgc3ludGF4IGNvbXBhcmVkIHRvIENTUzMuIEFuZCBnaXZlcyB5b3UgdGhlIGFiaWxpdHkgdG8gZWFzaWx5IGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcy4gVHlwZVNjcmlwdCB3YXMgY2hvc2VuIGZvciB0aGlzIHByb2plY3QsIGJlY2F1c2UgT3ZlcndvbGYgaGFzIGEgc2FtcGxlIHByb2plY3Qgd3JpdHRlbiBpbiBUeXBlU2NyaXB0LiBPdGhlciByZWFzb25zIGZvciB1cyB0byB1c2UgVHlwZVNjcmlwdCB3ZXJlLCB0aGF0IGl0IGdpdmVzIHVzIHRoZSBhYmJpbGl0eSB0byB1c2UgT3ZlcndvbGZzIFR5cGVTY3JpcHQgZGVjbGFyYXRpb24gZmlsZSBhbmQgZWFybHkgYnVnIHNwb3R0aW5nIGR1cmluZyB0aGUgY29tcGlsZSBzdGFnZS4nLFxuICAgICAgICAgICAgJ0FwcCc6ICdPdXIgZ29hbCB3YXMgdG8gbWFrZSBhIGhpZ2hseSBjdXN0b21pemFibGUgb3ZlcmxheSB3aGljaCB0aGUgdXNlciBjYW4gY3VzdG9taXplIHRvIHRoZWlyIG93biBwcmVmZXJlbmNlcy4gVGhlIGZlYXR1cmVzIG9mIHRoZSBhcHAgaW5jbHVkZSB0aGUgYWJpbGl5IHRvIGdldCB0aGUgc3RhdGlzdGljcyBvZiB0aGUgcGxheWVycyBpbiB5b3VyIGdhbWUgbG9iYnksIHRoZSB0cmFja2luZyBvZiBzdGF0aXN0aWNzIHN1Y2ggYXMgZGFpbHkgYW5kIHdlZWtseSBLL0QgYW5kIFdpbi9Mb3NzIHJhdGlvcy4gRnVydGhlcm1vcmUgeW91IGNhbiByZXZpc2l0IHlvdXIgcGxheWVkIGdhbWVzIGFuZCBzZWUgeW91ciBwZXJmb3JtYW5jZSByb3VuZCBieSByb3VuZC4gSW4gdGVybXMgb2YgY3VzdG9taXNpbmcgdGhlIG92ZXJsYXkgeW91IGNhbiBjaGFuZ2UgdGhvIGNvbG9yIHRoZW1lIGFuZCBjaG9zZSB3aXRoIHN0YXRpc3RpY3MgdG8gc2hvdyBpbmdhbWUgb24gdGhlIG92ZXJsYXkuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1vdmVyd29sZicsXG4gICAgICAgICAgICAnQ29kZSc6ICdsb2dvLXNjc3MtdHlwZXNjcmlwdCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdwb3J0Zm9saW9fd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnY3VycmVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdNeSBjdXJyZW50IHBvcnRmb2xpbyB3ZWJzaXRlLiBBa2EgbXkgY29kaW5nIHNhbmRib3ggZm9yIHRyeWluZyBuZXcgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzLicsXG4gICAgICAgICdpbmRleCc6ICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdQb3J0Zm9saW8gR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUG9ydGZvbGlvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ3dlYnNpdGUnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUG9ydGZvbGlvIFdlYnNpdGUnLFxuICAgICAgICAnY29udGVudCc6IHt9LFxuICAgICAgICAnaW1hZ2VzJzoge30sXG4gICAgfSxcbiAgICAncjZsb29rdXBfd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjkgRGVjZW1iZXIgMjAyMCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBIFJhaW5ib3cgU2l4IFNpZWdlIHN0YXRpc3RpY3Mgd2Vic2l0ZSBmb3Igc2VhcmNoaW5nIHlvdXIgYW5kIHlvdXIgZW5lbWllcyBnYW1lIHN0YXRpc3RpY3MuJyxcbiAgICAgICAgJ2luZGV4JzogJ3I2bG9va3VwX3dlYnNpdGUnLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnUjZMb29rdXAgR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUjZMb29rdXAtV2Vic2l0ZScsXG4gICAgICAgICAgICAnU3RhdHNEQiBXZWJzaXRlJzogJ2h0dHBzOi8vc3RhdHNkYi5uZXQvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdSNkxvb2t1cCBXZWJzaXRlJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ1RoaXMgcHJvamVjdCBvcmlnaW5hbHkgc3RhcnRlZCBhcyBhIHNtYWxsIHByb2plY3QgdG8gYmUgYWJsZSB0byBjaGVjayBteSBvd24gc3RhdGlzdGljcyBhbmQgcHJvZ3Jlc3Npb24gaW4gUmFpbmJvdyBTaXggU2llZ2UuIEFmdGVyIEkgd2FzIHVuaGFwcHkgd2l0aCB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSB3ZWJzaXRlIHRoYXQgd2hlcmUgc2VydmluZyB0aGUgYWJpbGl0eSB0byBjaGVjayBSYWluYm93IFNpeCBTaWVnaGUgcGxheWVyIHN0YXRpc3RpY3MuIEFmdGVyIEkgd2hpbGUgSSBzdGFydGVkIHdvcmtpbmcgb24gaXQgd2l0aCBKb2N1bGFyTWFycm93LiBUaGlzIHdhcyB0aGUgYmVnaW5pbmcgb2YgdGhlIGFjY3VhbCB3ZWJzaXRlLiBUaGUgd2Vic2l0ZSBpcyBjdXJyZW50bHkgZGlzY29udGludWVkLCBiZWNhdXNlIHdlIGRlY2lkZWQgdG8gc29sZWx5IGZvY3VzIG9uIGRlIE92ZXJ3b2xmIG92ZXJsYXkgYW5kIHdvcmsgdG9nZXRoZXIgd2l0aCBTdGF0c0RCLicsXG4gICAgICAgICAgICAnQ29kZSc6ICdUaGlzIHByb2plY3Qgd2FzIG15IGZpcnN0IGV4cGVyaWVuY2Ugd2l0aCB3b3JraW5nIHdpdGggUEhQLiBBbmQgbXkgZmlyc3QgbWF5b3IgcHJvamVjdCB1c2luZyBIVE1MNSwgSmF2YVNjcmlwdCBhbmQgU0NTUy4gQmVjYXVzZSBJIHdhcyBxdWl0ZSB0aGUgYmVnaW5uZXIgYXQgY29kaW5nIEkgaGFkIHRvIGNsZWFuIHVwIHRoZSBjb2RlIGEgbG90IGFmdGVyIEkgZ290IGJldHRlciBhdCB3b3JraW5nIHdpdGggUEhQLiBJZiBJIHdvdWxkIHN0YXJ0IG92ZXIgSSB3b3VsZCBsaWtlIHRvIGJlbGlldmUgdGhlIHByb2plY3Qgd291bGQgaGF2ZSBiZWVuIGEgbG90IGxlc3MgY29tcGxleCBhbmQgbWVzc3kuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1yNmxvb2t1cCcsXG4gICAgICAgICAgICAnQ29kZSc6ICdwaHAtbG9nbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAnYXF1YXpvb19sZWVyZGFtJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2wgcHJvamVjdCBpbiBvcGRyYWNodCB2YW4gQXF1YVpvbyBMZWVyZGFtIG9tIGRlIGFxdWFyaXVtbGljaHRlbiB2YW4gZWVuIGFmc3RhbmQgdGUgYmVzdHVyZW4uJyxcbiAgICAgICAgJ2luZGV4JzogJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdBcXVhWm9vIFByb2plY3QgR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvQXF1YVpvby1MZWVyZGFtJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICAgICAgJ2FyZHVpbm8nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnQXF1YVpvbyBMZWVyZGFtJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBpcyBlZW4gcHJvamVjdCBuYW1lbnMgZGUgb3BkcmFjaHRnZXZlciBBcXVhWm9vIExlZXJkYW0uIFdpaiBoYWRkZW4gZGUgb3BkcmFjaHQgZ2VrcmVnZW4gb20gZWVuIHN5c3RlZW0gdGUgb250d2lra2VsZW4gd2Fhcm1lZSBBcXVhWm9vIExlZXJkYW0gZGUgbGljaHRlbiB2YW4gaHVuIGFxdWFyaXVtcyB2YW4gZWVuIGFmc3RhbmQgdGUga3VubmVuIGFhbnN0dXJlbi4gQmlubmVuIGRpdCBwcm9qZWN0IGhhZCBpayBkZSB0YWFrIHZhbiBoZXQgcHJvZ3JhbW1lcmVuIGVuIG9udHdpa2tlbGVuIHZhbiBoZXQgQXJkdWlubyBwcm90b3R5cGUuIERpdCBwcm9qZWN0IGhlYiBpayBzYW1lbmdld2Vya3QgbWV0IENhaW4gV29lc3RlbmJ1cmcgZW4gRGF2aWQgQmFnaWpuLicsXG4gICAgICAgICAgICAnTWVlc3RlcnByb2VmJzogJ0RlIE1lZXN0ZXJwcm9lZiBpcyBlZW4gZWluZGV4YW1lbnByb2plY3QgdmFuIGhldCB2YWsgTyZPLiBIb2V0IGRvZWwgdmFuIGhldCBwcm9qZWN0IGlzIGRhdCBkZSBsZWVyaW5nIGFsbGUgdmFhcmRpZ2hlZGVuIGxhYXQgemllbiBkaWUgbm9kaWcgemlqbiBvbSBlZW4gdGVjaG5hc2l1bWxlZXJsaW5nIHRlIHppam4uIFRpamRlbnMgZGl0IHByb2plY3Qgd29yZHQgZXIgd2VpbmlnIGRvb3IgZGUgZG9jZW50ZW4gZ2VyZWdlbGQgZW4gbW9ldCBkZSBsZWVybGluZyBkdXMgdmVlbCB6ZWxmc3RhbmRpZ2hlaWQgbGF0ZW4gemllbi4gSGV0IG9uZGVyem9layBnZWRlZWx0ZSB2YW4gZGUgTWVlc3RlcnByb2VmIHZvcm10IGhldCBwcm9maWVsd2Vya3N0dWsuJyxcbiAgICAgICAgICAgICdPcGRyYWNodCc6ICdBcXVhWm9vIExlZXJkYW0gaXMgZWVuIGRpZXJlbnR1aWQgaW4gTGVlcmRhbSBtZXQgcnVpbSA0MCB2aXZhcmlhLiBEZSBkaWVyZW50dWluIHdvcmR0IGdlcnVudCBkb29yIHZyaWp3aWxsaWdlcnMgdmFuIGRlIGFxdWFyaXVtdmVyZW5pZ2luZyBkZSBEaXNjdXMgdWl0IExlZXJkYW0uIEhpZXJkb29yIHppam4gZXIgbmlldCBhbHRpamQgZGV6ZWxmZGUgbWVuc2VuIGFhbndlemlnIGVuIGlzIGRlIGthbnMgZ3Jvb3QgZGF0IGVyIHNvbXMgdmVyZ2V0ZW4gd29yZHQgZGUgbGljaHRlbiB1aXQgdGUgemV0dGVuLiBEYWFyb20gd2lsbGVuIHplIGRlIGFxdWFyaWEgdmFuIGFmc3RhbmQgdWl0IGt1bm5lbiB6ZXR0ZW4gYWxzIGRhdCB2ZXJnZXRlbiBpcy4gRXIgaXMgdm9vciBnZWtvemVuIG9tIHRlIHdlcmtlbiBtZXQgZWVuIEFyZHVpbm8gTWVnYSAyNTYwLicsXG4gICAgICAgICAgICAnSGV0IFByb2R1Y3QnOiAnT25zIHByb2R1Y3QgbWFha3QgZ2VicnVpayB2YW4gZWVuIEFyZHVpbm8gb20gZGUgbGljaHRlbiB0ZSBrdW5uZW4gYmVzdHVyZW4uIE9tIGRlIEFyZHVpbm8gb3AgYWZzdGFuZCB0ZSBrdW5uZW4gYmVzdHVyZW4gaGViYmVuIHdlIG1ldCBiZWh1bHAgdmFuIGVlbiBFdGhlcm5ldCBTaGllbGQgZWVuIHdlYnNlcnZlciBnZW1hYWt0LiBEZSB3ZWJzZXJ2ZXIgaXMgYmVzY2hlcm10IG1ldCBlZW4gd2FjaHR3b29yZC4gVmlhIGRlIHdlYnNlcnZlciBrdW5uZW4gZGUgbGFtcGVuIHZpYSBkZSBBcmR1aW5vIHdvcmRlbiBhYW5nZXN0dXVyZC4gQXF1YVpvbyB3aWxkZSBvb2sgZGUgbW9nZWxpamtoZWlkIGhlYmJlbiBvbSB0ZSBrdW5uZW4gY29udHJvbGxlcmVuIHdhbm5lZXIgZW4gd2llIGRlIGxhbXBlbiBoZWVmdCBiZXN0dXVyZC4gSGllcnZvb3Igc2xhYW4gd2UgZGUgbG9ncyBvcCBvcCBlZW4gU0Qta2FhcnQuJyxcbiAgICAgICAgICAgICd0aXRsZTEnOiAnVm9vciBoZXQgcHJvZHVjdCBoZWJiZW4gd2Ugb29rIGVlbiBiZWh1aXppbmcgb250d29ycGVuIGVuIDNELWdlcHJpbnQuIFdlIGhlYmJlbiBoZXQgb250d2VycCB2b29yIGRlIGJlaHVpemluZyBnZW1hYWt0IG1ldCBiZWh1bHAgdmFuIGJsZW5kZXIuIEhldCBvbnR3ZXJwIGlzIGdlw6t4cG9ydGVlcmQgYWxzIFNUTCBvbSBoZXQgdGUga3VubmVuIHByaW50ZW4gbWV0IGRlIDNELXByaW50ZXIgb3Agc2Nob29sLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkhldCBiZWxhbmdyaWprc3RlIGRlZWwgdmFuIGRpdCBwcm9qZWN0IGJlc3RhYXQgdWl0IGhldCBwcm90b3R5cGUuIEFhbmdlemllbiBpayBkYWFyIHZlZWwgd2VyayBlbiBhYW5kYWNodCBhYW4gaGViIGJlc3RlZWQgdmluZCBpayBkYXQgaWsgZ29lZCBwcm9kdWN0Z2VyaWNodCBoZWIgZ2V3ZXJrdC48YnI+PHN0cm9uZz5JbmRpdmlkdWVlbCB3ZXJrZW48L3N0cm9uZz48YnI+RG9vcmRhdCBoZXQgZ3Jvb3RzdGUgZGVlbCB2YW4gZGUgcGVyaW9kZSB2YW4gaGV0IHByb2ZpZWx3ZXJrc3R1ayB0aWpkZW5zIGRlIENvcm9uYSBsb2NrZG93biBlbiBtYWF0cmVnZWxlbiB3YXMgaGViYmVuIHdlIHZlZWwgaW5kaXZpZHVlZWwgbW9ldGVuIHdlcmtlbi4gT25kYW5rcyBkZXplIG9tc3RhbmRpZ2hlZGVuIGRlbmsgaWsgZGF0IGVyIGdvZWQgemVsZnN0YW5kaWcgdGh1aXMgaXMgZ2V3ZXJrdC4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWFxdWF6b28nLFxuICAgICAgICAgICAgJ0hldCBQcm9kdWN0JzogJ2FyZHVpbm8tbWVnYTI1NjAnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnYjRfdGVjaG5pZWtfY2lyY3VsYWlyJzoge1xuICAgICAgICAnZGF0ZSc6ICczMCBKdW5lIDIwMjAnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHNjaG9vbCBvbmRlcnpvZWsgbmFtZW5zIEI0IFRlY2huaWVrIG5hYXIgZGUgbW9nZWxpamtoZWRlbiB2b29yIEI0IFRlY2huaWVrIG9tIGVlbiBjaXJ1bGFpcmUgbGV2ZXJhbmNpZXIgdGUgd29yZGVuLicsXG4gICAgICAgICdpbmRleCc6ICdiNF90ZWNobmlla19jaXJjdWxhaXInLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdCNCBUZWNobmllayBDaXJjdWxhaXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ01hcmlla2UgTWVsdGVuIGhlZWZ0IG9ucyBuYW1lbnMgQjQgVGVjaG5pZWsgZGUgb3BkcmFjaHQgZ2VnZXZlbiBvbSB2YW4gQjQgVGVjaG5pZWsgZWVuIGNpcnVsYWlyZSBsZXZlcmFuY2llciB0ZSB3b3JkZW4uIEhldCBwcm9ibGVlbSBpcyBkYXQgaGV0IG1ldWJpbGFpciB3YXQgQjQgdmVyem9yZ3QgbmlldCBnZXJlY3ljbGVkIGVuIHdlaW5pZyBoZXJnZWJydWlrdCB3b3JkdC4gQjQgd2lsIGdyYWFnIGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIHdvcmRlbi4gRGUgb3BkcmFjaHQgd2FzIGR1czogXCJXYXQga3VubmVuIHdlIG9udHdpa2tlbGVuIHdhYXJkb29yIEI0IGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIGthbiB3b3JkZW4/XCInLFxuICAgICAgICAgICAgJ0Jlem9layBCNCc6ICdXZSBrb25kZW4gZG9vciBDb3JvbmEgbmlldCBiaWogQjQgVGVjaG5pZWsgaW4gR2llc2VuIG9wIGJlem9laywgbWFhciB3ZSBoZWJiZW4gd2VsIGFsbGUgdm9vcmJlcmVpZGluZyBnZWRhYW4gdm9vciBoZXQgYmV6b2VrLiBXZSBoZWJiZW4gbWVlcmRlcmUgdnJhZ2VuIGVuIGlkZWXDq24gYmVkYWNodC4gRWVuIGRlZWwgdmFuIGRlemUgdnJhZ2VuIGhlYmJlbiB3ZSBsYXRlciB2aWEgV2hhdHNBcHAgd2VsIGt1bm5lbiB2cmFnZW4gZWVuIHZhbiBkZSBtb250ZXVycyB2YW4gQjQgVGVjaG5pZWssIFJpY2hhcmQgdmFuIEJpam5lbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdXZSBoZWJiZW4gdm9vcmFsIG9uZGVyem9layBnZWRhYW4gbmFhciBhbHRlcm5hdGlldmVuIHZvb3IgZGUgaHVpZGlnZSBtYXRlcmlhbGVuIHZhbiBkZSBCNCB0YWZlbHMuIERhYXJ2b29yIGhlYmJlbiB3ZSBhYW4gZGUgbW9udGV1ciBnZXZyYWFnZCB3ZWxrIG1hdGVyaWFhbCBnZWJydWlrdCB3b3JkIHZvb3IgZGUgdGFmZWwsIGRhYXJvcCBrcmVnZW4gd2UgaGV0IGFudHdvb3JkIGRhdCBoZXQgZWVuIHNwYWFucGxhYXQgaXMgbWV0IGVlbiBIUEwgdG9wbGFhZy4gSFBMIGlzIGVpZ2VubGlqayBhbGxlZW4gdGhlcm1pc2NoIHRlIHJlY3ljbGVuLCBkYXQgaXMgaGV0IHZlcmJyYW5kZW4gdmFuIGhldCBtYXRlcmlhYWwgb20gZXIgZW5lcmdpZSB1aXQgdGUgaGFsZW4uIEVlbiBhbmRlcmUgb3Bsb3NzaW5nIHpvdSBoZXQgaGVyZ2VicnVpa2VuIGt1bm5lbiB6aWpuIGluIGVlbiBvZiBhbmRlcmUgdm9ybS4nLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdEb29yIENvcm9uYSBpcyBoZXQgb25kZXJ6b2VrIG5hYXIgZHV1cnphbWUgbWF0ZXJpYWxlbiBlbiBjaXJjdWxhaXJlIGVjb25vbWllIGtvcnRlciBkYW4gYmVkb2VsdCBlbiBoZWJiZW4gd2UgYmlqdm9vcmJlZWxkIG5pZXQgZWVuIGRlZWwgdmFuIGhldCB0YWZlbGJsYWQsIHdhdCB3ZSBiaWogQjQgem91ZGVuIG9waGFsZW4sIGt1bm5lbiBvbmRlcnpvZWtlbi4gV2UgemlqbiBlciB3ZWwgYWNodGVyIGdla29tZW4gZGF0IGVyIGdlZW4gbWFra2VsaWprZSBvcGxvc3NpbmcgaXMgdm9vciBoZXQgcHJvYmxlZW0sIG9tZGF0IGRlIHRhZmVscyB0ZWdlbiB2ZWVsIHZlcnNjaGlsbGVuZGUgY2hlbWlzY2hlIHN0b2ZmZW4gbW9ldCBrdW5uZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5JbmRpdmlkdWVlbCB3ZXJrZW48L3N0cm9uZz48YnI+TWVkZW4gZG9vciBDb3JvbmEgaGViYmVuIHdlIHZlZWwgaW5kaXZpZHVlZWwgdGh1aXMgbW9ldGVuIHdlcmtlbi4gWm8gaGViIGlrIHZvb3JhbCBnZXdlcmt0IGFhbiBoZXQgem9la2VuIHZhbiBldmVudHVlbGUgbWF0ZXJpYWxlbiBvbSBoZXQgaHVpZGlnZSBtYXRlcmlhYWwgdmFuIGRlIHRhZmVscyBtZWUgdGUgdmVycGxhYXRzZW4uIE9vayBoZWIgaWsgbmFnZWRhY2h0IG92ZXIgb3Bsb3NzaW5nZW4gdm9vciBoZXQgc2NoZWlkZW4gdmFuIGhldCBob3V0ZW4gZGVlbCB2YW4gZGUgdGFmZWwgZW4gZGUgcGxhc3RpYyBjb2F0aW5nLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkRpdCBwcm9qZWN0IHdhcyB2b29yYWwgZ2VyaWNodCBvcCBoZXQgem9la2VuIG5hYXIgZWVuIHRoZW9yZXRpc2NoZSBvcGxvc3NpbmcuIEhldCB3YXMgZHVzIGJlbGFuZ3JpamsgZGF0IGVyIGdvZWQgb25kZXJ6b2VrIGdlZGFhbiB3ZXJkLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAnQ2lyY3VsYWlyZSBMZXZlcmFuY2llcic6ICdsb2dvLWI0dGVjaG5pZWsnLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdsYWRkZXItdmFuLWxhbnNpbmsnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcic6IHtcbiAgICAgICAgJ2RhdGUnOiAnMTMgRGVjZW1iZXIgMjAxOScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gc2Nob29sIHByb2plY3QgZW4gb25kZXJ6b2VrIG5hYXIgZGUgbW9nZWxpamtoZWRlbiByb25kIGhldCBmaXRuZXNzIHRyYWNrZW4gdmFuIGZ5c2llayBiZXBlcmt0ZSBtZW5zZW4uJyxcbiAgICAgICAgJ2luZGV4JzogJ3JvbHN0b2VsX3N0YXBwZW50ZWxsZXInLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnUm9sc3RvZWwgUHJvamVjdCBHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9Sb2xzdG9lbC1Qcm9qZWN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdSb2xzdG9lbCBTdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGlzIGluIG9wZHJhY2h0IHZhbiBBcmphbiBTdGVyaywgbmFtZW5zIGhldCBiZWRyaWpmIE1vdGlvbnBvd2VyLiBIaWVyYmlqIGhlYmJlbiB3ZSBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBlZW4gcHJvdG90eXBlIHRlIG1ha2VuIHZvb3IgZWVuIGZpdG5lc3MgdHJhY2tlciB2b29yIHJvbHN0b2VsZ2VicnVpa2VycyBlbiBtZW5zZW4gbWV0IGVlbiBmeXNpZWtlIGJlcGVya2luZy4gT20gZGl0IHRlIHJlYWxpc2VyZW4gaGViYmVuIHdlIGVlcnN0IG9uZGVyem9layBnZWRhYW4gbmFhciB3ZWxrZSBtb2dlbGlqa2hlZGVuIGRpZSBtZW5zZW4gd2VsIG5vZyBoZWJiZW4uIE9vayBoZWJiZW4gd2Ugb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlc3RhYW5kZSBvcGxvc3NpbmdlbiB2b29yLicsXG4gICAgICAgICAgICAnUHJvZHVjdCc6ICdWb29yIGhldCBlaW5kcHJvZHVjdCBoZWJiZW4gd2UgZWVuIHByb3RvdHlwZSBnZW1hYWt0IHZvb3IgZWVuIHJvbHN0b2VsIHN0YXBwZW50ZWxsZXIuIEhpaiBrYW4gaGV0IGFhbnRhbCByb3RhdGllcyB2YW4gZWVuIHJvbHN0b2VsIHRlbGxlbiBkb29ybWlkZGVsIHZhbiBlZW4gZ3lyb3Njb29wIGFhbmdlc2xvdGVuIG9wIGVlbiBBcmR1aW5vIFVuby4gV2UgaGViYmVuIG9vayBnZWtlbiBuYWFyIGVlbiBoYXJ0c2xhZ21ldGVyLCBtYWFyIG1lZGUgZG9vciBiZXBlcmt0ZSB0aWpkIGlzIGhldCBuaWV0IGdlbHVrdCBvbSBkZSBoYXJ0c2xhZ21ldGVyIGJldHJvdXdiYWFyIHRlIG1ha2VuLiBCb3ZlbmRpZW4gemlqbiBlciBhbCBiZXRyb3V3YmFyZSBoYXJ0c2xhZ21ldGVycyBiZXNjaGlrYmFhciB2b29yIGZ5c2llayBnZWhhbmRpY2FwdGUgbWVuc2VuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+RG9vcnpldHRlbjwvc3Ryb25nPjxicj5CaWogaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlIHppam4gd2UgdGVnZW4gdmVlbCB0ZWdlbnNsYWdlbiBnZWxvcGVuLiBFciB3YXJlbiB2ZWVsIGNvbXBsaWNhdGllcyBtZXQgZGUgZ3lyb3Njb29wIGVuIGhldCB2ZXJ6YW1lbGVuIHZhbiBkZSBnZWdldmVucyB2YW4gZGUgZ3lyb3Njb29wLiBabyBoYWQgZGUgZ3lyb3Njb29wIGxhc3QgdmFuIGRyaWZ0LCBkaXQgaXMgd2FubmVlciBlZW4gZ3lyb3Njb29wIHVpdCBkZSBsaWpuIHJhYWt0LiBEcmlmdCBrYW4gdm9vciBlZW4gZ3Jvb3QgZGVlbCB1aXQgZGUgZGF0YSBnZWZpbHRlcmQgd29yZGVuIGRvb3IgZWVuIEthbG1hbiBmaWx0ZXIgb3AgZGUgZ2VnZXZlbnMgdG9lIHRlIHBhc3Nlbi48YnI+PHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSBnb2VkIGdld2Vya3QgYWFuIGhldCBvbnR3aWtrZWxlbiB2YW4gaGV0IHByb3RvdHlwZS4gSGllcnZvb3IgaGViYmVuIHZlZWwgbmFnZWRhY2h0IG92ZXIgd2F0IGRlIGJlc3RlIG9wbG9zc2luZyBrYW4gemlqbiB2b29yIGhldCBwcm90b3R5cGUuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1tb3Rpb25wb3dlcicsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdwbGFzdGljX3NvZXAnOiB7XG4gICAgICAgICdkYXRlJzogJzIzIFNlcHRlbWJlciAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2wgcHJvamVjdCBuYW1lbnMgaGV0IGJlZHJpamYgZGUgV2FhcmRlbWFrZXJzIG9tIGVlbiBrZW5uaXNjZW50cnVtIG9wIHRlIHpldHRlbiBvcCBoZXQgZ2ViaWVkIHZhbiBwbGFzdGljcyBpbiBHb3JpbmNoZW0uJyxcbiAgICAgICAgJ2luZGV4JzogJ3BsYXN0aWNfc29lcCcsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1BsYXNpYyBTb2VwJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ1dlIGhlYmJlbiB2YW4gTWFydGluIEJha2tlciwgbmFtZW5zIGhldCBiZWRyaWpmIGRlIFdhYXJkZW1ha2VycywgZGUgb3BkcmFjaHQgZ2VrcmVnZW4gb20gbWV0IHRlY2huYXNpdW0gZWVuIGtlbm5pc2NlbnRydW0gb3AgdGUgcmljaHRlbi4gRGl0IGtlbm5pc2NlbnRydW0gaXMgYmVkb2VsdCBvbSBoZXQgcGxhc3RpYyBpbiBHb3JpbmNoZW0gaW4ga2FhcnQgdGUgYnJlbmdlbi4gSGllcm1lZSBrdW5uZW4gdm9sZ2VuZGUga2xhc3NlbiB2ZXJkZXIgbWV0IGhldCBvbmRlcnpvZWtlbiBuYWFyIGhldCBwbGFzdGljIGluIEdvcmluY2hlbSBlbiBuYWFyIG9wbG9zc2luZ2VuIGVydm9vciB6b2VrZW4uJyxcbiAgICAgICAgICAgICdQcm9ibGVlbSc6ICdJbiBoZXQgYmVnaW4gd2FzIGhldCBwcm9ibGVlbSBub2cgZXJnIG9uZHVpZGVsaWprLiBPbSBkaXQgcHJvYmxlZW0gaW4ga2FhcnQgdGUgYnJlbmdlbiBoZWJiZW4gd2UgZWVuIG9uZGVyem9layB1aXRnZXZvZXJkIG5hYXIgaGV0IHN3ZXJmIHBsYXN0aWMgaW4gR29yaW5jaGVtLiBNYWFyIGVlbiBncm9vdCBkZWVsIHZhbiBoZXQgcGxhc3RpYyBpbiBkZSBuYXR1dXIgdmFsdCBvbmRlciBkZSBtaWNyb3BsYXN0aWNzIGRpZSBuaWV0IG1ldCBoZXQgYmxvdGUgb29nIHRlIHppZW4gemlqbi4gQWwgZGl0IG1hYWt0IGhldCBoZWVsIG1vZWlsaWprIG9tIGhldCBwcm9ibGVlbSBnb2VkIGluIGthYXJ0IHRlIGJyZW5nZW4uIE9vayBtYWFrdCBkaXQgaGV0IG1vZWlsaWprIG9tIGhldCBwcm9ibGVlbSBvdmVyIHRlIGJyZW5nZW4gZW4gY29tbXVuaXNlcmVuIG5hYXIgaGV0IHB1YmxpZWsuJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnQmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSBvb2sgdmVlbCBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYmVzdGFhbmRlIG9wbG9zc2luZ2VuIHZvb3IgaGV0IG9wcnVpbWVuIHZhbiBwbGFzdGljIGluIGRlIG5hdHV1ciBlbiBuYWFyIGRlIGhlcmtvbXN0IHZhbiBoZXQgcGxhc3RpYyBkYXQgZG9vciBHb3JpbmNoZW0ga29tdC4gRGFhcmJpaiBpcyBnZWtla2VuIG5hYXIgZGUgdmVyc2NoaWxsZW5kZSByaXZpZXJlbiBkaWUgbGFuZ3MgZW4gZG9vciBHb2luY2hlbSBzdHJvbWVuIGVuIGFuZGVyZSBicm9ubmVuIHZhbiBwbGFzdGljLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+Vm9vciBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gc2FtZW53ZXJrZW4gdHVzc2VuIGRlIHZlcnNjaGlsbGVuZGUgZ3JvZXBqZXMgb20gc2FtZW4gw6nDqW4ga2VubmlzY2VudHJ1bSB0ZSB2ZXJ6YW1lbGVuLiBIaWVyYmlqIGhlYmJlbiB3ZSBnb2VkIG1vZXRlbiBjb8O2cmRpbmVyZW4gb20gbmlldCBkdWJiZWwgb25kZXJ6b2VrIHR1c3NlbiBkZSBncm9lcGplcyB0ZSBkb2VuLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkRpdCBwcm9qZWN0IHdhcyB2b2xsZWRpZyBnZXJpY2h0IG9wIGhldCBvbmRlcnpvZWsgZG9lbi4gT20gaGV0IHBsYXN0aWMgcHJvYmxlZW0gaW4gR29yaW5jaGVtIGVlcnN0IGluIGthYXJ0IHRlIGJyZW5nZW4gaGViYmVuIHdlIHNhbWVuIG1ldCBhbGxlIGdyb2VwamVzIGVlbiBvbmRlcnpvZWsgZ2VkYWFuIGdlZGFhbiBuYWFyIGhvZXZlZWwgc3dlcmYgcGxhc3RpYyBlciBub3UgZWNodCBpbiBHb3JpbmNoZW0gaXMuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICdQcm9ibGVlbSc6ICdtaWNyb3BsYXRpY3MtZ29yaW5jaGVtJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnZGUtcmlqbi1icm9uJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2I0X3RlY2huaWVrX21ldWJlbHMnOiB7XG4gICAgICAgICdkYXRlJzogJzI0IEp1bmUgMjAxOScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gb25kZXJ6b2VrIG1ldCBhbHMgZG9lbCBvbSBCNCBUZWNobmllayBhZHZpZXMgdGUgZ2V2ZW4gb3AgaGV0IGdlYmllZCB2YW4gaGV0IHZlcmR1dXJ6YW1lbiB2YW4gQmlOYVMtbG9rYWxlbi4nLFxuICAgICAgICAnaW5kZXgnOiAnYjRfdGVjaG5pZWtfbWV1YmVscycsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIE1ldWJpbGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSBCNCBUZWNobmllayBhZHZpZXMgZW4gaW5mb3JtYXRpZSB0ZSBnZXZlbiBvdmVyIGhvZSBCNCBUZWNobmllayBlZW4gY2lyY3VsYWlyZSBsZXZlcmFuY2llciBrYW4gd29yZGVuLiBCNCBUZWNobmllayBpcyBlZW4gZWxla3Ryb3RlY2huaXNjaCBpbnN0YWxsYXRpZWJlZHJpamYgdm9vciBCaU5hUy1sb2thbGVuLiBaZSBpbnN0YWxsZXJlbiBvbmRlciBhbmRlcmUgZGUgZ2FzIGVuIHdhdGVyIGluc3RhbGxhdGllcywgbWFhciBtYWtlbiBvb2sgc3BlY2lhYWwgbWV1YmlsYWlyIHZvb3IgQmlOYVMgbG9rYWxlbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdXaWogaGViYmVuIGdla296ZW4gb20gdm9vcmFsIG9uZGVyem9layB0ZSBkb2VuIG5hYXIgaGV0IG1pbGlldXZyaWVuZGVsaWprZXIgbWFrZW4gdmFuIGRlIHRhZmVscy4gVWl0IG9ucyBvbmRlcnpvZWsgaXMgZ2VibGVrZW4gZGF0IGRhYXIgdmVlbCB0ZSB2ZXJiZXRlcmVuIGlzLiBabyBpcyBkZSBjb2F0aW5nIHZhbiBkZSB0YWZlbGJsYWRlbiwgZGllIGhldCBvbmRlciBhbmRlcmUgYmVzY2hlcm10IHRlZ2VuIHZlcnNjaGlsbGVuZGUgY2hlbWlzY2hlIHN0b2ZmZW4sIGJpam5hIG9ubW9nZWxpamsgdGUgc2NoZWlkZW4gdmFuIGRlIGhvdXRlbiBiYXNpcy4gTWFhciBvb2sgZGV6ZSBiYXNpcyBpcyBlZW4gbWl6IHZhbiBob3V0c25pcHBlcnMgZW4gbGlqbSBlbiBpcyBkdXMgbW9laWxpamsgdGUgcmVjeWNsZW4nLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdVaXQgb25zIG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZXIgb3AgaGV0IGdlYmllZCB2YW4gZHV1cnphbWUgY2hlbWlzY2ggcmVzaXN0ZW50ZSBjb2F0aW5ncyB3ZWluaWcgb250d2lra2VsZWQgaXMuIE1lZGUgb21kYXQgaGV0IG1hdGVyaWFhbCBjaGVtaXNjaCByZXNpc3RlbnQgaXMgaGV0IG1vZWlsaWprIGhldCBtYXRlcmlhYWwgemVsZiB0ZSByZWN5Y2xlbi4gV2VsIGthbiBlciBnZWtla2VuIHdvcmRlbiBuYWFyIGhldCBoZXJnZWJydWlrZW4gdmFuIGRlIGNvYXRpbmdzIG9mIGRlIGhvdXRlbiBiYXNpcy4gSGllcnZvb3IgbW9ldCBlciB3ZWwgZWVuIG9wbG9zc2luZyBiZWRhY2h0IHdvcmRlbiBvbSBkaWUgdmFuIGVsa2FhciB0ZSBzY2hlaWRlbiAuIERvb3IgYmlqdm9vcmJlZWxkIGVlbiBjbGlja3N5c3RlZW0gdGUgb250d2lra2VsZW4gd2Fhcm1lZSBkZSBiYXNpcyBlbiBkZSBjb2F0aW5nIG1ha2VsaWprIHRlIHNjaGVpZGVuIGVuIGhlcmdlYnJ1aWtlbiB6aWpuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiB6b2VrZW4gbmFhciBiZXN0YWFuZGUgcHJvZHVjdGVuIGVuIG9wbG9zc2luZ2VuLiB3aWogaGViYmVuIGhpZXJiaWogZ29lZCBzYW1lbmdld2Vya3QgYWFuIGhldCBvbmRlcnpvZWtlbiBuYWFyIG1vZ2VsaWpraGVkZW4uPGJyPjxzdHJvbmc+UHJvY2VzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+Vm9vciBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2VpdGUgZ2VzdG9rZW4gaW4gaGV0IHNjcnVtbWVuIGVuIGhldCBkb2N1bWVudGVyZW4gdmFuIGhldCBwcm9jZXMuIFpvIGhlYmJlbiB3ZSBzcHJpbnRzIGJpamdlaG91ZGVuIHZhbiB0d2VlIHdla2VuIGVuIGFhbiBoZXQgYmVnaW4gdmFuIGVsa2Ugc3ByaW50IGdvZWQgYmVwYWFsdCB3YXQgd2UgZGllIHNwcmludCBnYWFuIGRvZW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1iNHRlY2huaWVrJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnYmluYXMtbG9rYWFsJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2tldXplX2tvZmZpZWJla2Vycyc6IHtcbiAgICAgICAgJ2RhdGUnOiAnNCBGZWJydWFyaSAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBvbmRlcnpvZWsgbmFhciB3ZWxrIG1hdGVyaWFhbCBrb2ZmaWViZWtlciB2b29yIGVlbiBiZWRyaWpmIGhldCBtZWVzdCBtaWxpZXV2cmllbmRlbGlqa3N0IHpvdSB6aWpuLicsXG4gICAgICAgICdpbmRleCc6ICdrZXV6ZV9rb2ZmaWViZWtlcnMnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdLZXV6ZSB2YW4gZGUgS29mZmllYmVrZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaGVlZnQgYWxzIGRvZWwgb20gdmFzdCB0ZSBzdGVsbGVuIHdlbGtlIHNvb3J0IGtvZmZpZWJla2VyIGhldCBtaWxpZXV2cmllbmRlbGlqa3N0IGlzLiBIaWVyYmlqIGhlYmJlbiB3ZSBnZWtla2VuIG5hYXIgb2YgZGUgaW1hZ29cXCdzIHZhbiBkZSB2ZXJzY2hpbGxlbmRlIGtvZmZpZWJla2VycyB0ZXJlY2h0IHdhcyBvZiBuaWV0LiBPb2sgaGViYmVuIHdlIG9uZGVyem9layBnZWRhYW4gbmFhciBiZWRyaWp2ZW4gb2Ygb3JnYW5pc2F0aWVzIHZhbiB2ZXJzY2hpbGxlbmRlIGdyb3RlLCBvbSB0ZSBraWprZW4gb2YgZGUgZ3JvdGUgdmFuIGhldCBiZWRyaWpmIHVpdG1hYWt0IGJpaiBoZXQga2llemVuIHZhbiBlZW4ga29mZmllYmVrZXIgc29vcnQuJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnQmlqIGRpdCBwcm9qZWN0IHN0b25kIGhldCBvbmRlcnpvZWtlbiBjZW50cmFhbC4gVm9vciBkaXQgb25kZXJ6b2VrIGhlYmJlbiB3ZSB2ZWVsIGJlc3RhYW5kZSBvbmRlcnpvZWtlbiBlbiBnZWdldmVucyBnZXpvY2h0LiBPbSBkZXplIGluZm9ybWF0aWUgZ29lZCBvdmVyIHRlIGJyZW5nZW4gaGViYmVuIHdlIG1ldCBHb29nbGUgU2l0ZXMgZWVuIHNpdGUgZ2VtYWFrdCBtZXQgb256ZSBjb25jbHVzaWVzIGVuIGJlcmVkZW5lcmluZ2VuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIHNhbWVuIG1vZXRlbiB3ZXJrZW4gZW4gbW9ldGVuIGNvbW11bmlzZXJlbiBtZXQgZWxrYWFyLiBEb29yZGF0IGRpdCBnb2VkIGlzIGdlZ2FhbiB6aWpuIHdlIHNhbWVuIHRvdCBkZSBjb25jbHVzaWUgZ2Vrb21lbi48YnI+PHN0cm9uZz5LZW5uaXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5PbWRhdCBkaXQgcHJvamVjdCBnZXJpY2h0IGlzIG9wIG9uZGVyem9layB3YXMgaGV0IGJlbGFuZ3JpamsgZGF0IGVyIGdvZWQgZW4gdmVlbCBvbmRlcnpvZWsgd2VyZCBnZWRhYW4uIElrIHZpbmQgZGF0IGRpdCBvbmRlcnpvZWsgZ29lZCBpcyBnZWdhYW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnYmVzdC1jb2ZmZWUtY3VwcycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdmbGV4aWJlbGVfd29vbnZvcm1lbic6IHtcbiAgICAgICAgJ2RhdGUnOiAnNSBOb3ZlbWJlciAyMDE4JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBwcm9qZWN0IG1ldCBhbHMgZG9lbCBvbSBlZW4gcGxhbiB0ZSBtYWtlbiB2b29yIGZsZXhpYmVsZSB3b29udm9ybWVuIGluIGRlIGdlbWVlbnRlIEdvcmluY2hlbS4nLFxuICAgICAgICAnaW5kZXgnOiAnZmxleGliZWxlX3dvb252b3JtZW4nLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdGbGV4aWJlbGUgV29vbnZvcm1lbicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBpcyBpbiBvcGRyYWNodCB2YW4gZGUgZ2VtZWVudGUgR29yaW5jaGVtLiBEZSBvcGRyYWNodCB2YW4gZGUgZ2VtZWVudGUgaXMgb20gZWVuIGZsZXhpYmVsIHdvbmluZ2NvbXBsZXggdGUgb250d2lra2VsZW4sIHdhYXJpbiByZWtlbmluZyBnZWhvdWRlbiB3b3JkdCBtZXQgdmVyc2NoaWxsZW5kZSBpbmtvbWVuc2tsYXNzZW4uIEFscyBwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gbWFxdWV0dGUgZ2VtYWFrdCB2YW4gZWVuIGV2ZW50dWVlbCBwbGFuIHZvb3Igem9cXCduIHdvb253aWprLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmFuYWYgaGV0IGJlZ2luIGFmIGFhbiBnb2VkIG5hZ2VkYWNodCBvdmVyIGhldCBlaW5kcHJvZHVjdCwgZGUgbWFxdWV0dGUuIFRpamRlbnMgaGV0IHByb2plY3QgaGViYmVuIHdlIG9vayB2ZXJiZXRlcmluZ2VuIGVuIGFhbnBhc3NpbmcgZ2VtYWFrdCBvbSBoZXQgZWluZHByb2R1Y3QgdGUgdmVyYmV0ZXJlbi4gSGllcmRvb3IgaGViYmVuIHdlIHVpdGVpbmRlbGlqayBlZW4gZ29lZCBwcm9kdWN0IGdlbGV2ZXJkLjxicj48c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPlRpamRlbnMgZGl0IHBvcmplY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHNhbWVud2Vya2VuIG1ldCBoZXQgb250d2VycGVuIHZhbiBkZSBtYXF1ZXR0ZSBlbiBoZXQgb25kZXJ6b2VrLiBPbWRhdCB3ZSBoZXQgc2NydW1tZW4gZ29lZCBoZWJiZW4gYmlqZ2Vob3VkZW4gd2FzIGhldCBvb2sgZ2VtYWtlbGlqayBvbSBnb2VkIHNhbWVuIHRlIHdlcmtlbiBlbiBkZSB0YWtlbiB0ZSB2ZXJkZWxlbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWdlbWVlbnRlLWdvcmluY2hlbScsXG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVzID0ge1xuICAgICdmZWF0dXJlZCc6IFtcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgIF0sXG4gICAgJ2ZyZWV0aW1lUHJvamVjdHMnOiBbXG4gICAgICAgICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgICAgICAncjZsb29rdXBfd2Vic2l0ZScsXG4gICAgXSxcbiAgICAndGVjaFByb2plY3RzJzogW1xuICAgICAgICAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ3BsYXN0aWNfc29lcCcsXG4gICAgICAgICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgXSxcbn07XG5cbmNvbnN0IHByb2plY3RUeXBlTmFtZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogJ0ZlYXR1cmVkJyxcbiAgICAnZnJlZXRpbWVQcm9qZWN0cyc6ICdGcmVlLVRpbWUgUHJvamVjdHMnLFxuICAgICd0ZWNoUHJvamVjdHMnOiAnVGVjaG5hc2l1bSBQcm9qZWN0cycsXG59O1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgICAnYWJvdXQnOiB7XG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICcxMTk4MTlAbXltZXJld2FkZS5ubDxicj50eWNob2Jyb3V3ZXIzM0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdGb3J0ZXMgTHljZXVtLCBHb3JpbmNoZW08YnI+VGVjaG5hc2l1bSBqYWFyIDQsIDUgZW4gNicsXG4gICAgICAgICAgICAndGl0bGUyJzogJzxzdHJvbmc+TXkgR2l0SHViOiA8L3N0cm9uZz5odHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHt9XG4gICAgfVxufTtcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbl07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHMsXG4gICAgcHJvamVjdFR5cGVzLFxuICAgIHByb2plY3RUeXBlTmFtZXMsXG4gICAgcGFnZXMsXG4gICAgbW9udGhOYW1lc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==