/**
 * @description Application Global Error Handler
 * @author Neethu KP
 */
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { UnKnownError } from './unknown-error';
import { ApplicationError } from './application-error';
import { BadRequestError } from './bad-req-error';
import { NotFoundError } from './not-found-error';
import { InternalServerError } from './internal-server-error';
import { UnAuthorizedError } from './unauthorized-error';
import { BadGatewayError } from './bad-gateway-error';
import { ErrorHandlerService } from '../services/error-handler-service';
@Injectable()
export class AppErrorHandler extends ErrorHandler {
  private errors: ApplicationError[] = [];

  constructor(private errorHandlerservice: ErrorHandlerService) {
    super();
  }

  handleError(error: any): void {
    console.log(error);
    switch (error.constructor) {
      case UnKnownError:
        this.errorHandlerservice.showNotification(error);
        console.log('Unknown Error');
        break;
      case ApplicationError:
        this.errorHandlerservice.showWarningErrors(error);
        console.log('Application Error');
        break;
      case BadRequestError:
        this.errorHandlerservice.showNotification(error);
        console.log('Badrequest Error');
        break;
      case NotFoundError:
        this.errorHandlerservice.showNotification(error);
        console.log('Notfound Error');
        break;
      case InternalServerError:
        this.errorHandlerservice.showMajorErrorWindow(error);
        console.log('Internal Server Error');
        break;
      case UnAuthorizedError:
        console.log('Unauth Error');
        this.errorHandlerservice.showFatalErrorWindow(error);
        //this.errorHandlerservice.showNotification(error);
        break;
      case BadGatewayError:
        console.log('Badgateway Error');
        this.errorHandlerservice.showNotification(error);
        break;
      default:
        console.log(error);
        this.errorHandlerservice.showFatalErrorWindow(error);
    }
  }
}
