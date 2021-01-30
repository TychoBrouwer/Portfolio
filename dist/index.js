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
            'De Opdracht': 'AquaZoo Leerdam is een dierentuid in Leerdam met ruim 40 vivaria. De dierentuin wordt gerunt door vrijwilligers van de aquariumvereniging de Discus uit Leerdam. Hierdoor zijn er niet altijd dezelfde mensen aanwezig en is de kans groot dat er soms vergeten wordt de lichten uit te zetten. Daarom willen ze de aquaria van afstand uit kunnen zetten als dat vergeten is. Er is voor gekozen om te werken met een Arduino Mega 2560.',
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
        'date': '30 june 2020',
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
    'b4_techniek_meubels': {
        'date': '24 june 2019',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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cUJBQXFCO0NBQ3hDLENBQUM7QUFvQkUsNENBQWdCO0FBbEJwQixNQUFNLEtBQUssR0FBRztJQUNWLE9BQU8sRUFBRTtRQUNMLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxrREFBa0Q7WUFDNUQsUUFBUSxFQUFFLHVEQUF1RDtZQUNqRSxRQUFRLEVBQUUsaUNBQWlDO1NBQzlDO1FBQ0QsUUFBUSxFQUFFLEVBQUU7S0FDZjtDQUNKLENBQUM7QUFVRSxzQkFBSztBQVJULE1BQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNO0lBQ3hFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTtDQUNqRSxDQUFDO0FBT0UsZ0NBQVUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBQcm9qZWN0Q2xhc3MgfSBmcm9tICcuL29kay10cy9wcm9qZWN0JztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vb2RrLXRzL25hdmlnYXRvcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9vZGstdHMvcGFnZSc7XG5pbXBvcnQgeyBwcm9qZWN0cywgcHJvamVjdFR5cGVzLCBwYWdlcyB9IGZyb20gJy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwcmludFBhZ2UocGFnZUlkKTogUHJvbWlzZSA8IHZvaWQgPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZShwYWdlSWQsICcnLCBbXSwgcGFnZXNbcGFnZUlkXS5jb250ZW50LCBwYWdlc1twYWdlSWRdLmltYWdlcyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2VJZCk7XG5cbiAgICAgICAgICAgIHBhZ2UucHJpbnRQYWdlKCk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IG1haW5DbGFzcyA9IG5ldyBNYWluO1xuY29uc3QgbmF2Q2xhc3MgPSBuZXcgTmF2aWdhdG9yO1xuXG5hc3luYyBmdW5jdGlvbiBwcmludFByb2plY3RzTmF2KCk6IFByb21pc2UgPCB2b2lkID4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0VHlwZSBpbiBwcm9qZWN0VHlwZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0VHlwZXMuaGFzT3duUHJvcGVydHkocHJvamVjdFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0VHlwZXNbcHJvamVjdFR5cGVdO1xuXG4gICAgICAgICAgICAgICAgbmF2Q2xhc3MubmV3UHJvamVjdFR5cGUocHJvamVjdFR5cGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hdlByb2plY3RUeXBlVGl0bGU6IEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb2plY3RUeXBlICsgJyAubmF2VGl0bGUnKSE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdlByb2plY3RUeXBlVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJy5uYXZPYmplY3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQhLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IS5xdWVyeVNlbGVjdG9yKCcubmF2QXJyb3cnKSEuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgNjMuNjQgOTguOTk1XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yODYuNjggNTkwLjY3NSkgcm90YXRlKC05MClcIj48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwNS44MjIgMzAwLjgyMikgcm90YXRlKDQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQxLjE3OCAzMzYuMTc4KSByb3RhdGUoLTQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjwvZz48L3N2Zz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCEucXVlcnlTZWxlY3RvcignLm5hdkFycm93JykhLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDk4Ljk5NSA2My42NFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDkxLjY4IC0yODYuNjgpXCI+PGxpbmUgeDI9XCI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDUuODIyIDMwMC44MjIpIHJvdGF0ZSg0NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0MS4xNzggMzM2LjE3OCkgcm90YXRlKC00NSlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiLz48L2c+PC9zdmc+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQhLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdENsYXNzKHByb2plY3RzW2ldKTtcblxuICAgICAgICAgICAgICAgICAgICBuYXZDbGFzcy5uZXdQcm9qZWN0KHByb2plY3QucHJvamVjdEluZGV4KCksIHByb2plY3QucHJvamVjdFRpdGxlKCksIHByb2plY3RUeXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQYWdlKHBhZ2VJZDogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHNbcGFnZUlkXSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocGFnZUlkKTtcblxuICAgICAgICAgICAgcHJvamVjdC5wcmludFByb2plY3RQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluQ2xhc3MucHJpbnRQYWdlKHBhZ2VJZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSlcbn1cblxucHJpbnRQcm9qZWN0c05hdigpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZQYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZQYWdlJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmF2UGFnZSA9IG5hdlBhZ2VzW2ldO1xuXG4gICAgICAgICAgICBuYXZQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2UGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmF2UGFnZSA9IG5hdlBhZ2VzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hdlBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmF2UGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIHByaW50UGFnZShuYXZQYWdlLmlkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KTtcbiIsImltcG9ydCB7IFByb2plY3RDbGFzcyB9IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCB7IHByb2plY3RUeXBlTmFtZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvdmFyaWFibGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGFpbmVyJykhOztcclxuICAgIHByaXZhdGUgZmlyc3RQcm9qZWN0VHlwZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGZpcnN0UHJvamVjdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG5ld1Byb2plY3RUeXBlKHByb2plY3RUeXBlOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RQcm9qZWN0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFByb2plY3RUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdERpdi5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nJHtwcm9qZWN0VHlwZX0nIGNsYXNzPSduYXZPYmplY3QgJHthY3RpdmV9Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZUaXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkFycm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgNjMuNjQgOTguOTk1XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yODYuNjggNTkwLjY3NSkgcm90YXRlKC05MClcIj48bGluZSB4Mj1cIjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwNS44MjIgMzAwLjgyMikgcm90YXRlKDQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjxsaW5lIHgyPVwiNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQxLjE3OCAzMzYuMTc4KSByb3RhdGUoLTQ1KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdkljb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNFwiIHZpZXdCb3g9XCIwIDAgNTEyIDM4NFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODA5IC0xNTMpXCI+PHBhdGggZD1cIk00NjQsMTI4SDI3MkwyMTcuMzcsNzMuMzdBMzIsMzIsMCwwLDAsMTk0Ljc0LDY0SDQ4QTQ4LDQ4LDAsMCwwLDAsMTEyVjQwMGE0OCw0OCwwLDAsMCw0OCw0OEg0NjRhNDgsNDgsMCwwLDAsNDgtNDhWMTc2QTQ4LDQ4LDAsMCwwLDQ2NCwxMjhabTAsMjcySDQ4VjExMkgxODguMTJsNTQuNjMsNTQuNjNBMzIsMzIsMCwwLDAsMjY1LjM4LDE3Nkg0NjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgwOSA4OSlcIi8+PHJlY3Qgd2lkdGg9XCI0MjZcIiBoZWlnaHQ9XCIyODlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODQ4IDIxNylcIi8+PC9nPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2TmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3RUeXBlTmFtZXNbcHJvamVjdFR5cGVdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2RHJvcERvd25EaXYnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG5ld1Byb2plY3QocHJvamVjdEluZGV4OiBzdHJpbmcsIHByb2plY3ROYW1lOiBzdHJpbmcsIHByb2plY3RUeXBlOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUeXBlRGl2OiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0VHlwZSArICcgLm5hdkRyb3BEb3duRGl2JykhO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQcm9qZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb2plY3RUeXBlRGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9JyR7cHJvamVjdEluZGV4fScgY2xhc3M9J25hdkRyb3BEb3duIG5hdlBhZ2UgJHthY3RpdmV9Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZJY29uJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2TmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvamVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbW9udGhOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2Uge1xyXG4gICAgcHJpdmF0ZSBwYWdlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFnZUlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VkYXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VUYWdzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBwYWdlQ29udGVudDogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBwYWdlSW1hZ2VzOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgdGFnczogQXJyYXk8c3RyaW5nPiwgY29udGVudDogT2JqZWN0LCBpbWFnZXM6IE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJykhO1xyXG4gICAgICAgIHRoaXMucGFnZUlkID0gcGFnZUlkO1xyXG4gICAgICAgIHRoaXMucGFnZWRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMucGFnZVRhZ3MgPSB0YWdzO1xyXG4gICAgICAgIHRoaXMucGFnZUNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMucGFnZUltYWdlcyA9IGltYWdlcztcclxuICAgIH1cclxuXHJcbiAgICBwcmludFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZWRhdGUgPT09ICdjdXJyZW50Jykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2VkYXRlID0gYCR7ZC5nZXREYXRlKCl9ICR7bW9udGhOYW1lc1tkLmdldE1vbnRoKCldfSAke2QuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhZ0hUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhZ2VUYWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucGFnZVRhZ3NbaV07XHJcblxyXG4gICAgICAgICAgICB0YWdIVE1MICs9IGA8ZGl2IGNsYXNzPVwidGFnICR7dGFnfVwiPjxwPiR7dGFnfTwvcD48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50ID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvbnRlbnQuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGluZWEgPSB0aGlzLnBhZ2VDb250ZW50W3RpdGxlXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nSFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWxpbmVhSW1hZ2VcIj48aW1nIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvJHt0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdfS53ZWJwXCIgYWx0PVwiJHt0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdfVwiPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlLmluY2x1ZGVzKCd0aXRsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBgPGgzPiR7dGl0bGV9PC9oMz5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBwYWdlQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUFsaW5lYSAke3RpdGxlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpbWdIVE1MfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2FsaW5lYX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyIGlkPVwicGFnZVRpdGxlXCI+JHt0aGlzLnBhZ2VJZH08L2gyPlxyXG4gICAgICAgIDxwIGlkPVwicGFnZURhdGVcIj4ke3RoaXMucGFnZWRhdGV9PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlVGFnc1wiPiR7dGFnSFRNTH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgJHtwYWdlQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuaW50ZXJmYWNlIElQcm9qZWN0IHtcclxuICAgIGRhdGU6IHN0cmluZyxcclxuICAgIGluZGV4OiBzdHJpbmcsXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgbGlua3M6IHtcclxuICAgICAgICB2aWV3OiBzdHJpbmcsXHJcbiAgICAgICAgZ2l0aHViOiBzdHJpbmcsXHJcbiAgICB9XHJcbiAgICB0YWdzOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IE9iamVjdCxcclxuICAgIGltYWdlczogT2JqZWN0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdENsYXNzIHtcclxuICAgIHByaXZhdGUgcHJvamVjdDogSVByb2plY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RzW3Byb2plY3ROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFByb2plY3RQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLnByb2plY3QudGl0bGUsIHRoaXMucHJvamVjdC5kYXRlLCB0aGlzLnByb2plY3QudGFncywgdGhpcy5wcm9qZWN0LmNvbnRlbnQsIHRoaXMucHJvamVjdC5pbWFnZXMpO1xyXG5cclxuICAgICAgICBwYWdlLnByaW50UGFnZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByb2plY3RzID0ge1xuICAgICdzdGF0c2RiX292ZXJsYXknOiB7XG4gICAgICAgICdkYXRlJzogJ2N1cnJlbnQnLFxuICAgICAgICAnaW5kZXgnOiAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2ltYWdlJzogJycsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdWaWV3JzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS9hcHAvU3RhdHNEQi1TdGF0c0RCJyxcbiAgICAgICAgICAgICdHaXRIdWInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlcicsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgICdhcHAnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnU3RhdHNEQiBPdmVybGF5JyxcbiAgICB9LFxuICAgICdwb3J0Zm9saW9fd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnY3VycmVudCcsXG4gICAgICAgICdpbmRleCc6ICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdpbWFnZSc6ICcnLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUG9ydGZvbGlvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ3dlYnNpdGUnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUG9ydGZvbGlvIFdlYnNpdGUnLFxuICAgIH0sXG4gICAgJ3I2bG9va3VwX3dlYnNpdGUnOiB7XG4gICAgICAgICdkYXRlJzogJzI5IERlY2VtYmVyIDIwMjAnLFxuICAgICAgICAnaW5kZXgnOiAncjZsb29rdXBfd2Vic2l0ZScsXG4gICAgICAgICdpbWFnZSc6ICcnLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUjZMb29rdXAnLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd3ZWJzaXRlJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1I2TG9va3VwIFdlYnNpdGUnLFxuICAgIH0sXG4gICAgJ2FxdWF6b29fbGVlcmRhbSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnY3VycmVudCcsXG4gICAgICAgICdpbmRleCc6ICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvQXF1YVpvby1MZWVyZGFtJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICAgICAgJ2FyZHVpbm8nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnQXF1YVpvbyBMZWVyZGFtJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBpcyBlZW4gcHJvamVjdCBuYW1lbnMgZGUgb3BkcmFjaHRnZXZlciBBcXVhWm9vIExlZXJkYW0uIFdpaiBoYWRkZW4gZGUgb3BkcmFjaHQgZ2VrcmVnZW4gb20gZWVuIHN5c3RlZW0gdGUgb250d2lra2VsZW4gd2Fhcm1lZSBBcXVhWm9vIExlZXJkYW0gZGUgbGljaHRlbiB2YW4gaHVuIGFxdWFyaXVtcyB2YW4gZWVuIGFmc3RhbmQgdGUga3VubmVuIGFhbnN0dXJlbi4gQmlubmVuIGRpdCBwcm9qZWN0IGhhZCBpayBkZSB0YWFrIHZhbiBoZXQgcHJvZ3JhbW1lcmVuIGVuIG9udHdpa2tlbGVuIHZhbiBoZXQgQXJkdWlubyBwcm90b3R5cGUuIERpdCBwcm9qZWN0IGhlYiBpayBzYW1lbmdld2Vya3QgbWV0IENhaW4gV29lc3RlbmJ1cmcgZW4gRGF2aWQgQmFnaWpuLicsXG4gICAgICAgICAgICAnTWVlc3RlcnByb2VmJzogJ0RlIE1lZXN0ZXJwcm9lZiBpcyBlZW4gZWluZGV4YW1lbnByb2plY3QgdmFuIGhldCB2YWsgTyZPLiBIb2V0IGRvZWwgdmFuIGhldCBwcm9qZWN0IGlzIGRhdCBkZSBsZWVyaW5nIGFsbGUgdmFhcmRpZ2hlZGVuIGxhYXQgemllbiBkaWUgbm9kaWcgemlqbiBvbSBlZW4gdGVjaG5hc2l1bWxlZXJsaW5nIHRlIHppam4uIFRpamRlbnMgZGl0IHByb2plY3Qgd29yZHQgZXIgd2VpbmlnIGRvb3IgZGUgZG9jZW50ZW4gZ2VyZWdlbGQgZW4gbW9ldCBkZSBsZWVybGluZyBkdXMgdmVlbCB6ZWxmc3RhbmRpZ2hlaWQgbGF0ZW4gemllbi4gSGV0IG9uZGVyem9layBnZWRlZWx0ZSB2YW4gZGUgTWVlc3RlcnByb2VmIHZvcm10IGhldCBwcm9maWVsd2Vya3N0dWsuJyxcbiAgICAgICAgICAgICdEZSBPcGRyYWNodCc6ICdBcXVhWm9vIExlZXJkYW0gaXMgZWVuIGRpZXJlbnR1aWQgaW4gTGVlcmRhbSBtZXQgcnVpbSA0MCB2aXZhcmlhLiBEZSBkaWVyZW50dWluIHdvcmR0IGdlcnVudCBkb29yIHZyaWp3aWxsaWdlcnMgdmFuIGRlIGFxdWFyaXVtdmVyZW5pZ2luZyBkZSBEaXNjdXMgdWl0IExlZXJkYW0uIEhpZXJkb29yIHppam4gZXIgbmlldCBhbHRpamQgZGV6ZWxmZGUgbWVuc2VuIGFhbndlemlnIGVuIGlzIGRlIGthbnMgZ3Jvb3QgZGF0IGVyIHNvbXMgdmVyZ2V0ZW4gd29yZHQgZGUgbGljaHRlbiB1aXQgdGUgemV0dGVuLiBEYWFyb20gd2lsbGVuIHplIGRlIGFxdWFyaWEgdmFuIGFmc3RhbmQgdWl0IGt1bm5lbiB6ZXR0ZW4gYWxzIGRhdCB2ZXJnZXRlbiBpcy4gRXIgaXMgdm9vciBnZWtvemVuIG9tIHRlIHdlcmtlbiBtZXQgZWVuIEFyZHVpbm8gTWVnYSAyNTYwLicsXG4gICAgICAgICAgICAnSGV0IFByb2R1Y3QnOiAnT25zIHByb2R1Y3QgbWFha3QgZ2VicnVpayB2YW4gZWVuIEFyZHVpbm8gb20gZGUgbGljaHRlbiB0ZSBrdW5uZW4gYmVzdHVyZW4uIE9tIGRlIEFyZHVpbm8gb3AgYWZzdGFuZCB0ZSBrdW5uZW4gYmVzdHVyZW4gaGViYmVuIHdlIG1ldCBiZWh1bHAgdmFuIGVlbiBFdGhlcm5ldCBTaGllbGQgZWVuIHdlYnNlcnZlciBnZW1hYWt0LiBEZSB3ZWJzZXJ2ZXIgaXMgYmVzY2hlcm10IG1ldCBlZW4gd2FjaHR3b29yZC4gVmlhIGRlIHdlYnNlcnZlciBrdW5uZW4gZGUgbGFtcGVuIHZpYSBkZSBBcmR1aW5vIHdvcmRlbiBhYW5nZXN0dXVyZC4gQXF1YVpvbyB3aWxkZSBvb2sgZGUgbW9nZWxpamtoZWlkIGhlYmJlbiBvbSB0ZSBrdW5uZW4gY29udHJvbGxlcmVuIHdhbm5lZXIgZW4gd2llIGRlIGxhbXBlbiBoZWVmdCBiZXN0dXVyZC4gSGllcnZvb3Igc2xhYW4gd2UgZGUgbG9ncyBvcCBvcCBlZW4gU0Qta2FhcnQuJyxcbiAgICAgICAgICAgICd0aXRsZTEnOiAnVm9vciBoZXQgcHJvZHVjdCBoZWJiZW4gd2Ugb29rIGVlbiBiZWh1aXppbmcgb250d29ycGVuIGVuIDNELWdlcHJpbnQuIFdlIGhlYmJlbiBoZXQgb250d2VycCB2b29yIGRlIGJlaHVpemluZyBnZW1hYWt0IG1ldCBiZWh1bHAgdmFuIGJsZW5kZXIuIEhldCBvbnR3ZXJwIGlzIGdlw6t4cG9ydGVlcmQgYWxzIFNUTCBvbSBoZXQgdGUga3VubmVuIHByaW50ZW4gbWV0IGRlIDNELXByaW50ZXIgb3Agc2Nob29sLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkhldCBiZWxhbmdyaWprc3RlIGRlZWwgdmFuIGRpdCBwcm9qZWN0IGJlc3RhYXQgdWl0IGhldCBwcm90b3R5cGUuIEFhbmdlemllbiBpayBkYWFyIHZlZWwgd2VyayBlbiBhYW5kYWNodCBhYW4gaGViIGJlc3RlZWQgdmluZCBpayBkYXQgaWsgZ29lZCBwcm9kdWN0Z2VyaWNodCBoZWIgZ2V3ZXJrdC48YnI+PHN0cm9uZz5JbmRpdmlkdWVlbCB3ZXJrZW48L3N0cm9uZz48YnI+RG9vcmRhdCBoZXQgZ3Jvb3RzdGUgZGVlbCB2YW4gZGUgcGVyaW9kZSB2YW4gaGV0IHByb2ZpZWx3ZXJrc3R1ayB0aWpkZW5zIGRlIENvcm9uYSBsb2NrZG93biBlbiBtYWF0cmVnZWxlbiB3YXMgaGViYmVuIHdlIHZlZWwgaW5kaXZpZHVlZWwgbW9ldGVuIHdlcmtlbi4gT25kYW5rcyBkZXplIG9tc3RhbmRpZ2hlZGVuIGRlbmsgaWsgZGF0IGVyIGdvZWQgemVsZnN0YW5kaWcgdGh1aXMgaXMgZ2V3ZXJrdC4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWFxdWF6b28nLFxuICAgICAgICAgICAgJ0hldCBQcm9kdWN0JzogJ2FyZHVpbm8tbWVnYTI1NjAnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnYjRfdGVjaG5pZWtfY2lyY3VsYWlyJzoge1xuICAgICAgICAnZGF0ZSc6ICczMCBqdW5lIDIwMjAnLFxuICAgICAgICAnaW5kZXgnOiAnYjRfdGVjaG5pZWtfY2lyY3VsYWlyJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnQjQgVGVjaG5pZWsgQ2lyY3VsYWlyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAnQ2lyY3VsYWlyZSBMZXZlcmFuY2llcic6ICdNYXJpZWtlIE1lbHRlbiBoZWVmdCBvbnMgbmFtZW5zIEI0IFRlY2huaWVrIGRlIG9wZHJhY2h0IGdlZ2V2ZW4gb20gdmFuIEI0IFRlY2huaWVrIGVlbiBjaXJ1bGFpcmUgbGV2ZXJhbmNpZXIgdGUgd29yZGVuLiBIZXQgcHJvYmxlZW0gaXMgZGF0IGhldCBtZXViaWxhaXIgd2F0IEI0IHZlcnpvcmd0IG5pZXQgZ2VyZWN5Y2xlZCBlbiB3ZWluaWcgaGVyZ2VicnVpa3Qgd29yZHQuIEI0IHdpbCBncmFhZyBlZW4gY2lyY3VsYWlyZSBsZXZlcmFuY2llciB3b3JkZW4uIERlIG9wZHJhY2h0IHdhcyBkdXM6IFwiV2F0IGt1bm5lbiB3ZSBvbnR3aWtrZWxlbiB3YWFyZG9vciBCNCBlZW4gY2lyY3VsYWlyZSBsZXZlcmFuY2llciBrYW4gd29yZGVuP1wiJyxcbiAgICAgICAgICAgICdCZXpvZWsgQjQnOiAnV2Uga29uZGVuIGRvb3IgQ29yb25hIG5pZXQgYmlqIEI0IFRlY2huaWVrIGluIEdpZXNlbiBvcCBiZXpvZWssIG1hYXIgd2UgaGViYmVuIHdlbCBhbGxlIHZvb3JiZXJlaWRpbmcgZ2VkYWFuIHZvb3IgaGV0IGJlem9lay4gV2UgaGViYmVuIG1lZXJkZXJlIHZyYWdlbiBlbiBpZGVlw6tuIGJlZGFjaHQuIEVlbiBkZWVsIHZhbiBkZXplIHZyYWdlbiBoZWJiZW4gd2UgbGF0ZXIgdmlhIFdoYXRzQXBwIHdlbCBrdW5uZW4gdnJhZ2VuIGVlbiB2YW4gZGUgbW9udGV1cnMgdmFuIEI0IFRlY2huaWVrLCBSaWNoYXJkIHZhbiBCaWpuZW4uJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnV2UgaGViYmVuIHZvb3JhbCBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYWx0ZXJuYXRpZXZlbiB2b29yIGRlIGh1aWRpZ2UgbWF0ZXJpYWxlbiB2YW4gZGUgQjQgdGFmZWxzLiBEYWFydm9vciBoZWJiZW4gd2UgYWFuIGRlIG1vbnRldXIgZ2V2cmFhZ2Qgd2VsayBtYXRlcmlhYWwgZ2VicnVpa3Qgd29yZCB2b29yIGRlIHRhZmVsLCBkYWFyb3Aga3JlZ2VuIHdlIGhldCBhbnR3b29yZCBkYXQgaGV0IGVlbiBzcGFhbnBsYWF0IGlzIG1ldCBlZW4gSFBMIHRvcGxhYWcuIEhQTCBpcyBlaWdlbmxpamsgYWxsZWVuIHRoZXJtaXNjaCB0ZSByZWN5Y2xlbiwgZGF0IGlzIGhldCB2ZXJicmFuZGVuIHZhbiBoZXQgbWF0ZXJpYWFsIG9tIGVyIGVuZXJnaWUgdWl0IHRlIGhhbGVuLiBFZW4gYW5kZXJlIG9wbG9zc2luZyB6b3UgaGV0IGhlcmdlYnJ1aWtlbiBrdW5uZW4gemlqbiBpbiBlZW4gb2YgYW5kZXJlIHZvcm0uJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnRG9vciBDb3JvbmEgaXMgaGV0IG9uZGVyem9layBuYWFyIGR1dXJ6YW1lIG1hdGVyaWFsZW4gZW4gY2lyY3VsYWlyZSBlY29ub21pZSBrb3J0ZXIgZGFuIGJlZG9lbHQgZW4gaGViYmVuIHdlIGJpanZvb3JiZWVsZCBuaWV0IGVlbiBkZWVsIHZhbiBoZXQgdGFmZWxibGFkLCB3YXQgd2UgYmlqIEI0IHpvdWRlbiBvcGhhbGVuLCBrdW5uZW4gb25kZXJ6b2VrZW4uIFdlIHppam4gZXIgd2VsIGFjaHRlciBnZWtvbWVuIGRhdCBlciBnZWVuIG1ha2tlbGlqa2Ugb3Bsb3NzaW5nIGlzIHZvb3IgaGV0IHByb2JsZWVtLCBvbWRhdCBkZSB0YWZlbHMgdGVnZW4gdmVlbCB2ZXJzY2hpbGxlbmRlIGNoZW1pc2NoZSBzdG9mZmVuIG1vZXQga3VubmVuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+SW5kaXZpZHVlZWwgd2Vya2VuPC9zdHJvbmc+PGJyPk1lZGVuIGRvb3IgQ29yb25hIGhlYmJlbiB3ZSB2ZWVsIGluZGl2aWR1ZWVsIHRodWlzIG1vZXRlbiB3ZXJrZW4uIFpvIGhlYiBpayB2b29yYWwgZ2V3ZXJrdCBhYW4gaGV0IHpvZWtlbiB2YW4gZXZlbnR1ZWxlIG1hdGVyaWFsZW4gb20gaGV0IGh1aWRpZ2UgbWF0ZXJpYWFsIHZhbiBkZSB0YWZlbHMgbWVlIHRlIHZlcnBsYWF0c2VuLiBPb2sgaGViIGlrIG5hZ2VkYWNodCBvdmVyIG9wbG9zc2luZ2VuIHZvb3IgaGV0IHNjaGVpZGVuIHZhbiBoZXQgaG91dGVuIGRlZWwgdmFuIGRlIHRhZmVsIGVuIGRlIHBsYXN0aWMgY29hdGluZy48YnI+PHN0cm9uZz5LZW5uaXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5EaXQgcHJvamVjdCB3YXMgdm9vcmFsIGdlcmljaHQgb3AgaGV0IHpvZWtlbiBuYWFyIGVlbiB0aGVvcmV0aXNjaGUgb3Bsb3NzaW5nLiBIZXQgd2FzIGR1cyBiZWxhbmdyaWprIGRhdCBlciBnb2VkIG9uZGVyem9layBnZWRhYW4gd2VyZC4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ0NpcmN1bGFpcmUgTGV2ZXJhbmNpZXInOiAnbG9nby1iNHRlY2huaWVrJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnbGFkZGVyLXZhbi1sYW5zaW5rJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2I0X3RlY2huaWVrX21ldWJlbHMnOiB7XG4gICAgICAgICdkYXRlJzogJzI0IGp1bmUgMjAxOScsXG4gICAgICAgICdpbmRleCc6ICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnQjQgVGVjaG5pZWsgTWV1YmlsYWlyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGhlZWZ0IGFscyBkb2VsIG9tIEI0IFRlY2huaWVrIGFkdmllcyBlbiBpbmZvcm1hdGllIHRlIGdldmVuIG92ZXIgaG9lIEI0IFRlY2huaWVrIGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIGthbiB3b3JkZW4uIEI0IFRlY2huaWVrIGlzIGVlbiBlbGVrdHJvdGVjaG5pc2NoIGluc3RhbGxhdGllYmVkcmlqZiB2b29yIEJpTmFTLWxva2FsZW4uIFplIGluc3RhbGxlcmVuIG9uZGVyIGFuZGVyZSBkZSBnYXMgZW4gd2F0ZXIgaW5zdGFsbGF0aWVzLCBtYWFyIG1ha2VuIG9vayBzcGVjaWFhbCBtZXViaWxhaXIgdm9vciBCaU5hUyBsb2thbGVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ1dpaiBoZWJiZW4gZ2Vrb3plbiBvbSB2b29yYWwgb25kZXJ6b2VrIHRlIGRvZW4gbmFhciBoZXQgbWlsaWV1dnJpZW5kZWxpamtlciBtYWtlbiB2YW4gZGUgdGFmZWxzLiBVaXQgb25zIG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZGFhciB2ZWVsIHRlIHZlcmJldGVyZW4gaXMuIFpvIGlzIGRlIGNvYXRpbmcgdmFuIGRlIHRhZmVsYmxhZGVuLCBkaWUgaGV0IG9uZGVyIGFuZGVyZSBiZXNjaGVybXQgdGVnZW4gdmVyc2NoaWxsZW5kZSBjaGVtaXNjaGUgc3RvZmZlbiwgYmlqbmEgb25tb2dlbGlqayB0ZSBzY2hlaWRlbiB2YW4gZGUgaG91dGVuIGJhc2lzLiBNYWFyIG9vayBkZXplIGJhc2lzIGlzIGVlbiBtaXogdmFuIGhvdXRzbmlwcGVycyBlbiBsaWptIGVuIGlzIGR1cyBtb2VpbGlqayB0ZSByZWN5Y2xlbicsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ1VpdCBvbnMgb25kZXJ6b2VrIGlzIGdlYmxla2VuIGRhdCBlciBvcCBoZXQgZ2ViaWVkIHZhbiBkdXVyemFtZSBjaGVtaXNjaCByZXNpc3RlbnRlIGNvYXRpbmdzIHdlaW5pZyBvbnR3aWtrZWxlZCBpcy4gTWVkZSBvbWRhdCBoZXQgbWF0ZXJpYWFsIGNoZW1pc2NoIHJlc2lzdGVudCBpcyBoZXQgbW9laWxpamsgaGV0IG1hdGVyaWFhbCB6ZWxmIHRlIHJlY3ljbGVuLiBXZWwga2FuIGVyIGdla2VrZW4gd29yZGVuIG5hYXIgaGV0IGhlcmdlYnJ1aWtlbiB2YW4gZGUgY29hdGluZ3Mgb2YgZGUgaG91dGVuIGJhc2lzLiBIaWVydm9vciBtb2V0IGVyIHdlbCBlZW4gb3Bsb3NzaW5nIGJlZGFjaHQgd29yZGVuIG9tIGRpZSB2YW4gZWxrYWFyIHRlIHNjaGVpZGVuIC4gRG9vciBiaWp2b29yYmVlbGQgZWVuIGNsaWNrc3lzdGVlbSB0ZSBvbnR3aWtrZWxlbiB3YWFybWVlIGRlIGJhc2lzIGVuIGRlIGNvYXRpbmcgbWFrZWxpamsgdGUgc2NoZWlkZW4gZW4gaGVyZ2VicnVpa2VuIHppam4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHpvZWtlbiBuYWFyIGJlc3RhYW5kZSBwcm9kdWN0ZW4gZW4gb3Bsb3NzaW5nZW4uIHdpaiBoZWJiZW4gaGllcmJpaiBnb2VkIHNhbWVuZ2V3ZXJrdCBhYW4gaGV0IG9uZGVyem9la2VuIG5hYXIgbW9nZWxpamtoZWRlbi48YnI+PHN0cm9uZz5Qcm9jZXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5Wb29yIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZWl0ZSBnZXN0b2tlbiBpbiBoZXQgc2NydW1tZW4gZW4gaGV0IGRvY3VtZW50ZXJlbiB2YW4gaGV0IHByb2Nlcy4gWm8gaGViYmVuIHdlIHNwcmludHMgYmlqZ2Vob3VkZW4gdmFuIHR3ZWUgd2VrZW4gZW4gYWFuIGhldCBiZWdpbiB2YW4gZWxrZSBzcHJpbnQgZ29lZCBiZXBhYWx0IHdhdCB3ZSBkaWUgc3ByaW50IGdhYW4gZG9lbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWI0dGVjaG5pZWsnLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdiaW5hcy1sb2thYWwnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAna2V1emVfa29mZmllYmVrZXJzJzoge1xuICAgICAgICAnZGF0ZSc6ICc0IEZlYnJ1YXJpIDIwMTknLFxuICAgICAgICAnaW5kZXgnOiAna2V1emVfa29mZmllYmVrZXJzJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnS2V1emUgdmFuIGRlIEtvZmZpZWJla2VyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGhlZWZ0IGFscyBkb2VsIG9tIHZhc3QgdGUgc3RlbGxlbiB3ZWxrZSBzb29ydCBrb2ZmaWViZWtlciBoZXQgbWlsaWV1dnJpZW5kZWxpamtzdCBpcy4gSGllcmJpaiBoZWJiZW4gd2UgZ2VrZWtlbiBuYWFyIG9mIGRlIGltYWdvXFwncyB2YW4gZGUgdmVyc2NoaWxsZW5kZSBrb2ZmaWViZWtlcnMgdGVyZWNodCB3YXMgb2YgbmlldC4gT29rIGhlYmJlbiB3ZSBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYmVkcmlqdmVuIG9mIG9yZ2FuaXNhdGllcyB2YW4gdmVyc2NoaWxsZW5kZSBncm90ZSwgb20gdGUga2lqa2VuIG9mIGRlIGdyb3RlIHZhbiBoZXQgYmVkcmlqZiB1aXRtYWFrdCBiaWogaGV0IGtpZXplbiB2YW4gZWVuIGtvZmZpZWJla2VyIHNvb3J0LicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ0JpaiBkaXQgcHJvamVjdCBzdG9uZCBoZXQgb25kZXJ6b2VrZW4gY2VudHJhYWwuIFZvb3IgZGl0IG9uZGVyem9layBoZWJiZW4gd2UgdmVlbCBiZXN0YWFuZGUgb25kZXJ6b2VrZW4gZW4gZ2VnZXZlbnMgZ2V6b2NodC4gT20gZGV6ZSBpbmZvcm1hdGllIGdvZWQgb3ZlciB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBtZXQgR29vZ2xlIFNpdGVzIGVlbiBzaXRlIGdlbWFha3QgbWV0IG9uemUgY29uY2x1c2llcyBlbiBiZXJlZGVuZXJpbmdlbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBzYW1lbiBtb2V0ZW4gd2Vya2VuIGVuIG1vZXRlbiBjb21tdW5pc2VyZW4gbWV0IGVsa2Fhci4gRG9vcmRhdCBkaXQgZ29lZCBpcyBnZWdhYW4gemlqbiB3ZSBzYW1lbiB0b3QgZGUgY29uY2x1c2llIGdla29tZW4uPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+T21kYXQgZGl0IHByb2plY3QgZ2VyaWNodCBpcyBvcCBvbmRlcnpvZWsgd2FzIGhldCBiZWxhbmdyaWprIGRhdCBlciBnb2VkIGVuIHZlZWwgb25kZXJ6b2VrIHdlcmQgZ2VkYWFuLiBJayB2aW5kIGRhdCBkaXQgb25kZXJ6b2VrIGdvZWQgaXMgZ2VnYWFuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2Jlc3QtY29mZmVlLWN1cHMnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnZmxleGliZWxlX3dvb252b3JtZW4nOiB7XG4gICAgICAgICdkYXRlJzogJzUgTm92ZW1iZXIgMjAxOCcsXG4gICAgICAgICdpbmRleCc6ICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0ZsZXhpYmVsZSBXb29udm9ybWVuJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGlzIGluIG9wZHJhY2h0IHZhbiBkZSBnZW1lZW50ZSBHb3JpbmNoZW0uIERlIG9wZHJhY2h0IHZhbiBkZSBnZW1lZW50ZSBpcyBvbSBlZW4gZmxleGliZWwgd29uaW5nY29tcGxleCB0ZSBvbnR3aWtrZWxlbiwgd2FhcmluIHJla2VuaW5nIGdlaG91ZGVuIHdvcmR0IG1ldCB2ZXJzY2hpbGxlbmRlIGlua29tZW5za2xhc3Nlbi4gQWxzIHByb2R1Y3QgaGViYmVuIHdlIGVlbiBtYXF1ZXR0ZSBnZW1hYWt0IHZhbiBlZW4gZXZlbnR1ZWVsIHBsYW4gdm9vciB6b1xcJ24gd29vbndpamsuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2YW5hZiBoZXQgYmVnaW4gYWYgYWFuIGdvZWQgbmFnZWRhY2h0IG92ZXIgaGV0IGVpbmRwcm9kdWN0LCBkZSBtYXF1ZXR0ZS4gVGlqZGVucyBoZXQgcHJvamVjdCBoZWJiZW4gd2Ugb29rIHZlcmJldGVyaW5nZW4gZW4gYWFucGFzc2luZyBnZW1hYWt0IG9tIGhldCBlaW5kcHJvZHVjdCB0ZSB2ZXJiZXRlcmVuLiBIaWVyZG9vciBoZWJiZW4gd2UgdWl0ZWluZGVsaWprIGVlbiBnb2VkIHByb2R1Y3QgZ2VsZXZlcmQuPGJyPjxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+VGlqZGVucyBkaXQgcG9yamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gc2FtZW53ZXJrZW4gbWV0IGhldCBvbnR3ZXJwZW4gdmFuIGRlIG1hcXVldHRlIGVuIGhldCBvbmRlcnpvZWsuIE9tZGF0IHdlIGhldCBzY3J1bW1lbiBnb2VkIGhlYmJlbiBiaWpnZWhvdWRlbiB3YXMgaGV0IG9vayBnZW1ha2VsaWprIG9tIGdvZWQgc2FtZW4gdGUgd2Vya2VuIGVuIGRlIHRha2VuIHRlIHZlcmRlbGVuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tZ2VtZWVudGUtZ29yaW5jaGVtJyxcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5jb25zdCBwcm9qZWN0VHlwZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogW1xuICAgICAgICAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgXSxcbiAgICAnZnJlZXRpbWVQcm9qZWN0cyc6IFtcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdyNmxvb2t1cF93ZWJzaXRlJyxcbiAgICBdLFxuICAgICd0ZWNoUHJvamVjdHMnOiBbXG4gICAgICAgICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAnYjRfdGVjaG5pZWtfY2lyY3VsYWlyJyxcbiAgICAgICAgJ2I0X3RlY2huaWVrX21ldWJlbHMnLFxuICAgICAgICAna2V1emVfa29mZmllYmVrZXJzJyxcbiAgICAgICAgJ2ZsZXhpYmVsZV93b29udm9ybWVuJyxcbiAgICBdLFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVOYW1lcyA9IHtcbiAgICAnZmVhdHVyZWQnOiAnRmVhdHVyZWQnLFxuICAgICdmcmVldGltZVByb2plY3RzJzogJ0ZyZWUtVGltZSBQcm9qZWN0cycsXG4gICAgJ3RlY2hQcm9qZWN0cyc6ICdUZWNobmFzaXVtIFByb2plY3RzJyxcbn07XG5cbmNvbnN0IHBhZ2VzID0ge1xuICAgICdhYm91dCc6IHtcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJzExOTgxOUBteW1lcmV3YWRlLm5sPGJyPnR5Y2hvYnJvdXdlcjMzQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAndGl0bGUxJzogJ0ZvcnRlcyBMeWNldW0sIEdvcmluY2hlbTxicj5UZWNobmFzaXVtIGphYXIgNCwgNSBlbiA2JyxcbiAgICAgICAgICAgICd0aXRsZTInOiAnaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlcicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7fVxuICAgIH1cbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG5dO1xuXG5leHBvcnQge1xuICAgIHByb2plY3RzLFxuICAgIHByb2plY3RUeXBlcyxcbiAgICBwcm9qZWN0VHlwZU5hbWVzLFxuICAgIHBhZ2VzLFxuICAgIG1vbnRoTmFtZXNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=