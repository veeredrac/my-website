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
import { IdCardDetailsComponent } from './id-card-details/id-card-details.component';
import { CreateIdcardComponent } from './create-idcard/create-idcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { VewVehicleDetailsComponent } from './vew-vehicle-details/vew-vehicle-details.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { ViewBankDetailsComponent } from './view-bank-details/view-bank-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { FlipkartRatingComponent } from './flipkart-rating/flipkart-rating.component';
import { TextCountComponent } from './text-count/text-count.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';

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
    CreateAccountComponent,
    IdCardDetailsComponent,
    CreateIdcardComponent,
    CreateUserComponent,
    StudentDetailsComponent,
    VewVehicleDetailsComponent,
    ViewStudentDetailsComponent,
    ViewBankDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    FlipkartRatingComponent,
    TextCountComponent,
    CapitalDirective,
    BalancePipe
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
