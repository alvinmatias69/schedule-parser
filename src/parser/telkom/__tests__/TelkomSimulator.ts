import Schedule from '../../../entities/Schedule';
import Telkom from '..';

export default class TelkomSimulator extends Telkom {
  constructor(html: string) {
    super(html);
  }

  public isDOMIncluded(query: string): boolean {
    return !!this.html.querySelector(query);
  }

  public getId(): string {
    return this.nim;
  }

  public getName(): string {
    return this.name;
  }

  public getSchedule(): Schedule[] {
    return this.schedules;
  }
}
