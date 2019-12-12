/**
 * @description Globals for handling global properties and methods
 * @author Neethu KP
 */

import { Injectable, Optional } from '@angular/core';
import { ProgressSpinnerDialogComponent } from '../components/progress-spinner-dialog/progress-spinner-dialog.component';
import {
  MatDialogRef,
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class Globals {
  dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;
  constructor(@Optional() public dialog: MatDialog) {}

  showLoader() {
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
  }

  hideLoader() {
    this.dialogRef.close();
  }
}
