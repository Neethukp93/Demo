/**
 * @description Material Module
 * @author Robinson M
 */
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  //MatButtonModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatBadgeModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class MaterialModule {}
