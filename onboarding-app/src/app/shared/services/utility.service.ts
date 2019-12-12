/**
 * @description Common api caller Service
 * @author Neethu KP
 */
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ApplicationError } from '../errors/application-error';
@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	constructor() {}

	getDropdownList(array: Array<any>) {
		const newList: SelectItem[] = [];
		array.forEach((element) => {
			if (element !== null && element !== '') {
				newList.push({ label: element, value: element });
			}
		});

		if (array.length === 0) {
			newList.push({ label: 'No data found', value: '' });
		}

		return newList;
	}

	getDateAsYYYYMMDD(date: string) {
		if (date.split('/').length > 1) {
			return date.split('/').reverse().join('');
		} else if (date.split('-').length > 1) {
			return date.split('-').reverse().join('');
		} else {
			const error = new Error();
			error.message = 'Date Format should be DD/MM/YYYY or DD-MM-YYYY';
			throw new ApplicationError(error.message);
		}
	}
}
