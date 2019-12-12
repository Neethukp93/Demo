/**
 * @description error handler service for http error response
 * @author Neethu KP
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService {
	constructor() {}
	minorErrorfound: Subject<Object> = new Subject<Object>();
	majorErrorFound: Subject<Object> = new Subject<Object>();
	fatalErrorFound: Subject<Object> = new Subject<Object>();
	warningFound: Subject<Object> = new Subject<Object>();
	showNotification(error: any) {
		this.minorErrorfound.next({
			severity: 'error',
			summary: `Error code: ${error.httpStatus}`,
			detail: error.message
		});
	}

	showMajorErrorWindow(error: any) {
		this.majorErrorFound.next({
			severity: 'error',
			summary: `Error code: ${error.httpStatus}`,
			detail: error.message,
			action: error.action,
			otherAction: error.otherAction
		});
	}

	showFatalErrorWindow(error: any) {
		this.fatalErrorFound.next({
			severity: 'error',
			summary: `Fatal Error Occurred !`,
			detail: error.message,
			action: 'Please close the application and try again...',
			otherAction: error.otherAction,
			fatal: true
		});
	}

	showWarningErrors(error: any) {
		this.warningFound.next({
			severity: 'warning',
			summary: `Warning`,
			detail: error.message
		});
	}
}
