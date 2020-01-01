import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CoreModule } from './core/core.module';
import { InMemoryLolotService } from './in-memory-lolot.service';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, AppFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryLolotService)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
