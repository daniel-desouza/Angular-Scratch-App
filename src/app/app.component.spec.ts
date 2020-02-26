import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { DemoComponent } from './_components/demo/demo.component';
import { AlertModule } from './_alert';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';    
import { RegisterComponent } from './_components/register/register.component';
import { LoginComponent } from './_components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VelocityComponent } from './_components/demo/template-components/velocity/velocity.component';
import { FreemarkerComponent } from './_components/demo/template-components/freemarker/freemarker.component';
import { ThymeleafComponent } from './_components/demo/template-components/thymeleaf/thymeleaf.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserDetailsComponent } from './_components/user-details/user-details.component';

import 'hammerjs';

describe('AppComponent', () => {
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
        MatTableModule,
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'scratch-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('scratch-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title-button span').textContent).toContain('Angular Sandbox');
  });
});
