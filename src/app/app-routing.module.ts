import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { DemoComponent } from './_components/demo/demo.component';
import { RegisterComponent } from './_components/register/register.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'demo', component: DemoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})

export class AppRoutingModule { }