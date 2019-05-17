import Student from './entities/Student';
import ParserInterface from './parser/ParserInterface';
import Telkom from './parser/telkom';

export enum ScheduleType {
    Telkom
}

export function parse(html: string, scheduleType: ScheduleType): Student {
    let parser: ParserInterface;

    switch (scheduleType) {
        default:
            parser = new Telkom(html);
            break;
    }

    return parser.getStudentData();
}
