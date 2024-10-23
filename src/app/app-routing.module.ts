import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerSelectComponent } from './customer-select/customer-select.component';

const routes: Routes = [
  { path: "", component: LoginComponent }, // Default route
  // { path: "Select", component: CustomerSelectComponent }, 
  { path: 'customer-select', component: CustomerSelectComponent },  // Add a route for the component
  { path: '', redirectTo: '/customer-select', pathMatch: 'full' },
  {
    path: "customer", component: CustomerComponent, 
    children: [
      { path: "create", component: CustomerformComponent },
      { path: "create/:id", component: CustomerformComponent },
      { path: "table", component: CustomerlistComponent },
      { path: "select", component: CustomerSelectComponent }, 
      { path: '', redirectTo: 'create', pathMatch: 'full' }  // Fix the redirection
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
