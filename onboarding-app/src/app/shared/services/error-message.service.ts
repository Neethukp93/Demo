/**
 * @description Error message service for handling error-templates (error,warn.info)
 * @author Neethu KP
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrorMessage } from './../models/error-message.model';

@Injectable({ providedIn: 'root' })
export class ErrorMessageService {
	private messageSource = new Subject<ErrorMessage | ErrorMessage[]>();
	private clearSource = new Subject<string>();

	messageObserver = this.messageSource.asObservable();
	clearObserver = this.clearSource.asObservable();

	add(message: ErrorMessage) {
		if (message) {
			this.messageSource.next(message);
		}
	}

	clear(key?: string) {
		this.clearSource.next(key || null);
	}
}
