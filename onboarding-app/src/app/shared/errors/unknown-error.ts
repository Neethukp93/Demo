export class UnKnownError extends Error {
  httpStatus?: number = 0;
  applicationStatus?: number;
  errorMessageTranslationkey: string;
  handled: boolean = false;
  action:string = '';
  otherAction:string = '';

  constructor(message?: string) {
    super(message);
    this.name = UnKnownError.name;
    this.message = 'Server returns Unknown Error';
    Object.setPrototypeOf(this, UnKnownError.prototype);
  }
}
