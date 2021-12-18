import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { CatalogComponent } from './catalog/catalog.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'catalog', component: CatalogComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'orders', component: OrdersComponent,canActivate: [AuthguardGuard] }


]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
