export class NotFoundError extends Error {
  httpStatus?: number = 404;
  applicationStatus?: number;
  errorMessageTranslationkey: string;
  handled: boolean = false;
  action:string = '';
  otherAction:string = '';

  constructor(message?: string) {
    super(message);
    this.name = NotFoundError.name;
    this.message = 'Server returns Not Found Error';
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
