export class BadGatewayError extends Error {
  httpStatus?: number = 502;
  applicationStatus?: number;
  errorMessageTranslationkey: string;
  handled: boolean = false;
  action:string = '';
  otherAction:string = '';

  constructor(message?: string) {
    super(message);
    this.name = BadGatewayError.name;
    this.message = 'Server returns Bad Gateway Error';
    Object.setPrototypeOf(this, BadGatewayError.prototype);
  }
}
