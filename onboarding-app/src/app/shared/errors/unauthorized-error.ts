export class UnAuthorizedError extends Error {
  httpStatus?: number = 401;
  applicationStatus?: number;
  errorMessageTranslationkey: string;
  handled: boolean = false;
  action:string = '';
  otherAction:string = '';

  constructor(message?: string) {
    super(message);
    this.name = UnAuthorizedError.name;
    this.message = 'Server returns UnAuthorized Error';
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }
}
