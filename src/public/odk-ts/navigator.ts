import { ProjectClass } from './project';
import { projectTypeNames } from '../../utilities/variables';

export class Navigator {
    private projectDiv: HTMLElement = document.getElementById('projectContainer')!;;
    private firstProjectType: boolean = true;
    private firstProject: boolean = true;

    public async newProjectType(projectType: string): Promise < void > {
        return new Promise < void > (async (resolve) => {
            let active: string = '';

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
                            <p>${projectTypeNames[projectType]}</p>
                        </div>
                    </div>
                    <div class='navDropDownDiv'>

                    </div>
                </div>
            `;

            resolve();
        })
    }

    public async newProject(projectIndex: string, projectName: string, projectType: string): Promise < void > {
        return new Promise < void > (async (resolve) => {
            const projectTypeDiv: Element = document.querySelector('#' + projectType + ' .navDropDownDiv')!;
            let active: string = '';

            if (this.firstProject) {
                active = 'active';

                const project = new ProjectClass(projectIndex);
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
        })
    }
}
