import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../../../app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from '../../../../_components/home/home.component';
import { AboutComponent } from '../../../../_components/about/about.component';
import { DemoComponent } from '../../../../_components/demo/demo.component';
import { AlertModule } from '../../../../_alert';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../../../app-routing.module';    
import { RegisterComponent } from '../../../../_components/register/register.component';
import { LoginComponent } from '../../../../_components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VelocityComponent } from '../../../../_components/demo/template-components/velocity/velocity.component';
import { FreemarkerComponent } from '../../../../_components/demo/template-components/freemarker/freemarker.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { ThymeleafComponent } from './thymeleaf.component';

import 'hammerjs';

describe('ThymeleafComponent', () => {
  let component: ThymeleafComponent;
  let fixture: ComponentFixture<ThymeleafComponent>;

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
        ThymeleafComponent,
        FreemarkerComponent
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
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ThymeleafComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  }));
});