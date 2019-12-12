import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APPLICATION_ROUTES } from './shared/routes/application_routes';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [{
  path: APPLICATION_ROUTES.ADMIN_LOGIN , component:LoginComponent
},
{
  path:APPLICATION_ROUTES.ADMIN_HOME , component:HomeComponent ,canActivate:[AuthGuard]
},
// otherwise redirect to admin login
{ path: '**', redirectTo: APPLICATION_ROUTES.ADMIN_LOGIN }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
