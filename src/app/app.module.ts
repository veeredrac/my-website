import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { FlipkartDetailsComponent } from './flipkart-details/flipkart-details.component';
import { EmailComponent } from './email/email.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorComponent } from './error/error.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BmiComponent,
    CalcultorComponent,
    CircleComponent,
    DataBindingComponent,
    DirectiveComponent,
    EmiCalcultorComponent,
    EmployeeComponent,
    HomeComponent,
    LoginComponent,
    RectangleComponent,
    SimpleInterestComponent,
    TemperatureComponent,
    WelcomeComponent,
    FlipkartComponent,
    VehicleComponent,
    BankAccountDetailsComponent,
    FlipkartDetailsComponent,
    EmailComponent,
    PinterestComponent,
    WeatherComponent,
    ErrorComponent,
    CreateVehicleComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
