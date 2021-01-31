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
                pageLinks += `<a href="${link}" target="_blank"><strong>${title}</strong></a>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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QUNmO0NBQ0osQ0FBQztBQVVFLHNCQUFLO0FBUlQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07SUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0NBQ2pFLENBQUM7QUFPRSxnQ0FBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFByb2plY3RDbGFzcyB9IGZyb20gJy4vb2RrLXRzL3Byb2plY3QnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9vZGstdHMvbmF2aWdhdG9yJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL29kay10cy9wYWdlJztcbmltcG9ydCB7IHByb2plY3RzLCBwcm9qZWN0VHlwZXMsIHBhZ2VzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHByaW50UGFnZShwYWdlSWQpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHBhZ2VJZCwgJycsICcnLCBbXSwgcGFnZXNbcGFnZUlkXS5jb250ZW50LCBwYWdlc1twYWdlSWRdLmltYWdlcywgJycpO1xuXG4gICAgICAgICAgICBwYWdlLnByaW50UGFnZSgpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtYWluQ2xhc3MgPSBuZXcgTWFpbjtcbmNvbnN0IG5hdkNsYXNzID0gbmV3IE5hdmlnYXRvcjtcblxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQcm9qZWN0c05hdigpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdFR5cGUgaW4gcHJvamVjdFR5cGVzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdFR5cGVzLmhhc093blByb3BlcnR5KHByb2plY3RUeXBlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFR5cGVzW3Byb2plY3RUeXBlXTtcblxuICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3RUeXBlKHByb2plY3RUeXBlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYXZQcm9qZWN0VHlwZVRpdGxlOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0VHlwZSArICcgLm5hdlRpdGxlJykhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZQcm9qZWN0VHlwZVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcubmF2T2JqZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0IS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCEucXVlcnlTZWxlY3RvcignLm5hdkFycm93JykhLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDYzLjY0IDk4Ljk5NVwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjg2LjY4IDU5MC42NzUpIHJvdGF0ZSgtOTApXCI+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDUuODIyIDMwMC44MjIpIHJvdGF0ZSg0NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0MS4xNzggMzM2LjE3OCkgcm90YXRlKC00NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48L2c+PC9zdmc+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQhLnF1ZXJ5U2VsZWN0b3IoJy5uYXZBcnJvdycpIS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA5OC45OTUgNjMuNjRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ5MS42OCAtMjg2LjY4KVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwcm9qZWN0c1tpXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmF2Q2xhc3MubmV3UHJvamVjdChwcm9qZWN0LnByb2plY3RJbmRleCgpLCBwcm9qZWN0LnByb2plY3RUaXRsZSgpLCBwcm9qZWN0VHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByaW50UGFnZShwYWdlSWQ6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RzW3BhZ2VJZF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENsYXNzKHBhZ2VJZCk7XG5cbiAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbkNsYXNzLnByaW50UGFnZShwYWdlSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pXG59XG5cbnByaW50UHJvamVjdHNOYXYoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2UGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2UGFnZScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2UGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hdlBhZ2UgPSBuYXZQYWdlc1tpXTtcblxuICAgICAgICAgICAgbmF2UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hdlBhZ2UgPSBuYXZQYWdlc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5hdlBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBwcmludFBhZ2UobmF2UGFnZS5pZCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSk7XG4iLCJpbXBvcnQgeyBQcm9qZWN0Q2xhc3MgfSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBwcm9qZWN0VHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIHtcclxuICAgIHByaXZhdGUgcHJvamVjdERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdENvbnRhaW5lcicpITs7XHJcbiAgICBwcml2YXRlIGZpcnN0UHJvamVjdFR5cGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBuZXdQcm9qZWN0VHlwZShwcm9qZWN0VHlwZTogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UHJvamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQcm9qZWN0VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3REaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9JyR7cHJvamVjdFR5cGV9JyBjbGFzcz0nbmF2T2JqZWN0ICR7YWN0aXZlfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZBcnJvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDYzLjY0IDk4Ljk5NVwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjg2LjY4IDU5MC42NzUpIHJvdGF0ZSgtOTApXCI+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDUuODIyIDMwMC44MjIpIHJvdGF0ZSg0NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0MS4xNzggMzM2LjE3OCkgcm90YXRlKC00NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZJY29uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiB2aWV3Qm94PVwiMCAwIDUxMiAzODRcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTgwOSAtMTUzKVwiPjxwYXRoIGQ9XCJNNDY0LDEyOEgyNzJMMjE3LjM3LDczLjM3QTMyLDMyLDAsMCwwLDE5NC43NCw2NEg0OEE0OCw0OCwwLDAsMCwwLDExMlY0MDBhNDgsNDgsMCwwLDAsNDgsNDhINDY0YTQ4LDQ4LDAsMCwwLDQ4LTQ4VjE3NkE0OCw0OCwwLDAsMCw0NjQsMTI4Wm0wLDI3Mkg0OFYxMTJIMTg4LjEybDU0LjYzLDU0LjYzQTMyLDMyLDAsMCwwLDI2NS4zOCwxNzZINDY0WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4MDkgODkpXCIvPjxyZWN0IHdpZHRoPVwiNDI2XCIgaGVpZ2h0PVwiMjg5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDg0OCAyMTcpXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdk5hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0VHlwZU5hbWVzW3Byb2plY3RUeXBlXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkRyb3BEb3duRGl2Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBuZXdQcm9qZWN0KHByb2plY3RJbmRleDogc3RyaW5nLCBwcm9qZWN0TmFtZTogc3RyaW5nLCBwcm9qZWN0VHlwZTogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VHlwZURpdjogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvamVjdFR5cGUgKyAnIC5uYXZEcm9wRG93bkRpdicpITtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9ICdhY3RpdmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENsYXNzKHByb2plY3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByaW50UHJvamVjdFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0VHlwZURpdi5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RJbmRleH0nIGNsYXNzPSduYXZEcm9wRG93biBuYXZQYWdlICR7YWN0aXZlfSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZUaXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2SWNvbic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdk5hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IG1vbnRoTmFtZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdmFyaWFibGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlIHtcclxuICAgIHByaXZhdGUgcGFnZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBhZ2VJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYWdlZGF0ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYWdlRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZVRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHBhZ2VDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIHBhZ2VJbWFnZXM6IE9iamVjdDtcclxuICAgIHByaXZhdGUgcGFnZUxpbmtzOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgdGFnczogQXJyYXk8c3RyaW5nPiwgY29udGVudDogT2JqZWN0LCBpbWFnZXM6IE9iamVjdCwgbGlua3M6IE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJykhO1xyXG4gICAgICAgIHRoaXMucGFnZUlkID0gcGFnZUlkO1xyXG4gICAgICAgIHRoaXMucGFnZWRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMucGFnZURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wYWdlVGFncyA9IHRhZ3M7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5wYWdlSW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgICAgIHRoaXMucGFnZUxpbmtzID0gbGlua3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRQYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VkYXRlID09PSAnY3VycmVudCcpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlZGF0ZSA9IGAke2QuZ2V0RGF0ZSgpfSAke21vbnRoTmFtZXNbZC5nZXRNb250aCgpXX0gJHtkLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YWdIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWdlVGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnBhZ2VUYWdzW2ldO1xyXG5cclxuICAgICAgICAgICAgdGFnSFRNTCArPSBgPGRpdiBjbGFzcz1cInRhZyAke3RhZ31cIj48cD4ke3RhZ308L3A+PC9kaXY+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYWdlQ29udGVudCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0aXRsZSBpbiB0aGlzLnBhZ2VDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VDb250ZW50Lmhhc093blByb3BlcnR5KHRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxpbmVhID0gdGhpcy5wYWdlQ29udGVudFt0aXRsZV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0hUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlSW1hZ2VzW3RpdGxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hUTUwgPSBgPGRpdiBjbGFzcz1cImFsaW5lYUltYWdlXCI+PGltZyBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzLyR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX0ud2VicFwiIGFsdD1cIiR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX1cIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZS5pbmNsdWRlcygndGl0bGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gYDxoMz4ke3RpdGxlfTwvaDM+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgJHt0aXRsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICR7aW1nSFRNTH1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHthbGluZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUxpbmtzID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUxpbmtzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VMaW5rcy5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnBhZ2VMaW5rc1t0aXRsZV07XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUxpbmtzICs9IGA8YSBocmVmPVwiJHtsaW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPjxzdHJvbmc+JHt0aXRsZX08L3N0cm9uZz48L2E+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDIgaWQ9XCJwYWdlVGl0bGVcIj4ke3RoaXMucGFnZUlkfTwvaDI+XHJcbiAgICAgICAgPHAgaWQ9XCJwYWdlRGF0ZVwiPiR7dGhpcy5wYWdlZGF0ZX08L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2VUYWdzXCI+JHt0YWdIVE1MfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUFsaW5lYSBkZXNjcmlwdGlvblwiPjxwPiR7dGhpcy5wYWdlRGVzY3JpcHRpb259PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAke3BhZ2VDb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlTGlua3NcIj5cclxuICAgICAgICAgICAgJHtwYWdlTGlua3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdmFyaWFibGVzJztcclxuXHJcbmludGVyZmFjZSBJUHJvamVjdCB7XHJcbiAgICBkYXRlOiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgaW5kZXg6IHN0cmluZyxcclxuICAgIGltYWdlOiBzdHJpbmcsXHJcbiAgICBsaW5rczoge1xyXG4gICAgICAgIHZpZXc6IHN0cmluZyxcclxuICAgICAgICBnaXRodWI6IHN0cmluZyxcclxuICAgIH1cclxuICAgIHRhZ3M6IEFycmF5PHN0cmluZz4sXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29udGVudDogT2JqZWN0LFxyXG4gICAgaW1hZ2VzOiBPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0OiBJUHJvamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50UHJvamVjdFBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHRoaXMucHJvamVjdC50aXRsZSwgdGhpcy5wcm9qZWN0LmRhdGUsIHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbiwgdGhpcy5wcm9qZWN0LnRhZ3MsIHRoaXMucHJvamVjdC5jb250ZW50LCB0aGlzLnByb2plY3QuaW1hZ2VzLCB0aGlzLnByb2plY3QubGlua3MpO1xyXG5cclxuICAgICAgICBwYWdlLnByaW50UGFnZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByb2plY3RzID0ge1xuICAgICdzdGF0c2RiX292ZXJsYXknOiB7XG4gICAgICAgICdkYXRlJzogJ2N1cnJlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQSBSYWluYm93IFNpeCBTaWVnZSBpbmdhbWUgc3RhdGlzdGljcyBvdmVybGF5IG1hZGUgaW4gY29sbGFib3JhdGlvbiB3aXRoIE92ZXJ3b2xmLicsXG4gICAgICAgICdpbmRleCc6ICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnU3RhdHNEQiBBcHAnOiAnaHR0cHM6Ly93d3cub3ZlcndvbGYuY29tL2FwcC9TdGF0c0RCLVN0YXRzREInLFxuICAgICAgICAgICAgJ1N0YXRzREIgV2Vic2l0ZSc6ICdodHRwczovL3N0YXRzZGIubmV0LycsXG4gICAgICAgICAgICAnT3ZlcndvbGYnOiAnaHR0cHM6Ly93d3cub3ZlcndvbGYuY29tLycsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgICdhcHAnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnU3RhdHNEQiBPdmVybGF5JyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ1RoaXMgaXMgYSBwcm9qZWN0IGluIGNvbGFib3JhdGlvbiB3aXRoIE92ZXJ3b2xmLiBPdmVyd29sZiBpcyBhIGZyYW1ld29yayB0aGF0IGFsbG93cyAzcmQgcGFydHkgZGV2ZWxvcGVycyB0byBlYXNpbHkgYnVpbGQgZ2FtaW5nIGFwcHMgYW5kIG92ZXJsYXlzIGluIEhUTUwgYW5kIEphdmFTY3JpcHQuIFRoZSBnb2FsIG9mIHRoaXMgcHJvamVjdCBpcyB0byBjcmVhdGUgYW4gaW50dWl0aXZlIGFuZCBlYXN5IHRvIHVzZSBSYWluYm93IFNpeCBTaWVnZSBvdmVybGF5IHRvIHRyYWNrIGFuZCBzZWUgcGxheWVyIHN0YXRpc3RpY3MgaW5nYW1lLiBUaGlzIHByb2plY3QgSSBoYXZlIHRlYW1lZCB1cCB3aXRoIEpvY3VsYXJNYXJyb3cuJyxcbiAgICAgICAgICAgICdTdGFydHVwJzogJ1RoZSBwcm9qZWN0IHN0YXJ0ZWQgYWZ0ZXIgd2UgaGFkIHN0YXJ0ZWQgb24gYSBzdGF0aXN0aWNzIHdlYnNpdGUgZm9yIFJhaW5ib3cgU2l4IFNpZWdlLCBhZnRlciB3ZSBoYWQgbW9zdGx5IGZpbmlzaGVkIHRoZSB3ZWJzaXRlIHdlIGRlY2lkZWQgdG8gc3VibWl0IGFuIGFwcCBwcm9wb3NhbCB0byBPdmVyd29sZi4gTm90IGEgbG90IGxhdGVyIHdlIGdvdCBhcHByb3ZlZCBhbmQgc3RhcnRlZCB3b3JraW5nIG9uIHRoZSBvdmVybGF5LiBMYXRlciBpbiAyMDIwIHdlIGRlY2lkZWQgdG8gc2NyYXAgdGhlIHdlYnNpdGUgYW5kIHRlYW0gdXAgd2l0aCBTdGF0c0RCLiBBZnRlciB0aGF0IHdlIGZvY3VzZWQgc29sZWx5IG9uIHRoZSBvdmVybGF5LicsXG4gICAgICAgICAgICAnQ29kZSc6ICdUaGlzIHByb2plY3QgSSB3b3JrZWQgd2l0aCBIVE1MNSwgU0NTUyBhbmQgVHlwZVNjcmlwdC4gU0NTUyB3YXMgY2hvc2VuIGZvciB0aGlzIHByb2plY3QgYmVjYXVzZSBpdCBoYXMgYW4gaW1wcm92ZWQgZWFzaWVyIHRvIGludGVycHJldCBzeW50YXggY29tcGFyZWQgdG8gQ1NTMy4gQW5kIGdpdmVzIHlvdSB0aGUgYWJpbGl0eSB0byBlYXNpbHkgaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzLiBUeXBlU2NyaXB0IHdhcyBjaG9zZW4gZm9yIHRoaXMgcHJvamVjdCwgYmVjYXVzZSBPdmVyd29sZiBoYXMgYSBzYW1wbGUgcHJvamVjdCB3cml0dGVuIGluIFR5cGVTY3JpcHQuIE90aGVyIHJlYXNvbnMgZm9yIHVzIHRvIHVzZSBUeXBlU2NyaXB0IHdlcmUsIHRoYXQgaXQgZ2l2ZXMgdXMgdGhlIGFiYmlsaXR5IHRvIHVzZSBPdmVyd29sZnMgVHlwZVNjcmlwdCBkZWNsYXJhdGlvbiBmaWxlIGFuZCBlYXJseSBidWcgc3BvdHRpbmcgZHVyaW5nIHRoZSBjb21waWxlIHN0YWdlLicsXG4gICAgICAgICAgICAnQXBwJzogJ091ciBnb2FsIHdhcyB0byBtYWtlIGEgaGlnaGx5IGN1c3RvbWl6YWJsZSBvdmVybGF5IHdoaWNoIHRoZSB1c2VyIGNhbiBjdXN0b21pemUgdG8gdGhlaXIgb3duIHByZWZlcmVuY2VzLiBUaGUgZmVhdHVyZXMgb2YgdGhlIGFwcCBpbmNsdWRlIHRoZSBhYmlsaXkgdG8gZ2V0IHRoZSBzdGF0aXN0aWNzIG9mIHRoZSBwbGF5ZXJzIGluIHlvdXIgZ2FtZSBsb2JieSwgdGhlIHRyYWNraW5nIG9mIHN0YXRpc3RpY3Mgc3VjaCBhcyBkYWlseSBhbmQgd2Vla2x5IEsvRCBhbmQgV2luL0xvc3MgcmF0aW9zLiBGdXJ0aGVybW9yZSB5b3UgY2FuIHJldmlzaXQgeW91ciBwbGF5ZWQgZ2FtZXMgYW5kIHNlZSB5b3VyIHBlcmZvcm1hbmNlIHJvdW5kIGJ5IHJvdW5kLiBJbiB0ZXJtcyBvZiBjdXN0b21pc2luZyB0aGUgb3ZlcmxheSB5b3UgY2FuIGNoYW5nZSB0aG8gY29sb3IgdGhlbWUgYW5kIGNob3NlIHdpdGggc3RhdGlzdGljcyB0byBzaG93IGluZ2FtZSBvbiB0aGUgb3ZlcmxheS4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLW92ZXJ3b2xmJyxcbiAgICAgICAgICAgICdDb2RlJzogJ2xvZ28tc2Nzcy10eXBlc2NyaXB0JyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BvcnRmb2xpb193ZWJzaXRlJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ015IGN1cnJlbnQgcG9ydGZvbGlvIHdlYnNpdGUuIEFrYSBteSBjb2Rpbmcgc2FuZGJveCBmb3IgdHJ5aW5nIG5ldyBwcm9ncmFtbWluZyBsYW5ndWFnZXMgYW5kIGZyYW1ld29ya3MuJyxcbiAgICAgICAgJ2luZGV4JzogJ3BvcnRmb2xpb193ZWJzaXRlJyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ1BvcnRmb2xpbyBHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9Qb3J0Zm9saW8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdQb3J0Zm9saW8gV2Vic2l0ZScsXG4gICAgICAgICdjb250ZW50Jzoge30sXG4gICAgICAgICdpbWFnZXMnOiB7fSxcbiAgICB9LFxuICAgICdyNmxvb2t1cF93ZWJzaXRlJzoge1xuICAgICAgICAnZGF0ZSc6ICcyOSBEZWNlbWJlciAyMDIwJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgUmFpbmJvdyBTaXggU2llZ2Ugc3RhdGlzdGljcyB3ZWJzaXRlIGZvciBzZWFyY2hpbmcgeW91ciBhbmQgeW91ciBlbmVtaWVzIGdhbWUgc3RhdGlzdGljcy4nLFxuICAgICAgICAnaW5kZXgnOiAncjZsb29rdXBfd2Vic2l0ZScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdSNkxvb2t1cCBHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9SNkxvb2t1cC1XZWJzaXRlJyxcbiAgICAgICAgICAgICdTdGF0c0RCIFdlYnNpdGUnOiAnaHR0cHM6Ly9zdGF0c2RiLm5ldC8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd3ZWJzaXRlJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1I2TG9va3VwIFdlYnNpdGUnLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnVGhpcyBwcm9qZWN0IG9yaWdpbmFseSBzdGFydGVkIGFzIGEgc21hbGwgcHJvamVjdCB0byBiZSBhYmxlIHRvIGNoZWNrIG15IG93biBzdGF0aXN0aWNzIGFuZCBwcm9ncmVzc2lvbiBpbiBSYWluYm93IFNpeCBTaWVnZS4gQWZ0ZXIgSSB3YXMgdW5oYXBweSB3aXRoIHRoZSBjdXJyZW50bHkgYXZhaWxhYmxlIHdlYnNpdGUgdGhhdCB3aGVyZSBzZXJ2aW5nIHRoZSBhYmlsaXR5IHRvIGNoZWNrIFJhaW5ib3cgU2l4IFNpZWdoZSBwbGF5ZXIgc3RhdGlzdGljcy4gQWZ0ZXIgSSB3aGlsZSBJIHN0YXJ0ZWQgd29ya2luZyBvbiBpdCB3aXRoIEpvY3VsYXJNYXJyb3cuIFRoaXMgd2FzIHRoZSBiZWdpbmluZyBvZiB0aGUgYWNjdWFsIHdlYnNpdGUuIFRoZSB3ZWJzaXRlIGlzIGN1cnJlbnRseSBkaXNjb250aW51ZWQsIGJlY2F1c2Ugd2UgZGVjaWRlZCB0byBzb2xlbHkgZm9jdXMgb24gZGUgT3ZlcndvbGYgb3ZlcmxheSBhbmQgd29yayB0b2dldGhlciB3aXRoIFN0YXRzREIuJyxcbiAgICAgICAgICAgICdDb2RlJzogJ1RoaXMgcHJvamVjdCB3YXMgbXkgZmlyc3QgZXhwZXJpZW5jZSB3aXRoIHdvcmtpbmcgd2l0aCBQSFAuIEFuZCBteSBmaXJzdCBtYXlvciBwcm9qZWN0IHVzaW5nIEhUTUw1LCBKYXZhU2NyaXB0IGFuZCBTQ1NTLiBCZWNhdXNlIEkgd2FzIHF1aXRlIHRoZSBiZWdpbm5lciBhdCBjb2RpbmcgSSBoYWQgdG8gY2xlYW4gdXAgdGhlIGNvZGUgYSBsb3QgYWZ0ZXIgSSBnb3QgYmV0dGVyIGF0IHdvcmtpbmcgd2l0aCBQSFAuIElmIEkgd291bGQgc3RhcnQgb3ZlciBJIHdvdWxkIGxpa2UgdG8gYmVsaWV2ZSB0aGUgcHJvamVjdCB3b3VsZCBoYXZlIGJlZW4gYSBsb3QgbGVzcyBjb21wbGV4IGFuZCBtZXNzeS4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLXI2bG9va3VwJyxcbiAgICAgICAgICAgICdDb2RlJzogJ3BocC1sb2dvJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgICdhcXVhem9vX2xlZXJkYW0nOiB7XG4gICAgICAgICdkYXRlJzogJ2N1cnJlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHNjaG9vbCBwcm9qZWN0IGluIG9wZHJhY2h0IHZhbiBBcXVhWm9vIExlZXJkYW0gb20gZGUgYXF1YXJpdW1saWNodGVuIHZhbiBlZW4gYWZzdGFuZCB0ZSBiZXN0dXJlbi4nLFxuICAgICAgICAnaW5kZXgnOiAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ0FxdWFab28gUHJvamVjdCBHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9BcXVhWm9vLUxlZXJkYW0nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgICAgICAnYXJkdWlubycsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdBcXVhWm9vIExlZXJkYW0nLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IGlzIGVlbiBwcm9qZWN0IG5hbWVucyBkZSBvcGRyYWNodGdldmVyIEFxdWFab28gTGVlcmRhbS4gV2lqIGhhZGRlbiBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBlZW4gc3lzdGVlbSB0ZSBvbnR3aWtrZWxlbiB3YWFybWVlIEFxdWFab28gTGVlcmRhbSBkZSBsaWNodGVuIHZhbiBodW4gYXF1YXJpdW1zIHZhbiBlZW4gYWZzdGFuZCB0ZSBrdW5uZW4gYWFuc3R1cmVuLiBCaW5uZW4gZGl0IHByb2plY3QgaGFkIGlrIGRlIHRhYWsgdmFuIGhldCBwcm9ncmFtbWVyZW4gZW4gb250d2lra2VsZW4gdmFuIGhldCBBcmR1aW5vIHByb3RvdHlwZS4gRGl0IHByb2plY3QgaGViIGlrIHNhbWVuZ2V3ZXJrdCBtZXQgQ2FpbiBXb2VzdGVuYnVyZyBlbiBEYXZpZCBCYWdpam4uJyxcbiAgICAgICAgICAgICdNZWVzdGVycHJvZWYnOiAnRGUgTWVlc3RlcnByb2VmIGlzIGVlbiBlaW5kZXhhbWVucHJvamVjdCB2YW4gaGV0IHZhayBPJk8uIEhvZXQgZG9lbCB2YW4gaGV0IHByb2plY3QgaXMgZGF0IGRlIGxlZXJpbmcgYWxsZSB2YWFyZGlnaGVkZW4gbGFhdCB6aWVuIGRpZSBub2RpZyB6aWpuIG9tIGVlbiB0ZWNobmFzaXVtbGVlcmxpbmcgdGUgemlqbi4gVGlqZGVucyBkaXQgcHJvamVjdCB3b3JkdCBlciB3ZWluaWcgZG9vciBkZSBkb2NlbnRlbiBnZXJlZ2VsZCBlbiBtb2V0IGRlIGxlZXJsaW5nIGR1cyB2ZWVsIHplbGZzdGFuZGlnaGVpZCBsYXRlbiB6aWVuLiBIZXQgb25kZXJ6b2VrIGdlZGVlbHRlIHZhbiBkZSBNZWVzdGVycHJvZWYgdm9ybXQgaGV0IHByb2ZpZWx3ZXJrc3R1ay4nLFxuICAgICAgICAgICAgJ09wZHJhY2h0JzogJ0FxdWFab28gTGVlcmRhbSBpcyBlZW4gZGllcmVudHVpZCBpbiBMZWVyZGFtIG1ldCBydWltIDQwIHZpdmFyaWEuIERlIGRpZXJlbnR1aW4gd29yZHQgZ2VydW50IGRvb3IgdnJpandpbGxpZ2VycyB2YW4gZGUgYXF1YXJpdW12ZXJlbmlnaW5nIGRlIERpc2N1cyB1aXQgTGVlcmRhbS4gSGllcmRvb3IgemlqbiBlciBuaWV0IGFsdGlqZCBkZXplbGZkZSBtZW5zZW4gYWFud2V6aWcgZW4gaXMgZGUga2FucyBncm9vdCBkYXQgZXIgc29tcyB2ZXJnZXRlbiB3b3JkdCBkZSBsaWNodGVuIHVpdCB0ZSB6ZXR0ZW4uIERhYXJvbSB3aWxsZW4gemUgZGUgYXF1YXJpYSB2YW4gYWZzdGFuZCB1aXQga3VubmVuIHpldHRlbiBhbHMgZGF0IHZlcmdldGVuIGlzLiBFciBpcyB2b29yIGdla296ZW4gb20gdGUgd2Vya2VuIG1ldCBlZW4gQXJkdWlubyBNZWdhIDI1NjAuJyxcbiAgICAgICAgICAgICdIZXQgUHJvZHVjdCc6ICdPbnMgcHJvZHVjdCBtYWFrdCBnZWJydWlrIHZhbiBlZW4gQXJkdWlubyBvbSBkZSBsaWNodGVuIHRlIGt1bm5lbiBiZXN0dXJlbi4gT20gZGUgQXJkdWlubyBvcCBhZnN0YW5kIHRlIGt1bm5lbiBiZXN0dXJlbiBoZWJiZW4gd2UgbWV0IGJlaHVscCB2YW4gZWVuIEV0aGVybmV0IFNoaWVsZCBlZW4gd2Vic2VydmVyIGdlbWFha3QuIERlIHdlYnNlcnZlciBpcyBiZXNjaGVybXQgbWV0IGVlbiB3YWNodHdvb3JkLiBWaWEgZGUgd2Vic2VydmVyIGt1bm5lbiBkZSBsYW1wZW4gdmlhIGRlIEFyZHVpbm8gd29yZGVuIGFhbmdlc3R1dXJkLiBBcXVhWm9vIHdpbGRlIG9vayBkZSBtb2dlbGlqa2hlaWQgaGViYmVuIG9tIHRlIGt1bm5lbiBjb250cm9sbGVyZW4gd2FubmVlciBlbiB3aWUgZGUgbGFtcGVuIGhlZWZ0IGJlc3R1dXJkLiBIaWVydm9vciBzbGFhbiB3ZSBkZSBsb2dzIG9wIG9wIGVlbiBTRC1rYWFydC4nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdWb29yIGhldCBwcm9kdWN0IGhlYmJlbiB3ZSBvb2sgZWVuIGJlaHVpemluZyBvbnR3b3JwZW4gZW4gM0QtZ2VwcmludC4gV2UgaGViYmVuIGhldCBvbnR3ZXJwIHZvb3IgZGUgYmVodWl6aW5nIGdlbWFha3QgbWV0IGJlaHVscCB2YW4gYmxlbmRlci4gSGV0IG9udHdlcnAgaXMgZ2XDq3hwb3J0ZWVyZCBhbHMgU1RMIG9tIGhldCB0ZSBrdW5uZW4gcHJpbnRlbiBtZXQgZGUgM0QtcHJpbnRlciBvcCBzY2hvb2wuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+SGV0IGJlbGFuZ3JpamtzdGUgZGVlbCB2YW4gZGl0IHByb2plY3QgYmVzdGFhdCB1aXQgaGV0IHByb3RvdHlwZS4gQWFuZ2V6aWVuIGlrIGRhYXIgdmVlbCB3ZXJrIGVuIGFhbmRhY2h0IGFhbiBoZWIgYmVzdGVlZCB2aW5kIGlrIGRhdCBpayBnb2VkIHByb2R1Y3RnZXJpY2h0IGhlYiBnZXdlcmt0Ljxicj48c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5Eb29yZGF0IGhldCBncm9vdHN0ZSBkZWVsIHZhbiBkZSBwZXJpb2RlIHZhbiBoZXQgcHJvZmllbHdlcmtzdHVrIHRpamRlbnMgZGUgQ29yb25hIGxvY2tkb3duIGVuIG1hYXRyZWdlbGVuIHdhcyBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCBtb2V0ZW4gd2Vya2VuLiBPbmRhbmtzIGRlemUgb21zdGFuZGlnaGVkZW4gZGVuayBpayBkYXQgZXIgZ29lZCB6ZWxmc3RhbmRpZyB0aHVpcyBpcyBnZXdlcmt0LicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tYXF1YXpvbycsXG4gICAgICAgICAgICAnSGV0IFByb2R1Y3QnOiAnYXJkdWluby1tZWdhMjU2MCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInOiB7XG4gICAgICAgICdkYXRlJzogJzMwIEp1bmUgMjAyMCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gc2Nob29sIG9uZGVyem9layBuYW1lbnMgQjQgVGVjaG5pZWsgbmFhciBkZSBtb2dlbGlqa2hlZGVuIHZvb3IgQjQgVGVjaG5pZWsgb20gZWVuIGNpcnVsYWlyZSBsZXZlcmFuY2llciB0ZSB3b3JkZW4uJyxcbiAgICAgICAgJ2luZGV4JzogJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIENpcmN1bGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ0NpcmN1bGFpcmUgTGV2ZXJhbmNpZXInOiAnTWFyaWVrZSBNZWx0ZW4gaGVlZnQgb25zIG5hbWVucyBCNCBUZWNobmllayBkZSBvcGRyYWNodCBnZWdldmVuIG9tIHZhbiBCNCBUZWNobmllayBlZW4gY2lydWxhaXJlIGxldmVyYW5jaWVyIHRlIHdvcmRlbi4gSGV0IHByb2JsZWVtIGlzIGRhdCBoZXQgbWV1YmlsYWlyIHdhdCBCNCB2ZXJ6b3JndCBuaWV0IGdlcmVjeWNsZWQgZW4gd2VpbmlnIGhlcmdlYnJ1aWt0IHdvcmR0LiBCNCB3aWwgZ3JhYWcgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIgd29yZGVuLiBEZSBvcGRyYWNodCB3YXMgZHVzOiBcIldhdCBrdW5uZW4gd2Ugb250d2lra2VsZW4gd2FhcmRvb3IgQjQgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIga2FuIHdvcmRlbj9cIicsXG4gICAgICAgICAgICAnQmV6b2VrIEI0JzogJ1dlIGtvbmRlbiBkb29yIENvcm9uYSBuaWV0IGJpaiBCNCBUZWNobmllayBpbiBHaWVzZW4gb3AgYmV6b2VrLCBtYWFyIHdlIGhlYmJlbiB3ZWwgYWxsZSB2b29yYmVyZWlkaW5nIGdlZGFhbiB2b29yIGhldCBiZXpvZWsuIFdlIGhlYmJlbiBtZWVyZGVyZSB2cmFnZW4gZW4gaWRlZcOrbiBiZWRhY2h0LiBFZW4gZGVlbCB2YW4gZGV6ZSB2cmFnZW4gaGViYmVuIHdlIGxhdGVyIHZpYSBXaGF0c0FwcCB3ZWwga3VubmVuIHZyYWdlbiBlZW4gdmFuIGRlIG1vbnRldXJzIHZhbiBCNCBUZWNobmllaywgUmljaGFyZCB2YW4gQmlqbmVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ1dlIGhlYmJlbiB2b29yYWwgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGFsdGVybmF0aWV2ZW4gdm9vciBkZSBodWlkaWdlIG1hdGVyaWFsZW4gdmFuIGRlIEI0IHRhZmVscy4gRGFhcnZvb3IgaGViYmVuIHdlIGFhbiBkZSBtb250ZXVyIGdldnJhYWdkIHdlbGsgbWF0ZXJpYWFsIGdlYnJ1aWt0IHdvcmQgdm9vciBkZSB0YWZlbCwgZGFhcm9wIGtyZWdlbiB3ZSBoZXQgYW50d29vcmQgZGF0IGhldCBlZW4gc3BhYW5wbGFhdCBpcyBtZXQgZWVuIEhQTCB0b3BsYWFnLiBIUEwgaXMgZWlnZW5saWprIGFsbGVlbiB0aGVybWlzY2ggdGUgcmVjeWNsZW4sIGRhdCBpcyBoZXQgdmVyYnJhbmRlbiB2YW4gaGV0IG1hdGVyaWFhbCBvbSBlciBlbmVyZ2llIHVpdCB0ZSBoYWxlbi4gRWVuIGFuZGVyZSBvcGxvc3Npbmcgem91IGhldCBoZXJnZWJydWlrZW4ga3VubmVuIHppam4gaW4gZWVuIG9mIGFuZGVyZSB2b3JtLicsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ0Rvb3IgQ29yb25hIGlzIGhldCBvbmRlcnpvZWsgbmFhciBkdXVyemFtZSBtYXRlcmlhbGVuIGVuIGNpcmN1bGFpcmUgZWNvbm9taWUga29ydGVyIGRhbiBiZWRvZWx0IGVuIGhlYmJlbiB3ZSBiaWp2b29yYmVlbGQgbmlldCBlZW4gZGVlbCB2YW4gaGV0IHRhZmVsYmxhZCwgd2F0IHdlIGJpaiBCNCB6b3VkZW4gb3BoYWxlbiwga3VubmVuIG9uZGVyem9la2VuLiBXZSB6aWpuIGVyIHdlbCBhY2h0ZXIgZ2Vrb21lbiBkYXQgZXIgZ2VlbiBtYWtrZWxpamtlIG9wbG9zc2luZyBpcyB2b29yIGhldCBwcm9ibGVlbSwgb21kYXQgZGUgdGFmZWxzIHRlZ2VuIHZlZWwgdmVyc2NoaWxsZW5kZSBjaGVtaXNjaGUgc3RvZmZlbiBtb2V0IGt1bm5lbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5NZWRlbiBkb29yIENvcm9uYSBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCB0aHVpcyBtb2V0ZW4gd2Vya2VuLiBabyBoZWIgaWsgdm9vcmFsIGdld2Vya3QgYWFuIGhldCB6b2VrZW4gdmFuIGV2ZW50dWVsZSBtYXRlcmlhbGVuIG9tIGhldCBodWlkaWdlIG1hdGVyaWFhbCB2YW4gZGUgdGFmZWxzIG1lZSB0ZSB2ZXJwbGFhdHNlbi4gT29rIGhlYiBpayBuYWdlZGFjaHQgb3ZlciBvcGxvc3NpbmdlbiB2b29yIGhldCBzY2hlaWRlbiB2YW4gaGV0IGhvdXRlbiBkZWVsIHZhbiBkZSB0YWZlbCBlbiBkZSBwbGFzdGljIGNvYXRpbmcuPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+RGl0IHByb2plY3Qgd2FzIHZvb3JhbCBnZXJpY2h0IG9wIGhldCB6b2VrZW4gbmFhciBlZW4gdGhlb3JldGlzY2hlIG9wbG9zc2luZy4gSGV0IHdhcyBkdXMgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBvbmRlcnpvZWsgZ2VkYWFuIHdlcmQuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ2xvZ28tYjR0ZWNobmllaycsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2xhZGRlci12YW4tbGFuc2luaycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJzoge1xuICAgICAgICAnZGF0ZSc6ICcxMyBEZWNlbWJlciAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2wgcHJvamVjdCBlbiBvbmRlcnpvZWsgbmFhciBkZSBtb2dlbGlqa2hlZGVuIHJvbmQgaGV0IGZpdG5lc3MgdHJhY2tlbiB2YW4gZnlzaWVrIGJlcGVya3RlIG1lbnNlbi4nLFxuICAgICAgICAnaW5kZXgnOiAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdSb2xzdG9lbCBQcm9qZWN0IEdpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL1JvbHN0b2VsLVByb2plY3QnLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1JvbHN0b2VsIFN0YXBwZW50ZWxsZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIEFyamFuIFN0ZXJrLCBuYW1lbnMgaGV0IGJlZHJpamYgTW90aW9ucG93ZXIuIEhpZXJiaWogaGViYmVuIHdlIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIGVlbiBwcm90b3R5cGUgdGUgbWFrZW4gdm9vciBlZW4gZml0bmVzcyB0cmFja2VyIHZvb3Igcm9sc3RvZWxnZWJydWlrZXJzIGVuIG1lbnNlbiBtZXQgZWVuIGZ5c2lla2UgYmVwZXJraW5nLiBPbSBkaXQgdGUgcmVhbGlzZXJlbiBoZWJiZW4gd2UgZWVyc3Qgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIHdlbGtlIG1vZ2VsaWpraGVkZW4gZGllIG1lbnNlbiB3ZWwgbm9nIGhlYmJlbi4gT29rIGhlYmJlbiB3ZSBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYmVzdGFhbmRlIG9wbG9zc2luZ2VuIHZvb3IuJyxcbiAgICAgICAgICAgICdQcm9kdWN0JzogJ1Zvb3IgaGV0IGVpbmRwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gcHJvdG90eXBlIGdlbWFha3Qgdm9vciBlZW4gcm9sc3RvZWwgc3RhcHBlbnRlbGxlci4gSGlqIGthbiBoZXQgYWFudGFsIHJvdGF0aWVzIHZhbiBlZW4gcm9sc3RvZWwgdGVsbGVuIGRvb3JtaWRkZWwgdmFuIGVlbiBneXJvc2Nvb3AgYWFuZ2VzbG90ZW4gb3AgZWVuIEFyZHVpbm8gVW5vLiBXZSBoZWJiZW4gb29rIGdla2VuIG5hYXIgZWVuIGhhcnRzbGFnbWV0ZXIsIG1hYXIgbWVkZSBkb29yIGJlcGVya3RlIHRpamQgaXMgaGV0IG5pZXQgZ2VsdWt0IG9tIGRlIGhhcnRzbGFnbWV0ZXIgYmV0cm91d2JhYXIgdGUgbWFrZW4uIEJvdmVuZGllbiB6aWpuIGVyIGFsIGJldHJvdXdiYXJlIGhhcnRzbGFnbWV0ZXJzIGJlc2NoaWtiYWFyIHZvb3IgZnlzaWVrIGdlaGFuZGljYXB0ZSBtZW5zZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Eb29yemV0dGVuPC9zdHJvbmc+PGJyPkJpaiBoZXQgb250d2lra2VsZW4gdmFuIGhldCBwcm90b3R5cGUgemlqbiB3ZSB0ZWdlbiB2ZWVsIHRlZ2Vuc2xhZ2VuIGdlbG9wZW4uIEVyIHdhcmVuIHZlZWwgY29tcGxpY2F0aWVzIG1ldCBkZSBneXJvc2Nvb3AgZW4gaGV0IHZlcnphbWVsZW4gdmFuIGRlIGdlZ2V2ZW5zIHZhbiBkZSBneXJvc2Nvb3AuIFpvIGhhZCBkZSBneXJvc2Nvb3AgbGFzdCB2YW4gZHJpZnQsIGRpdCBpcyB3YW5uZWVyIGVlbiBneXJvc2Nvb3AgdWl0IGRlIGxpam4gcmFha3QuIERyaWZ0IGthbiB2b29yIGVlbiBncm9vdCBkZWVsIHVpdCBkZSBkYXRhIGdlZmlsdGVyZCB3b3JkZW4gZG9vciBlZW4gS2FsbWFuIGZpbHRlciBvcCBkZSBnZWdldmVucyB0b2UgdGUgcGFzc2VuLjxicj48c3Ryb25nPlByb2R1Y3RnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIGdvZWQgZ2V3ZXJrdCBhYW4gaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlLiBIaWVydm9vciBoZWJiZW4gdmVlbCBuYWdlZGFjaHQgb3ZlciB3YXQgZGUgYmVzdGUgb3Bsb3NzaW5nIGthbiB6aWpuIHZvb3IgaGV0IHByb3RvdHlwZS4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLW1vdGlvbnBvd2VyJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYXN0aWNfc29lcCc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjMgU2VwdGVtYmVyIDIwMTknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHNjaG9vbCBwcm9qZWN0IG5hbWVucyBoZXQgYmVkcmlqZiBkZSBXYWFyZGVtYWtlcnMgb20gZWVuIGtlbm5pc2NlbnRydW0gb3AgdGUgemV0dGVuIG9wIGhldCBnZWJpZWQgdmFuIHBsYXN0aWNzIGluIEdvcmluY2hlbS4nLFxuICAgICAgICAnaW5kZXgnOiAncGxhc3RpY19zb2VwJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUGxhc2ljIFNvZXAnLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnV2UgaGViYmVuIHZhbiBNYXJ0aW4gQmFra2VyLCBuYW1lbnMgaGV0IGJlZHJpamYgZGUgV2FhcmRlbWFrZXJzLCBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBtZXQgdGVjaG5hc2l1bSBlZW4ga2VubmlzY2VudHJ1bSBvcCB0ZSByaWNodGVuLiBEaXQga2VubmlzY2VudHJ1bSBpcyBiZWRvZWx0IG9tIGhldCBwbGFzdGljIGluIEdvcmluY2hlbSBpbiBrYWFydCB0ZSBicmVuZ2VuLiBIaWVybWVlIGt1bm5lbiB2b2xnZW5kZSBrbGFzc2VuIHZlcmRlciBtZXQgaGV0IG9uZGVyem9la2VuIG5hYXIgaGV0IHBsYXN0aWMgaW4gR29yaW5jaGVtIGVuIG5hYXIgb3Bsb3NzaW5nZW4gZXJ2b29yIHpvZWtlbi4nLFxuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ0luIGhldCBiZWdpbiB3YXMgaGV0IHByb2JsZWVtIG5vZyBlcmcgb25kdWlkZWxpamsuIE9tIGRpdCBwcm9ibGVlbSBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBlZW4gb25kZXJ6b2VrIHVpdGdldm9lcmQgbmFhciBoZXQgc3dlcmYgcGxhc3RpYyBpbiBHb3JpbmNoZW0uIE1hYXIgZWVuIGdyb290IGRlZWwgdmFuIGhldCBwbGFzdGljIGluIGRlIG5hdHV1ciB2YWx0IG9uZGVyIGRlIG1pY3JvcGxhc3RpY3MgZGllIG5pZXQgbWV0IGhldCBibG90ZSBvb2cgdGUgemllbiB6aWpuLiBBbCBkaXQgbWFha3QgaGV0IGhlZWwgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIGdvZWQgaW4ga2FhcnQgdGUgYnJlbmdlbi4gT29rIG1hYWt0IGRpdCBoZXQgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIG92ZXIgdGUgYnJlbmdlbiBlbiBjb21tdW5pc2VyZW4gbmFhciBoZXQgcHVibGllay4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdCaWogZGl0IHByb2plY3QgaGViYmVuIHdlIG9vayB2ZWVsIG9uZGVyem9layBnZWRhYW4gbmFhciBiZXN0YWFuZGUgb3Bsb3NzaW5nZW4gdm9vciBoZXQgb3BydWltZW4gdmFuIHBsYXN0aWMgaW4gZGUgbmF0dXVyIGVuIG5hYXIgZGUgaGVya29tc3QgdmFuIGhldCBwbGFzdGljIGRhdCBkb29yIEdvcmluY2hlbSBrb210LiBEYWFyYmlqIGlzIGdla2VrZW4gbmFhciBkZSB2ZXJzY2hpbGxlbmRlIHJpdmllcmVuIGRpZSBsYW5ncyBlbiBkb29yIEdvaW5jaGVtIHN0cm9tZW4gZW4gYW5kZXJlIGJyb25uZW4gdmFuIHBsYXN0aWMuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5Wb29yIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiBzYW1lbndlcmtlbiB0dXNzZW4gZGUgdmVyc2NoaWxsZW5kZSBncm9lcGplcyBvbSBzYW1lbiDDqcOpbiBrZW5uaXNjZW50cnVtIHRlIHZlcnphbWVsZW4uIEhpZXJiaWogaGViYmVuIHdlIGdvZWQgbW9ldGVuIGNvw7ZyZGluZXJlbiBvbSBuaWV0IGR1YmJlbCBvbmRlcnpvZWsgdHVzc2VuIGRlIGdyb2VwamVzIHRlIGRvZW4uPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+RGl0IHByb2plY3Qgd2FzIHZvbGxlZGlnIGdlcmljaHQgb3AgaGV0IG9uZGVyem9layBkb2VuLiBPbSBoZXQgcGxhc3RpYyBwcm9ibGVlbSBpbiBHb3JpbmNoZW0gZWVyc3QgaW4ga2FhcnQgdGUgYnJlbmdlbiBoZWJiZW4gd2Ugc2FtZW4gbWV0IGFsbGUgZ3JvZXBqZXMgZWVuIG9uZGVyem9layBnZWRhYW4gZ2VkYWFuIG5hYXIgaG9ldmVlbCBzd2VyZiBwbGFzdGljIGVyIG5vdSBlY2h0IGluIEdvcmluY2hlbSBpcy4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ21pY3JvcGxhdGljcy1nb3JpbmNoZW0nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdkZS1yaWpuLWJyb24nLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnYjRfdGVjaG5pZWtfbWV1YmVscyc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjQgSnVuZSAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBvbmRlcnpvZWsgbWV0IGFscyBkb2VsIG9tIEI0IFRlY2huaWVrIGFkdmllcyB0ZSBnZXZlbiBvcCBoZXQgZ2ViaWVkIHZhbiBoZXQgdmVyZHV1cnphbWVuIHZhbiBCaU5hUy1sb2thbGVuLicsXG4gICAgICAgICdpbmRleCc6ICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnQjQgVGVjaG5pZWsgTWV1YmlsYWlyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGhlZWZ0IGFscyBkb2VsIG9tIEI0IFRlY2huaWVrIGFkdmllcyBlbiBpbmZvcm1hdGllIHRlIGdldmVuIG92ZXIgaG9lIEI0IFRlY2huaWVrIGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIGthbiB3b3JkZW4uIEI0IFRlY2huaWVrIGlzIGVlbiBlbGVrdHJvdGVjaG5pc2NoIGluc3RhbGxhdGllYmVkcmlqZiB2b29yIEJpTmFTLWxva2FsZW4uIFplIGluc3RhbGxlcmVuIG9uZGVyIGFuZGVyZSBkZSBnYXMgZW4gd2F0ZXIgaW5zdGFsbGF0aWVzLCBtYWFyIG1ha2VuIG9vayBzcGVjaWFhbCBtZXViaWxhaXIgdm9vciBCaU5hUyBsb2thbGVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ1dpaiBoZWJiZW4gZ2Vrb3plbiBvbSB2b29yYWwgb25kZXJ6b2VrIHRlIGRvZW4gbmFhciBoZXQgbWlsaWV1dnJpZW5kZWxpamtlciBtYWtlbiB2YW4gZGUgdGFmZWxzLiBVaXQgb25zIG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZGFhciB2ZWVsIHRlIHZlcmJldGVyZW4gaXMuIFpvIGlzIGRlIGNvYXRpbmcgdmFuIGRlIHRhZmVsYmxhZGVuLCBkaWUgaGV0IG9uZGVyIGFuZGVyZSBiZXNjaGVybXQgdGVnZW4gdmVyc2NoaWxsZW5kZSBjaGVtaXNjaGUgc3RvZmZlbiwgYmlqbmEgb25tb2dlbGlqayB0ZSBzY2hlaWRlbiB2YW4gZGUgaG91dGVuIGJhc2lzLiBNYWFyIG9vayBkZXplIGJhc2lzIGlzIGVlbiBtaXogdmFuIGhvdXRzbmlwcGVycyBlbiBsaWptIGVuIGlzIGR1cyBtb2VpbGlqayB0ZSByZWN5Y2xlbicsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ1VpdCBvbnMgb25kZXJ6b2VrIGlzIGdlYmxla2VuIGRhdCBlciBvcCBoZXQgZ2ViaWVkIHZhbiBkdXVyemFtZSBjaGVtaXNjaCByZXNpc3RlbnRlIGNvYXRpbmdzIHdlaW5pZyBvbnR3aWtrZWxlZCBpcy4gTWVkZSBvbWRhdCBoZXQgbWF0ZXJpYWFsIGNoZW1pc2NoIHJlc2lzdGVudCBpcyBoZXQgbW9laWxpamsgaGV0IG1hdGVyaWFhbCB6ZWxmIHRlIHJlY3ljbGVuLiBXZWwga2FuIGVyIGdla2VrZW4gd29yZGVuIG5hYXIgaGV0IGhlcmdlYnJ1aWtlbiB2YW4gZGUgY29hdGluZ3Mgb2YgZGUgaG91dGVuIGJhc2lzLiBIaWVydm9vciBtb2V0IGVyIHdlbCBlZW4gb3Bsb3NzaW5nIGJlZGFjaHQgd29yZGVuIG9tIGRpZSB2YW4gZWxrYWFyIHRlIHNjaGVpZGVuIC4gRG9vciBiaWp2b29yYmVlbGQgZWVuIGNsaWNrc3lzdGVlbSB0ZSBvbnR3aWtrZWxlbiB3YWFybWVlIGRlIGJhc2lzIGVuIGRlIGNvYXRpbmcgbWFrZWxpamsgdGUgc2NoZWlkZW4gZW4gaGVyZ2VicnVpa2VuIHppam4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHpvZWtlbiBuYWFyIGJlc3RhYW5kZSBwcm9kdWN0ZW4gZW4gb3Bsb3NzaW5nZW4uIHdpaiBoZWJiZW4gaGllcmJpaiBnb2VkIHNhbWVuZ2V3ZXJrdCBhYW4gaGV0IG9uZGVyem9la2VuIG5hYXIgbW9nZWxpamtoZWRlbi48YnI+PHN0cm9uZz5Qcm9jZXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5Wb29yIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZWl0ZSBnZXN0b2tlbiBpbiBoZXQgc2NydW1tZW4gZW4gaGV0IGRvY3VtZW50ZXJlbiB2YW4gaGV0IHByb2Nlcy4gWm8gaGViYmVuIHdlIHNwcmludHMgYmlqZ2Vob3VkZW4gdmFuIHR3ZWUgd2VrZW4gZW4gYWFuIGhldCBiZWdpbiB2YW4gZWxrZSBzcHJpbnQgZ29lZCBiZXBhYWx0IHdhdCB3ZSBkaWUgc3ByaW50IGdhYW4gZG9lbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWI0dGVjaG5pZWsnLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdiaW5hcy1sb2thYWwnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAna2V1emVfa29mZmllYmVrZXJzJzoge1xuICAgICAgICAnZGF0ZSc6ICc0IEZlYnJ1YXJpIDIwMTknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIG9uZGVyem9layBuYWFyIHdlbGsgbWF0ZXJpYWFsIGtvZmZpZWJla2VyIHZvb3IgZWVuIGJlZHJpamYgaGV0IG1lZXN0IG1pbGlldXZyaWVuZGVsaWprc3Qgem91IHppam4uJyxcbiAgICAgICAgJ2luZGV4JzogJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0tldXplIHZhbiBkZSBLb2ZmaWViZWtlcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSB2YXN0IHRlIHN0ZWxsZW4gd2Vsa2Ugc29vcnQga29mZmllYmVrZXIgaGV0IG1pbGlldXZyaWVuZGVsaWprc3QgaXMuIEhpZXJiaWogaGViYmVuIHdlIGdla2VrZW4gbmFhciBvZiBkZSBpbWFnb1xcJ3MgdmFuIGRlIHZlcnNjaGlsbGVuZGUga29mZmllYmVrZXJzIHRlcmVjaHQgd2FzIG9mIG5pZXQuIE9vayBoZWJiZW4gd2Ugb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlZHJpanZlbiBvZiBvcmdhbmlzYXRpZXMgdmFuIHZlcnNjaGlsbGVuZGUgZ3JvdGUsIG9tIHRlIGtpamtlbiBvZiBkZSBncm90ZSB2YW4gaGV0IGJlZHJpamYgdWl0bWFha3QgYmlqIGhldCBraWV6ZW4gdmFuIGVlbiBrb2ZmaWViZWtlciBzb29ydC4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdCaWogZGl0IHByb2plY3Qgc3RvbmQgaGV0IG9uZGVyem9la2VuIGNlbnRyYWFsLiBWb29yIGRpdCBvbmRlcnpvZWsgaGViYmVuIHdlIHZlZWwgYmVzdGFhbmRlIG9uZGVyem9la2VuIGVuIGdlZ2V2ZW5zIGdlem9jaHQuIE9tIGRlemUgaW5mb3JtYXRpZSBnb2VkIG92ZXIgdGUgYnJlbmdlbiBoZWJiZW4gd2UgbWV0IEdvb2dsZSBTaXRlcyBlZW4gc2l0ZSBnZW1hYWt0IG1ldCBvbnplIGNvbmNsdXNpZXMgZW4gYmVyZWRlbmVyaW5nZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgc2FtZW4gbW9ldGVuIHdlcmtlbiBlbiBtb2V0ZW4gY29tbXVuaXNlcmVuIG1ldCBlbGthYXIuIERvb3JkYXQgZGl0IGdvZWQgaXMgZ2VnYWFuIHppam4gd2Ugc2FtZW4gdG90IGRlIGNvbmNsdXNpZSBnZWtvbWVuLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPk9tZGF0IGRpdCBwcm9qZWN0IGdlcmljaHQgaXMgb3Agb25kZXJ6b2VrIHdhcyBoZXQgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBlbiB2ZWVsIG9uZGVyem9layB3ZXJkIGdlZGFhbi4gSWsgdmluZCBkYXQgZGl0IG9uZGVyem9layBnb2VkIGlzIGdlZ2Fhbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdiZXN0LWNvZmZlZS1jdXBzJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2ZsZXhpYmVsZV93b29udm9ybWVuJzoge1xuICAgICAgICAnZGF0ZSc6ICc1IE5vdmVtYmVyIDIwMTgnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHByb2plY3QgbWV0IGFscyBkb2VsIG9tIGVlbiBwbGFuIHRlIG1ha2VuIHZvb3IgZmxleGliZWxlIHdvb252b3JtZW4gaW4gZGUgZ2VtZWVudGUgR29yaW5jaGVtLicsXG4gICAgICAgICdpbmRleCc6ICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0ZsZXhpYmVsZSBXb29udm9ybWVuJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGlzIGluIG9wZHJhY2h0IHZhbiBkZSBnZW1lZW50ZSBHb3JpbmNoZW0uIERlIG9wZHJhY2h0IHZhbiBkZSBnZW1lZW50ZSBpcyBvbSBlZW4gZmxleGliZWwgd29uaW5nY29tcGxleCB0ZSBvbnR3aWtrZWxlbiwgd2FhcmluIHJla2VuaW5nIGdlaG91ZGVuIHdvcmR0IG1ldCB2ZXJzY2hpbGxlbmRlIGlua29tZW5za2xhc3Nlbi4gQWxzIHByb2R1Y3QgaGViYmVuIHdlIGVlbiBtYXF1ZXR0ZSBnZW1hYWt0IHZhbiBlZW4gZXZlbnR1ZWVsIHBsYW4gdm9vciB6b1xcJ24gd29vbndpamsuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2YW5hZiBoZXQgYmVnaW4gYWYgYWFuIGdvZWQgbmFnZWRhY2h0IG92ZXIgaGV0IGVpbmRwcm9kdWN0LCBkZSBtYXF1ZXR0ZS4gVGlqZGVucyBoZXQgcHJvamVjdCBoZWJiZW4gd2Ugb29rIHZlcmJldGVyaW5nZW4gZW4gYWFucGFzc2luZyBnZW1hYWt0IG9tIGhldCBlaW5kcHJvZHVjdCB0ZSB2ZXJiZXRlcmVuLiBIaWVyZG9vciBoZWJiZW4gd2UgdWl0ZWluZGVsaWprIGVlbiBnb2VkIHByb2R1Y3QgZ2VsZXZlcmQuPGJyPjxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+VGlqZGVucyBkaXQgcG9yamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gc2FtZW53ZXJrZW4gbWV0IGhldCBvbnR3ZXJwZW4gdmFuIGRlIG1hcXVldHRlIGVuIGhldCBvbmRlcnpvZWsuIE9tZGF0IHdlIGhldCBzY3J1bW1lbiBnb2VkIGhlYmJlbiBiaWpnZWhvdWRlbiB3YXMgaGV0IG9vayBnZW1ha2VsaWprIG9tIGdvZWQgc2FtZW4gdGUgd2Vya2VuIGVuIGRlIHRha2VuIHRlIHZlcmRlbGVuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tZ2VtZWVudGUtZ29yaW5jaGVtJyxcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5jb25zdCBwcm9qZWN0VHlwZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogW1xuICAgICAgICAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgXSxcbiAgICAnZnJlZXRpbWVQcm9qZWN0cyc6IFtcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdyNmxvb2t1cF93ZWJzaXRlJyxcbiAgICBdLFxuICAgICd0ZWNoUHJvamVjdHMnOiBbXG4gICAgICAgICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAnYjRfdGVjaG5pZWtfY2lyY3VsYWlyJyxcbiAgICAgICAgJ3JvbHN0b2VsX3N0YXBwZW50ZWxsZXInLFxuICAgICAgICAncGxhc3RpY19zb2VwJyxcbiAgICAgICAgJ2I0X3RlY2huaWVrX21ldWJlbHMnLFxuICAgICAgICAna2V1emVfa29mZmllYmVrZXJzJyxcbiAgICAgICAgJ2ZsZXhpYmVsZV93b29udm9ybWVuJyxcbiAgICBdLFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVOYW1lcyA9IHtcbiAgICAnZmVhdHVyZWQnOiAnRmVhdHVyZWQnLFxuICAgICdmcmVldGltZVByb2plY3RzJzogJ0ZyZWUtVGltZSBQcm9qZWN0cycsXG4gICAgJ3RlY2hQcm9qZWN0cyc6ICdUZWNobmFzaXVtIFByb2plY3RzJyxcbn07XG5cbmNvbnN0IHBhZ2VzID0ge1xuICAgICdhYm91dCc6IHtcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJzExOTgxOUBteW1lcmV3YWRlLm5sPGJyPnR5Y2hvYnJvdXdlcjMzQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAndGl0bGUxJzogJ0ZvcnRlcyBMeWNldW0sIEdvcmluY2hlbTxicj5UZWNobmFzaXVtIGphYXIgNCwgNSBlbiA2JyxcbiAgICAgICAgICAgICd0aXRsZTInOiAnPHN0cm9uZz5NeSBHaXRIdWI6IDwvc3Ryb25nPmh0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXInLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge31cbiAgICB9XG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuXTtcblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICBwcm9qZWN0VHlwZXMsXG4gICAgcHJvamVjdFR5cGVOYW1lcyxcbiAgICBwYWdlcyxcbiAgICBtb250aE5hbWVzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9