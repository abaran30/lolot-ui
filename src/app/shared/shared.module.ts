import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SummonerFormComponent } from '@app/shared/summoner-form/summoner-form.component';
import { AppLogoComponent } from '@app/shared/app-logo/app-logo.component';
import { AppNavbarComponent } from '@app/shared/app-navbar/app-navbar.component';
import { LoadingSpinnerComponent } from '@app/shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppLogoComponent,
    AppNavbarComponent,
    LoadingSpinnerComponent,
    SummonerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AppLogoComponent,
    AppNavbarComponent,
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent,
    SummonerFormComponent
  ]
})
export class SharedModule { }
