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
import { FlipkartDetailsComponent } from './flipkart-details/flipkart-details.component';
import { EmailComponent } from './email/email.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorComponent } from './error/error.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { IdCardDetailsComponent } from './id-card-details/id-card-details.component';
import { CreateIdcardComponent } from './create-idcard/create-idcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { VewVehicleDetailsComponent } from './vew-vehicle-details/vew-vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { ViewBankDetailsComponent } from './view-bank-details/view-bank-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {path:'', component:ErrorComponent},
  {path:'dashborad', component:DashboardComponent,canActivate:[AuthenticationGuard],children:[

    {path:'bmi', component:BmiComponent},
    {path:'sibling1', component:Sibling1Component},
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
  {path:'bankaccountDetails', component:BankAccountDetailsComponent},
  {path:'flipkartDetails', component:FlipkartDetailsComponent},
  {path:'emails', component:EmailComponent},
  {path:'pinterest', component:PinterestComponent},
  {path:'weather', component:WeatherComponent},
  {path:'createVehicle', component:CreateVehicleComponent},
  {path:'eidt_vehicle/:id', component:CreateVehicleComponent},
  {path:'createBankAccount', component:CreateAccountComponent},
  {path:'updateBankAccount/:id', component:CreateAccountComponent},
  {path:'idcard', component:IdCardDetailsComponent},
  {path:'createIdcard', component:CreateIdcardComponent},
  {path:'viewBankDetails/:id', component:ViewBankDetailsComponent},
  {path:'parent', component:ParentComponent},
  {path:'lifeCycleHooks', component:LifeCycleHooksComponent},
  {path:'updateIdcard/:id', component:CreateIdcardComponent},
  {path:'create-user', component:CreateUserComponent},
  {path:'student-details', component:StudentDetailsComponent},
  {path:'view-details/:id', component:VewVehicleDetailsComponent},
  {path:'viewStudent-details/:id', component:ViewStudentDetailsComponent}
  ]},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
