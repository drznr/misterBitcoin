import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactAppComponent },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/edit/:id', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'statistics', component: StatisticsPageComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
