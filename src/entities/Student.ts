import Schedule from './Schedule';

export default interface Student {
  name: string;
  nim: string;
  schedules: Schedule[];
}
