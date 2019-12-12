import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrimengModule } from '../shared/modules/primeng.module';
import { MaterialModule } from '../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule
  ]
})
export class AdminModule { }
