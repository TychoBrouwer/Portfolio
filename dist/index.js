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
                const page = new page_1.Page(pageId, '', [], variables_1.pages[pageId].content, variables_1.pages[pageId].images, '');
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
    constructor(pageId, date, tags, content, images, links) {
        this.pageContainer = document.getElementById('mainContainer');
        this.pageId = pageId;
        this.pagedate = date;
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
        const page = new page_1.Page(this.project.title, this.project.date, this.project.tags, this.project.content, this.project.images, this.project.links);
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
        'index': 'statsdb_overlay',
        'links': {
            'StatsDB App': 'https://www.overwolf.com/app/StatsDB-StatsDB',
            'StatsDB Website': 'https://statsdb.net/',
            'Overwolf': 'https://www.overwolf.com/',
            'JocularMarrow': 'https://github.com/JocularMarrow',
        },
        'tags': [
            'featured',
            'app',
        ],
        'title': 'StatsDB Overlay',
        'content': {
            'title0': 'This is a project in colaboration with Overwolf. Overwolf is a framework that allows 3rd party developers to easily build gaming apps and overlays in HTML and JavaScript. The goal of this project is to create an intuitive and easy to use Rainbow Six Siege overlay to track and see player statistics ingame. This project I have teamed up with JocularMarrow.',
            'Start': 'The project started after we had started on a statistics website for Rainbow Six Siege, after we had mostly finished the website we decided to submit an app proposal to Overwolf. Not a lot later we got approved and started working on the overlay. Later in 2020 we decided to scrap the website and team up with StatsDB. After that we focused solely on the overlay.',
            'Code': 'This project I worked with HTML5, SCSS and TypeScript. SCSS was chosen for this project because it has an improved easier to interpret syntax compared to CSS3. And gives you the ability to easily import other style files. TypeScript was chosen for this project, because Overwolf has a sample project written in TypeScript. Other reasons for us to use TypeScript were, that it gives us the abbility to use Overwolfs TypeScript declaration file and early bug spotting during the compile stage.',
            'App': 'Our goal was to make a highly customizable overlay which the user can customize to their own preferences. The features of the app include the abiliy to get the statistics of the players in your game lobby, the tracking of statistics such as daily and weekly K/D and Win/Loss ratios. Furthermore you can revisit your played games and see your performance round by round. In terms of customising the overlay you can change tho color theme and chose with statistics to show ingame on the overlay.',
        },
        'images': {
            'title0': 'logo-overwolf',
            'Code Language': 'logo-scss-typescript',
        }
    },
    'portfolio_website': {
        'date': 'current',
        'index': 'portfolio_website',
        'links': {
            'GitHub': 'https://github.com/TychoBrouwer/Portfolio',
        },
        'tags': [
            'featured',
            'website',
        ],
        'title': 'Portfolio Website',
    },
    'r6lookup_website': {
        'date': '29 December 2020',
        'index': 'r6lookup_website',
        'links': {
            'GitHub': 'https://github.com/TychoBrouwer/R6Lookup-Website',
        },
        'tags': [
            'website',
        ],
        'title': 'R6Lookup Website',
    },
    'aquazoo_leerdam': {
        'date': 'current',
        'index': 'aquazoo_leerdam',
        'links': {
            'GitHub': 'https://github.com/TychoBrouwer/AquaZoo-Leerdam',
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
        'index': 'rolstoel_stappenteller',
        'links': {
            'GitHub': 'https://github.com/TychoBrouwer/Rolstoel-Project',
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
            'title2': '<strong>GitHub: </strong>https://github.com/TychoBrouwer',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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QUFFO1FBQ1osaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsc0JBQXNCO0tBQ3pCO0NBQ0osQ0FBQztBQXlCRSxvQ0FBWTtBQXZCaEIsTUFBTSxnQkFBZ0IsR0FBRztJQUNyQixVQUFVLEVBQUUsVUFBVTtJQUN0QixrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsY0FBYyxFQUFFLHFCQUFxQjtDQUN4QyxDQUFDO0FBb0JFLDRDQUFnQjtBQWxCcEIsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPLEVBQUU7UUFDTCxTQUFTLEVBQUU7WUFDUCxRQUFRLEVBQUUsa0RBQWtEO1lBQzVELFFBQVEsRUFBRSx1REFBdUQ7WUFDakUsUUFBUSxFQUFFLDBEQUEwRDtTQUN2RTtRQUNELFFBQVEsRUFBRSxFQUFFO0tBQ2Y7Q0FDSixDQUFDO0FBVUUsc0JBQUs7QUFSVCxNQUFNLFVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTTtJQUN4RSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7Q0FDakUsQ0FBQztBQU9FLGdDQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9vZGstdHMvcHJvamVjdCc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL29kay10cy9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vb2RrLXRzL3BhZ2UnO1xuaW1wb3J0IHsgcHJvamVjdHMsIHByb2plY3RUeXBlcywgcGFnZXMgfSBmcm9tICcuLi91dGlsaXRpZXMvdmFyaWFibGVzJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHJpbnRQYWdlKHBhZ2VJZCk6IFByb21pc2UgPCB2b2lkID4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UocGFnZUlkLCAnJywgW10sIHBhZ2VzW3BhZ2VJZF0uY29udGVudCwgcGFnZXNbcGFnZUlkXS5pbWFnZXMsICcnKTtcblxuICAgICAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgbWFpbkNsYXNzID0gbmV3IE1haW47XG5jb25zdCBuYXZDbGFzcyA9IG5ldyBOYXZpZ2F0b3I7XG5cbmFzeW5jIGZ1bmN0aW9uIHByaW50UHJvamVjdHNOYXYoKTogUHJvbWlzZSA8IHZvaWQgPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RUeXBlIGluIHByb2plY3RUeXBlcykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0VHlwZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RUeXBlc1twcm9qZWN0VHlwZV07XG5cbiAgICAgICAgICAgICAgICBuYXZDbGFzcy5uZXdQcm9qZWN0VHlwZShwcm9qZWN0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmF2UHJvamVjdFR5cGVUaXRsZTogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvamVjdFR5cGUgKyAnIC5uYXZUaXRsZScpITtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2UHJvamVjdFR5cGVUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLm5hdk9iamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQhLnF1ZXJ5U2VsZWN0b3IoJy5uYXZBcnJvdycpIS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA2My42NCA5OC45OTVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4Ni42OCA1OTAuNjc1KSByb3RhdGUoLTkwKVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IS5xdWVyeVNlbGVjdG9yKCcubmF2QXJyb3cnKSEuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgOTguOTk1IDYzLjY0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00OTEuNjggLTI4Ni42OClcIj48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwNS44MjIgMzAwLjgyMikgcm90YXRlKDQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQxLjE3OCAzMzYuMTc4KSByb3RhdGUoLTQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjwvZz48L3N2Zz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCEuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3QocHJvamVjdC5wcm9qZWN0SW5kZXgoKSwgcHJvamVjdC5wcm9qZWN0VGl0bGUoKSwgcHJvamVjdFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcmludFBhZ2UocGFnZUlkOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twYWdlSWRdKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwYWdlSWQpO1xuXG4gICAgICAgICAgICBwcm9qZWN0LnByaW50UHJvamVjdFBhZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DbGFzcy5wcmludFBhZ2UocGFnZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxufVxuXG5wcmludFByb2plY3RzTmF2KClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdlBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlBhZ2UnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XG5cbiAgICAgICAgICAgIG5hdlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmF2UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJpbnRQYWdlKG5hdlBhZ2UuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgcHJvamVjdFR5cGVOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgICBwcml2YXRlIHByb2plY3REaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDb250YWluZXInKSE7O1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3RUeXBlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZmlyc3RQcm9qZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdFR5cGUocHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RUeXBlfScgY2xhc3M9J25hdk9iamVjdCAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2QXJyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA2My42NCA5OC45OTVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4Ni42OCA1OTAuNjc1KSByb3RhdGUoLTkwKVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2SWNvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE0XCIgdmlld0JveD1cIjAgMCA1MTIgMzg0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MDkgLTE1MylcIj48cGF0aCBkPVwiTTQ2NCwxMjhIMjcyTDIxNy4zNyw3My4zN0EzMiwzMiwwLDAsMCwxOTQuNzQsNjRINDhBNDgsNDgsMCwwLDAsMCwxMTJWNDAwYTQ4LDQ4LDAsMCwwLDQ4LDQ4SDQ2NGE0OCw0OCwwLDAsMCw0OC00OFYxNzZBNDgsNDgsMCwwLDAsNDY0LDEyOFptMCwyNzJINDhWMTEySDE4OC4xMmw1NC42Myw1NC42M0EzMiwzMiwwLDAsMCwyNjUuMzgsMTc2SDQ2NFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODA5IDg5KVwiLz48cmVjdCB3aWR0aD1cIjQyNlwiIGhlaWdodD1cIjI4OVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NDggMjE3KVwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvamVjdFR5cGVOYW1lc1twcm9qZWN0VHlwZV19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZEcm9wRG93bkRpdic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdChwcm9qZWN0SW5kZXg6IHN0cmluZywgcHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFR5cGVEaXY6IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb2plY3RUeXBlICsgJyAubmF2RHJvcERvd25EaXYnKSE7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwcm9qZWN0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmludFByb2plY3RQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFByb2plY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdFR5cGVEaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBpZD0nJHtwcm9qZWN0SW5kZXh9JyBjbGFzcz0nbmF2RHJvcERvd24gbmF2UGFnZSAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkljb24nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBtb250aE5hbWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZSB7XHJcbiAgICBwcml2YXRlIHBhZ2VDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwYWdlSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZWRhdGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZVRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHBhZ2VDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIHBhZ2VJbWFnZXM6IE9iamVjdDtcclxuICAgIHByaXZhdGUgcGFnZUxpbmtzOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgdGFnczogQXJyYXk8c3RyaW5nPiwgY29udGVudDogT2JqZWN0LCBpbWFnZXM6IE9iamVjdCwgbGlua3M6IE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJykhO1xyXG4gICAgICAgIHRoaXMucGFnZUlkID0gcGFnZUlkO1xyXG4gICAgICAgIHRoaXMucGFnZWRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMucGFnZVRhZ3MgPSB0YWdzO1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMucGFnZUltYWdlcyA9IGltYWdlcztcclxuICAgICAgICB0aGlzLnBhZ2VMaW5rcyA9IGxpbmtzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50UGFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlZGF0ZSA9PT0gJ2N1cnJlbnQnKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFnZWRhdGUgPSBgJHtkLmdldERhdGUoKX0gJHttb250aE5hbWVzW2QuZ2V0TW9udGgoKV19ICR7ZC5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFnSFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnZVRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFnID0gdGhpcy5wYWdlVGFnc1tpXTtcclxuXHJcbiAgICAgICAgICAgIHRhZ0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0YWcgJHt0YWd9XCI+PHA+JHt0YWd9PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUNvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGl0bGUgaW4gdGhpcy5wYWdlQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlQ29udGVudC5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsaW5lYSA9IHRoaXMucGFnZUNvbnRlbnRbdGl0bGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbWdIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUltYWdlc1t0aXRsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIVE1MID0gYDxkaXYgY2xhc3M9XCJhbGluZWFJbWFnZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9wcm9qZWN0cy8ke3RoaXMucGFnZUltYWdlc1t0aXRsZV19LndlYnBcIiBhbHQ9XCIke3RoaXMucGFnZUltYWdlc1t0aXRsZV19XCI+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGA8aDM+JHt0aXRsZX08L2gzPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlQWxpbmVhICR7dGl0bGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAke2ltZ0hUTUx9XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YWxpbmVhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhZ2VMaW5rcyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0aXRsZSBpbiB0aGlzLnBhZ2VMaW5rcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlTGlua3MuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5wYWdlTGlua3NbdGl0bGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2VMaW5rcyArPSBgPGEgaHJlZj1cIiR7bGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PC9hPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyIGlkPVwicGFnZVRpdGxlXCI+JHt0aGlzLnBhZ2VJZH08L2gyPlxyXG4gICAgICAgIDxwIGlkPVwicGFnZURhdGVcIj4ke3RoaXMucGFnZWRhdGV9PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlVGFnc1wiPiR7dGFnSFRNTH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgJHtwYWdlQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUxpbmtzXCI+XHJcbiAgICAgICAgICAgICR7cGFnZUxpbmtzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb2plY3Qge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgaW5kZXg6IHN0cmluZyxcclxuICAgIGltYWdlOiBzdHJpbmcsXHJcbiAgICBsaW5rczoge1xyXG4gICAgICAgIHZpZXc6IHN0cmluZyxcclxuICAgICAgICBnaXRodWI6IHN0cmluZyxcclxuICAgIH1cclxuICAgIHRhZ3M6IEFycmF5PHN0cmluZz4sXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29udGVudDogT2JqZWN0LFxyXG4gICAgaW1hZ2VzOiBPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0OiBJUHJvamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50UHJvamVjdFBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHRoaXMucHJvamVjdC50aXRsZSwgdGhpcy5wcm9qZWN0LmRhdGUsIHRoaXMucHJvamVjdC50YWdzLCB0aGlzLnByb2plY3QuY29udGVudCwgdGhpcy5wcm9qZWN0LmltYWdlcywgdGhpcy5wcm9qZWN0LmxpbmtzKTtcclxuXHJcbiAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBwcm9qZWN0cyA9IHtcbiAgICAnc3RhdHNkYl9vdmVybGF5Jzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2luZGV4JzogJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdTdGF0c0RCIEFwcCc6ICdodHRwczovL3d3dy5vdmVyd29sZi5jb20vYXBwL1N0YXRzREItU3RhdHNEQicsXG4gICAgICAgICAgICAnU3RhdHNEQiBXZWJzaXRlJzogJ2h0dHBzOi8vc3RhdHNkYi5uZXQvJyxcbiAgICAgICAgICAgICdPdmVyd29sZic6ICdodHRwczovL3d3dy5vdmVyd29sZi5jb20vJyxcbiAgICAgICAgICAgICdKb2N1bGFyTWFycm93JzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Kb2N1bGFyTWFycm93JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ2FwcCcsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdTdGF0c0RCIE92ZXJsYXknLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnVGhpcyBpcyBhIHByb2plY3QgaW4gY29sYWJvcmF0aW9uIHdpdGggT3ZlcndvbGYuIE92ZXJ3b2xmIGlzIGEgZnJhbWV3b3JrIHRoYXQgYWxsb3dzIDNyZCBwYXJ0eSBkZXZlbG9wZXJzIHRvIGVhc2lseSBidWlsZCBnYW1pbmcgYXBwcyBhbmQgb3ZlcmxheXMgaW4gSFRNTCBhbmQgSmF2YVNjcmlwdC4gVGhlIGdvYWwgb2YgdGhpcyBwcm9qZWN0IGlzIHRvIGNyZWF0ZSBhbiBpbnR1aXRpdmUgYW5kIGVhc3kgdG8gdXNlIFJhaW5ib3cgU2l4IFNpZWdlIG92ZXJsYXkgdG8gdHJhY2sgYW5kIHNlZSBwbGF5ZXIgc3RhdGlzdGljcyBpbmdhbWUuIFRoaXMgcHJvamVjdCBJIGhhdmUgdGVhbWVkIHVwIHdpdGggSm9jdWxhck1hcnJvdy4nLFxuICAgICAgICAgICAgJ1N0YXJ0JzogJ1RoZSBwcm9qZWN0IHN0YXJ0ZWQgYWZ0ZXIgd2UgaGFkIHN0YXJ0ZWQgb24gYSBzdGF0aXN0aWNzIHdlYnNpdGUgZm9yIFJhaW5ib3cgU2l4IFNpZWdlLCBhZnRlciB3ZSBoYWQgbW9zdGx5IGZpbmlzaGVkIHRoZSB3ZWJzaXRlIHdlIGRlY2lkZWQgdG8gc3VibWl0IGFuIGFwcCBwcm9wb3NhbCB0byBPdmVyd29sZi4gTm90IGEgbG90IGxhdGVyIHdlIGdvdCBhcHByb3ZlZCBhbmQgc3RhcnRlZCB3b3JraW5nIG9uIHRoZSBvdmVybGF5LiBMYXRlciBpbiAyMDIwIHdlIGRlY2lkZWQgdG8gc2NyYXAgdGhlIHdlYnNpdGUgYW5kIHRlYW0gdXAgd2l0aCBTdGF0c0RCLiBBZnRlciB0aGF0IHdlIGZvY3VzZWQgc29sZWx5IG9uIHRoZSBvdmVybGF5LicsXG4gICAgICAgICAgICAnQ29kZSc6ICdUaGlzIHByb2plY3QgSSB3b3JrZWQgd2l0aCBIVE1MNSwgU0NTUyBhbmQgVHlwZVNjcmlwdC4gU0NTUyB3YXMgY2hvc2VuIGZvciB0aGlzIHByb2plY3QgYmVjYXVzZSBpdCBoYXMgYW4gaW1wcm92ZWQgZWFzaWVyIHRvIGludGVycHJldCBzeW50YXggY29tcGFyZWQgdG8gQ1NTMy4gQW5kIGdpdmVzIHlvdSB0aGUgYWJpbGl0eSB0byBlYXNpbHkgaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzLiBUeXBlU2NyaXB0IHdhcyBjaG9zZW4gZm9yIHRoaXMgcHJvamVjdCwgYmVjYXVzZSBPdmVyd29sZiBoYXMgYSBzYW1wbGUgcHJvamVjdCB3cml0dGVuIGluIFR5cGVTY3JpcHQuIE90aGVyIHJlYXNvbnMgZm9yIHVzIHRvIHVzZSBUeXBlU2NyaXB0IHdlcmUsIHRoYXQgaXQgZ2l2ZXMgdXMgdGhlIGFiYmlsaXR5IHRvIHVzZSBPdmVyd29sZnMgVHlwZVNjcmlwdCBkZWNsYXJhdGlvbiBmaWxlIGFuZCBlYXJseSBidWcgc3BvdHRpbmcgZHVyaW5nIHRoZSBjb21waWxlIHN0YWdlLicsXG4gICAgICAgICAgICAnQXBwJzogJ091ciBnb2FsIHdhcyB0byBtYWtlIGEgaGlnaGx5IGN1c3RvbWl6YWJsZSBvdmVybGF5IHdoaWNoIHRoZSB1c2VyIGNhbiBjdXN0b21pemUgdG8gdGhlaXIgb3duIHByZWZlcmVuY2VzLiBUaGUgZmVhdHVyZXMgb2YgdGhlIGFwcCBpbmNsdWRlIHRoZSBhYmlsaXkgdG8gZ2V0IHRoZSBzdGF0aXN0aWNzIG9mIHRoZSBwbGF5ZXJzIGluIHlvdXIgZ2FtZSBsb2JieSwgdGhlIHRyYWNraW5nIG9mIHN0YXRpc3RpY3Mgc3VjaCBhcyBkYWlseSBhbmQgd2Vla2x5IEsvRCBhbmQgV2luL0xvc3MgcmF0aW9zLiBGdXJ0aGVybW9yZSB5b3UgY2FuIHJldmlzaXQgeW91ciBwbGF5ZWQgZ2FtZXMgYW5kIHNlZSB5b3VyIHBlcmZvcm1hbmNlIHJvdW5kIGJ5IHJvdW5kLiBJbiB0ZXJtcyBvZiBjdXN0b21pc2luZyB0aGUgb3ZlcmxheSB5b3UgY2FuIGNoYW5nZSB0aG8gY29sb3IgdGhlbWUgYW5kIGNob3NlIHdpdGggc3RhdGlzdGljcyB0byBzaG93IGluZ2FtZSBvbiB0aGUgb3ZlcmxheS4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLW92ZXJ3b2xmJyxcbiAgICAgICAgICAgICdDb2RlIExhbmd1YWdlJzogJ2xvZ28tc2Nzcy10eXBlc2NyaXB0JyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BvcnRmb2xpb193ZWJzaXRlJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2luZGV4JzogJ3BvcnRmb2xpb193ZWJzaXRlJyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ0dpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL1BvcnRmb2xpbycsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgICd3ZWJzaXRlJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1BvcnRmb2xpbyBXZWJzaXRlJyxcbiAgICB9LFxuICAgICdyNmxvb2t1cF93ZWJzaXRlJzoge1xuICAgICAgICAnZGF0ZSc6ICcyOSBEZWNlbWJlciAyMDIwJyxcbiAgICAgICAgJ2luZGV4JzogJ3I2bG9va3VwX3dlYnNpdGUnLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUjZMb29rdXAtV2Vic2l0ZScsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3dlYnNpdGUnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUjZMb29rdXAgV2Vic2l0ZScsXG4gICAgfSxcbiAgICAnYXF1YXpvb19sZWVyZGFtJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2luZGV4JzogJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9BcXVhWm9vLUxlZXJkYW0nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgICAgICAnYXJkdWlubycsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdBcXVhWm9vIExlZXJkYW0nLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IGlzIGVlbiBwcm9qZWN0IG5hbWVucyBkZSBvcGRyYWNodGdldmVyIEFxdWFab28gTGVlcmRhbS4gV2lqIGhhZGRlbiBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBlZW4gc3lzdGVlbSB0ZSBvbnR3aWtrZWxlbiB3YWFybWVlIEFxdWFab28gTGVlcmRhbSBkZSBsaWNodGVuIHZhbiBodW4gYXF1YXJpdW1zIHZhbiBlZW4gYWZzdGFuZCB0ZSBrdW5uZW4gYWFuc3R1cmVuLiBCaW5uZW4gZGl0IHByb2plY3QgaGFkIGlrIGRlIHRhYWsgdmFuIGhldCBwcm9ncmFtbWVyZW4gZW4gb250d2lra2VsZW4gdmFuIGhldCBBcmR1aW5vIHByb3RvdHlwZS4gRGl0IHByb2plY3QgaGViIGlrIHNhbWVuZ2V3ZXJrdCBtZXQgQ2FpbiBXb2VzdGVuYnVyZyBlbiBEYXZpZCBCYWdpam4uJyxcbiAgICAgICAgICAgICdNZWVzdGVycHJvZWYnOiAnRGUgTWVlc3RlcnByb2VmIGlzIGVlbiBlaW5kZXhhbWVucHJvamVjdCB2YW4gaGV0IHZhayBPJk8uIEhvZXQgZG9lbCB2YW4gaGV0IHByb2plY3QgaXMgZGF0IGRlIGxlZXJpbmcgYWxsZSB2YWFyZGlnaGVkZW4gbGFhdCB6aWVuIGRpZSBub2RpZyB6aWpuIG9tIGVlbiB0ZWNobmFzaXVtbGVlcmxpbmcgdGUgemlqbi4gVGlqZGVucyBkaXQgcHJvamVjdCB3b3JkdCBlciB3ZWluaWcgZG9vciBkZSBkb2NlbnRlbiBnZXJlZ2VsZCBlbiBtb2V0IGRlIGxlZXJsaW5nIGR1cyB2ZWVsIHplbGZzdGFuZGlnaGVpZCBsYXRlbiB6aWVuLiBIZXQgb25kZXJ6b2VrIGdlZGVlbHRlIHZhbiBkZSBNZWVzdGVycHJvZWYgdm9ybXQgaGV0IHByb2ZpZWx3ZXJrc3R1ay4nLFxuICAgICAgICAgICAgJ09wZHJhY2h0JzogJ0FxdWFab28gTGVlcmRhbSBpcyBlZW4gZGllcmVudHVpZCBpbiBMZWVyZGFtIG1ldCBydWltIDQwIHZpdmFyaWEuIERlIGRpZXJlbnR1aW4gd29yZHQgZ2VydW50IGRvb3IgdnJpandpbGxpZ2VycyB2YW4gZGUgYXF1YXJpdW12ZXJlbmlnaW5nIGRlIERpc2N1cyB1aXQgTGVlcmRhbS4gSGllcmRvb3IgemlqbiBlciBuaWV0IGFsdGlqZCBkZXplbGZkZSBtZW5zZW4gYWFud2V6aWcgZW4gaXMgZGUga2FucyBncm9vdCBkYXQgZXIgc29tcyB2ZXJnZXRlbiB3b3JkdCBkZSBsaWNodGVuIHVpdCB0ZSB6ZXR0ZW4uIERhYXJvbSB3aWxsZW4gemUgZGUgYXF1YXJpYSB2YW4gYWZzdGFuZCB1aXQga3VubmVuIHpldHRlbiBhbHMgZGF0IHZlcmdldGVuIGlzLiBFciBpcyB2b29yIGdla296ZW4gb20gdGUgd2Vya2VuIG1ldCBlZW4gQXJkdWlubyBNZWdhIDI1NjAuJyxcbiAgICAgICAgICAgICdIZXQgUHJvZHVjdCc6ICdPbnMgcHJvZHVjdCBtYWFrdCBnZWJydWlrIHZhbiBlZW4gQXJkdWlubyBvbSBkZSBsaWNodGVuIHRlIGt1bm5lbiBiZXN0dXJlbi4gT20gZGUgQXJkdWlubyBvcCBhZnN0YW5kIHRlIGt1bm5lbiBiZXN0dXJlbiBoZWJiZW4gd2UgbWV0IGJlaHVscCB2YW4gZWVuIEV0aGVybmV0IFNoaWVsZCBlZW4gd2Vic2VydmVyIGdlbWFha3QuIERlIHdlYnNlcnZlciBpcyBiZXNjaGVybXQgbWV0IGVlbiB3YWNodHdvb3JkLiBWaWEgZGUgd2Vic2VydmVyIGt1bm5lbiBkZSBsYW1wZW4gdmlhIGRlIEFyZHVpbm8gd29yZGVuIGFhbmdlc3R1dXJkLiBBcXVhWm9vIHdpbGRlIG9vayBkZSBtb2dlbGlqa2hlaWQgaGViYmVuIG9tIHRlIGt1bm5lbiBjb250cm9sbGVyZW4gd2FubmVlciBlbiB3aWUgZGUgbGFtcGVuIGhlZWZ0IGJlc3R1dXJkLiBIaWVydm9vciBzbGFhbiB3ZSBkZSBsb2dzIG9wIG9wIGVlbiBTRC1rYWFydC4nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdWb29yIGhldCBwcm9kdWN0IGhlYmJlbiB3ZSBvb2sgZWVuIGJlaHVpemluZyBvbnR3b3JwZW4gZW4gM0QtZ2VwcmludC4gV2UgaGViYmVuIGhldCBvbnR3ZXJwIHZvb3IgZGUgYmVodWl6aW5nIGdlbWFha3QgbWV0IGJlaHVscCB2YW4gYmxlbmRlci4gSGV0IG9udHdlcnAgaXMgZ2XDq3hwb3J0ZWVyZCBhbHMgU1RMIG9tIGhldCB0ZSBrdW5uZW4gcHJpbnRlbiBtZXQgZGUgM0QtcHJpbnRlciBvcCBzY2hvb2wuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+SGV0IGJlbGFuZ3JpamtzdGUgZGVlbCB2YW4gZGl0IHByb2plY3QgYmVzdGFhdCB1aXQgaGV0IHByb3RvdHlwZS4gQWFuZ2V6aWVuIGlrIGRhYXIgdmVlbCB3ZXJrIGVuIGFhbmRhY2h0IGFhbiBoZWIgYmVzdGVlZCB2aW5kIGlrIGRhdCBpayBnb2VkIHByb2R1Y3RnZXJpY2h0IGhlYiBnZXdlcmt0Ljxicj48c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5Eb29yZGF0IGhldCBncm9vdHN0ZSBkZWVsIHZhbiBkZSBwZXJpb2RlIHZhbiBoZXQgcHJvZmllbHdlcmtzdHVrIHRpamRlbnMgZGUgQ29yb25hIGxvY2tkb3duIGVuIG1hYXRyZWdlbGVuIHdhcyBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCBtb2V0ZW4gd2Vya2VuLiBPbmRhbmtzIGRlemUgb21zdGFuZGlnaGVkZW4gZGVuayBpayBkYXQgZXIgZ29lZCB6ZWxmc3RhbmRpZyB0aHVpcyBpcyBnZXdlcmt0LicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tYXF1YXpvbycsXG4gICAgICAgICAgICAnSGV0IFByb2R1Y3QnOiAnYXJkdWluby1tZWdhMjU2MCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInOiB7XG4gICAgICAgICdkYXRlJzogJzMwIEp1bmUgMjAyMCcsXG4gICAgICAgICdpbmRleCc6ICdiNF90ZWNobmlla19jaXJjdWxhaXInLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdCNCBUZWNobmllayBDaXJjdWxhaXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ01hcmlla2UgTWVsdGVuIGhlZWZ0IG9ucyBuYW1lbnMgQjQgVGVjaG5pZWsgZGUgb3BkcmFjaHQgZ2VnZXZlbiBvbSB2YW4gQjQgVGVjaG5pZWsgZWVuIGNpcnVsYWlyZSBsZXZlcmFuY2llciB0ZSB3b3JkZW4uIEhldCBwcm9ibGVlbSBpcyBkYXQgaGV0IG1ldWJpbGFpciB3YXQgQjQgdmVyem9yZ3QgbmlldCBnZXJlY3ljbGVkIGVuIHdlaW5pZyBoZXJnZWJydWlrdCB3b3JkdC4gQjQgd2lsIGdyYWFnIGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIHdvcmRlbi4gRGUgb3BkcmFjaHQgd2FzIGR1czogXCJXYXQga3VubmVuIHdlIG9udHdpa2tlbGVuIHdhYXJkb29yIEI0IGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIGthbiB3b3JkZW4/XCInLFxuICAgICAgICAgICAgJ0Jlem9layBCNCc6ICdXZSBrb25kZW4gZG9vciBDb3JvbmEgbmlldCBiaWogQjQgVGVjaG5pZWsgaW4gR2llc2VuIG9wIGJlem9laywgbWFhciB3ZSBoZWJiZW4gd2VsIGFsbGUgdm9vcmJlcmVpZGluZyBnZWRhYW4gdm9vciBoZXQgYmV6b2VrLiBXZSBoZWJiZW4gbWVlcmRlcmUgdnJhZ2VuIGVuIGlkZWXDq24gYmVkYWNodC4gRWVuIGRlZWwgdmFuIGRlemUgdnJhZ2VuIGhlYmJlbiB3ZSBsYXRlciB2aWEgV2hhdHNBcHAgd2VsIGt1bm5lbiB2cmFnZW4gZWVuIHZhbiBkZSBtb250ZXVycyB2YW4gQjQgVGVjaG5pZWssIFJpY2hhcmQgdmFuIEJpam5lbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdXZSBoZWJiZW4gdm9vcmFsIG9uZGVyem9layBnZWRhYW4gbmFhciBhbHRlcm5hdGlldmVuIHZvb3IgZGUgaHVpZGlnZSBtYXRlcmlhbGVuIHZhbiBkZSBCNCB0YWZlbHMuIERhYXJ2b29yIGhlYmJlbiB3ZSBhYW4gZGUgbW9udGV1ciBnZXZyYWFnZCB3ZWxrIG1hdGVyaWFhbCBnZWJydWlrdCB3b3JkIHZvb3IgZGUgdGFmZWwsIGRhYXJvcCBrcmVnZW4gd2UgaGV0IGFudHdvb3JkIGRhdCBoZXQgZWVuIHNwYWFucGxhYXQgaXMgbWV0IGVlbiBIUEwgdG9wbGFhZy4gSFBMIGlzIGVpZ2VubGlqayBhbGxlZW4gdGhlcm1pc2NoIHRlIHJlY3ljbGVuLCBkYXQgaXMgaGV0IHZlcmJyYW5kZW4gdmFuIGhldCBtYXRlcmlhYWwgb20gZXIgZW5lcmdpZSB1aXQgdGUgaGFsZW4uIEVlbiBhbmRlcmUgb3Bsb3NzaW5nIHpvdSBoZXQgaGVyZ2VicnVpa2VuIGt1bm5lbiB6aWpuIGluIGVlbiBvZiBhbmRlcmUgdm9ybS4nLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdEb29yIENvcm9uYSBpcyBoZXQgb25kZXJ6b2VrIG5hYXIgZHV1cnphbWUgbWF0ZXJpYWxlbiBlbiBjaXJjdWxhaXJlIGVjb25vbWllIGtvcnRlciBkYW4gYmVkb2VsdCBlbiBoZWJiZW4gd2UgYmlqdm9vcmJlZWxkIG5pZXQgZWVuIGRlZWwgdmFuIGhldCB0YWZlbGJsYWQsIHdhdCB3ZSBiaWogQjQgem91ZGVuIG9waGFsZW4sIGt1bm5lbiBvbmRlcnpvZWtlbi4gV2UgemlqbiBlciB3ZWwgYWNodGVyIGdla29tZW4gZGF0IGVyIGdlZW4gbWFra2VsaWprZSBvcGxvc3NpbmcgaXMgdm9vciBoZXQgcHJvYmxlZW0sIG9tZGF0IGRlIHRhZmVscyB0ZWdlbiB2ZWVsIHZlcnNjaGlsbGVuZGUgY2hlbWlzY2hlIHN0b2ZmZW4gbW9ldCBrdW5uZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5JbmRpdmlkdWVlbCB3ZXJrZW48L3N0cm9uZz48YnI+TWVkZW4gZG9vciBDb3JvbmEgaGViYmVuIHdlIHZlZWwgaW5kaXZpZHVlZWwgdGh1aXMgbW9ldGVuIHdlcmtlbi4gWm8gaGViIGlrIHZvb3JhbCBnZXdlcmt0IGFhbiBoZXQgem9la2VuIHZhbiBldmVudHVlbGUgbWF0ZXJpYWxlbiBvbSBoZXQgaHVpZGlnZSBtYXRlcmlhYWwgdmFuIGRlIHRhZmVscyBtZWUgdGUgdmVycGxhYXRzZW4uIE9vayBoZWIgaWsgbmFnZWRhY2h0IG92ZXIgb3Bsb3NzaW5nZW4gdm9vciBoZXQgc2NoZWlkZW4gdmFuIGhldCBob3V0ZW4gZGVlbCB2YW4gZGUgdGFmZWwgZW4gZGUgcGxhc3RpYyBjb2F0aW5nLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkRpdCBwcm9qZWN0IHdhcyB2b29yYWwgZ2VyaWNodCBvcCBoZXQgem9la2VuIG5hYXIgZWVuIHRoZW9yZXRpc2NoZSBvcGxvc3NpbmcuIEhldCB3YXMgZHVzIGJlbGFuZ3JpamsgZGF0IGVyIGdvZWQgb25kZXJ6b2VrIGdlZGFhbiB3ZXJkLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAnQ2lyY3VsYWlyZSBMZXZlcmFuY2llcic6ICdsb2dvLWI0dGVjaG5pZWsnLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdsYWRkZXItdmFuLWxhbnNpbmsnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcic6IHtcbiAgICAgICAgJ2RhdGUnOiAnMTMgRGVjZW1iZXIgMjAxOScsXG4gICAgICAgICdpbmRleCc6ICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ0dpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL1JvbHN0b2VsLVByb2plY3QnLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1JvbHN0b2VsIFN0YXBwZW50ZWxsZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIEFyamFuIFN0ZXJrLCBuYW1lbnMgaGV0IGJlZHJpamYgTW90aW9ucG93ZXIuIEhpZXJiaWogaGViYmVuIHdlIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIGVlbiBwcm90b3R5cGUgdGUgbWFrZW4gdm9vciBlZW4gZml0bmVzcyB0cmFja2VyIHZvb3Igcm9sc3RvZWxnZWJydWlrZXJzIGVuIG1lbnNlbiBtZXQgZWVuIGZ5c2lla2UgYmVwZXJraW5nLiBPbSBkaXQgdGUgcmVhbGlzZXJlbiBoZWJiZW4gd2UgZWVyc3Qgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIHdlbGtlIG1vZ2VsaWpraGVkZW4gZGllIG1lbnNlbiB3ZWwgbm9nIGhlYmJlbi4gT29rIGhlYmJlbiB3ZSBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYmVzdGFhbmRlIG9wbG9zc2luZ2VuIHZvb3IuJyxcbiAgICAgICAgICAgICdQcm9kdWN0JzogJ1Zvb3IgaGV0IGVpbmRwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gcHJvdG90eXBlIGdlbWFha3Qgdm9vciBlZW4gcm9sc3RvZWwgc3RhcHBlbnRlbGxlci4gSGlqIGthbiBoZXQgYWFudGFsIHJvdGF0aWVzIHZhbiBlZW4gcm9sc3RvZWwgdGVsbGVuIGRvb3JtaWRkZWwgdmFuIGVlbiBneXJvc2Nvb3AgYWFuZ2VzbG90ZW4gb3AgZWVuIEFyZHVpbm8gVW5vLiBXZSBoZWJiZW4gb29rIGdla2VuIG5hYXIgZWVuIGhhcnRzbGFnbWV0ZXIsIG1hYXIgbWVkZSBkb29yIGJlcGVya3RlIHRpamQgaXMgaGV0IG5pZXQgZ2VsdWt0IG9tIGRlIGhhcnRzbGFnbWV0ZXIgYmV0cm91d2JhYXIgdGUgbWFrZW4uIEJvdmVuZGllbiB6aWpuIGVyIGFsIGJldHJvdXdiYXJlIGhhcnRzbGFnbWV0ZXJzIGJlc2NoaWtiYWFyIHZvb3IgZnlzaWVrIGdlaGFuZGljYXB0ZSBtZW5zZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Eb29yemV0dGVuPC9zdHJvbmc+PGJyPkJpaiBoZXQgb250d2lra2VsZW4gdmFuIGhldCBwcm90b3R5cGUgemlqbiB3ZSB0ZWdlbiB2ZWVsIHRlZ2Vuc2xhZ2VuIGdlbG9wZW4uIEVyIHdhcmVuIHZlZWwgY29tcGxpY2F0aWVzIG1ldCBkZSBneXJvc2Nvb3AgZW4gaGV0IHZlcnphbWVsZW4gdmFuIGRlIGdlZ2V2ZW5zIHZhbiBkZSBneXJvc2Nvb3AuIFpvIGhhZCBkZSBneXJvc2Nvb3AgbGFzdCB2YW4gZHJpZnQsIGRpdCBpcyB3YW5uZWVyIGVlbiBneXJvc2Nvb3AgdWl0IGRlIGxpam4gcmFha3QuIERyaWZ0IGthbiB2b29yIGVlbiBncm9vdCBkZWVsIHVpdCBkZSBkYXRhIGdlZmlsdGVyZCB3b3JkZW4gZG9vciBlZW4gS2FsbWFuIGZpbHRlciBvcCBkZSBnZWdldmVucyB0b2UgdGUgcGFzc2VuLjxicj48c3Ryb25nPlByb2R1Y3RnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIGdvZWQgZ2V3ZXJrdCBhYW4gaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlLiBIaWVydm9vciBoZWJiZW4gdmVlbCBuYWdlZGFjaHQgb3ZlciB3YXQgZGUgYmVzdGUgb3Bsb3NzaW5nIGthbiB6aWpuIHZvb3IgaGV0IHByb3RvdHlwZS4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLW1vdGlvbnBvd2VyJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYXN0aWNfc29lcCc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjMgU2VwdGVtYmVyIDIwMTknLFxuICAgICAgICAnaW5kZXgnOiAncGxhc3RpY19zb2VwJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUGxhc2ljIFNvZXAnLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnV2UgaGViYmVuIHZhbiBNYXJ0aW4gQmFra2VyLCBuYW1lbnMgaGV0IGJlZHJpamYgZGUgV2FhcmRlbWFrZXJzLCBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBtZXQgdGVjaG5hc2l1bSBlZW4ga2VubmlzY2VudHJ1bSBvcCB0ZSByaWNodGVuLiBEaXQga2VubmlzY2VudHJ1bSBpcyBiZWRvZWx0IG9tIGhldCBwbGFzdGljIGluIEdvcmluY2hlbSBpbiBrYWFydCB0ZSBicmVuZ2VuLiBIaWVybWVlIGt1bm5lbiB2b2xnZW5kZSBrbGFzc2VuIHZlcmRlciBtZXQgaGV0IG9uZGVyem9la2VuIG5hYXIgaGV0IHBsYXN0aWMgaW4gR29yaW5jaGVtIGVuIG5hYXIgb3Bsb3NzaW5nZW4gZXJ2b29yIHpvZWtlbi4nLFxuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ0luIGhldCBiZWdpbiB3YXMgaGV0IHByb2JsZWVtIG5vZyBlcmcgb25kdWlkZWxpamsuIE9tIGRpdCBwcm9ibGVlbSBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBlZW4gb25kZXJ6b2VrIHVpdGdldm9lcmQgbmFhciBoZXQgc3dlcmYgcGxhc3RpYyBpbiBHb3JpbmNoZW0uIE1hYXIgZWVuIGdyb290IGRlZWwgdmFuIGhldCBwbGFzdGljIGluIGRlIG5hdHV1ciB2YWx0IG9uZGVyIGRlIG1pY3JvcGxhc3RpY3MgZGllIG5pZXQgbWV0IGhldCBibG90ZSBvb2cgdGUgemllbiB6aWpuLiBBbCBkaXQgbWFha3QgaGV0IGhlZWwgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIGdvZWQgaW4ga2FhcnQgdGUgYnJlbmdlbi4gT29rIG1hYWt0IGRpdCBoZXQgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIG92ZXIgdGUgYnJlbmdlbiBlbiBjb21tdW5pc2VyZW4gbmFhciBoZXQgcHVibGllay4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdCaWogZGl0IHByb2plY3QgaGViYmVuIHdlIG9vayB2ZWVsIG9uZGVyem9layBnZWRhYW4gbmFhciBiZXN0YWFuZGUgb3Bsb3NzaW5nZW4gdm9vciBoZXQgb3BydWltZW4gdmFuIHBsYXN0aWMgaW4gZGUgbmF0dXVyIGVuIG5hYXIgZGUgaGVya29tc3QgdmFuIGhldCBwbGFzdGljIGRhdCBkb29yIEdvcmluY2hlbSBrb210LiBEYWFyYmlqIGlzIGdla2VrZW4gbmFhciBkZSB2ZXJzY2hpbGxlbmRlIHJpdmllcmVuIGRpZSBsYW5ncyBlbiBkb29yIEdvaW5jaGVtIHN0cm9tZW4gZW4gYW5kZXJlIGJyb25uZW4gdmFuIHBsYXN0aWMuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5Wb29yIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiBzYW1lbndlcmtlbiB0dXNzZW4gZGUgdmVyc2NoaWxsZW5kZSBncm9lcGplcyBvbSBzYW1lbiDDqcOpbiBrZW5uaXNjZW50cnVtIHRlIHZlcnphbWVsZW4uIEhpZXJiaWogaGViYmVuIHdlIGdvZWQgbW9ldGVuIGNvw7ZyZGluZXJlbiBvbSBuaWV0IGR1YmJlbCBvbmRlcnpvZWsgdHVzc2VuIGRlIGdyb2VwamVzIHRlIGRvZW4uPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+RGl0IHByb2plY3Qgd2FzIHZvbGxlZGlnIGdlcmljaHQgb3AgaGV0IG9uZGVyem9layBkb2VuLiBPbSBoZXQgcGxhc3RpYyBwcm9ibGVlbSBpbiBHb3JpbmNoZW0gZWVyc3QgaW4ga2FhcnQgdGUgYnJlbmdlbiBoZWJiZW4gd2Ugc2FtZW4gbWV0IGFsbGUgZ3JvZXBqZXMgZWVuIG9uZGVyem9layBnZWRhYW4gZ2VkYWFuIG5hYXIgaG9ldmVlbCBzd2VyZiBwbGFzdGljIGVyIG5vdSBlY2h0IGluIEdvcmluY2hlbSBpcy4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ21pY3JvcGxhdGljcy1nb3JpbmNoZW0nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdkZS1yaWpuLWJyb24nLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnYjRfdGVjaG5pZWtfbWV1YmVscyc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjQgSnVuZSAyMDE5JyxcbiAgICAgICAgJ2luZGV4JzogJ2I0X3RlY2huaWVrX21ldWJlbHMnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdCNCBUZWNobmllayBNZXViaWxhaXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaGVlZnQgYWxzIGRvZWwgb20gQjQgVGVjaG5pZWsgYWR2aWVzIGVuIGluZm9ybWF0aWUgdGUgZ2V2ZW4gb3ZlciBob2UgQjQgVGVjaG5pZWsgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIga2FuIHdvcmRlbi4gQjQgVGVjaG5pZWsgaXMgZWVuIGVsZWt0cm90ZWNobmlzY2ggaW5zdGFsbGF0aWViZWRyaWpmIHZvb3IgQmlOYVMtbG9rYWxlbi4gWmUgaW5zdGFsbGVyZW4gb25kZXIgYW5kZXJlIGRlIGdhcyBlbiB3YXRlciBpbnN0YWxsYXRpZXMsIG1hYXIgbWFrZW4gb29rIHNwZWNpYWFsIG1ldWJpbGFpciB2b29yIEJpTmFTIGxva2FsZW4uJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnV2lqIGhlYmJlbiBnZWtvemVuIG9tIHZvb3JhbCBvbmRlcnpvZWsgdGUgZG9lbiBuYWFyIGhldCBtaWxpZXV2cmllbmRlbGlqa2VyIG1ha2VuIHZhbiBkZSB0YWZlbHMuIFVpdCBvbnMgb25kZXJ6b2VrIGlzIGdlYmxla2VuIGRhdCBkYWFyIHZlZWwgdGUgdmVyYmV0ZXJlbiBpcy4gWm8gaXMgZGUgY29hdGluZyB2YW4gZGUgdGFmZWxibGFkZW4sIGRpZSBoZXQgb25kZXIgYW5kZXJlIGJlc2NoZXJtdCB0ZWdlbiB2ZXJzY2hpbGxlbmRlIGNoZW1pc2NoZSBzdG9mZmVuLCBiaWpuYSBvbm1vZ2VsaWprIHRlIHNjaGVpZGVuIHZhbiBkZSBob3V0ZW4gYmFzaXMuIE1hYXIgb29rIGRlemUgYmFzaXMgaXMgZWVuIG1peiB2YW4gaG91dHNuaXBwZXJzIGVuIGxpam0gZW4gaXMgZHVzIG1vZWlsaWprIHRlIHJlY3ljbGVuJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnVWl0IG9ucyBvbmRlcnpvZWsgaXMgZ2VibGVrZW4gZGF0IGVyIG9wIGhldCBnZWJpZWQgdmFuIGR1dXJ6YW1lIGNoZW1pc2NoIHJlc2lzdGVudGUgY29hdGluZ3Mgd2VpbmlnIG9udHdpa2tlbGVkIGlzLiBNZWRlIG9tZGF0IGhldCBtYXRlcmlhYWwgY2hlbWlzY2ggcmVzaXN0ZW50IGlzIGhldCBtb2VpbGlqayBoZXQgbWF0ZXJpYWFsIHplbGYgdGUgcmVjeWNsZW4uIFdlbCBrYW4gZXIgZ2VrZWtlbiB3b3JkZW4gbmFhciBoZXQgaGVyZ2VicnVpa2VuIHZhbiBkZSBjb2F0aW5ncyBvZiBkZSBob3V0ZW4gYmFzaXMuIEhpZXJ2b29yIG1vZXQgZXIgd2VsIGVlbiBvcGxvc3NpbmcgYmVkYWNodCB3b3JkZW4gb20gZGllIHZhbiBlbGthYXIgdGUgc2NoZWlkZW4gLiBEb29yIGJpanZvb3JiZWVsZCBlZW4gY2xpY2tzeXN0ZWVtIHRlIG9udHdpa2tlbGVuIHdhYXJtZWUgZGUgYmFzaXMgZW4gZGUgY29hdGluZyBtYWtlbGlqayB0ZSBzY2hlaWRlbiBlbiBoZXJnZWJydWlrZW4gemlqbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gem9la2VuIG5hYXIgYmVzdGFhbmRlIHByb2R1Y3RlbiBlbiBvcGxvc3Npbmdlbi4gd2lqIGhlYmJlbiBoaWVyYmlqIGdvZWQgc2FtZW5nZXdlcmt0IGFhbiBoZXQgb25kZXJ6b2VrZW4gbmFhciBtb2dlbGlqa2hlZGVuLjxicj48c3Ryb25nPlByb2Nlc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPlZvb3IgZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9laXRlIGdlc3Rva2VuIGluIGhldCBzY3J1bW1lbiBlbiBoZXQgZG9jdW1lbnRlcmVuIHZhbiBoZXQgcHJvY2VzLiBabyBoZWJiZW4gd2Ugc3ByaW50cyBiaWpnZWhvdWRlbiB2YW4gdHdlZSB3ZWtlbiBlbiBhYW4gaGV0IGJlZ2luIHZhbiBlbGtlIHNwcmludCBnb2VkIGJlcGFhbHQgd2F0IHdlIGRpZSBzcHJpbnQgZ2FhbiBkb2VuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tYjR0ZWNobmllaycsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ2JpbmFzLWxva2FhbCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdrZXV6ZV9rb2ZmaWViZWtlcnMnOiB7XG4gICAgICAgICdkYXRlJzogJzQgRmVicnVhcmkgMjAxOScsXG4gICAgICAgICdpbmRleCc6ICdrZXV6ZV9rb2ZmaWViZWtlcnMnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdLZXV6ZSB2YW4gZGUgS29mZmllYmVrZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaGVlZnQgYWxzIGRvZWwgb20gdmFzdCB0ZSBzdGVsbGVuIHdlbGtlIHNvb3J0IGtvZmZpZWJla2VyIGhldCBtaWxpZXV2cmllbmRlbGlqa3N0IGlzLiBIaWVyYmlqIGhlYmJlbiB3ZSBnZWtla2VuIG5hYXIgb2YgZGUgaW1hZ29cXCdzIHZhbiBkZSB2ZXJzY2hpbGxlbmRlIGtvZmZpZWJla2VycyB0ZXJlY2h0IHdhcyBvZiBuaWV0LiBPb2sgaGViYmVuIHdlIG9uZGVyem9layBnZWRhYW4gbmFhciBiZWRyaWp2ZW4gb2Ygb3JnYW5pc2F0aWVzIHZhbiB2ZXJzY2hpbGxlbmRlIGdyb3RlLCBvbSB0ZSBraWprZW4gb2YgZGUgZ3JvdGUgdmFuIGhldCBiZWRyaWpmIHVpdG1hYWt0IGJpaiBoZXQga2llemVuIHZhbiBlZW4ga29mZmllYmVrZXIgc29vcnQuJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnQmlqIGRpdCBwcm9qZWN0IHN0b25kIGhldCBvbmRlcnpvZWtlbiBjZW50cmFhbC4gVm9vciBkaXQgb25kZXJ6b2VrIGhlYmJlbiB3ZSB2ZWVsIGJlc3RhYW5kZSBvbmRlcnpvZWtlbiBlbiBnZWdldmVucyBnZXpvY2h0LiBPbSBkZXplIGluZm9ybWF0aWUgZ29lZCBvdmVyIHRlIGJyZW5nZW4gaGViYmVuIHdlIG1ldCBHb29nbGUgU2l0ZXMgZWVuIHNpdGUgZ2VtYWFrdCBtZXQgb256ZSBjb25jbHVzaWVzIGVuIGJlcmVkZW5lcmluZ2VuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIHNhbWVuIG1vZXRlbiB3ZXJrZW4gZW4gbW9ldGVuIGNvbW11bmlzZXJlbiBtZXQgZWxrYWFyLiBEb29yZGF0IGRpdCBnb2VkIGlzIGdlZ2FhbiB6aWpuIHdlIHNhbWVuIHRvdCBkZSBjb25jbHVzaWUgZ2Vrb21lbi48YnI+PHN0cm9uZz5LZW5uaXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5PbWRhdCBkaXQgcHJvamVjdCBnZXJpY2h0IGlzIG9wIG9uZGVyem9layB3YXMgaGV0IGJlbGFuZ3JpamsgZGF0IGVyIGdvZWQgZW4gdmVlbCBvbmRlcnpvZWsgd2VyZCBnZWRhYW4uIElrIHZpbmQgZGF0IGRpdCBvbmRlcnpvZWsgZ29lZCBpcyBnZWdhYW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnYmVzdC1jb2ZmZWUtY3VwcycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdmbGV4aWJlbGVfd29vbnZvcm1lbic6IHtcbiAgICAgICAgJ2RhdGUnOiAnNSBOb3ZlbWJlciAyMDE4JyxcbiAgICAgICAgJ2luZGV4JzogJ2ZsZXhpYmVsZV93b29udm9ybWVuJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnRmxleGliZWxlIFdvb252b3JtZW4nLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIGRlIGdlbWVlbnRlIEdvcmluY2hlbS4gRGUgb3BkcmFjaHQgdmFuIGRlIGdlbWVlbnRlIGlzIG9tIGVlbiBmbGV4aWJlbCB3b25pbmdjb21wbGV4IHRlIG9udHdpa2tlbGVuLCB3YWFyaW4gcmVrZW5pbmcgZ2Vob3VkZW4gd29yZHQgbWV0IHZlcnNjaGlsbGVuZGUgaW5rb21lbnNrbGFzc2VuLiBBbHMgcHJvZHVjdCBoZWJiZW4gd2UgZWVuIG1hcXVldHRlIGdlbWFha3QgdmFuIGVlbiBldmVudHVlZWwgcGxhbiB2b29yIHpvXFwnbiB3b29ud2lqay4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlByb2R1Y3RnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZhbmFmIGhldCBiZWdpbiBhZiBhYW4gZ29lZCBuYWdlZGFjaHQgb3ZlciBoZXQgZWluZHByb2R1Y3QsIGRlIG1hcXVldHRlLiBUaWpkZW5zIGhldCBwcm9qZWN0IGhlYmJlbiB3ZSBvb2sgdmVyYmV0ZXJpbmdlbiBlbiBhYW5wYXNzaW5nIGdlbWFha3Qgb20gaGV0IGVpbmRwcm9kdWN0IHRlIHZlcmJldGVyZW4uIEhpZXJkb29yIGhlYmJlbiB3ZSB1aXRlaW5kZWxpamsgZWVuIGdvZWQgcHJvZHVjdCBnZWxldmVyZC48YnI+PHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5UaWpkZW5zIGRpdCBwb3JqZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiBzYW1lbndlcmtlbiBtZXQgaGV0IG9udHdlcnBlbiB2YW4gZGUgbWFxdWV0dGUgZW4gaGV0IG9uZGVyem9lay4gT21kYXQgd2UgaGV0IHNjcnVtbWVuIGdvZWQgaGViYmVuIGJpamdlaG91ZGVuIHdhcyBoZXQgb29rIGdlbWFrZWxpamsgb20gZ29lZCBzYW1lbiB0ZSB3ZXJrZW4gZW4gZGUgdGFrZW4gdGUgdmVyZGVsZW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1nZW1lZW50ZS1nb3JpbmNoZW0nLFxuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmNvbnN0IHByb2plY3RUeXBlcyA9IHtcbiAgICAnZmVhdHVyZWQnOiBbXG4gICAgICAgICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ3BvcnRmb2xpb193ZWJzaXRlJyxcbiAgICBdLFxuICAgICdmcmVldGltZVByb2plY3RzJzogW1xuICAgICAgICAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ3BvcnRmb2xpb193ZWJzaXRlJyxcbiAgICAgICAgJ3I2bG9va3VwX3dlYnNpdGUnLFxuICAgIF0sXG4gICAgJ3RlY2hQcm9qZWN0cyc6IFtcbiAgICAgICAgJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInLFxuICAgICAgICAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdwbGFzdGljX3NvZXAnLFxuICAgICAgICAnYjRfdGVjaG5pZWtfbWV1YmVscycsXG4gICAgICAgICdrZXV6ZV9rb2ZmaWViZWtlcnMnLFxuICAgICAgICAnZmxleGliZWxlX3dvb252b3JtZW4nLFxuICAgIF0sXG59O1xuXG5jb25zdCBwcm9qZWN0VHlwZU5hbWVzID0ge1xuICAgICdmZWF0dXJlZCc6ICdGZWF0dXJlZCcsXG4gICAgJ2ZyZWV0aW1lUHJvamVjdHMnOiAnRnJlZS1UaW1lIFByb2plY3RzJyxcbiAgICAndGVjaFByb2plY3RzJzogJ1RlY2huYXNpdW0gUHJvamVjdHMnLFxufTtcblxuY29uc3QgcGFnZXMgPSB7XG4gICAgJ2Fib3V0Jzoge1xuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnMTE5ODE5QG15bWVyZXdhZGUubmw8YnI+dHljaG9icm91d2VyMzNAZ21haWwuY29tJyxcbiAgICAgICAgICAgICd0aXRsZTEnOiAnRm9ydGVzIEx5Y2V1bSwgR29yaW5jaGVtPGJyPlRlY2huYXNpdW0gamFhciA0LCA1IGVuIDYnLFxuICAgICAgICAgICAgJ3RpdGxlMic6ICc8c3Ryb25nPkdpdEh1YjogPC9zdHJvbmc+aHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlcicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7fVxuICAgIH1cbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG5dO1xuXG5leHBvcnQge1xuICAgIHByb2plY3RzLFxuICAgIHByb2plY3RUeXBlcyxcbiAgICBwcm9qZWN0VHlwZU5hbWVzLFxuICAgIHBhZ2VzLFxuICAgIG1vbnRoTmFtZXNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=