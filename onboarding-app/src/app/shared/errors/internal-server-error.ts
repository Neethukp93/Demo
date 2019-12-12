export class InternalServerError extends Error {
  httpStatus?: number = 500;
  applicationStatus?: number;
  errorMessageTranslationkey: string;
  handled: boolean = false;
  action:string = 'Reload the web page. You can do that by clicking the refresh/reload button, pressing F5 or Ctrl + R !';
  otherAction:string = 'Clear your browser\'s cache and Delete your browser\'s cookies !';

  constructor(message?: string) {
    super(message);
    this.name = InternalServerError.name;
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}
