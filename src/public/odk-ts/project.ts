import { Page } from './page';
import { projects } from '../../utilities/variables';

interface IProject {
    date: string,
    index: string,
    image: string,
    links: {
        view: string,
        github: string,
    }
    tags: Array<string>,
    title: string,
    content: Object,
    images: Object,
}

export class ProjectClass {
    private project: IProject;

    constructor(projectName: string) {
        this.project = projects[projectName];
    }

    projectTitle() {
        return this.project.title;
    }

    projectIndex() {
        return this.project.index;
    }

    printProjectPage() {
        const page = new Page(this.project.title, this.project.date, this.project.tags, this.project.content, this.project.images);

        page.printPage();
    }
}
