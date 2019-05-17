import Schedule from '../../entities/Schedule';

export default class Helper {
  private element: Element;

  constructor(element: Element) {
    this.element = element;
  }

  public getData(): Schedule {
    const time = this.parseDate(1);
    const start = time[0];
    const end = time[1];

    const day = this.parseValue(0);
    const room = this.parseValue(2);
    const code = this.parseValue(3);
    const name = this.parseValue(4);
    const class_name = this.parseValue(5);

    const schedule: Schedule = {
      day,
      start,
      end,
      name,
      code,
      room,
      class_name,
    };

    return schedule;
  }

  private parseValue(index: number): string {
    const child = this.element.children[index];
    return child ? child.innerHTML : '';
  }

  private parseDate(index: number): [string, string] {
    const date = this.element.children[index];
    if (date) {
      const dateArr = date.innerHTML.split(' - ');
      return [dateArr[0], dateArr[1]];
    }
    return ['', ''];
  }
}
