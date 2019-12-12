/**
 * @description Unit tests for Error message service
 * @author Neethu KP
 */
import { TestBed, inject } from '@angular/core/testing';
import { ErrorMessageService } from '../error-message.service';
describe('ErrorMessagesService', () => {
	let fixture;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ ErrorMessageService ]
		});
		fixture = new ErrorMessageService();
	});

	it('add() should emit data to messageSource', async () => {
		fixture.messageObserver.subscribe((message) => {
			expect(message).toBe('test message');
		});
		fixture.add('test message');
	});

	it('clear() should emit data or null to clearSource', async () => {
		fixture.clearObserver.subscribe((key) => {
			if (key) {
				expect(key).toBe('key');
			} else {
				expect(key).toBeNull();
			}
		});
		fixture.add('key');
		fixture.add(null);
	});
});
