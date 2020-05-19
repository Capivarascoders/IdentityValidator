import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/template/nav/nav.component';
import { ValidateComponent } from './components/validations/validate/validate.component';
import { RequestLootComponent } from './pages/request-loot/request-loot.component';
import { HomeComponent } from './pages/home/home.component'
import { PedingValidationsComponent } from './components/peding-validations/peding-validations.component';
import { NotValidateComponent } from './components/validations/not-validate/not-validate.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PortisService } from './services/portis.service';
import { ContractService } from './services/contract.service';
import { AllValidationsComponent } from './pages/all-validations/all-validations.component'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ValidateComponent,
    RequestLootComponent,
    HomeComponent,
    PedingValidationsComponent,
    NotValidateComponent,
    ProfileComponent,
    BalanceComponent,
    SignupComponent,
    AllValidationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [
    PortisService,
    ContractService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
