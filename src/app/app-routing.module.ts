import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmiComponent } from './bmi/bmi.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { CircleComponent } from './circle/circle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmiCalcultorComponent } from './emi-calcultor/emi-calcultor.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';

const routes: Routes = [
  {path:'dashborad', component:DashboardComponent,children:[

    {path:'bmi', component:BmiComponent},
    {path:'calcultor', component:CalcultorComponent},
    {path:'circle', component:CircleComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'directive', component:DirectiveComponent},
    {path:'emi-calcultor', component:EmiCalcultorComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'rectangle', component:RectangleComponent},
  {path:'simple-interest', component:SimpleInterestComponent},
  {path:'temperature', component:TemperatureComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'flipkart', component:FlipkartComponent},
  {path:'vehicle', component:VehicleComponent},
  {path:'bankaccountDetails', component:BankAccountDetailsComponent}
  ]},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
