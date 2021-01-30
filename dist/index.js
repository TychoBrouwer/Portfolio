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
                const page = new page_1.Page(pageId, '', [], variables_1.pages[pageId].content, variables_1.pages[pageId].images);
                console.log(pageId);
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
    constructor(pageId, date, tags, content, images) {
        this.pageContainer = document.getElementById('mainContainer');
        this.pageId = pageId;
        this.pagedate = date;
        this.pageTags = tags;
        this.pageContent = content;
        this.pageImages = images;
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
        this.pageContainer.innerHTML = `
        <h2 id="pageTitle">${this.pageId}</h2>
        <p id="pageDate">${this.pagedate}</p>
        <div id="pageTags">${tagHTML}</div>
        <div id="pageContent">
            ${pageContent}
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
        const page = new page_1.Page(this.project.title, this.project.date, this.project.tags, this.project.content, this.project.images);
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
            'GitHub': 'https://github.com/TychoBrouwer',
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
            'GitHub': 'https://github.com/TychoBrouwer/R6Lookup',
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
        'links': {},
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
            'title2': 'https://github.com/TychoBrouwer',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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eEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0NBQ2pFLENBQUM7QUFPRSxnQ0FBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFByb2plY3RDbGFzcyB9IGZyb20gJy4vb2RrLXRzL3Byb2plY3QnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9vZGstdHMvbmF2aWdhdG9yJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL29kay10cy9wYWdlJztcbmltcG9ydCB7IHByb2plY3RzLCBwcm9qZWN0VHlwZXMsIHBhZ2VzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5cbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHByaW50UGFnZShwYWdlSWQpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHBhZ2VJZCwgJycsIFtdLCBwYWdlc1twYWdlSWRdLmNvbnRlbnQsIHBhZ2VzW3BhZ2VJZF0uaW1hZ2VzKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZUlkKTtcblxuICAgICAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgbWFpbkNsYXNzID0gbmV3IE1haW47XG5jb25zdCBuYXZDbGFzcyA9IG5ldyBOYXZpZ2F0b3I7XG5cbmFzeW5jIGZ1bmN0aW9uIHByaW50UHJvamVjdHNOYXYoKTogUHJvbWlzZSA8IHZvaWQgPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RUeXBlIGluIHByb2plY3RUeXBlcykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0VHlwZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RUeXBlc1twcm9qZWN0VHlwZV07XG5cbiAgICAgICAgICAgICAgICBuYXZDbGFzcy5uZXdQcm9qZWN0VHlwZShwcm9qZWN0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmF2UHJvamVjdFR5cGVUaXRsZTogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvamVjdFR5cGUgKyAnIC5uYXZUaXRsZScpITtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2UHJvamVjdFR5cGVUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLm5hdk9iamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQhLnF1ZXJ5U2VsZWN0b3IoJy5uYXZBcnJvdycpIS5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA2My42NCA5OC45OTVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4Ni42OCA1OTAuNjc1KSByb3RhdGUoLTkwKVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IS5xdWVyeVNlbGVjdG9yKCcubmF2QXJyb3cnKSEuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgOTguOTk1IDYzLjY0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00OTEuNjggLTI4Ni42OClcIj48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwNS44MjIgMzAwLjgyMikgcm90YXRlKDQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQxLjE3OCAzMzYuMTc4KSByb3RhdGUoLTQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjwvZz48L3N2Zz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCEuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3QocHJvamVjdC5wcm9qZWN0SW5kZXgoKSwgcHJvamVjdC5wcm9qZWN0VGl0bGUoKSwgcHJvamVjdFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcmludFBhZ2UocGFnZUlkOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twYWdlSWRdKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwYWdlSWQpO1xuXG4gICAgICAgICAgICBwcm9qZWN0LnByaW50UHJvamVjdFBhZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DbGFzcy5wcmludFBhZ2UocGFnZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9KVxufVxuXG5wcmludFByb2plY3RzTmF2KClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdlBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlBhZ2UnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdlBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XG5cbiAgICAgICAgICAgIG5hdlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmF2UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgcHJpbnRQYWdlKG5hdlBhZ2UuaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pO1xuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgcHJvamVjdFR5cGVOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgICBwcml2YXRlIHByb2plY3REaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDb250YWluZXInKSE7O1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3RUeXBlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZmlyc3RQcm9qZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdFR5cGUocHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RUeXBlfScgY2xhc3M9J25hdk9iamVjdCAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2QXJyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA2My42NCA5OC45OTVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI4Ni42OCA1OTAuNjc1KSByb3RhdGUoLTkwKVwiPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTA1LjgyMiAzMDAuODIyKSByb3RhdGUoNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NDEuMTc4IDMzNi4xNzgpIHJvdGF0ZSgtNDUpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2SWNvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE0XCIgdmlld0JveD1cIjAgMCA1MTIgMzg0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MDkgLTE1MylcIj48cGF0aCBkPVwiTTQ2NCwxMjhIMjcyTDIxNy4zNyw3My4zN0EzMiwzMiwwLDAsMCwxOTQuNzQsNjRINDhBNDgsNDgsMCwwLDAsMCwxMTJWNDAwYTQ4LDQ4LDAsMCwwLDQ4LDQ4SDQ2NGE0OCw0OCwwLDAsMCw0OC00OFYxNzZBNDgsNDgsMCwwLDAsNDY0LDEyOFptMCwyNzJINDhWMTEySDE4OC4xMmw1NC42Myw1NC42M0EzMiwzMiwwLDAsMCwyNjUuMzgsMTc2SDQ2NFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODA5IDg5KVwiLz48cmVjdCB3aWR0aD1cIjQyNlwiIGhlaWdodD1cIjI4OVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NDggMjE3KVwiLz48L2c+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvamVjdFR5cGVOYW1lc1twcm9qZWN0VHlwZV19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZEcm9wRG93bkRpdic+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdChwcm9qZWN0SW5kZXg6IHN0cmluZywgcHJvamVjdE5hbWU6IHN0cmluZywgcHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFR5cGVEaXY6IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb2plY3RUeXBlICsgJyAubmF2RHJvcERvd25EaXYnKSE7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhwcm9qZWN0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5wcmludFByb2plY3RQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFByb2plY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdFR5cGVEaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBpZD0nJHtwcm9qZWN0SW5kZXh9JyBjbGFzcz0nbmF2RHJvcERvd24gbmF2UGFnZSAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2VGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkljb24nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBtb250aE5hbWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZSB7XHJcbiAgICBwcml2YXRlIHBhZ2VDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwYWdlSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZWRhdGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFnZVRhZ3M6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHBhZ2VDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwcml2YXRlIHBhZ2VJbWFnZXM6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlSWQ6IHN0cmluZywgZGF0ZTogc3RyaW5nLCB0YWdzOiBBcnJheTxzdHJpbmc+LCBjb250ZW50OiBPYmplY3QsIGltYWdlczogT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKSE7XHJcbiAgICAgICAgdGhpcy5wYWdlSWQgPSBwYWdlSWQ7XHJcbiAgICAgICAgdGhpcy5wYWdlZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5wYWdlVGFncyA9IHRhZ3M7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5wYWdlSW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50UGFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlZGF0ZSA9PT0gJ2N1cnJlbnQnKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFnZWRhdGUgPSBgJHtkLmdldERhdGUoKX0gJHttb250aE5hbWVzW2QuZ2V0TW9udGgoKV19ICR7ZC5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFnSFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnZVRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFnID0gdGhpcy5wYWdlVGFnc1tpXTtcclxuXHJcbiAgICAgICAgICAgIHRhZ0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJ0YWcgJHt0YWd9XCI+PHA+JHt0YWd9PC9wPjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUNvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGl0bGUgaW4gdGhpcy5wYWdlQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlQ29udGVudC5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsaW5lYSA9IHRoaXMucGFnZUNvbnRlbnRbdGl0bGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbWdIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUltYWdlc1t0aXRsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIVE1MID0gYDxkaXYgY2xhc3M9XCJhbGluZWFJbWFnZVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9wcm9qZWN0cy8ke3RoaXMucGFnZUltYWdlc1t0aXRsZV19LndlYnBcIiBhbHQ9XCIke3RoaXMucGFnZUltYWdlc1t0aXRsZV19XCI+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGA8aDM+JHt0aXRsZX08L2gzPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlQWxpbmVhICR7dGl0bGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAke2ltZ0hUTUx9XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YWxpbmVhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDIgaWQ9XCJwYWdlVGl0bGVcIj4ke3RoaXMucGFnZUlkfTwvaDI+XHJcbiAgICAgICAgPHAgaWQ9XCJwYWdlRGF0ZVwiPiR7dGhpcy5wYWdlZGF0ZX08L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2VUYWdzXCI+JHt0YWdIVE1MfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlQ29udGVudFwiPlxyXG4gICAgICAgICAgICAke3BhZ2VDb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb2plY3Qge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgaW5kZXg6IHN0cmluZyxcclxuICAgIGltYWdlOiBzdHJpbmcsXHJcbiAgICBsaW5rczoge1xyXG4gICAgICAgIHZpZXc6IHN0cmluZyxcclxuICAgICAgICBnaXRodWI6IHN0cmluZyxcclxuICAgIH1cclxuICAgIHRhZ3M6IEFycmF5PHN0cmluZz4sXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29udGVudDogT2JqZWN0LFxyXG4gICAgaW1hZ2VzOiBPYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0OiBJUHJvamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdE5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50UHJvamVjdFBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHRoaXMucHJvamVjdC50aXRsZSwgdGhpcy5wcm9qZWN0LmRhdGUsIHRoaXMucHJvamVjdC50YWdzLCB0aGlzLnByb2plY3QuY29udGVudCwgdGhpcy5wcm9qZWN0LmltYWdlcyk7XHJcblxyXG4gICAgICAgIHBhZ2UucHJpbnRQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgcHJvamVjdHMgPSB7XG4gICAgJ3N0YXRzZGJfb3ZlcmxheSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnY3VycmVudCcsXG4gICAgICAgICdpbmRleCc6ICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAnaW1hZ2UnOiAnJyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ1ZpZXcnOiAnaHR0cHM6Ly93d3cub3ZlcndvbGYuY29tL2FwcC9TdGF0c0RCLVN0YXRzREInLFxuICAgICAgICAgICAgJ0dpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ2FwcCcsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdTdGF0c0RCIE92ZXJsYXknLFxuICAgIH0sXG4gICAgJ3BvcnRmb2xpb193ZWJzaXRlJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2luZGV4JzogJ3BvcnRmb2xpb193ZWJzaXRlJyxcbiAgICAgICAgJ2ltYWdlJzogJycsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9Qb3J0Zm9saW8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdQb3J0Zm9saW8gV2Vic2l0ZScsXG4gICAgfSxcbiAgICAncjZsb29rdXBfd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjkgRGVjZW1iZXIgMjAyMCcsXG4gICAgICAgICdpbmRleCc6ICdyNmxvb2t1cF93ZWJzaXRlJyxcbiAgICAgICAgJ2ltYWdlJzogJycsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9SNkxvb2t1cCcsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3dlYnNpdGUnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUjZMb29rdXAgV2Vic2l0ZScsXG4gICAgfSxcbiAgICAnYXF1YXpvb19sZWVyZGFtJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2luZGV4JzogJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlci9BcXVhWm9vLUxlZXJkYW0nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgICAgICAnYXJkdWlubycsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdBcXVhWm9vIExlZXJkYW0nLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IGlzIGVlbiBwcm9qZWN0IG5hbWVucyBkZSBvcGRyYWNodGdldmVyIEFxdWFab28gTGVlcmRhbS4gV2lqIGhhZGRlbiBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBlZW4gc3lzdGVlbSB0ZSBvbnR3aWtrZWxlbiB3YWFybWVlIEFxdWFab28gTGVlcmRhbSBkZSBsaWNodGVuIHZhbiBodW4gYXF1YXJpdW1zIHZhbiBlZW4gYWZzdGFuZCB0ZSBrdW5uZW4gYWFuc3R1cmVuLiBCaW5uZW4gZGl0IHByb2plY3QgaGFkIGlrIGRlIHRhYWsgdmFuIGhldCBwcm9ncmFtbWVyZW4gZW4gb250d2lra2VsZW4gdmFuIGhldCBBcmR1aW5vIHByb3RvdHlwZS4gRGl0IHByb2plY3QgaGViIGlrIHNhbWVuZ2V3ZXJrdCBtZXQgQ2FpbiBXb2VzdGVuYnVyZyBlbiBEYXZpZCBCYWdpam4uJyxcbiAgICAgICAgICAgICdNZWVzdGVycHJvZWYnOiAnRGUgTWVlc3RlcnByb2VmIGlzIGVlbiBlaW5kZXhhbWVucHJvamVjdCB2YW4gaGV0IHZhayBPJk8uIEhvZXQgZG9lbCB2YW4gaGV0IHByb2plY3QgaXMgZGF0IGRlIGxlZXJpbmcgYWxsZSB2YWFyZGlnaGVkZW4gbGFhdCB6aWVuIGRpZSBub2RpZyB6aWpuIG9tIGVlbiB0ZWNobmFzaXVtbGVlcmxpbmcgdGUgemlqbi4gVGlqZGVucyBkaXQgcHJvamVjdCB3b3JkdCBlciB3ZWluaWcgZG9vciBkZSBkb2NlbnRlbiBnZXJlZ2VsZCBlbiBtb2V0IGRlIGxlZXJsaW5nIGR1cyB2ZWVsIHplbGZzdGFuZGlnaGVpZCBsYXRlbiB6aWVuLiBIZXQgb25kZXJ6b2VrIGdlZGVlbHRlIHZhbiBkZSBNZWVzdGVycHJvZWYgdm9ybXQgaGV0IHByb2ZpZWx3ZXJrc3R1ay4nLFxuICAgICAgICAgICAgJ09wZHJhY2h0JzogJ0FxdWFab28gTGVlcmRhbSBpcyBlZW4gZGllcmVudHVpZCBpbiBMZWVyZGFtIG1ldCBydWltIDQwIHZpdmFyaWEuIERlIGRpZXJlbnR1aW4gd29yZHQgZ2VydW50IGRvb3IgdnJpandpbGxpZ2VycyB2YW4gZGUgYXF1YXJpdW12ZXJlbmlnaW5nIGRlIERpc2N1cyB1aXQgTGVlcmRhbS4gSGllcmRvb3IgemlqbiBlciBuaWV0IGFsdGlqZCBkZXplbGZkZSBtZW5zZW4gYWFud2V6aWcgZW4gaXMgZGUga2FucyBncm9vdCBkYXQgZXIgc29tcyB2ZXJnZXRlbiB3b3JkdCBkZSBsaWNodGVuIHVpdCB0ZSB6ZXR0ZW4uIERhYXJvbSB3aWxsZW4gemUgZGUgYXF1YXJpYSB2YW4gYWZzdGFuZCB1aXQga3VubmVuIHpldHRlbiBhbHMgZGF0IHZlcmdldGVuIGlzLiBFciBpcyB2b29yIGdla296ZW4gb20gdGUgd2Vya2VuIG1ldCBlZW4gQXJkdWlubyBNZWdhIDI1NjAuJyxcbiAgICAgICAgICAgICdIZXQgUHJvZHVjdCc6ICdPbnMgcHJvZHVjdCBtYWFrdCBnZWJydWlrIHZhbiBlZW4gQXJkdWlubyBvbSBkZSBsaWNodGVuIHRlIGt1bm5lbiBiZXN0dXJlbi4gT20gZGUgQXJkdWlubyBvcCBhZnN0YW5kIHRlIGt1bm5lbiBiZXN0dXJlbiBoZWJiZW4gd2UgbWV0IGJlaHVscCB2YW4gZWVuIEV0aGVybmV0IFNoaWVsZCBlZW4gd2Vic2VydmVyIGdlbWFha3QuIERlIHdlYnNlcnZlciBpcyBiZXNjaGVybXQgbWV0IGVlbiB3YWNodHdvb3JkLiBWaWEgZGUgd2Vic2VydmVyIGt1bm5lbiBkZSBsYW1wZW4gdmlhIGRlIEFyZHVpbm8gd29yZGVuIGFhbmdlc3R1dXJkLiBBcXVhWm9vIHdpbGRlIG9vayBkZSBtb2dlbGlqa2hlaWQgaGViYmVuIG9tIHRlIGt1bm5lbiBjb250cm9sbGVyZW4gd2FubmVlciBlbiB3aWUgZGUgbGFtcGVuIGhlZWZ0IGJlc3R1dXJkLiBIaWVydm9vciBzbGFhbiB3ZSBkZSBsb2dzIG9wIG9wIGVlbiBTRC1rYWFydC4nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdWb29yIGhldCBwcm9kdWN0IGhlYmJlbiB3ZSBvb2sgZWVuIGJlaHVpemluZyBvbnR3b3JwZW4gZW4gM0QtZ2VwcmludC4gV2UgaGViYmVuIGhldCBvbnR3ZXJwIHZvb3IgZGUgYmVodWl6aW5nIGdlbWFha3QgbWV0IGJlaHVscCB2YW4gYmxlbmRlci4gSGV0IG9udHdlcnAgaXMgZ2XDq3hwb3J0ZWVyZCBhbHMgU1RMIG9tIGhldCB0ZSBrdW5uZW4gcHJpbnRlbiBtZXQgZGUgM0QtcHJpbnRlciBvcCBzY2hvb2wuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+SGV0IGJlbGFuZ3JpamtzdGUgZGVlbCB2YW4gZGl0IHByb2plY3QgYmVzdGFhdCB1aXQgaGV0IHByb3RvdHlwZS4gQWFuZ2V6aWVuIGlrIGRhYXIgdmVlbCB3ZXJrIGVuIGFhbmRhY2h0IGFhbiBoZWIgYmVzdGVlZCB2aW5kIGlrIGRhdCBpayBnb2VkIHByb2R1Y3RnZXJpY2h0IGhlYiBnZXdlcmt0Ljxicj48c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5Eb29yZGF0IGhldCBncm9vdHN0ZSBkZWVsIHZhbiBkZSBwZXJpb2RlIHZhbiBoZXQgcHJvZmllbHdlcmtzdHVrIHRpamRlbnMgZGUgQ29yb25hIGxvY2tkb3duIGVuIG1hYXRyZWdlbGVuIHdhcyBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCBtb2V0ZW4gd2Vya2VuLiBPbmRhbmtzIGRlemUgb21zdGFuZGlnaGVkZW4gZGVuayBpayBkYXQgZXIgZ29lZCB6ZWxmc3RhbmRpZyB0aHVpcyBpcyBnZXdlcmt0LicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tYXF1YXpvbycsXG4gICAgICAgICAgICAnSGV0IFByb2R1Y3QnOiAnYXJkdWluby1tZWdhMjU2MCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInOiB7XG4gICAgICAgICdkYXRlJzogJzMwIEp1bmUgMjAyMCcsXG4gICAgICAgICdpbmRleCc6ICdiNF90ZWNobmlla19jaXJjdWxhaXInLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdCNCBUZWNobmllayBDaXJjdWxhaXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ01hcmlla2UgTWVsdGVuIGhlZWZ0IG9ucyBuYW1lbnMgQjQgVGVjaG5pZWsgZGUgb3BkcmFjaHQgZ2VnZXZlbiBvbSB2YW4gQjQgVGVjaG5pZWsgZWVuIGNpcnVsYWlyZSBsZXZlcmFuY2llciB0ZSB3b3JkZW4uIEhldCBwcm9ibGVlbSBpcyBkYXQgaGV0IG1ldWJpbGFpciB3YXQgQjQgdmVyem9yZ3QgbmlldCBnZXJlY3ljbGVkIGVuIHdlaW5pZyBoZXJnZWJydWlrdCB3b3JkdC4gQjQgd2lsIGdyYWFnIGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIHdvcmRlbi4gRGUgb3BkcmFjaHQgd2FzIGR1czogXCJXYXQga3VubmVuIHdlIG9udHdpa2tlbGVuIHdhYXJkb29yIEI0IGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIGthbiB3b3JkZW4/XCInLFxuICAgICAgICAgICAgJ0Jlem9layBCNCc6ICdXZSBrb25kZW4gZG9vciBDb3JvbmEgbmlldCBiaWogQjQgVGVjaG5pZWsgaW4gR2llc2VuIG9wIGJlem9laywgbWFhciB3ZSBoZWJiZW4gd2VsIGFsbGUgdm9vcmJlcmVpZGluZyBnZWRhYW4gdm9vciBoZXQgYmV6b2VrLiBXZSBoZWJiZW4gbWVlcmRlcmUgdnJhZ2VuIGVuIGlkZWXDq24gYmVkYWNodC4gRWVuIGRlZWwgdmFuIGRlemUgdnJhZ2VuIGhlYmJlbiB3ZSBsYXRlciB2aWEgV2hhdHNBcHAgd2VsIGt1bm5lbiB2cmFnZW4gZWVuIHZhbiBkZSBtb250ZXVycyB2YW4gQjQgVGVjaG5pZWssIFJpY2hhcmQgdmFuIEJpam5lbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdXZSBoZWJiZW4gdm9vcmFsIG9uZGVyem9layBnZWRhYW4gbmFhciBhbHRlcm5hdGlldmVuIHZvb3IgZGUgaHVpZGlnZSBtYXRlcmlhbGVuIHZhbiBkZSBCNCB0YWZlbHMuIERhYXJ2b29yIGhlYmJlbiB3ZSBhYW4gZGUgbW9udGV1ciBnZXZyYWFnZCB3ZWxrIG1hdGVyaWFhbCBnZWJydWlrdCB3b3JkIHZvb3IgZGUgdGFmZWwsIGRhYXJvcCBrcmVnZW4gd2UgaGV0IGFudHdvb3JkIGRhdCBoZXQgZWVuIHNwYWFucGxhYXQgaXMgbWV0IGVlbiBIUEwgdG9wbGFhZy4gSFBMIGlzIGVpZ2VubGlqayBhbGxlZW4gdGhlcm1pc2NoIHRlIHJlY3ljbGVuLCBkYXQgaXMgaGV0IHZlcmJyYW5kZW4gdmFuIGhldCBtYXRlcmlhYWwgb20gZXIgZW5lcmdpZSB1aXQgdGUgaGFsZW4uIEVlbiBhbmRlcmUgb3Bsb3NzaW5nIHpvdSBoZXQgaGVyZ2VicnVpa2VuIGt1bm5lbiB6aWpuIGluIGVlbiBvZiBhbmRlcmUgdm9ybS4nLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdEb29yIENvcm9uYSBpcyBoZXQgb25kZXJ6b2VrIG5hYXIgZHV1cnphbWUgbWF0ZXJpYWxlbiBlbiBjaXJjdWxhaXJlIGVjb25vbWllIGtvcnRlciBkYW4gYmVkb2VsdCBlbiBoZWJiZW4gd2UgYmlqdm9vcmJlZWxkIG5pZXQgZWVuIGRlZWwgdmFuIGhldCB0YWZlbGJsYWQsIHdhdCB3ZSBiaWogQjQgem91ZGVuIG9waGFsZW4sIGt1bm5lbiBvbmRlcnpvZWtlbi4gV2UgemlqbiBlciB3ZWwgYWNodGVyIGdla29tZW4gZGF0IGVyIGdlZW4gbWFra2VsaWprZSBvcGxvc3NpbmcgaXMgdm9vciBoZXQgcHJvYmxlZW0sIG9tZGF0IGRlIHRhZmVscyB0ZWdlbiB2ZWVsIHZlcnNjaGlsbGVuZGUgY2hlbWlzY2hlIHN0b2ZmZW4gbW9ldCBrdW5uZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5JbmRpdmlkdWVlbCB3ZXJrZW48L3N0cm9uZz48YnI+TWVkZW4gZG9vciBDb3JvbmEgaGViYmVuIHdlIHZlZWwgaW5kaXZpZHVlZWwgdGh1aXMgbW9ldGVuIHdlcmtlbi4gWm8gaGViIGlrIHZvb3JhbCBnZXdlcmt0IGFhbiBoZXQgem9la2VuIHZhbiBldmVudHVlbGUgbWF0ZXJpYWxlbiBvbSBoZXQgaHVpZGlnZSBtYXRlcmlhYWwgdmFuIGRlIHRhZmVscyBtZWUgdGUgdmVycGxhYXRzZW4uIE9vayBoZWIgaWsgbmFnZWRhY2h0IG92ZXIgb3Bsb3NzaW5nZW4gdm9vciBoZXQgc2NoZWlkZW4gdmFuIGhldCBob3V0ZW4gZGVlbCB2YW4gZGUgdGFmZWwgZW4gZGUgcGxhc3RpYyBjb2F0aW5nLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkRpdCBwcm9qZWN0IHdhcyB2b29yYWwgZ2VyaWNodCBvcCBoZXQgem9la2VuIG5hYXIgZWVuIHRoZW9yZXRpc2NoZSBvcGxvc3NpbmcuIEhldCB3YXMgZHVzIGJlbGFuZ3JpamsgZGF0IGVyIGdvZWQgb25kZXJ6b2VrIGdlZGFhbiB3ZXJkLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAnQ2lyY3VsYWlyZSBMZXZlcmFuY2llcic6ICdsb2dvLWI0dGVjaG5pZWsnLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdsYWRkZXItdmFuLWxhbnNpbmsnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcic6IHtcbiAgICAgICAgJ2RhdGUnOiAnMTMgRGVjZW1iZXIgMjAxOScsXG4gICAgICAgICdpbmRleCc6ICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUm9sc3RvZWwgU3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBpcyBpbiBvcGRyYWNodCB2YW4gQXJqYW4gU3RlcmssIG5hbWVucyBoZXQgYmVkcmlqZiBNb3Rpb25wb3dlci4gSGllcmJpaiBoZWJiZW4gd2UgZGUgb3BkcmFjaHQgZ2VrcmVnZW4gb20gZWVuIHByb3RvdHlwZSB0ZSBtYWtlbiB2b29yIGVlbiBmaXRuZXNzIHRyYWNrZXIgdm9vciByb2xzdG9lbGdlYnJ1aWtlcnMgZW4gbWVuc2VuIG1ldCBlZW4gZnlzaWVrZSBiZXBlcmtpbmcuIE9tIGRpdCB0ZSByZWFsaXNlcmVuIGhlYmJlbiB3ZSBlZXJzdCBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgd2Vsa2UgbW9nZWxpamtoZWRlbiBkaWUgbWVuc2VuIHdlbCBub2cgaGViYmVuLiBPb2sgaGViYmVuIHdlIG9uZGVyem9layBnZWRhYW4gbmFhciBiZXN0YWFuZGUgb3Bsb3NzaW5nZW4gdm9vci4nLFxuICAgICAgICAgICAgJ1Byb2R1Y3QnOiAnVm9vciBoZXQgZWluZHByb2R1Y3QgaGViYmVuIHdlIGVlbiBwcm90b3R5cGUgZ2VtYWFrdCB2b29yIGVlbiByb2xzdG9lbCBzdGFwcGVudGVsbGVyLiBIaWoga2FuIGhldCBhYW50YWwgcm90YXRpZXMgdmFuIGVlbiByb2xzdG9lbCB0ZWxsZW4gZG9vcm1pZGRlbCB2YW4gZWVuIGd5cm9zY29vcCBhYW5nZXNsb3RlbiBvcCBlZW4gQXJkdWlubyBVbm8uIFdlIGhlYmJlbiBvb2sgZ2VrZW4gbmFhciBlZW4gaGFydHNsYWdtZXRlciwgbWFhciBtZWRlIGRvb3IgYmVwZXJrdGUgdGlqZCBpcyBoZXQgbmlldCBnZWx1a3Qgb20gZGUgaGFydHNsYWdtZXRlciBiZXRyb3V3YmFhciB0ZSBtYWtlbi4gQm92ZW5kaWVuIHppam4gZXIgYWwgYmV0cm91d2JhcmUgaGFydHNsYWdtZXRlcnMgYmVzY2hpa2JhYXIgdm9vciBmeXNpZWsgZ2VoYW5kaWNhcHRlIG1lbnNlbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPkRvb3J6ZXR0ZW48L3N0cm9uZz48YnI+QmlqIGhldCBvbnR3aWtrZWxlbiB2YW4gaGV0IHByb3RvdHlwZSB6aWpuIHdlIHRlZ2VuIHZlZWwgdGVnZW5zbGFnZW4gZ2Vsb3Blbi4gRXIgd2FyZW4gdmVlbCBjb21wbGljYXRpZXMgbWV0IGRlIGd5cm9zY29vcCBlbiBoZXQgdmVyemFtZWxlbiB2YW4gZGUgZ2VnZXZlbnMgdmFuIGRlIGd5cm9zY29vcC4gWm8gaGFkIGRlIGd5cm9zY29vcCBsYXN0IHZhbiBkcmlmdCwgZGl0IGlzIHdhbm5lZXIgZWVuIGd5cm9zY29vcCB1aXQgZGUgbGlqbiByYWFrdC4gRHJpZnQga2FuIHZvb3IgZWVuIGdyb290IGRlZWwgdWl0IGRlIGRhdGEgZ2VmaWx0ZXJkIHdvcmRlbiBkb29yIGVlbiBLYWxtYW4gZmlsdGVyIG9wIGRlIGdlZ2V2ZW5zIHRvZSB0ZSBwYXNzZW4uPGJyPjxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgZ29lZCBnZXdlcmt0IGFhbiBoZXQgb250d2lra2VsZW4gdmFuIGhldCBwcm90b3R5cGUuIEhpZXJ2b29yIGhlYmJlbiB2ZWVsIG5hZ2VkYWNodCBvdmVyIHdhdCBkZSBiZXN0ZSBvcGxvc3Npbmcga2FuIHppam4gdm9vciBoZXQgcHJvdG90eXBlLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tbW90aW9ucG93ZXInLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAncGxhc3RpY19zb2VwJzoge1xuICAgICAgICAnZGF0ZSc6ICcyMyBTZXB0ZW1iZXIgMjAxOScsXG4gICAgICAgICdpbmRleCc6ICdwbGFzdGljX3NvZXAnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdQbGFzaWMgU29lcCcsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdXZSBoZWJiZW4gdmFuIE1hcnRpbiBCYWtrZXIsIG5hbWVucyBoZXQgYmVkcmlqZiBkZSBXYWFyZGVtYWtlcnMsIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIG1ldCB0ZWNobmFzaXVtIGVlbiBrZW5uaXNjZW50cnVtIG9wIHRlIHJpY2h0ZW4uIERpdCBrZW5uaXNjZW50cnVtIGlzIGJlZG9lbHQgb20gaGV0IHBsYXN0aWMgaW4gR29yaW5jaGVtIGluIGthYXJ0IHRlIGJyZW5nZW4uIEhpZXJtZWUga3VubmVuIHZvbGdlbmRlIGtsYXNzZW4gdmVyZGVyIG1ldCBoZXQgb25kZXJ6b2VrZW4gbmFhciBoZXQgcGxhc3RpYyBpbiBHb3JpbmNoZW0gZW4gbmFhciBvcGxvc3NpbmdlbiBlcnZvb3Igem9la2VuLicsXG4gICAgICAgICAgICAnUHJvYmxlZW0nOiAnSW4gaGV0IGJlZ2luIHdhcyBoZXQgcHJvYmxlZW0gbm9nIGVyZyBvbmR1aWRlbGlqay4gT20gZGl0IHByb2JsZWVtIGluIGthYXJ0IHRlIGJyZW5nZW4gaGViYmVuIHdlIGVlbiBvbmRlcnpvZWsgdWl0Z2V2b2VyZCBuYWFyIGhldCBzd2VyZiBwbGFzdGljIGluIEdvcmluY2hlbS4gTWFhciBlZW4gZ3Jvb3QgZGVlbCB2YW4gaGV0IHBsYXN0aWMgaW4gZGUgbmF0dXVyIHZhbHQgb25kZXIgZGUgbWljcm9wbGFzdGljcyBkaWUgbmlldCBtZXQgaGV0IGJsb3RlIG9vZyB0ZSB6aWVuIHppam4uIEFsIGRpdCBtYWFrdCBoZXQgaGVlbCBtb2VpbGlqayBvbSBoZXQgcHJvYmxlZW0gZ29lZCBpbiBrYWFydCB0ZSBicmVuZ2VuLiBPb2sgbWFha3QgZGl0IGhldCBtb2VpbGlqayBvbSBoZXQgcHJvYmxlZW0gb3ZlciB0ZSBicmVuZ2VuIGVuIGNvbW11bmlzZXJlbiBuYWFyIGhldCBwdWJsaWVrLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ0JpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2Ugb29rIHZlZWwgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlc3RhYW5kZSBvcGxvc3NpbmdlbiB2b29yIGhldCBvcHJ1aW1lbiB2YW4gcGxhc3RpYyBpbiBkZSBuYXR1dXIgZW4gbmFhciBkZSBoZXJrb21zdCB2YW4gaGV0IHBsYXN0aWMgZGF0IGRvb3IgR29yaW5jaGVtIGtvbXQuIERhYXJiaWogaXMgZ2VrZWtlbiBuYWFyIGRlIHZlcnNjaGlsbGVuZGUgcml2aWVyZW4gZGllIGxhbmdzIGVuIGRvb3IgR29pbmNoZW0gc3Ryb21lbiBlbiBhbmRlcmUgYnJvbm5lbiB2YW4gcGxhc3RpYy4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPlZvb3IgZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHNhbWVud2Vya2VuIHR1c3NlbiBkZSB2ZXJzY2hpbGxlbmRlIGdyb2VwamVzIG9tIHNhbWVuIMOpw6luIGtlbm5pc2NlbnRydW0gdGUgdmVyemFtZWxlbi4gSGllcmJpaiBoZWJiZW4gd2UgZ29lZCBtb2V0ZW4gY2/DtnJkaW5lcmVuIG9tIG5pZXQgZHViYmVsIG9uZGVyem9layB0dXNzZW4gZGUgZ3JvZXBqZXMgdGUgZG9lbi48YnI+PHN0cm9uZz5LZW5uaXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5EaXQgcHJvamVjdCB3YXMgdm9sbGVkaWcgZ2VyaWNodCBvcCBoZXQgb25kZXJ6b2VrIGRvZW4uIE9tIGhldCBwbGFzdGljIHByb2JsZWVtIGluIEdvcmluY2hlbSBlZXJzdCBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBzYW1lbiBtZXQgYWxsZSBncm9lcGplcyBlZW4gb25kZXJ6b2VrIGdlZGFhbiBnZWRhYW4gbmFhciBob2V2ZWVsIHN3ZXJmIHBsYXN0aWMgZXIgbm91IGVjaHQgaW4gR29yaW5jaGVtIGlzLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAnUHJvYmxlZW0nOiAnbWljcm9wbGF0aWNzLWdvcmluY2hlbScsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2RlLXJpam4tYnJvbicsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19tZXViZWxzJzoge1xuICAgICAgICAnZGF0ZSc6ICcyNCBKdW5lIDIwMTknLFxuICAgICAgICAnaW5kZXgnOiAnYjRfdGVjaG5pZWtfbWV1YmVscycsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIE1ldWJpbGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSBCNCBUZWNobmllayBhZHZpZXMgZW4gaW5mb3JtYXRpZSB0ZSBnZXZlbiBvdmVyIGhvZSBCNCBUZWNobmllayBlZW4gY2lyY3VsYWlyZSBsZXZlcmFuY2llciBrYW4gd29yZGVuLiBCNCBUZWNobmllayBpcyBlZW4gZWxla3Ryb3RlY2huaXNjaCBpbnN0YWxsYXRpZWJlZHJpamYgdm9vciBCaU5hUy1sb2thbGVuLiBaZSBpbnN0YWxsZXJlbiBvbmRlciBhbmRlcmUgZGUgZ2FzIGVuIHdhdGVyIGluc3RhbGxhdGllcywgbWFhciBtYWtlbiBvb2sgc3BlY2lhYWwgbWV1YmlsYWlyIHZvb3IgQmlOYVMgbG9rYWxlbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdXaWogaGViYmVuIGdla296ZW4gb20gdm9vcmFsIG9uZGVyem9layB0ZSBkb2VuIG5hYXIgaGV0IG1pbGlldXZyaWVuZGVsaWprZXIgbWFrZW4gdmFuIGRlIHRhZmVscy4gVWl0IG9ucyBvbmRlcnpvZWsgaXMgZ2VibGVrZW4gZGF0IGRhYXIgdmVlbCB0ZSB2ZXJiZXRlcmVuIGlzLiBabyBpcyBkZSBjb2F0aW5nIHZhbiBkZSB0YWZlbGJsYWRlbiwgZGllIGhldCBvbmRlciBhbmRlcmUgYmVzY2hlcm10IHRlZ2VuIHZlcnNjaGlsbGVuZGUgY2hlbWlzY2hlIHN0b2ZmZW4sIGJpam5hIG9ubW9nZWxpamsgdGUgc2NoZWlkZW4gdmFuIGRlIGhvdXRlbiBiYXNpcy4gTWFhciBvb2sgZGV6ZSBiYXNpcyBpcyBlZW4gbWl6IHZhbiBob3V0c25pcHBlcnMgZW4gbGlqbSBlbiBpcyBkdXMgbW9laWxpamsgdGUgcmVjeWNsZW4nLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdVaXQgb25zIG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZXIgb3AgaGV0IGdlYmllZCB2YW4gZHV1cnphbWUgY2hlbWlzY2ggcmVzaXN0ZW50ZSBjb2F0aW5ncyB3ZWluaWcgb250d2lra2VsZWQgaXMuIE1lZGUgb21kYXQgaGV0IG1hdGVyaWFhbCBjaGVtaXNjaCByZXNpc3RlbnQgaXMgaGV0IG1vZWlsaWprIGhldCBtYXRlcmlhYWwgemVsZiB0ZSByZWN5Y2xlbi4gV2VsIGthbiBlciBnZWtla2VuIHdvcmRlbiBuYWFyIGhldCBoZXJnZWJydWlrZW4gdmFuIGRlIGNvYXRpbmdzIG9mIGRlIGhvdXRlbiBiYXNpcy4gSGllcnZvb3IgbW9ldCBlciB3ZWwgZWVuIG9wbG9zc2luZyBiZWRhY2h0IHdvcmRlbiBvbSBkaWUgdmFuIGVsa2FhciB0ZSBzY2hlaWRlbiAuIERvb3IgYmlqdm9vcmJlZWxkIGVlbiBjbGlja3N5c3RlZW0gdGUgb250d2lra2VsZW4gd2Fhcm1lZSBkZSBiYXNpcyBlbiBkZSBjb2F0aW5nIG1ha2VsaWprIHRlIHNjaGVpZGVuIGVuIGhlcmdlYnJ1aWtlbiB6aWpuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiB6b2VrZW4gbmFhciBiZXN0YWFuZGUgcHJvZHVjdGVuIGVuIG9wbG9zc2luZ2VuLiB3aWogaGViYmVuIGhpZXJiaWogZ29lZCBzYW1lbmdld2Vya3QgYWFuIGhldCBvbmRlcnpvZWtlbiBuYWFyIG1vZ2VsaWpraGVkZW4uPGJyPjxzdHJvbmc+UHJvY2VzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+Vm9vciBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2VpdGUgZ2VzdG9rZW4gaW4gaGV0IHNjcnVtbWVuIGVuIGhldCBkb2N1bWVudGVyZW4gdmFuIGhldCBwcm9jZXMuIFpvIGhlYmJlbiB3ZSBzcHJpbnRzIGJpamdlaG91ZGVuIHZhbiB0d2VlIHdla2VuIGVuIGFhbiBoZXQgYmVnaW4gdmFuIGVsa2Ugc3ByaW50IGdvZWQgYmVwYWFsdCB3YXQgd2UgZGllIHNwcmludCBnYWFuIGRvZW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1iNHRlY2huaWVrJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnYmluYXMtbG9rYWFsJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2tldXplX2tvZmZpZWJla2Vycyc6IHtcbiAgICAgICAgJ2RhdGUnOiAnNCBGZWJydWFyaSAyMDE5JyxcbiAgICAgICAgJ2luZGV4JzogJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0tldXplIHZhbiBkZSBLb2ZmaWViZWtlcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSB2YXN0IHRlIHN0ZWxsZW4gd2Vsa2Ugc29vcnQga29mZmllYmVrZXIgaGV0IG1pbGlldXZyaWVuZGVsaWprc3QgaXMuIEhpZXJiaWogaGViYmVuIHdlIGdla2VrZW4gbmFhciBvZiBkZSBpbWFnb1xcJ3MgdmFuIGRlIHZlcnNjaGlsbGVuZGUga29mZmllYmVrZXJzIHRlcmVjaHQgd2FzIG9mIG5pZXQuIE9vayBoZWJiZW4gd2Ugb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlZHJpanZlbiBvZiBvcmdhbmlzYXRpZXMgdmFuIHZlcnNjaGlsbGVuZGUgZ3JvdGUsIG9tIHRlIGtpamtlbiBvZiBkZSBncm90ZSB2YW4gaGV0IGJlZHJpamYgdWl0bWFha3QgYmlqIGhldCBraWV6ZW4gdmFuIGVlbiBrb2ZmaWViZWtlciBzb29ydC4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdCaWogZGl0IHByb2plY3Qgc3RvbmQgaGV0IG9uZGVyem9la2VuIGNlbnRyYWFsLiBWb29yIGRpdCBvbmRlcnpvZWsgaGViYmVuIHdlIHZlZWwgYmVzdGFhbmRlIG9uZGVyem9la2VuIGVuIGdlZ2V2ZW5zIGdlem9jaHQuIE9tIGRlemUgaW5mb3JtYXRpZSBnb2VkIG92ZXIgdGUgYnJlbmdlbiBoZWJiZW4gd2UgbWV0IEdvb2dsZSBTaXRlcyBlZW4gc2l0ZSBnZW1hYWt0IG1ldCBvbnplIGNvbmNsdXNpZXMgZW4gYmVyZWRlbmVyaW5nZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgc2FtZW4gbW9ldGVuIHdlcmtlbiBlbiBtb2V0ZW4gY29tbXVuaXNlcmVuIG1ldCBlbGthYXIuIERvb3JkYXQgZGl0IGdvZWQgaXMgZ2VnYWFuIHppam4gd2Ugc2FtZW4gdG90IGRlIGNvbmNsdXNpZSBnZWtvbWVuLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPk9tZGF0IGRpdCBwcm9qZWN0IGdlcmljaHQgaXMgb3Agb25kZXJ6b2VrIHdhcyBoZXQgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBlbiB2ZWVsIG9uZGVyem9layB3ZXJkIGdlZGFhbi4gSWsgdmluZCBkYXQgZGl0IG9uZGVyem9layBnb2VkIGlzIGdlZ2Fhbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdiZXN0LWNvZmZlZS1jdXBzJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2ZsZXhpYmVsZV93b29udm9ybWVuJzoge1xuICAgICAgICAnZGF0ZSc6ICc1IE5vdmVtYmVyIDIwMTgnLFxuICAgICAgICAnaW5kZXgnOiAnZmxleGliZWxlX3dvb252b3JtZW4nLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdGbGV4aWJlbGUgV29vbnZvcm1lbicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgcHJvamVjdCBpcyBpbiBvcGRyYWNodCB2YW4gZGUgZ2VtZWVudGUgR29yaW5jaGVtLiBEZSBvcGRyYWNodCB2YW4gZGUgZ2VtZWVudGUgaXMgb20gZWVuIGZsZXhpYmVsIHdvbmluZ2NvbXBsZXggdGUgb250d2lra2VsZW4sIHdhYXJpbiByZWtlbmluZyBnZWhvdWRlbiB3b3JkdCBtZXQgdmVyc2NoaWxsZW5kZSBpbmtvbWVuc2tsYXNzZW4uIEFscyBwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gbWFxdWV0dGUgZ2VtYWFrdCB2YW4gZWVuIGV2ZW50dWVlbCBwbGFuIHZvb3Igem9cXCduIHdvb253aWprLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmFuYWYgaGV0IGJlZ2luIGFmIGFhbiBnb2VkIG5hZ2VkYWNodCBvdmVyIGhldCBlaW5kcHJvZHVjdCwgZGUgbWFxdWV0dGUuIFRpamRlbnMgaGV0IHByb2plY3QgaGViYmVuIHdlIG9vayB2ZXJiZXRlcmluZ2VuIGVuIGFhbnBhc3NpbmcgZ2VtYWFrdCBvbSBoZXQgZWluZHByb2R1Y3QgdGUgdmVyYmV0ZXJlbi4gSGllcmRvb3IgaGViYmVuIHdlIHVpdGVpbmRlbGlqayBlZW4gZ29lZCBwcm9kdWN0IGdlbGV2ZXJkLjxicj48c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPlRpamRlbnMgZGl0IHBvcmplY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHNhbWVud2Vya2VuIG1ldCBoZXQgb250d2VycGVuIHZhbiBkZSBtYXF1ZXR0ZSBlbiBoZXQgb25kZXJ6b2VrLiBPbWRhdCB3ZSBoZXQgc2NydW1tZW4gZ29lZCBoZWJiZW4gYmlqZ2Vob3VkZW4gd2FzIGhldCBvb2sgZ2VtYWtlbGlqayBvbSBnb2VkIHNhbWVuIHRlIHdlcmtlbiBlbiBkZSB0YWtlbiB0ZSB2ZXJkZWxlbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWdlbWVlbnRlLWdvcmluY2hlbScsXG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVzID0ge1xuICAgICdmZWF0dXJlZCc6IFtcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgIF0sXG4gICAgJ2ZyZWV0aW1lUHJvamVjdHMnOiBbXG4gICAgICAgICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgICAgICAncjZsb29rdXBfd2Vic2l0ZScsXG4gICAgXSxcbiAgICAndGVjaFByb2plY3RzJzogW1xuICAgICAgICAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ3BsYXN0aWNfc29lcCcsXG4gICAgICAgICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgXSxcbn07XG5cbmNvbnN0IHByb2plY3RUeXBlTmFtZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogJ0ZlYXR1cmVkJyxcbiAgICAnZnJlZXRpbWVQcm9qZWN0cyc6ICdGcmVlLVRpbWUgUHJvamVjdHMnLFxuICAgICd0ZWNoUHJvamVjdHMnOiAnVGVjaG5hc2l1bSBQcm9qZWN0cycsXG59O1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgICAnYWJvdXQnOiB7XG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICcxMTk4MTlAbXltZXJld2FkZS5ubDxicj50eWNob2Jyb3V3ZXIzM0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdGb3J0ZXMgTHljZXVtLCBHb3JpbmNoZW08YnI+VGVjaG5hc2l1bSBqYWFyIDQsIDUgZW4gNicsXG4gICAgICAgICAgICAndGl0bGUyJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXInLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge31cbiAgICB9XG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuXTtcblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICBwcm9qZWN0VHlwZXMsXG4gICAgcHJvamVjdFR5cGVOYW1lcyxcbiAgICBwYWdlcyxcbiAgICBtb250aE5hbWVzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9