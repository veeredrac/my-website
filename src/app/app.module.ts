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
import { FormsModule } from '@angular/forms';
import { FlipkartComponent } from './flipkart/flipkart.component';

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
    FlipkartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
