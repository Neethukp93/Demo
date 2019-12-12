/**
 * @description Common api caller Service
 * @author Neethu KP
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	userInfo = { location: 'sin', name: 'Neethu KP' };
	private userInfosubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.userInfo);
	userInfo$: Observable<any> = this.userInfosubject.asObservable();
	constructor() {}

	getUserInfo() {
		return this.userInfo;
	}

	updateUserInfo(userInfo) {
		// for (let key of Object.keys(userInfo)) {
		// 	if (userInfo[key] === 'location') {
		// 		this.userInfo.location = userInfo[key];
		// 	}
		// }
		this.userInfosubject.next(userInfo);
	}
}
