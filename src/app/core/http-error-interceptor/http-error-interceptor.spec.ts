import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { take } from 'rxjs/operators';

import { HttpErrorInterceptor } from '@app/core/http-error-interceptor/http-error-interceptor';
import { LolotService } from '@app/core/lolot-service/lolot.service';
import { environment } from '@environments/environment';

describe('HttpErrorInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let lolotService: LolotService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    lolotService = TestBed.inject(LolotService);
    router = TestBed.inject(Router);
  });

  it('should intercept an HTTP error and redirect', () => {
    const routerNavigateSpy = spyOn(router, 'navigate');
    lolotService.getChampionMasteriesForSummoner('AngryTaco', 'NA').pipe(take(1)).subscribe(
      () => {
        throw (new Error('Should not have landed here...'));
      },
      (error) => {
        expect(error.status).toEqual(404);
      }
    );
    const request = httpTestingController.expectOne(
      `${environment.lolotApiBaseUrl}/api/champion-masteries?summonerName=AngryTaco&serviceRegion=NA`
    );
    request.error(new ErrorEvent(''), { status: 404 });
    const expectedNavigationExtras: NavigationExtras = {
      queryParams: { errorCode: 404 },
      queryParamsHandling: 'merge'
    };
    expect(routerNavigateSpy).toHaveBeenCalledWith(['champion-masteries', 'error'], expectedNavigationExtras);
    httpTestingController.verify();
  });
});
