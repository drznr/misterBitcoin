import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactAppComponent, canActivate: [AuthGuard] },
  { path: 'contact/edit', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: 'contact/edit/:id', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsPageComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
