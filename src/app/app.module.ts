import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AppFooterComponent } from 'src/app/app-footer/app-footer.component';
import { CoreModule } from 'src/app/core/core.module';
import { InMemoryLolotService } from 'src/app/in-memory-lolot.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

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
