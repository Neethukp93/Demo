import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimengModule } from './shared/modules/primeng.module';
import { MaterialModule } from './shared/modules/material.module';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent, HeaderComponent, FooterComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule, PrimengModule, MaterialModule,AdminModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
