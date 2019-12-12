/**
 * @description Unit tests for Error Handler service
 * @author Neethu KP
 */
import { TestBed, inject } from '@angular/core/testing';
import { ErrorHandlerService } from '../error-handler-service';
describe('ErrorHandlerService', () => {
	let fixture;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ ErrorHandlerService ]
		});
		fixture = new ErrorHandlerService();
	});

	it('showNotification() should emit data to minorErrorfound', async () => {
		fixture.minorErrorfound.subscribe((notification) => {
			expect(notification.severity).toBe('error');
			expect(notification.detail).toBe('not found error');
			expect(notification.httpStatus).toBe('404');
			expect(notification.summary).toBe('Error code: 404');
		});
		const error: any = {};
		error.message = 'not found error';
		error.httpStatus = '404';
		fixture.showNotification(error);
	});

	it('showMajorErrorWindow() should emit data to majorErrorFound', async () => {
		fixture.majorErrorFound.subscribe((majorError) => {
			expect(majorError.severity).toBe('error');
			expect(majorError.detail).toBe('not found error');
			expect(majorError.httpStatus).toBe('404');
			expect(majorError.action).toBe('action');
			expect(majorError.otherAction).toBe('other action');
			expect(majorError.summary).toBe('Error code: 404');
		});
		const error: any = {};
		error.message = 'not found error';
		error.httpStatus = '404';
		error.action = 'action';
		error.otherAction = 'other action';
		fixture.showMajorErrorWindow(error);
	});
	it('showFatalErrorWindow() should emit data to fatalErrorFound', async () => {
		fixture.fatalErrorFound.subscribe((fatalError) => {
			expect(fatalError.severity).toBe('error');
			expect(fatalError.detail).toBe('not found error');
			expect(fatalError.httpStatus).toBe('404');
			expect(fatalError.summary).toBe('Fatal Error Occurred !');
			expect(fatalError.action).toBe('Please close the application and try again...');
			expect(fatalError.otherAction).toBe('other action');
			expect(fatalError.fatal).toBe(true);
		});
		const error: any = {};
		error.message = 'not found error';
		error.httpStatus = '404';
		error.otherAction = 'other action';
		fixture.showFatalErrorWindow(error);
	});
	it('showWarningErrors() should emit data to warningFound', async () => {
		fixture.warningFound.subscribe((warning) => {
			expect(warning.severity).toBe('warning');
			expect(warning.detail).toBe('not found error');
			expect(warning.summary).toBe('Warning');
		});
		const error: any = {};
		error.message = 'not found error';
		error.httpStatus = '404';
		fixture.showWarningErrors(error);
	});
});
