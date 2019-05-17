import ParserInterface from "../ParserInterface";
import Student from "../../entities/Student";
import Parser from "../Parser";
import Schedule from "../../entities/Schedule";
import Helper from './Helper';

export default class Ugm extends Parser implements ParserInterface {
    protected nim: string = '';
    protected name: string = '';
    protected schedules: Schedule[] = [];

    constructor(html: string) {
        super(html);

        this.setNim();
        this.setName();
        this.setSchedule();
    }

    public getStudentData(): Student {
        return {
            name: "",
            nim: "",
            schedules: []
        }
    }

    private setNim() {
        const data = this.html.querySelector('tbody');
        if (data && data.children[0] && data.children[0].children[1]) {
            this.nim = data.children[0].children[1].innerHTML;
        }
    }

    private setName() {
        const data = this.html.querySelector('tbody');
        if (data && data.children[1] && data.children[1].children[1]) {
            this.name = data.children[1].children[1].innerHTML;
        }
    }

    private setSchedule() {
        const data = this.html.querySelectorAll('tbody');
        if (data && data[1]) {
            for (let index = 0; index < data[1].children.length; index++) {
                const schedule: Schedule = new Helper(data[1].children[index]).getData();
                this.schedules.push(schedule);
            }
        }
    }
}
