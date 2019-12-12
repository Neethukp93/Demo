import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpHeaders } from '@angular/common/http';
import { PrimengModule } from '../../modules/primeng.module';
import { MaterialModule } from '../../modules/material.module';
import { CommonApiCallerService } from '../common-api-caller.service';
import { ProgressSpinnerDialogComponent } from '../../components/progress-spinner-dialog/progress-spinner-dialog.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ProgressSpinnerDialogComponent],
  entryComponents: [ProgressSpinnerDialogComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ]
})
class TestModule {}
describe('CommonApiCallerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PrimengModule,
        MaterialModule,
        BrowserAnimationsModule,
        TestModule
      ],
      providers: [CommonApiCallerService]
    });
  });

  it('should be initialized', inject(
    [CommonApiCallerService],
    (apiService: CommonApiCallerService) => {
      expect(apiService).toBeTruthy();
    }
  ));

  it('should perform post request', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'login';
        const responseObject = {
          success: true,
          message: 'login was successful'
        };
        const data = { data: 'test data' };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        apiService.post(url, data);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'login'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('POST');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform post request with options', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'login';
        const responseObject = {
          success: true,
          message: 'login was successful'
        };
        const data = { data: 'test data' };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        apiService.post(url, data, httpOptions);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'login'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('POST');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform get request', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'search';
        const responseObject = {
          success: true,
          message: 'search was successful'
        };
        const data = { data: 'test data' };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        apiService.get(url, data);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'search'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform get request with options', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'search';
        const responseObject = {
          success: true,
          message: 'search was successful'
        };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        apiService.get(url, httpOptions);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'search'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform put request', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'update';
        const responseObject = {
          success: true,
          message: 'update was successful'
        };
        const data = { data: 'test data' };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        apiService.put(url, data);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'update'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('PUT');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform put request with options', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'update';
        const responseObject = {
          success: true,
          message: 'update was successful'
        };
        const data = { data: 'test data' };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        apiService.put(url, data, httpOptions);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'update'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('PUT');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform delete request', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'delete';
        const responseObject = {
          success: true,
          message: 'delete was successful'
        };
        const data = { data: 'test data' };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        apiService.delete(url, data);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'delete'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('DELETE');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform delete request with options', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'delete';
        const responseObject = {
          success: true,
          message: 'delete was successful'
        };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        apiService.delete(url, httpOptions);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'delete'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('DELETE');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('should perform delete request with options', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        // Set up
        const url = 'delete';
        const responseObject = {
          success: true,
          message: 'delete was successful'
        };
        const response: any = {};
        response.body = responseObject;
        response.status = 200;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        apiService.delete(url, httpOptions);
        const requestWrapper = backend.expectOne({
          url: environment.base_url + 'delete'
        });
        requestWrapper.flush(responseObject);

        tick();

        expect(requestWrapper.request.method).toEqual('DELETE');
        expect(response.body).toEqual(responseObject);
        expect(response.status).toBe(200);
      }
    )
  ));

  it('call handleError() method', inject(
    [CommonApiCallerService],
    (apiService: CommonApiCallerService) => {
      const error: any = {};
      error.status = 404;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(404);
        expect(err.name).toBe('NotFoundError');
      }

      error.status = 0;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(0);
        expect(err.name).toBe('UnKnownError');
      }

      error.status = 401;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(401);
        expect(err.name).toBe('UnAuthorizedError');
      }

      error.status = 400;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(400);
        expect(err.name).toBe('BadRequestError');
      }

      error.status = 500;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(500);
        expect(err.name).toBe('InternalServerError');
      }

      error.status = 502;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(502);
        expect(err.name).toBe('BadGatewayError');
      }

      error.status = 5000;
      try {
        apiService.handleError(error);
      } catch (err) {
        expect(err).toBeTruthy();
        expect(err.httpStatus).toBe(0);
        expect(err.name).toBe('ApplicationError');
      }
    }
  ));

  it('should throw error when http error response occured for post', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        const urlString = 'data';
        const emsg = 'deliberate 404 error';
        const data = { data: 'test data' };

        spyOn(apiService, 'handleError').and.callThrough();
        try {
          apiService.post(urlString, data);
          const req = backend.expectOne(environment.base_url+ urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }

        try {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          apiService.post(urlString, data, httpOptions);
          const req = backend.expectOne(environment.base_url+urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }
      }
    )
  ));

  it('should throw error when http error response occured for put', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        const urlString = 'data';
        const emsg = 'deliberate 404 error';
        const data = { data: 'test data' };

        spyOn(apiService, 'handleError').and.callThrough();
        try {
          apiService.put(urlString, data);
          const req = backend.expectOne(environment.base_url+urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }

        try {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          apiService.put(urlString, data, httpOptions);
          const req = backend.expectOne(environment.base_url+ urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }
      }
    )
  ));

  it('should throw error when http error response occured for get', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        const urlString = 'data';
        const emsg = 'deliberate 404 error';

        spyOn(apiService, 'handleError').and.callThrough();
        try {
          apiService.get(urlString);
          const req = backend.expectOne(environment.base_url+urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }

        try {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          apiService.get(urlString, httpOptions);
          const req = backend.expectOne(environment.base_url+urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }
      }
    )
  ));

  it('should throw error when http error response occured for delete', fakeAsync(
    inject(
      [CommonApiCallerService, HttpTestingController],
      (apiService: CommonApiCallerService, backend: HttpTestingController) => {
        const urlString = 'data';
        const emsg = 'deliberate 404 error';
        const data = { data: 'test data' };

        spyOn(apiService, 'handleError').and.callThrough();
        try {
          apiService.delete(urlString);
          const req = backend.expectOne(environment.base_url+urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }

        try {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          apiService.delete(urlString, httpOptions);
          const req = backend.expectOne(environment.base_url+urlString);

          // Respond with mock error
          req.flush(emsg, { status: 404, statusText: 'Not Found' });

          tick();
        } catch (err) {
          expect(err).toBeTruthy();
          expect(err.httpStatus).toBe(404);
          expect(err.name).toBe('NotFoundError');
        }
      }
    )
  ));
});
