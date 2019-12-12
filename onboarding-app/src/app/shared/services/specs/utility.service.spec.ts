/**
 * @description Unit tests for Utility Service
 */
import { TestBed } from '@angular/core/testing';
import { UtilityService } from '../utility.service';
describe('UtilityService', () => {
	let fixture;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ UtilityService ]
		});
		fixture = new UtilityService();
	});

	it('getDropdownList() should return SelectItem[] model ', async () => {
		let array = [ '123434', '6534767', '978789', '897938' ];
		let result = fixture.getDropdownList(array);
		expect(result.length).toBe(array.length);
		expect(result[0].label).toBe('123434');
		expect(result[0].value).toBe('123434');
		expect(result[1].label).toBe('6534767');
		expect(result[1].value).toBe('6534767');
		array = [];
		result = fixture.getDropdownList(array);
		expect(result.length).toBe(1);
		expect(result[0].label).toBe('No data found');
		expect(result[0].value).toBe('');
	});

	it('getDateAsYYYYMMDD() should return input date in  YYYYMMDD format ', async () => {
		let date = '11/02/2019';
		let formatedDate = fixture.getDateAsYYYYMMDD(date);
		expect(formatedDate).toBe('20190211');
		formatedDate = fixture.getDateAsYYYYMMDD('11-02-2019');
		expect(formatedDate).toBe('20190211');
		try {
			formatedDate = fixture.getDateAsYYYYMMDD('765765785');
		} catch (err) {
			expect(err).toBeTruthy();
		}
	});
});
