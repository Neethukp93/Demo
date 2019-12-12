export class BadRequestError extends Error {
  httpStatus?: number = 400;
  applicationStatus?: number;
  errorMessageTranslationkey: string;
  handled: boolean = false;
  action:string = '';
  otherAction:string = '';

  constructor(message?: string) {
    super(message);
    this.name = BadRequestError.name;
    this.message = 'Server returns Bad Request Error';
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
