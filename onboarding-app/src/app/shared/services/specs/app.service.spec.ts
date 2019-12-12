/**
 * @description Unit tests for AppService
 * @author Neethu KP
 */
import { TestBed, inject } from '@angular/core/testing';
import { AppService } from '../app.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('AppService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ AppService, HttpClient, HttpHandler ]
		});
	});
	it(
		'read appInfo.json file',
		inject([ AppService ], (appService: AppService) => {
			appService.getJSON().subscribe((res) => {
				expect(res).toBeTruthy();
				expect(res.footerText).toBe(
					'© This site is protected by copyright and trademark laws under US and international law. All rights reserved. © FedEx 2019'
				);
				expect(res.appName).toBe('ACCS');
			});
		})
	);
});
