import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = 'Neethu'
    if (currentUser) {
        request = request.clone({
        setHeaders: {
            'Authorization': `${currentUser}`,
            'Access-Control-Allow-Origin':'*'
        }
        });
    }

    return next.handle(request);
    }
}