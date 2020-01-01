import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SummonerFormComponent } from './summoner-form/summoner-form.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [SummonerFormComponent, AppLogoComponent, AppNavbarComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AppLogoComponent,
    AppNavbarComponent,
    LoadingSpinnerComponent,
    SummonerFormComponent
  ]
})
export class SharedModule { }
