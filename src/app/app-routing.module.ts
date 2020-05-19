import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { RequestLootComponent } from '../app/pages/request-loot/request-loot.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { AllValidationsComponent } from './pages/all-validations/all-validations.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'request-loot', component: RequestLootComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'all-validation', component: AllValidationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
