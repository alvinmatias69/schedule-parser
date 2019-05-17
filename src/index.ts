import Student from './entities/Student';
import ParserInterface from './parser/ParserInterface';
import Telkom from './parser/telkom';
import Ugm from './parser/ugm';

export enum ScheduleType {
  Telkom,
  UGM,
}

export function parse(html: string, scheduleType: ScheduleType): Student {
  let parser: ParserInterface;

  switch (scheduleType) {
    case ScheduleType.UGM:
      parser = new Ugm(html);
      break;
    default:
      parser = new Telkom(html);
      break;
  }

  return parser.getStudentData();
}
