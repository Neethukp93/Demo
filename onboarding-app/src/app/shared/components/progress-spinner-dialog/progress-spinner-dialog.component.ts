import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
	selector: 'app-progress-spinner-dialog',
	template: `
    <div class="app-loading">
      <svg class="spinner" viewBox="25 25 50 50">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  `,
	styles: [
		`
      .app-loading {
        position: static;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .app-loading .spinner .path {
        stroke: #dddd;
      }
    `
	]
})
export class ProgressSpinnerDialogComponent {
	// @Input() percent: number;
	data;
	constructor(private dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
		this.data = data;
		// console.log(data);
	}
}
