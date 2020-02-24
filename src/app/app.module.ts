import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from './_alert';
import { AppRoutingModule } from './app-routing.module';    
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule } from '@angular/material';

import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { DemoComponent } from './_components/demo/demo.component';
import { RegisterComponent } from './_components/register/register.component';
import { LoginComponent } from './_components/login/login.component';
import { VelocityComponent } from './_components/demo/template-components/velocity/velocity.component';
import { FreemarkerComponent } from './_components/demo/template-components/freemarker/freemarker.component';
import { ThymeleafComponent } from './_components/demo/template-components/thymeleaf/thymeleaf.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    RegisterComponent,
    LoginComponent,
    VelocityComponent,
    FreemarkerComponent,
    ThymeleafComponent
  ],
  imports: [
    AlertModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
