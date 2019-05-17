import Student from '../entities/Student';

export default interface ParserInterface {
  getStudentData(): Student;
}
