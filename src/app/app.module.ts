import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EthersContractService } from './services/ethers.contract.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/template/nav/nav.component';
import { MyWalletComponent } from './pages/my-wallet/my-wallet.component';
import { ValidateComponent } from './components/validations/validate/validate.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { RequestLootComponent } from './pages/request-loot/request-loot.component';
import { HomeComponent } from './pages/home/home.component'
import { PedingValidationsComponent } from './components/peding-validations/peding-validations.component';
import { NotValidateComponent } from './components/validations/not-validate/not-validate.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BalanceComponent } from './components/balance/balance.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { SignupComponent } from './pages/signup/signup.component';

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
import { ReactiveFormsModule} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MyWalletComponent,
    ValidateComponent,
    ExtractComponent,
    RequestLootComponent,
    HomeComponent,
    PedingValidationsComponent,
    NotValidateComponent,
    ProfileComponent,
    BalanceComponent,
    NotificationComponent,
    SignupComponent
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
    MatSelectModule
  ],
  providers: [
    EthersContractService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
