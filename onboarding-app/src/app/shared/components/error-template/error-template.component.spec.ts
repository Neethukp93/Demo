/**
 * @description Unit tests for Error Template Componet
 * @author Neethu KP
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ErrorMessageService } from '../../services/error-message.service';
import { FormsModule } from '@angular/forms';
import { ErrorMessagesModule } from './error-template.component';

@Component({
    template: `
    <app-error-template></app-error-template>
    <button id="info" type="button" pButton (click)="showInfo()" label="Info" class="ui-button-info"></button>
    <button id="warn" type="button" pButton (click)="showWarn()" label="Warn" class="ui-button-warning"></button>
    <button id="error" type="button" pButton (click)="showError()" label="Error" class="ui-button-danger"></button>
    <button id="clear" type="button" pButton (click)="clearMessages()" label="Use Service"></button>
    `
})
class TestErrorTemplateComponent {
    constructor(private errorMessageService: ErrorMessageService) { }

    showSuccess() {
        this.errorMessageService.add({ severity: 'success', summary: 'Success Message', detail: 'Success Detail' });
    }

    showInfo() {
        this.errorMessageService.add({ severity: 'info', summary: 'Info Message', detail: 'Info Detail' });
    }

    showWarn() {
        this.errorMessageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'Warn Detail' });
    }

    showError() {
        this.errorMessageService.add({ severity: 'error', summary: 'Error Message', detail: 'Error Detail' });
    }
    clearMessages() {
        this.errorMessageService.clear();
    }

}

describe('ErrorTemplateComponent', () => {

    let fixture: ComponentFixture<TestErrorTemplateComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                FormsModule,
                ErrorMessagesModule
            ],
            declarations: [
                TestErrorTemplateComponent
            ],
            providers: [ErrorMessageService]
        });

        fixture = TestBed.createComponent(TestErrorTemplateComponent);
    });

    it('should show info', () => {
        fixture.detectChanges();

        const infoButton = fixture.debugElement.query(By.css('#info'));
        infoButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('.ui-messages'));
        const iconEl = fixture.debugElement.query(By.css('.ui-messages-icon'));
        const summaryEl = fixture.debugElement.query(By.css('.ui-messages-summary'));
        const detailEl = fixture.debugElement.query(By.css('.ui-messages-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('ui-messages-info');
        expect(iconEl.nativeElement.className).toContain('pi-info-circle');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Info Message');
        expect(detailEl.nativeElement.innerHTML).toContain('Info Detail');
    });

    it('should show warning', () => {
        fixture.detectChanges();

        const warningButton = fixture.debugElement.query(By.css('#warn'));
        warningButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('.ui-messages'));
        const iconEl = fixture.debugElement.query(By.css('.ui-messages-icon'));
        const summaryEl = fixture.debugElement.query(By.css('.ui-messages-summary'));
        const detailEl = fixture.debugElement.query(By.css('.ui-messages-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('ui-messages-warn');
        expect(iconEl.nativeElement.className).toContain('pi-exclamation-triangle');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Warn Message');
        expect(detailEl.nativeElement.innerHTML).toContain('Warn Detail');
    });

    it('should show error', () => {
        fixture.detectChanges();

        const errorButton = fixture.debugElement.query(By.css('#error'));
        errorButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('.ui-messages'));
        const iconEl = fixture.debugElement.query(By.css('.ui-messages-icon'));
        const summaryEl = fixture.debugElement.query(By.css('.ui-messages-summary'));
        const detailEl = fixture.debugElement.query(By.css('.ui-messages-detail'));
        expect(messageEl).toBeTruthy();
        expect(iconEl).toBeTruthy();
        expect(summaryEl).toBeTruthy();
        expect(detailEl).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('ui-messages-error');
        expect(iconEl.nativeElement.className).toContain('pi-times');
        expect(summaryEl.nativeElement.innerHTML).toEqual('Error Message');
        expect(detailEl.nativeElement.innerHTML).toContain('Error Detail');
    });

    it('should clear with service', () => {

        fixture.detectChanges();

        const infoButton = fixture.debugElement.query(By.css('#info'));
        const clearButton = fixture.debugElement.query(By.css('#clear'));
        infoButton.nativeElement.click();
        fixture.detectChanges();

        clearButton.nativeElement.click();
        fixture.detectChanges();

        const messageEl = fixture.debugElement.queryAll(By.css('.ui-messages'));
        expect(messageEl.length).toEqual(0);
    });


});
