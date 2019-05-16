import Student from './entities/Student';
import Parser from './Parser';

export function parse(html: string): Student {
  const parser = new Parser(html);
  return parser.getStudentData();
}
