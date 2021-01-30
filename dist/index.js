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
                pageLinks += `<p><strong>${title}: </strong><a href="${link}">${link}</a></p><br>`;
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
        'image': '',
        'links': {
            'View': 'https://www.overwolf.com/app/StatsDB-StatsDB',
        },
        'tags': [
            'featured',
            'app',
        ],
        'title': 'StatsDB Overlay',
    },
    'portfolio_website': {
        'date': 'current',
        'index': 'portfolio_website',
        'image': '',
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
        'image': '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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RUFBRSxvQkFBb0I7SUFDeEMsY0FBYyxFQUFFLHFCQUFxQjtDQUN4QyxDQUFDO0FBb0JFLDRDQUFnQjtBQWxCcEIsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPLEVBQUU7UUFDTCxTQUFTLEVBQUU7WUFDUCxRQUFRLEVBQUUsa0RBQWtEO1lBQzVELFFBQVEsRUFBRSx1REFBdUQ7WUFDakUsUUFBUSxFQUFFLDBEQUEwRDtTQUN2RTtRQUNELFFBQVEsRUFBRSxFQUFFO0tBQ2Y7Q0FDSixDQUFDO0FBVUUsc0JBQUs7QUFSVCxNQUFNLFVBQVUsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTTtJQUN4RSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7Q0FDakUsQ0FBQztBQU9FLGdDQUFVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9vZGstdHMvcHJvamVjdCc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL29kay10cy9uYXZpZ2F0b3InO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vb2RrLXRzL3BhZ2UnO1xuaW1wb3J0IHsgcHJvamVjdHMsIHByb2plY3RUeXBlcywgcGFnZXMgfSBmcm9tICcuLi91dGlsaXRpZXMvdmFyaWFibGVzJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcHJpbnRQYWdlKHBhZ2VJZCk6IFByb21pc2UgPCB2b2lkID4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UocGFnZUlkLCAnJywgW10sIHBhZ2VzW3BhZ2VJZF0uY29udGVudCwgcGFnZXNbcGFnZUlkXS5pbWFnZXMsICcnKTtcblxuICAgICAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgbWFpbkNsYXNzID0gbmV3IE1haW47XG5jb25zdCBuYXZDbGFzcyA9IG5ldyBOYXZpZ2F0b3I7XG5cbmFzeW5jIGZ1bmN0aW9uIHByaW50UHJvamVjdHNOYXYoKTogUHJvbWlzZSA8IHZvaWQgPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RUeXBlIGluIHByb2plY3RUeXBlcykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0VHlwZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RUeXBlc1twcm9qZWN0VHlwZV07XG5cbiAgICAgICAgICAgICAgICBuYXZDbGFzcy5uZXdQcm9qZWN0VHlwZShwcm9qZWN0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmF2UHJvamVjdFR5cGVUaXRsZTogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvamVjdFR5cGUgKyAnIC5uYXZUaXRsZScpITtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2UHJvamVjdFR5cGVUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLm5hdk9iamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQhLnF1ZXJ5U2VsZWN0b3IoJy5uYXZBcnJvdycpIS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA2My42NCA5OC45OTVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4Ni42OCA1OTAuNjc1KSByb3RhdGUoLTkwKVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IS5xdWVyeVNlbGVjdG9yKCcubmF2QXJyb3cnKSEuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgOTguOTk1IDYzLjY0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00OTEuNjggLTI4Ni42OClcIj48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwNS44MjIgMzAwLjgyMikgcm90YXRlKDQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQxLjE3OCAzMzYuMTc4KSByb3RhdGUoLTQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjwvZz48L3N2Zz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCEuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3QocHJvamVjdC5wcm9qZWN0SW5kZXgoKSwgcHJvamVjdC5wcm9qZWN0VGl0bGUoKSwgcHJvamVjdFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcmludFBhZ2UocGFnZUlkOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twYWdlSWRdKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwYWdlSWQpO1xuXG4gICAgICAgICAgICBwcm9qZWN0LnByaW50UHJvamVjdFBhZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DbGFzcy5wcmludFBhZ2UocGFnZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxufVxuXG5wcmludFByb2plY3RzTmF2KClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdlBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlBhZ2UnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XG5cbiAgICAgICAgICAgIG5hdlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmF2UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJpbnRQYWdlKG5hdlBhZ2UuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgcHJvamVjdFR5cGVOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgICBwcml2YXRlIHByb2plY3REaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDb250YWluZXInKSE7O1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3RUeXBlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZmlyc3RQcm9qZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdFR5cGUocHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RUeXBlfScgY2xhc3M9J25hdk9iamVjdCAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2QXJyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA2My42NCA5OC45OTVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4Ni42OCA1OTAuNjc1KSByb3RhdGUoLTkwKVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2SWNvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE0XCIgdmlld0JveD1cIjAgMCA1MTIgMzg0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MDkgLTE1MylcIj48cGF0aCBkPVwiTTQ2NCwxMjhIMjcyTDIxNy4zNyw3My4zN0EzMiwzMiwwLDAsMCwxOTQuNzQsNjRINDhBNDgsNDgsMCwwLDAsMCwxMTJWNDAwYTQ4LDQ4LDAsMCwwLDQ4LDQ4SDQ2NGE0OCw0OCwwLDAsMCw0OC00OFYxNzZBNDgsNDgsMCwwLDAsNDY0LDEyOFptMCwyNzJINDhWMTEySDE4OC4xMmw1NC42Myw1NC42M0EzMiwzMiwwLDAsMCwyNjUuMzgsMTc2SDQ2NFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODA5IDg5KVwiLz48cmVjdCB3aWR0aD1cIjQyNlwiIGhlaWdodD1cIjI4OVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NDggMjE3KVwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvamVjdFR5cGVOYW1lc1twcm9qZWN0VHlwZV19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZEcm9wRG93bkRpdic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdChwcm9qZWN0SW5kZXg6IHN0cmluZywgcHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFR5cGVEaXY6IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb2plY3RUeXBlICsgJyAubmF2RHJvcERvd25EaXYnKSE7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwcm9qZWN0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmludFByb2plY3RQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFByb2plY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdFR5cGVEaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBpZD0nJHtwcm9qZWN0SW5kZXh9JyBjbGFzcz0nbmF2RHJvcERvd24gbmF2UGFnZSAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkljb24nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBtb250aE5hbWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZSB7XHJcbiAgICBwcml2YXRlIHBhZ2VDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwYWdlSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZWRhdGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZVRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHBhZ2VDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIHBhZ2VJbWFnZXM6IE9iamVjdDtcclxuICAgIHByaXZhdGUgcGFnZUxpbmtzOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgdGFnczogQXJyYXk8c3RyaW5nPiwgY29udGVudDogT2JqZWN0LCBpbWFnZXM6IE9iamVjdCwgbGlua3M6IE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJykhO1xyXG4gICAgICAgIHRoaXMucGFnZUlkID0gcGFnZUlkO1xyXG4gICAgICAgIHRoaXMucGFnZWRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMucGFnZVRhZ3MgPSB0YWdzO1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMucGFnZUltYWdlcyA9IGltYWdlcztcclxuICAgICAgICB0aGlzLnBhZ2VMaW5rcyA9IGxpbmtzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50UGFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlZGF0ZSA9PT0gJ2N1cnJlbnQnKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFnZWRhdGUgPSBgJHtkLmdldERhdGUoKX0gJHttb250aE5hbWVzW2QuZ2V0TW9udGgoKV19ICR7ZC5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFnSFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnZVRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFnID0gdGhpcy5wYWdlVGFnc1tpXTtcclxuXHJcbiAgICAgICAgICAgIHRhZ0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0YWcgJHt0YWd9XCI+PHA+JHt0YWd9PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUNvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGl0bGUgaW4gdGhpcy5wYWdlQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlQ29udGVudC5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsaW5lYSA9IHRoaXMucGFnZUNvbnRlbnRbdGl0bGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbWdIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUltYWdlc1t0aXRsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIVE1MID0gYDxkaXYgY2xhc3M9XCJhbGluZWFJbWFnZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9wcm9qZWN0cy8ke3RoaXMucGFnZUltYWdlc1t0aXRsZV19LndlYnBcIiBhbHQ9XCIke3RoaXMucGFnZUltYWdlc1t0aXRsZV19XCI+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGA8aDM+JHt0aXRsZX08L2gzPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlQWxpbmVhICR7dGl0bGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAke2ltZ0hUTUx9XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YWxpbmVhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhZ2VMaW5rcyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0aXRsZSBpbiB0aGlzLnBhZ2VMaW5rcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlTGlua3MuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5wYWdlTGlua3NbdGl0bGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2VMaW5rcyArPSBgPHA+PHN0cm9uZz4ke3RpdGxlfTogPC9zdHJvbmc+PGEgaHJlZj1cIiR7bGlua31cIj4ke2xpbmt9PC9hPjwvcD48YnI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDIgaWQ9XCJwYWdlVGl0bGVcIj4ke3RoaXMucGFnZUlkfTwvaDI+XHJcbiAgICAgICAgPHAgaWQ9XCJwYWdlRGF0ZVwiPiR7dGhpcy5wYWdlZGF0ZX08L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2VUYWdzXCI+JHt0YWdIVE1MfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlQ29udGVudFwiPlxyXG4gICAgICAgICAgICAke3BhZ2VDb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlTGlua3NcIj5cclxuICAgICAgICAgICAgJHtwYWdlTGlua3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdmFyaWFibGVzJztcclxuXHJcbmludGVyZmFjZSBJUHJvamVjdCB7XHJcbiAgICBkYXRlOiBzdHJpbmcsXHJcbiAgICBpbmRleDogc3RyaW5nLFxyXG4gICAgaW1hZ2U6IHN0cmluZyxcclxuICAgIGxpbmtzOiB7XHJcbiAgICAgICAgdmlldzogc3RyaW5nLFxyXG4gICAgICAgIGdpdGh1Yjogc3RyaW5nLFxyXG4gICAgfVxyXG4gICAgdGFnczogQXJyYXk8c3RyaW5nPixcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBPYmplY3QsXHJcbiAgICBpbWFnZXM6IE9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RDbGFzcyB7XHJcbiAgICBwcml2YXRlIHByb2plY3Q6IElQcm9qZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0TmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3QudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3QuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRQcm9qZWN0UGFnZSgpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UodGhpcy5wcm9qZWN0LnRpdGxlLCB0aGlzLnByb2plY3QuZGF0ZSwgdGhpcy5wcm9qZWN0LnRhZ3MsIHRoaXMucHJvamVjdC5jb250ZW50LCB0aGlzLnByb2plY3QuaW1hZ2VzLCB0aGlzLnByb2plY3QubGlua3MpO1xyXG5cclxuICAgICAgICBwYWdlLnByaW50UGFnZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByb2plY3RzID0ge1xuICAgICdzdGF0c2RiX292ZXJsYXknOiB7XG4gICAgICAgICdkYXRlJzogJ2N1cnJlbnQnLFxuICAgICAgICAnaW5kZXgnOiAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2ltYWdlJzogJycsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdWaWV3JzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS9hcHAvU3RhdHNEQi1TdGF0c0RCJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ2FwcCcsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdTdGF0c0RCIE92ZXJsYXknLFxuICAgIH0sXG4gICAgJ3BvcnRmb2xpb193ZWJzaXRlJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2luZGV4JzogJ3BvcnRmb2xpb193ZWJzaXRlJyxcbiAgICAgICAgJ2ltYWdlJzogJycsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9Qb3J0Zm9saW8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdQb3J0Zm9saW8gV2Vic2l0ZScsXG4gICAgfSxcbiAgICAncjZsb29rdXBfd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjkgRGVjZW1iZXIgMjAyMCcsXG4gICAgICAgICdpbmRleCc6ICdyNmxvb2t1cF93ZWJzaXRlJyxcbiAgICAgICAgJ2ltYWdlJzogJycsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9SNkxvb2t1cC1XZWJzaXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdSNkxvb2t1cCBXZWJzaXRlJyxcbiAgICB9LFxuICAgICdhcXVhem9vX2xlZXJkYW0nOiB7XG4gICAgICAgICdkYXRlJzogJ2N1cnJlbnQnLFxuICAgICAgICAnaW5kZXgnOiAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ0dpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL0FxdWFab28tTGVlcmRhbScsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgICAgICdhcmR1aW5vJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0FxdWFab28gTGVlcmRhbScsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgaXMgZWVuIHByb2plY3QgbmFtZW5zIGRlIG9wZHJhY2h0Z2V2ZXIgQXF1YVpvbyBMZWVyZGFtLiBXaWogaGFkZGVuIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIGVlbiBzeXN0ZWVtIHRlIG9udHdpa2tlbGVuIHdhYXJtZWUgQXF1YVpvbyBMZWVyZGFtIGRlIGxpY2h0ZW4gdmFuIGh1biBhcXVhcml1bXMgdmFuIGVlbiBhZnN0YW5kIHRlIGt1bm5lbiBhYW5zdHVyZW4uIEJpbm5lbiBkaXQgcHJvamVjdCBoYWQgaWsgZGUgdGFhayB2YW4gaGV0IHByb2dyYW1tZXJlbiBlbiBvbnR3aWtrZWxlbiB2YW4gaGV0IEFyZHVpbm8gcHJvdG90eXBlLiBEaXQgcHJvamVjdCBoZWIgaWsgc2FtZW5nZXdlcmt0IG1ldCBDYWluIFdvZXN0ZW5idXJnIGVuIERhdmlkIEJhZ2lqbi4nLFxuICAgICAgICAgICAgJ01lZXN0ZXJwcm9lZic6ICdEZSBNZWVzdGVycHJvZWYgaXMgZWVuIGVpbmRleGFtZW5wcm9qZWN0IHZhbiBoZXQgdmFrIE8mTy4gSG9ldCBkb2VsIHZhbiBoZXQgcHJvamVjdCBpcyBkYXQgZGUgbGVlcmluZyBhbGxlIHZhYXJkaWdoZWRlbiBsYWF0IHppZW4gZGllIG5vZGlnIHppam4gb20gZWVuIHRlY2huYXNpdW1sZWVybGluZyB0ZSB6aWpuLiBUaWpkZW5zIGRpdCBwcm9qZWN0IHdvcmR0IGVyIHdlaW5pZyBkb29yIGRlIGRvY2VudGVuIGdlcmVnZWxkIGVuIG1vZXQgZGUgbGVlcmxpbmcgZHVzIHZlZWwgemVsZnN0YW5kaWdoZWlkIGxhdGVuIHppZW4uIEhldCBvbmRlcnpvZWsgZ2VkZWVsdGUgdmFuIGRlIE1lZXN0ZXJwcm9lZiB2b3JtdCBoZXQgcHJvZmllbHdlcmtzdHVrLicsXG4gICAgICAgICAgICAnT3BkcmFjaHQnOiAnQXF1YVpvbyBMZWVyZGFtIGlzIGVlbiBkaWVyZW50dWlkIGluIExlZXJkYW0gbWV0IHJ1aW0gNDAgdml2YXJpYS4gRGUgZGllcmVudHVpbiB3b3JkdCBnZXJ1bnQgZG9vciB2cmlqd2lsbGlnZXJzIHZhbiBkZSBhcXVhcml1bXZlcmVuaWdpbmcgZGUgRGlzY3VzIHVpdCBMZWVyZGFtLiBIaWVyZG9vciB6aWpuIGVyIG5pZXQgYWx0aWpkIGRlemVsZmRlIG1lbnNlbiBhYW53ZXppZyBlbiBpcyBkZSBrYW5zIGdyb290IGRhdCBlciBzb21zIHZlcmdldGVuIHdvcmR0IGRlIGxpY2h0ZW4gdWl0IHRlIHpldHRlbi4gRGFhcm9tIHdpbGxlbiB6ZSBkZSBhcXVhcmlhIHZhbiBhZnN0YW5kIHVpdCBrdW5uZW4gemV0dGVuIGFscyBkYXQgdmVyZ2V0ZW4gaXMuIEVyIGlzIHZvb3IgZ2Vrb3plbiBvbSB0ZSB3ZXJrZW4gbWV0IGVlbiBBcmR1aW5vIE1lZ2EgMjU2MC4nLFxuICAgICAgICAgICAgJ0hldCBQcm9kdWN0JzogJ09ucyBwcm9kdWN0IG1hYWt0IGdlYnJ1aWsgdmFuIGVlbiBBcmR1aW5vIG9tIGRlIGxpY2h0ZW4gdGUga3VubmVuIGJlc3R1cmVuLiBPbSBkZSBBcmR1aW5vIG9wIGFmc3RhbmQgdGUga3VubmVuIGJlc3R1cmVuIGhlYmJlbiB3ZSBtZXQgYmVodWxwIHZhbiBlZW4gRXRoZXJuZXQgU2hpZWxkIGVlbiB3ZWJzZXJ2ZXIgZ2VtYWFrdC4gRGUgd2Vic2VydmVyIGlzIGJlc2NoZXJtdCBtZXQgZWVuIHdhY2h0d29vcmQuIFZpYSBkZSB3ZWJzZXJ2ZXIga3VubmVuIGRlIGxhbXBlbiB2aWEgZGUgQXJkdWlubyB3b3JkZW4gYWFuZ2VzdHV1cmQuIEFxdWFab28gd2lsZGUgb29rIGRlIG1vZ2VsaWpraGVpZCBoZWJiZW4gb20gdGUga3VubmVuIGNvbnRyb2xsZXJlbiB3YW5uZWVyIGVuIHdpZSBkZSBsYW1wZW4gaGVlZnQgYmVzdHV1cmQuIEhpZXJ2b29yIHNsYWFuIHdlIGRlIGxvZ3Mgb3Agb3AgZWVuIFNELWthYXJ0LicsXG4gICAgICAgICAgICAndGl0bGUxJzogJ1Zvb3IgaGV0IHByb2R1Y3QgaGViYmVuIHdlIG9vayBlZW4gYmVodWl6aW5nIG9udHdvcnBlbiBlbiAzRC1nZXByaW50LiBXZSBoZWJiZW4gaGV0IG9udHdlcnAgdm9vciBkZSBiZWh1aXppbmcgZ2VtYWFrdCBtZXQgYmVodWxwIHZhbiBibGVuZGVyLiBIZXQgb250d2VycCBpcyBnZcOreHBvcnRlZXJkIGFscyBTVEwgb20gaGV0IHRlIGt1bm5lbiBwcmludGVuIG1ldCBkZSAzRC1wcmludGVyIG9wIHNjaG9vbC4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlByb2R1Y3RnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5IZXQgYmVsYW5ncmlqa3N0ZSBkZWVsIHZhbiBkaXQgcHJvamVjdCBiZXN0YWF0IHVpdCBoZXQgcHJvdG90eXBlLiBBYW5nZXppZW4gaWsgZGFhciB2ZWVsIHdlcmsgZW4gYWFuZGFjaHQgYWFuIGhlYiBiZXN0ZWVkIHZpbmQgaWsgZGF0IGlrIGdvZWQgcHJvZHVjdGdlcmljaHQgaGViIGdld2Vya3QuPGJyPjxzdHJvbmc+SW5kaXZpZHVlZWwgd2Vya2VuPC9zdHJvbmc+PGJyPkRvb3JkYXQgaGV0IGdyb290c3RlIGRlZWwgdmFuIGRlIHBlcmlvZGUgdmFuIGhldCBwcm9maWVsd2Vya3N0dWsgdGlqZGVucyBkZSBDb3JvbmEgbG9ja2Rvd24gZW4gbWFhdHJlZ2VsZW4gd2FzIGhlYmJlbiB3ZSB2ZWVsIGluZGl2aWR1ZWVsIG1vZXRlbiB3ZXJrZW4uIE9uZGFua3MgZGV6ZSBvbXN0YW5kaWdoZWRlbiBkZW5rIGlrIGRhdCBlciBnb2VkIHplbGZzdGFuZGlnIHRodWlzIGlzIGdld2Vya3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1hcXVhem9vJyxcbiAgICAgICAgICAgICdIZXQgUHJvZHVjdCc6ICdhcmR1aW5vLW1lZ2EyNTYwJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2I0X3RlY2huaWVrX2NpcmN1bGFpcic6IHtcbiAgICAgICAgJ2RhdGUnOiAnMzAgSnVuZSAyMDIwJyxcbiAgICAgICAgJ2luZGV4JzogJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIENpcmN1bGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ0NpcmN1bGFpcmUgTGV2ZXJhbmNpZXInOiAnTWFyaWVrZSBNZWx0ZW4gaGVlZnQgb25zIG5hbWVucyBCNCBUZWNobmllayBkZSBvcGRyYWNodCBnZWdldmVuIG9tIHZhbiBCNCBUZWNobmllayBlZW4gY2lydWxhaXJlIGxldmVyYW5jaWVyIHRlIHdvcmRlbi4gSGV0IHByb2JsZWVtIGlzIGRhdCBoZXQgbWV1YmlsYWlyIHdhdCBCNCB2ZXJ6b3JndCBuaWV0IGdlcmVjeWNsZWQgZW4gd2VpbmlnIGhlcmdlYnJ1aWt0IHdvcmR0LiBCNCB3aWwgZ3JhYWcgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIgd29yZGVuLiBEZSBvcGRyYWNodCB3YXMgZHVzOiBcIldhdCBrdW5uZW4gd2Ugb250d2lra2VsZW4gd2FhcmRvb3IgQjQgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIga2FuIHdvcmRlbj9cIicsXG4gICAgICAgICAgICAnQmV6b2VrIEI0JzogJ1dlIGtvbmRlbiBkb29yIENvcm9uYSBuaWV0IGJpaiBCNCBUZWNobmllayBpbiBHaWVzZW4gb3AgYmV6b2VrLCBtYWFyIHdlIGhlYmJlbiB3ZWwgYWxsZSB2b29yYmVyZWlkaW5nIGdlZGFhbiB2b29yIGhldCBiZXpvZWsuIFdlIGhlYmJlbiBtZWVyZGVyZSB2cmFnZW4gZW4gaWRlZcOrbiBiZWRhY2h0LiBFZW4gZGVlbCB2YW4gZGV6ZSB2cmFnZW4gaGViYmVuIHdlIGxhdGVyIHZpYSBXaGF0c0FwcCB3ZWwga3VubmVuIHZyYWdlbiBlZW4gdmFuIGRlIG1vbnRldXJzIHZhbiBCNCBUZWNobmllaywgUmljaGFyZCB2YW4gQmlqbmVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ1dlIGhlYmJlbiB2b29yYWwgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGFsdGVybmF0aWV2ZW4gdm9vciBkZSBodWlkaWdlIG1hdGVyaWFsZW4gdmFuIGRlIEI0IHRhZmVscy4gRGFhcnZvb3IgaGViYmVuIHdlIGFhbiBkZSBtb250ZXVyIGdldnJhYWdkIHdlbGsgbWF0ZXJpYWFsIGdlYnJ1aWt0IHdvcmQgdm9vciBkZSB0YWZlbCwgZGFhcm9wIGtyZWdlbiB3ZSBoZXQgYW50d29vcmQgZGF0IGhldCBlZW4gc3BhYW5wbGFhdCBpcyBtZXQgZWVuIEhQTCB0b3BsYWFnLiBIUEwgaXMgZWlnZW5saWprIGFsbGVlbiB0aGVybWlzY2ggdGUgcmVjeWNsZW4sIGRhdCBpcyBoZXQgdmVyYnJhbmRlbiB2YW4gaGV0IG1hdGVyaWFhbCBvbSBlciBlbmVyZ2llIHVpdCB0ZSBoYWxlbi4gRWVuIGFuZGVyZSBvcGxvc3Npbmcgem91IGhldCBoZXJnZWJydWlrZW4ga3VubmVuIHppam4gaW4gZWVuIG9mIGFuZGVyZSB2b3JtLicsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ0Rvb3IgQ29yb25hIGlzIGhldCBvbmRlcnpvZWsgbmFhciBkdXVyemFtZSBtYXRlcmlhbGVuIGVuIGNpcmN1bGFpcmUgZWNvbm9taWUga29ydGVyIGRhbiBiZWRvZWx0IGVuIGhlYmJlbiB3ZSBiaWp2b29yYmVlbGQgbmlldCBlZW4gZGVlbCB2YW4gaGV0IHRhZmVsYmxhZCwgd2F0IHdlIGJpaiBCNCB6b3VkZW4gb3BoYWxlbiwga3VubmVuIG9uZGVyem9la2VuLiBXZSB6aWpuIGVyIHdlbCBhY2h0ZXIgZ2Vrb21lbiBkYXQgZXIgZ2VlbiBtYWtrZWxpamtlIG9wbG9zc2luZyBpcyB2b29yIGhldCBwcm9ibGVlbSwgb21kYXQgZGUgdGFmZWxzIHRlZ2VuIHZlZWwgdmVyc2NoaWxsZW5kZSBjaGVtaXNjaGUgc3RvZmZlbiBtb2V0IGt1bm5lbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5NZWRlbiBkb29yIENvcm9uYSBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCB0aHVpcyBtb2V0ZW4gd2Vya2VuLiBabyBoZWIgaWsgdm9vcmFsIGdld2Vya3QgYWFuIGhldCB6b2VrZW4gdmFuIGV2ZW50dWVsZSBtYXRlcmlhbGVuIG9tIGhldCBodWlkaWdlIG1hdGVyaWFhbCB2YW4gZGUgdGFmZWxzIG1lZSB0ZSB2ZXJwbGFhdHNlbi4gT29rIGhlYiBpayBuYWdlZGFjaHQgb3ZlciBvcGxvc3NpbmdlbiB2b29yIGhldCBzY2hlaWRlbiB2YW4gaGV0IGhvdXRlbiBkZWVsIHZhbiBkZSB0YWZlbCBlbiBkZSBwbGFzdGljIGNvYXRpbmcuPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+RGl0IHByb2plY3Qgd2FzIHZvb3JhbCBnZXJpY2h0IG9wIGhldCB6b2VrZW4gbmFhciBlZW4gdGhlb3JldGlzY2hlIG9wbG9zc2luZy4gSGV0IHdhcyBkdXMgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBvbmRlcnpvZWsgZ2VkYWFuIHdlcmQuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ2xvZ28tYjR0ZWNobmllaycsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2xhZGRlci12YW4tbGFuc2luaycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJzoge1xuICAgICAgICAnZGF0ZSc6ICcxMyBEZWNlbWJlciAyMDE5JyxcbiAgICAgICAgJ2luZGV4JzogJ3JvbHN0b2VsX3N0YXBwZW50ZWxsZXInLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUm9sc3RvZWwtUHJvamVjdCcsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUm9sc3RvZWwgU3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBpcyBpbiBvcGRyYWNodCB2YW4gQXJqYW4gU3RlcmssIG5hbWVucyBoZXQgYmVkcmlqZiBNb3Rpb25wb3dlci4gSGllcmJpaiBoZWJiZW4gd2UgZGUgb3BkcmFjaHQgZ2VrcmVnZW4gb20gZWVuIHByb3RvdHlwZSB0ZSBtYWtlbiB2b29yIGVlbiBmaXRuZXNzIHRyYWNrZXIgdm9vciByb2xzdG9lbGdlYnJ1aWtlcnMgZW4gbWVuc2VuIG1ldCBlZW4gZnlzaWVrZSBiZXBlcmtpbmcuIE9tIGRpdCB0ZSByZWFsaXNlcmVuIGhlYmJlbiB3ZSBlZXJzdCBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgd2Vsa2UgbW9nZWxpamtoZWRlbiBkaWUgbWVuc2VuIHdlbCBub2cgaGViYmVuLiBPb2sgaGViYmVuIHdlIG9uZGVyem9layBnZWRhYW4gbmFhciBiZXN0YWFuZGUgb3Bsb3NzaW5nZW4gdm9vci4nLFxuICAgICAgICAgICAgJ1Byb2R1Y3QnOiAnVm9vciBoZXQgZWluZHByb2R1Y3QgaGViYmVuIHdlIGVlbiBwcm90b3R5cGUgZ2VtYWFrdCB2b29yIGVlbiByb2xzdG9lbCBzdGFwcGVudGVsbGVyLiBIaWoga2FuIGhldCBhYW50YWwgcm90YXRpZXMgdmFuIGVlbiByb2xzdG9lbCB0ZWxsZW4gZG9vcm1pZGRlbCB2YW4gZWVuIGd5cm9zY29vcCBhYW5nZXNsb3RlbiBvcCBlZW4gQXJkdWlubyBVbm8uIFdlIGhlYmJlbiBvb2sgZ2VrZW4gbmFhciBlZW4gaGFydHNsYWdtZXRlciwgbWFhciBtZWRlIGRvb3IgYmVwZXJrdGUgdGlqZCBpcyBoZXQgbmlldCBnZWx1a3Qgb20gZGUgaGFydHNsYWdtZXRlciBiZXRyb3V3YmFhciB0ZSBtYWtlbi4gQm92ZW5kaWVuIHppam4gZXIgYWwgYmV0cm91d2JhcmUgaGFydHNsYWdtZXRlcnMgYmVzY2hpa2JhYXIgdm9vciBmeXNpZWsgZ2VoYW5kaWNhcHRlIG1lbnNlbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPkRvb3J6ZXR0ZW48L3N0cm9uZz48YnI+QmlqIGhldCBvbnR3aWtrZWxlbiB2YW4gaGV0IHByb3RvdHlwZSB6aWpuIHdlIHRlZ2VuIHZlZWwgdGVnZW5zbGFnZW4gZ2Vsb3Blbi4gRXIgd2FyZW4gdmVlbCBjb21wbGljYXRpZXMgbWV0IGRlIGd5cm9zY29vcCBlbiBoZXQgdmVyemFtZWxlbiB2YW4gZGUgZ2VnZXZlbnMgdmFuIGRlIGd5cm9zY29vcC4gWm8gaGFkIGRlIGd5cm9zY29vcCBsYXN0IHZhbiBkcmlmdCwgZGl0IGlzIHdhbm5lZXIgZWVuIGd5cm9zY29vcCB1aXQgZGUgbGlqbiByYWFrdC4gRHJpZnQga2FuIHZvb3IgZWVuIGdyb290IGRlZWwgdWl0IGRlIGRhdGEgZ2VmaWx0ZXJkIHdvcmRlbiBkb29yIGVlbiBLYWxtYW4gZmlsdGVyIG9wIGRlIGdlZ2V2ZW5zIHRvZSB0ZSBwYXNzZW4uPGJyPjxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgZ29lZCBnZXdlcmt0IGFhbiBoZXQgb250d2lra2VsZW4gdmFuIGhldCBwcm90b3R5cGUuIEhpZXJ2b29yIGhlYmJlbiB2ZWVsIG5hZ2VkYWNodCBvdmVyIHdhdCBkZSBiZXN0ZSBvcGxvc3Npbmcga2FuIHppam4gdm9vciBoZXQgcHJvdG90eXBlLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tbW90aW9ucG93ZXInLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAncGxhc3RpY19zb2VwJzoge1xuICAgICAgICAnZGF0ZSc6ICcyMyBTZXB0ZW1iZXIgMjAxOScsXG4gICAgICAgICdpbmRleCc6ICdwbGFzdGljX3NvZXAnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdQbGFzaWMgU29lcCcsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdXZSBoZWJiZW4gdmFuIE1hcnRpbiBCYWtrZXIsIG5hbWVucyBoZXQgYmVkcmlqZiBkZSBXYWFyZGVtYWtlcnMsIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIG1ldCB0ZWNobmFzaXVtIGVlbiBrZW5uaXNjZW50cnVtIG9wIHRlIHJpY2h0ZW4uIERpdCBrZW5uaXNjZW50cnVtIGlzIGJlZG9lbHQgb20gaGV0IHBsYXN0aWMgaW4gR29yaW5jaGVtIGluIGthYXJ0IHRlIGJyZW5nZW4uIEhpZXJtZWUga3VubmVuIHZvbGdlbmRlIGtsYXNzZW4gdmVyZGVyIG1ldCBoZXQgb25kZXJ6b2VrZW4gbmFhciBoZXQgcGxhc3RpYyBpbiBHb3JpbmNoZW0gZW4gbmFhciBvcGxvc3NpbmdlbiBlcnZvb3Igem9la2VuLicsXG4gICAgICAgICAgICAnUHJvYmxlZW0nOiAnSW4gaGV0IGJlZ2luIHdhcyBoZXQgcHJvYmxlZW0gbm9nIGVyZyBvbmR1aWRlbGlqay4gT20gZGl0IHByb2JsZWVtIGluIGthYXJ0IHRlIGJyZW5nZW4gaGViYmVuIHdlIGVlbiBvbmRlcnpvZWsgdWl0Z2V2b2VyZCBuYWFyIGhldCBzd2VyZiBwbGFzdGljIGluIEdvcmluY2hlbS4gTWFhciBlZW4gZ3Jvb3QgZGVlbCB2YW4gaGV0IHBsYXN0aWMgaW4gZGUgbmF0dXVyIHZhbHQgb25kZXIgZGUgbWljcm9wbGFzdGljcyBkaWUgbmlldCBtZXQgaGV0IGJsb3RlIG9vZyB0ZSB6aWVuIHppam4uIEFsIGRpdCBtYWFrdCBoZXQgaGVlbCBtb2VpbGlqayBvbSBoZXQgcHJvYmxlZW0gZ29lZCBpbiBrYWFydCB0ZSBicmVuZ2VuLiBPb2sgbWFha3QgZGl0IGhldCBtb2VpbGlqayBvbSBoZXQgcHJvYmxlZW0gb3ZlciB0ZSBicmVuZ2VuIGVuIGNvbW11bmlzZXJlbiBuYWFyIGhldCBwdWJsaWVrLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ0JpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2Ugb29rIHZlZWwgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlc3RhYW5kZSBvcGxvc3NpbmdlbiB2b29yIGhldCBvcHJ1aW1lbiB2YW4gcGxhc3RpYyBpbiBkZSBuYXR1dXIgZW4gbmFhciBkZSBoZXJrb21zdCB2YW4gaGV0IHBsYXN0aWMgZGF0IGRvb3IgR29yaW5jaGVtIGtvbXQuIERhYXJiaWogaXMgZ2VrZWtlbiBuYWFyIGRlIHZlcnNjaGlsbGVuZGUgcml2aWVyZW4gZGllIGxhbmdzIGVuIGRvb3IgR29pbmNoZW0gc3Ryb21lbiBlbiBhbmRlcmUgYnJvbm5lbiB2YW4gcGxhc3RpYy4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPlZvb3IgZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHNhbWVud2Vya2VuIHR1c3NlbiBkZSB2ZXJzY2hpbGxlbmRlIGdyb2VwamVzIG9tIHNhbWVuIMOpw6luIGtlbm5pc2NlbnRydW0gdGUgdmVyemFtZWxlbi4gSGllcmJpaiBoZWJiZW4gd2UgZ29lZCBtb2V0ZW4gY2/DtnJkaW5lcmVuIG9tIG5pZXQgZHViYmVsIG9uZGVyem9layB0dXNzZW4gZGUgZ3JvZXBqZXMgdGUgZG9lbi48YnI+PHN0cm9uZz5LZW5uaXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5EaXQgcHJvamVjdCB3YXMgdm9sbGVkaWcgZ2VyaWNodCBvcCBoZXQgb25kZXJ6b2VrIGRvZW4uIE9tIGhldCBwbGFzdGljIHByb2JsZWVtIGluIEdvcmluY2hlbSBlZXJzdCBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBzYW1lbiBtZXQgYWxsZSBncm9lcGplcyBlZW4gb25kZXJ6b2VrIGdlZGFhbiBnZWRhYW4gbmFhciBob2V2ZWVsIHN3ZXJmIHBsYXN0aWMgZXIgbm91IGVjaHQgaW4gR29yaW5jaGVtIGlzLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAnUHJvYmxlZW0nOiAnbWljcm9wbGF0aWNzLWdvcmluY2hlbScsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2RlLXJpam4tYnJvbicsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19tZXViZWxzJzoge1xuICAgICAgICAnZGF0ZSc6ICcyNCBKdW5lIDIwMTknLFxuICAgICAgICAnaW5kZXgnOiAnYjRfdGVjaG5pZWtfbWV1YmVscycsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIE1ldWJpbGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSBCNCBUZWNobmllayBhZHZpZXMgZW4gaW5mb3JtYXRpZSB0ZSBnZXZlbiBvdmVyIGhvZSBCNCBUZWNobmllayBlZW4gY2lyY3VsYWlyZSBsZXZlcmFuY2llciBrYW4gd29yZGVuLiBCNCBUZWNobmllayBpcyBlZW4gZWxla3Ryb3RlY2huaXNjaCBpbnN0YWxsYXRpZWJlZHJpamYgdm9vciBCaU5hUy1sb2thbGVuLiBaZSBpbnN0YWxsZXJlbiBvbmRlciBhbmRlcmUgZGUgZ2FzIGVuIHdhdGVyIGluc3RhbGxhdGllcywgbWFhciBtYWtlbiBvb2sgc3BlY2lhYWwgbWV1YmlsYWlyIHZvb3IgQmlOYVMgbG9rYWxlbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdXaWogaGViYmVuIGdla296ZW4gb20gdm9vcmFsIG9uZGVyem9layB0ZSBkb2VuIG5hYXIgaGV0IG1pbGlldXZyaWVuZGVsaWprZXIgbWFrZW4gdmFuIGRlIHRhZmVscy4gVWl0IG9ucyBvbmRlcnpvZWsgaXMgZ2VibGVrZW4gZGF0IGRhYXIgdmVlbCB0ZSB2ZXJiZXRlcmVuIGlzLiBabyBpcyBkZSBjb2F0aW5nIHZhbiBkZSB0YWZlbGJsYWRlbiwgZGllIGhldCBvbmRlciBhbmRlcmUgYmVzY2hlcm10IHRlZ2VuIHZlcnNjaGlsbGVuZGUgY2hlbWlzY2hlIHN0b2ZmZW4sIGJpam5hIG9ubW9nZWxpamsgdGUgc2NoZWlkZW4gdmFuIGRlIGhvdXRlbiBiYXNpcy4gTWFhciBvb2sgZGV6ZSBiYXNpcyBpcyBlZW4gbWl6IHZhbiBob3V0c25pcHBlcnMgZW4gbGlqbSBlbiBpcyBkdXMgbW9laWxpamsgdGUgcmVjeWNsZW4nLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdVaXQgb25zIG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZXIgb3AgaGV0IGdlYmllZCB2YW4gZHV1cnphbWUgY2hlbWlzY2ggcmVzaXN0ZW50ZSBjb2F0aW5ncyB3ZWluaWcgb250d2lra2VsZWQgaXMuIE1lZGUgb21kYXQgaGV0IG1hdGVyaWFhbCBjaGVtaXNjaCByZXNpc3RlbnQgaXMgaGV0IG1vZWlsaWprIGhldCBtYXRlcmlhYWwgemVsZiB0ZSByZWN5Y2xlbi4gV2VsIGthbiBlciBnZWtla2VuIHdvcmRlbiBuYWFyIGhldCBoZXJnZWJydWlrZW4gdmFuIGRlIGNvYXRpbmdzIG9mIGRlIGhvdXRlbiBiYXNpcy4gSGllcnZvb3IgbW9ldCBlciB3ZWwgZWVuIG9wbG9zc2luZyBiZWRhY2h0IHdvcmRlbiBvbSBkaWUgdmFuIGVsa2FhciB0ZSBzY2hlaWRlbiAuIERvb3IgYmlqdm9vcmJlZWxkIGVlbiBjbGlja3N5c3RlZW0gdGUgb250d2lra2VsZW4gd2Fhcm1lZSBkZSBiYXNpcyBlbiBkZSBjb2F0aW5nIG1ha2VsaWprIHRlIHNjaGVpZGVuIGVuIGhlcmdlYnJ1aWtlbiB6aWpuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiB6b2VrZW4gbmFhciBiZXN0YWFuZGUgcHJvZHVjdGVuIGVuIG9wbG9zc2luZ2VuLiB3aWogaGViYmVuIGhpZXJiaWogZ29lZCBzYW1lbmdld2Vya3QgYWFuIGhldCBvbmRlcnpvZWtlbiBuYWFyIG1vZ2VsaWpraGVkZW4uPGJyPjxzdHJvbmc+UHJvY2VzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+Vm9vciBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2VpdGUgZ2VzdG9rZW4gaW4gaGV0IHNjcnVtbWVuIGVuIGhldCBkb2N1bWVudGVyZW4gdmFuIGhldCBwcm9jZXMuIFpvIGhlYmJlbiB3ZSBzcHJpbnRzIGJpamdlaG91ZGVuIHZhbiB0d2VlIHdla2VuIGVuIGFhbiBoZXQgYmVnaW4gdmFuIGVsa2Ugc3ByaW50IGdvZWQgYmVwYWFsdCB3YXQgd2UgZGllIHNwcmludCBnYWFuIGRvZW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1iNHRlY2huaWVrJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnYmluYXMtbG9rYWFsJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2tldXplX2tvZmZpZWJla2Vycyc6IHtcbiAgICAgICAgJ2RhdGUnOiAnNCBGZWJydWFyaSAyMDE5JyxcbiAgICAgICAgJ2luZGV4JzogJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0tldXplIHZhbiBkZSBLb2ZmaWViZWtlcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSB2YXN0IHRlIHN0ZWxsZW4gd2Vsa2Ugc29vcnQga29mZmllYmVrZXIgaGV0IG1pbGlldXZyaWVuZGVsaWprc3QgaXMuIEhpZXJiaWogaGViYmVuIHdlIGdla2VrZW4gbmFhciBvZiBkZSBpbWFnb1xcJ3MgdmFuIGRlIHZlcnNjaGlsbGVuZGUga29mZmllYmVrZXJzIHRlcmVjaHQgd2FzIG9mIG5pZXQuIE9vayBoZWJiZW4gd2Ugb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlZHJpanZlbiBvZiBvcmdhbmlzYXRpZXMgdmFuIHZlcnNjaGlsbGVuZGUgZ3JvdGUsIG9tIHRlIGtpamtlbiBvZiBkZSBncm90ZSB2YW4gaGV0IGJlZHJpamYgdWl0bWFha3QgYmlqIGhldCBraWV6ZW4gdmFuIGVlbiBrb2ZmaWViZWtlciBzb29ydC4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdCaWogZGl0IHByb2plY3Qgc3RvbmQgaGV0IG9uZGVyem9la2VuIGNlbnRyYWFsLiBWb29yIGRpdCBvbmRlcnpvZWsgaGViYmVuIHdlIHZlZWwgYmVzdGFhbmRlIG9uZGVyem9la2VuIGVuIGdlZ2V2ZW5zIGdlem9jaHQuIE9tIGRlemUgaW5mb3JtYXRpZSBnb2VkIG92ZXIgdGUgYnJlbmdlbiBoZWJiZW4gd2UgbWV0IEdvb2dsZSBTaXRlcyBlZW4gc2l0ZSBnZW1hYWt0IG1ldCBvbnplIGNvbmNsdXNpZXMgZW4gYmVyZWRlbmVyaW5nZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgc2FtZW4gbW9ldGVuIHdlcmtlbiBlbiBtb2V0ZW4gY29tbXVuaXNlcmVuIG1ldCBlbGthYXIuIERvb3JkYXQgZGl0IGdvZWQgaXMgZ2VnYWFuIHppam4gd2Ugc2FtZW4gdG90IGRlIGNvbmNsdXNpZSBnZWtvbWVuLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPk9tZGF0IGRpdCBwcm9qZWN0IGdlcmljaHQgaXMgb3Agb25kZXJ6b2VrIHdhcyBoZXQgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBlbiB2ZWVsIG9uZGVyem9layB3ZXJkIGdlZGFhbi4gSWsgdmluZCBkYXQgZGl0IG9uZGVyem9layBnb2VkIGlzIGdlZ2Fhbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdiZXN0LWNvZmZlZS1jdXBzJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2ZsZXhpYmVsZV93b29udm9ybWVuJzoge1xuICAgICAgICAnZGF0ZSc6ICc1IE5vdmVtYmVyIDIwMTgnLFxuICAgICAgICAnaW5kZXgnOiAnZmxleGliZWxlX3dvb252b3JtZW4nLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdGbGV4aWJlbGUgV29vbnZvcm1lbicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBpcyBpbiBvcGRyYWNodCB2YW4gZGUgZ2VtZWVudGUgR29yaW5jaGVtLiBEZSBvcGRyYWNodCB2YW4gZGUgZ2VtZWVudGUgaXMgb20gZWVuIGZsZXhpYmVsIHdvbmluZ2NvbXBsZXggdGUgb250d2lra2VsZW4sIHdhYXJpbiByZWtlbmluZyBnZWhvdWRlbiB3b3JkdCBtZXQgdmVyc2NoaWxsZW5kZSBpbmtvbWVuc2tsYXNzZW4uIEFscyBwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gbWFxdWV0dGUgZ2VtYWFrdCB2YW4gZWVuIGV2ZW50dWVlbCBwbGFuIHZvb3Igem9cXCduIHdvb253aWprLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmFuYWYgaGV0IGJlZ2luIGFmIGFhbiBnb2VkIG5hZ2VkYWNodCBvdmVyIGhldCBlaW5kcHJvZHVjdCwgZGUgbWFxdWV0dGUuIFRpamRlbnMgaGV0IHByb2plY3QgaGViYmVuIHdlIG9vayB2ZXJiZXRlcmluZ2VuIGVuIGFhbnBhc3NpbmcgZ2VtYWFrdCBvbSBoZXQgZWluZHByb2R1Y3QgdGUgdmVyYmV0ZXJlbi4gSGllcmRvb3IgaGViYmVuIHdlIHVpdGVpbmRlbGlqayBlZW4gZ29lZCBwcm9kdWN0IGdlbGV2ZXJkLjxicj48c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPlRpamRlbnMgZGl0IHBvcmplY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHNhbWVud2Vya2VuIG1ldCBoZXQgb250d2VycGVuIHZhbiBkZSBtYXF1ZXR0ZSBlbiBoZXQgb25kZXJ6b2VrLiBPbWRhdCB3ZSBoZXQgc2NydW1tZW4gZ29lZCBoZWJiZW4gYmlqZ2Vob3VkZW4gd2FzIGhldCBvb2sgZ2VtYWtlbGlqayBvbSBnb2VkIHNhbWVuIHRlIHdlcmtlbiBlbiBkZSB0YWtlbiB0ZSB2ZXJkZWxlbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWdlbWVlbnRlLWdvcmluY2hlbScsXG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVzID0ge1xuICAgICdmZWF0dXJlZCc6IFtcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgIF0sXG4gICAgJ2ZyZWV0aW1lUHJvamVjdHMnOiBbXG4gICAgICAgICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgICAgICAncjZsb29rdXBfd2Vic2l0ZScsXG4gICAgXSxcbiAgICAndGVjaFByb2plY3RzJzogW1xuICAgICAgICAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ3BsYXN0aWNfc29lcCcsXG4gICAgICAgICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgXSxcbn07XG5cbmNvbnN0IHByb2plY3RUeXBlTmFtZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogJ0ZlYXR1cmVkJyxcbiAgICAnZnJlZXRpbWVQcm9qZWN0cyc6ICdGcmVlLVRpbWUgUHJvamVjdHMnLFxuICAgICd0ZWNoUHJvamVjdHMnOiAnVGVjaG5hc2l1bSBQcm9qZWN0cycsXG59O1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgICAnYWJvdXQnOiB7XG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICcxMTk4MTlAbXltZXJld2FkZS5ubDxicj50eWNob2Jyb3V3ZXIzM0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdGb3J0ZXMgTHljZXVtLCBHb3JpbmNoZW08YnI+VGVjaG5hc2l1bSBqYWFyIDQsIDUgZW4gNicsXG4gICAgICAgICAgICAndGl0bGUyJzogJzxzdHJvbmc+R2l0SHViOiA8L3N0cm9uZz5odHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHt9XG4gICAgfVxufTtcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbl07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHMsXG4gICAgcHJvamVjdFR5cGVzLFxuICAgIHByb2plY3RUeXBlTmFtZXMsXG4gICAgcGFnZXMsXG4gICAgbW9udGhOYW1lc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==