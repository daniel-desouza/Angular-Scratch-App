import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoComponent } from '../../_components/demo/demo.component';
import { AlertModule } from '../../_alert';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';    
import { RegisterComponent } from '../../_components/register/register.component';
import { LoginComponent } from '../../_components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VelocityComponent } from '../../_components/demo/template-components/velocity/velocity.component';
import { FreemarkerComponent } from '../../_components/demo/template-components/freemarker/freemarker.component';
import { ThymeleafComponent } from '../../_components/demo/template-components/thymeleaf/thymeleaf.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from './home.component';

import 'hammerjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<DemoComponent>;

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
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
