import Schedule from '../../entities/Schedule';

export default class Helper {
  private element: Element;
  private name: string = '';
  private code: string = '';
  private class_name: string = '';
  private day: string = '';
  private start: string = '';
  private end: string = '';
  private room: string = '';

  constructor(element: Element) {
    this.element = element;
  }

  public getData(): Schedule {
    if (this.element.children[3]) {
      let information = this.element.children[3].innerHTML.trim().split('<br>');

      if (information.length >= 2) {
        this.setCode(information[0]);
        this.setName(information[0]);
        this.setClassName(information[1]);
      }
    }

    if (this.element.children[5]) {
      let information = this.element.children[5].innerHTML
        .split('<br>')[1]
        .replace(/&nbsp;/gi, ' ')
        .trim()
        .split(' ');

      if (information.length == 4) {
        this.setDay(information[0]);
        this.setTime(information[1]);
        this.setRoom(information[2].concat(' ', information[3]));
      }
    }

    const schedule: Schedule = {
      name: this.name,
      code: this.code,
      class_name: this.class_name,
      start: this.start,
      end: this.end,
      room: this.room,
      day: this.day,
    };

    return schedule;
  }

  private setCode(information: string) {
    this.code = information.split(' ')[0];
  }

  private setName(information: string) {
    let position = information.indexOf(' ');
    this.name = information.substring(position).trim();
  }

  private setClassName(information: string) {
    let start = information.indexOf('(') + 1;
    let end = information.indexOf(')');
    this.class_name = information.substring(start, end);
  }

  private setDay(information: string) {
    this.day = information.substring(0, information.length - 1);
  }

  private setTime(information: string) {
    let time = information.split('-');
    this.start = time[0];
    this.end = time[1];
  }

  private setRoom(information: string) {
    this.room = information.substring(1, information.length - 1);
  }
}
