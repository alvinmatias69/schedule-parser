import Schedule from '../../entities/Schedule';
import Student from '../../entities/Student';
import Helper from './Helper';
import ParserInterface from '../ParserInterface';
import Parser from '../Parser';

export default class Telkom extends Parser implements ParserInterface {
  protected nim: string = '';
  protected name: string = '';
  protected schedules: Schedule[] = [];

  constructor(html: string) {
    super(html);

    this.setNim();
    this.setName();
    this.setSchedules();
  }

  public getStudentData(): Student {
    return {
      name: this.name,
      nim: this.nim,
      schedules: this.schedules,
    };
  }

  private setNim() {
    const identity = this.html.body.querySelector('h3.ui-widget-header');
    if (identity) {
      const nim = identity.innerHTML.match(/[0-9]+/g);
      this.nim = !!nim ? nim[0] : '';
    }
  }

  private setName() {
    const identity = this.html.body.querySelector('h3.ui-widget-header');
    if (identity) {
      const name = identity.innerHTML.match(/- [a-zA-Z ]+/g);
      this.name = !!name ? name[0].substring(2) : '';
    }
  }

  private setSchedules() {
    const table = this.html.body.querySelector('tbody[role=alert]');
    if (table) {
      for (let index = 0; index < table.children.length; index++) {
        const schedule: Schedule = new Helper(table.children[index]).getData();
        this.schedules.push(schedule);
      }
    }
  }
}
