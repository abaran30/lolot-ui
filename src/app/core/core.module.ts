import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from 'src/app/core/ensure-module-loaded-once.guard';
import { HttpErrorInterceptor } from 'src/app/core/http-error-interceptor/http-error-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        }
      ]
    };
  }
}
