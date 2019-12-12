/**
 * @description Unit tests for Progress spinner dialog component
 * @author Neethu KP
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressSpinnerDialogComponent } from './progress-spinner-dialog.component';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA } from '@angular/material';

describe('ProgressSpinnerDialogComponent', () => {
  let component: ProgressSpinnerDialogComponent;
  let fixture: ComponentFixture<ProgressSpinnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create loader html', () => {
    fixture.detectChanges();
    expect(component.data).toBeTruthy();

  });


});
