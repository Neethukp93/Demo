export class ApplicationError extends Error {
	httpStatus?: number = 0;
	applicationStatus?: number;
	errorMessageTranslationkey: string;
	handled: boolean = false;
	action: string = '';
	otherAction: string = '';

	constructor(message?: string) {
		super(message);
		this.name = ApplicationError.name;
		Object.setPrototypeOf(this, ApplicationError.prototype);
	}
}
