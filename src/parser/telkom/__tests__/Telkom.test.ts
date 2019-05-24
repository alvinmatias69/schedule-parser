import Schedule from '../../../entities/Schedule';
import Student from '../../../entities/Student';
import TelkomSimulator from './TelkomSimulator';
import HTMLData from './RealData';

test('Should have h1', () => {
  // given
  const html = '<h1>Test</h1>';

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.isDOMIncluded('h1')).toBeTruthy();
});

test('Should success inside another html', () => {
  // given
  const html = '<html><h1>Test</h1></html>';

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.isDOMIncluded('h1')).toBeTruthy();
});

test('Should give ID', () => {
  // given
  const nim = '42069';
  const html = `<html>
                   <h3 class="ui-widget-header ui-corner-all" style="padding:5px;">
                      NIM : ${nim} - name
                   </h3>
                </html>`;

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.getId()).toBe(nim);
});

test('Should give name', () => {
  // given
  const name = 'Jon Snow';
  const html = `<html>
                   <h3 class="ui-widget-header ui-corner-all" style="padding:5px;">
                      NIM : nim - ${name}
                   </h3>
                </html>`;

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.getName()).toBe(name);
});

test('Should give same schedule length', () => {
  // given
  const count = 3;
  const content: string[] = [];
  for (let idx = 0; idx < count; idx++) {
    content.push(`
                <tr class="">
                   <td class=" sorting_1">SELASA</td>
                   <td>15:30 - 18:30</td>
                   <td>ROI3.06.09</td>
                   <td>THT101</td>
                   <td>SISTEM KOMUNIKASI TELINGA DAN TENGGOROKAN</td>
                   <td>IFTT-38-01</td>
                   <td>TETAP</td>
                </tr>
        `);
  }

  const html = `<html>
                   <table id="tDisplay">
                      <tbody role="alert" aria-live="polite" aria-relevant="all" align="">
                         ${content.join('')}
                      </tbody>
                   </table>
                </html>`;

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.getSchedule().length).toBe(count);
});

test('Should give same schedule object', () => {
  // given
  const schedule: Schedule = {
    day: 'today',
    start: '4.20',
    end: '6.20',
    name: 'CALCULUS',
    code: 'IFTT404',
    room: 'IF.TT.404',
    class_name: 'IFTT-38-08',
  };

  const html = `<html>
                   <table id="tDisplay">
                      <tbody role="alert" aria-live="polite" aria-relevant="all" align="">
                         <tr>
                            <td class=" sorting_1">${schedule.day}</td>
                            <td>${schedule.start} - ${schedule.end}</td>
                            <td>${schedule.room}</td>
                            <td>${schedule.code}</td>
                            <td>${schedule.name}</td>
                            <td>${schedule.class_name}</td>
                            <td>tetap</td>
                         </tr>
                      </tbody>
                   </table>
                </html>`;

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.getSchedule()[0]).toEqual(schedule);
});

test('Should give same student data', () => {
  // given
  const schedule: Schedule = {
    day: 'today',
    start: '4.20',
    end: '6.20',
    name: 'CALCULUS',
    code: 'IFTT404',
    room: 'IF.TT.404',
    class_name: 'IFTT-38-08',
  };

  const student: Student = {
    nim: '42069',
    name: 'Arya Stark',
    schedules: [schedule],
  };

  const html = `<html>
                   <h3 class="ui-widget-header ui-corner-all" style="padding:5px;">
                      NIM : ${student.nim} - ${student.name}
                   </h3>
                   <table id="tDisplay">
                      <tbody role="alert" aria-live="polite" aria-relevant="all" align="">
                         <tr>
                            <td class=" sorting_1">${schedule.day}</td>
                            <td>${schedule.start} - ${schedule.end}</td>
                            <td>${schedule.room}</td>
                            <td>${schedule.code}</td>
                            <td>${schedule.name}</td>
                            <td>${schedule.class_name}</td>
                            <td>tetap</td>
                         </tr>
                      </tbody>
                   </table>
                </html>`;

  // when
  const parser = new TelkomSimulator(html);

  // then
  expect(parser.getStudentData()).toEqual(student);
});

test('Should give proper data from real html', () => {
    // given
    const html = HTMLData;
    const student: Student = {
        nim: '1100121021',
        name: 'AOMINE DAIKI',
        schedules: [
            {
                day: 'SELASA',
                start: '15:30',
                end: '18:30',
                code: 'TTH503',
                name: 'SISTEM KOMUNIKASI DIGITAL LANJUT',
                class_name: 'IF-14-45',
                room: 'RO3.02.03'
            }, {
                day: 'RABU',
                start: '08:30',
                end: '11:30',
                code: 'TTH533',
                name: 'TEORI INFORMASI DAN PENGKODEAN',
                class_name: 'IF-14-45',
                room: 'RO3.02.03'
            }
        ]
    };

    // when
    const parser = new TelkomSimulator(html);

    // then
    expect(parser.getStudentData()).toEqual(student);
});
