import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { DemoComponent } from './_components/demo/demo.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'demo', component: DemoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];    

@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})

export class AppRoutingModule { }