import { ProjectClass } from './odk-ts/project';
import { Navigator } from './odk-ts/navigator';
import { Page } from './odk-ts/page';
import { projects, projectTypes, pages } from '../utilities/variables';

class Main {
    constructor() {

    }

    public async printPage(pageId): Promise < void > {
        return new Promise < void > (async (resolve) => {
            const page = new Page(pageId, '', [], pages[pageId].content, pages[pageId].images, '');

            page.printPage();

            resolve();
        })
    }
}

const mainClass = new Main;
const navClass = new Navigator;

async function printProjectsNav(): Promise < void > {
    return new Promise < void > (async (resolve) => {
        for (const projectType in projectTypes) {
            if (projectTypes.hasOwnProperty(projectType)) {
                const projects = projectTypes[projectType];

                navClass.newProjectType(projectType)
                    .then(() => {
                        const navProjectTypeTitle: Element = document.querySelector('#' + projectType + ' .navTitle')!;

                        navProjectTypeTitle.addEventListener('click', function(event) {
                            const target = (event.target as HTMLElement).closest('.navObject');

                            if (target!.classList.contains('active')) {
                                target!.querySelector('.navArrow')!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 63.64 98.995"><g transform="translate(-286.68 590.675) rotate(-90)"><line x2="50" transform="translate(505.822 300.822) rotate(45)" fill="none" stroke-linecap="round" stroke-width="20"/><line x2="50" transform="translate(541.178 336.178) rotate(-45)" fill="none" stroke-linecap="round" stroke-width="20"/></g></svg>';
                            } else {
                                target!.querySelector('.navArrow')!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 98.995 63.64"><g transform="translate(-491.68 -286.68)"><line x2="50" transform="translate(505.822 300.822) rotate(45)" fill="none" stroke-linecap="round" stroke-width="20"/><line x2="50" transform="translate(541.178 336.178) rotate(-45)" fill="none" stroke-linecap="round" stroke-width="20"/></g></svg>';
                            }

                            target!.classList.toggle('active');
                        })
                    });

                for (let i = 0; i < projects.length; i++) {
                    const project = new ProjectClass(projects[i]);

                    navClass.newProject(project.projectIndex(), project.projectTitle(), projectType);
                }
            }
        }

        resolve();
    })
}

async function printPage(pageId: string): Promise < void > {
    return new Promise < void > (async (resolve) => {
        if (projects[pageId]) {
            const project = new ProjectClass(pageId);

            project.printProjectPage();
        } else {
            mainClass.printPage(pageId);
        }

        resolve();
    })
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
            })
        }
    });
