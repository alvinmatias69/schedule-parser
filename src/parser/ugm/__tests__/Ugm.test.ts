import UgmSimulator from "./UgmSimulator";
import Schedule from "../../../entities/Schedule";

test('Should give ID', () => {
    // given
    const nim = '42069';
    const html = `<html>
                     <table class="table table-striped table-condensed">
                        <tbody>
                           <tr>
                              <td class="col-md-2 col-xs-2 text-right"><strong>NIM</strong></td>
                              <td class="col-md-4 col-xs-4">${nim}</td>
                              <td class="col-md-1">&nbsp;</td>
                              <td class="col-md-1 col-xs-1 text-right"><strong>PRODI</strong></td>
                              <td class="col-md-4 col-xs-4">TEKNIK ELEKTRONIK</td>
                           </tr>
                       </tbody>
                     </table>
                   </html>`;

    // when
    const parser = new UgmSimulator(html);

    // then
    expect(parser.getNim()).toBe(nim);
});

test('Should give name', () => {
    // given
    const name = 'Daenerys';
    const html = `
    <table class="table table-striped table-condensed">
			<tbody>
				<tr>
					<td class="col-md-2 col-xs-2 text-right"><strong>NIM</strong></td>
					<td class="col-md-4 col-xs-4">nim</td>
					<td class="col-md-1">&nbsp;</td>
					<td class="col-md-1 col-xs-1 text-right"><strong>PRODI</strong></td>
					<td class="col-md-4 col-xs-4">TEKNIK ELEKTRO</td>
				</tr>
				<tr>
					<td class="col-md-2 col-xs-2 text-right"><strong>NAMA</strong></td>
					<td class="col-md-4 col-xs-4">${name}</td>
					<td class="col-md-1">&nbsp;</td>
					<td class="col-md-1 col-xs-1 text-right"><strong>SEMESTER</strong></td>
					<td class="col-md-4 col-xs-4">GENAP 2018/2019</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
`;

    // when
    const parser = new UgmSimulator(html);

    // then
    expect(parser.getName()).toBe(name);
});

test('Should have same schedule length', () => {
    // given
    const length = 3;
    let content: string = '';

    for (let index = 0; index < length; index++) {
        content += `<tr>
                     <td>
                      <span class="btn btn-sm btn-success" disabled="disabled">Sudah disetujui</span>
                     </td>
                     <td class="text-right">1</td>
                     <td>
                     </td>
                     <td>
                      TKEE182105 MOBA ANALOG <br>
                      <em>(KELAS A)</em> <br>

                      <em>code: 8fbc-c8xa-at09-4976</em>
                     </td>
                     <td class="text-center">2</td>
                     <td>
                      Kuliah: <br>
                       &nbsp;&nbsp;&nbsp; Rabu, 12:30-13:00 (S207 (TDD)) <br>
                      UTS: <br>
                       &nbsp;&nbsp;&nbsp; 09 April 2019, 13:00-15:00 (S307 (E7)) <br>
                      UAS: <br>
                       &nbsp;&nbsp;&nbsp; 12 Juni 2019, 13:00-15:00 (S307 (E7)) <br>
                     </td>
                    </tr>`;
    }

    const html = `<html>
                   <table class="table table-striped table-condensed">
                     <tbody>
                     <tr>
                      <td class="col-md-2 col-xs-2 text-right"><strong>NIM</strong></td>
                      <td class="col-md-4 col-xs-4">nim</td>
                      <td class="col-md-1">&nbsp;</td>
                      <td class="col-md-1 col-xs-1 text-right"><strong>PRODI</strong></td>
                      <td class="col-md-4 col-xs-4">TEKNIK ELEKTRO</td>
                     </tr>
                     <tr>
                      <td class="col-md-2 col-xs-2 text-right"><strong>NAMA</strong></td>
                      <td class="col-md-4 col-xs-4">name</td>
                      <td class="col-md-1">&nbsp;</td>
                      <td class="col-md-1 col-xs-1 text-right"><strong>SEMESTER</strong></td>
                      <td class="col-md-4 col-xs-4">GENAP 2018/2019</td>
                     </tr>
                     <tr></tr>
                     </tbody>
                    </table>
                    <table>
                     <tbody>
                      ${content}
                     </tbody>
                    </table>
                   </html>`;

    // when
    const parser = new UgmSimulator(html);

    // then
    expect(parser.getSchedules().length).toBe(length);
})

test('Should have return schedule item', () => {
    // given
    let schedule: Schedule = {
        day: 'Senin',
        start: '12:30',
        end: '13:00',
        name: 'MOBA ANALOG',
        class_name: 'KELAS A',
        room: 'S207 (TDD)',
        code: 'TKEE182105'
    };

    let content: string = `<tr>
                             <td>
                              <span class="btn btn-sm btn-success" disabled="disabled">Sudah disetujui</span>
                             </td>
                             <td class="text-right">1</td>
                             <td>
                             </td>
                             <td>
                              ${schedule.code} ${schedule.name} <br>
                              <em>(${schedule.class_name})</em> <br>

                              <em>code: 8fbc-c8xa-at09-4976</em>
                             </td>
                             <td class="text-center">2</td>
                             <td>
                              Kuliah: <br>
                               &nbsp;&nbsp;&nbsp; ${schedule.day}, ${schedule.start}-${schedule.end} (${schedule.room}) <br>
                              UTS: <br>
                               &nbsp;&nbsp;&nbsp; 09 April 2019, 13:00-15:00 (S307 (E7)) <br>
                              UAS: <br>
                               &nbsp;&nbsp;&nbsp; 12 Juni 2019, 13:00-15:00 (S307 (E7)) <br>
                             </td>
                            </tr>`;

    const html = `<html>
                   <table class="table table-striped table-condensed">
                     <tbody>
                     <tr>
                      <td class="col-md-2 col-xs-2 text-right"><strong>NIM</strong></td>
                      <td class="col-md-4 col-xs-4">nim</td>
                      <td class="col-md-1">&nbsp;</td>
                      <td class="col-md-1 col-xs-1 text-right"><strong>PRODI</strong></td>
                      <td class="col-md-4 col-xs-4">TEKNIK ELEKTRO</td>
                     </tr>
                     <tr>
                      <td class="col-md-2 col-xs-2 text-right"><strong>NAMA</strong></td>
                      <td class="col-md-4 col-xs-4">name</td>
                      <td class="col-md-1">&nbsp;</td>
                      <td class="col-md-1 col-xs-1 text-right"><strong>SEMESTER</strong></td>
                      <td class="col-md-4 col-xs-4">GENAP 2018/2019</td>
                     </tr>
                     <tr></tr>
                     </tbody>
                    </table>
                    <table>
                     <tbody>
                      ${content}
                     </tbody>
                    </table>
                   </html>`;

    // when
    const parser = new UgmSimulator(html);

    // then
    expect(parser.getSchedules()[0]).toEqual(schedule);
});

test('Should not error on empty schedule', () => {
    // given
    let schedule: Schedule = {
        day: '',
        start: '',
        end: '',
        name: 'MOBA ANALOG',
        class_name: 'KELAS A',
        room: '',
        code: 'TKEE182105'
    };

    let content: string = `<tr>
                              <td>
                               <span class="btn btn-sm btn-success" disabled="disabled">Sudah disetujui</span>
                              </td>
                              <td class="text-right">5</td>
                              <td>
                              </td>
                              <td>
                               ${schedule.code} ${schedule.name} <br>
                               <em>(${schedule.class_name})</em> <br>

                               <em>code: c032-44c7-483a-79cd</em>
                              </td>
                              <td class="text-center">2</td>
                              <td>
                               Kuliah: <br>
                               <br>

                               UTS: <br>
                               <br>

                               UAS: <br>
                               <br>
                              </td>

                            </tr>`;

    const html = `<html>
                   <table class="table table-striped table-condensed">
                     <tbody>
                     <tr>
                      <td class="col-md-2 col-xs-2 text-right"><strong>NIM</strong></td>
                      <td class="col-md-4 col-xs-4">nim</td>
                      <td class="col-md-1">&nbsp;</td>
                      <td class="col-md-1 col-xs-1 text-right"><strong>PRODI</strong></td>
                      <td class="col-md-4 col-xs-4">TEKNIK ELEKTRO</td>
                     </tr>
                     <tr>
                      <td class="col-md-2 col-xs-2 text-right"><strong>NAMA</strong></td>
                      <td class="col-md-4 col-xs-4">name</td>
                      <td class="col-md-1">&nbsp;</td>
                      <td class="col-md-1 col-xs-1 text-right"><strong>SEMESTER</strong></td>
                      <td class="col-md-4 col-xs-4">GENAP 2018/2019</td>
                     </tr>
                     <tr></tr>
                     </tbody>
                    </table>
                    <table>
                     <tbody>
                      ${content}
                     </tbody>
                    </table>
                   </html>`;

    // when
    const parser = new UgmSimulator(html);

    // then
    expect(parser.getSchedules()[0]).toEqual(schedule);
})
