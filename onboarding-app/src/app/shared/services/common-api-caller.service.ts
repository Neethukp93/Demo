/**
 * @description Common api caller Service
 * @author Neethu KP
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Globals } from '../globals/globals';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UnKnownError } from '../errors/unknown-error';
import { UnAuthorizedError } from '../errors/unauthorized-error';
import { BadRequestError } from '../errors/bad-req-error';
import { NotFoundError } from '../errors/not-found-error';
import { InternalServerError } from '../errors/internal-server-error';
import { BadGatewayError } from '../errors/bad-gateway-error';
import { ApplicationError } from '../errors/application-error';
// import 'rxjs/add/operator/catch';
@Injectable({
	providedIn: 'root'
})
export class CommonApiCallerService {
	constructor(private http: HttpClient, private globals: Globals) {}

	get(url, options?: any) {
		const subject = new Subject<any>();
		this.globals.showLoader();
		if (options) {
			// 	options.observe = 'response';
			this.http.get<HttpResponse<Object>>(environment.base_url + url, options).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		} else {
			this.http.get(environment.base_url + url).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		}
		return subject.asObservable();
	}

	post(url, data, options?: any) {
		const subject = new Subject<any>();
		this.globals.showLoader();
		if (options) {
			this.http.post(environment.base_url + url, data, options).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		} else {
			this.http.post(environment.base_url + url, data).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		}

		return subject.asObservable();
	}

	put(url, data, options?: any) {
		const subject = new Subject<any>();
		this.globals.showLoader();
		if (options) {
			this.http.put(environment.base_url + url, data, options).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		} else {
			this.http.put(environment.base_url + url, data).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		}
		return subject.asObservable();
	}

	delete(url, options?: any) {
		const subject = new Subject<any>();
		this.globals.showLoader();
		if (options) {
			this.http.delete(environment.base_url + url, options).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		} else {
			this.http.delete(environment.base_url + url, options).subscribe(
				(result) => {
					if (result) {
						this.globals.hideLoader();
						subject.next(result);
					}
				},
				(error) => {
					this.globals.hideLoader();
					//   this.appService.logError(error);
					this.handleError(error);
				}
			);
		}
		return subject.asObservable();
	}

	handleError(error: any) {
		console.log(error);
		switch (error.status) {
			case 0:
				throw new UnKnownError(error.message);
			case 401:
				throw new UnAuthorizedError(error.message);
			case 400:
				throw new BadRequestError(error.message);
			case 404:
				throw new NotFoundError(error.message);
			case 500:
				throw new InternalServerError(error.message);
			case 502:
				throw new BadGatewayError(error.message);
			default:
				throw new ApplicationError(error.message);
		}
	}
}
