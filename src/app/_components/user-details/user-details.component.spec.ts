import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';

import { AppComponent } from '../../app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from '../../_components/home/home.component';
import { AboutComponent } from '../../_components/about/about.component';
import { DemoComponent } from '../../_components/demo/demo.component';
import { AlertModule } from '../../_alert';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';    
import { LoginComponent } from '../../_components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VelocityComponent } from '../../_components/demo/template-components/velocity/velocity.component';
import { FreemarkerComponent } from '../../_components/demo/template-components/freemarker/freemarker.component';
import { ThymeleafComponent } from '../../_components/demo/template-components/thymeleaf/thymeleaf.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { RegisterComponent } from '../register/register.component';

import 'hammerjs';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  let user = {
    name: 'daniel'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        DemoComponent,
        RegisterComponent,
        LoginComponent,
        VelocityComponent,
        FreemarkerComponent,
        ThymeleafComponent,
        UserDetailsComponent
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
        OverlayModule,
        MatTableModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
