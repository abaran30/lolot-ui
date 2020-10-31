import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ChampionMasteriesResponse } from '@app/core/models/champion-masteries-response';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LolotService {
  constructor(private http: HttpClient) { }

  getChampionMasteriesForSummoner(summonerName: string, serviceRegion: string): Observable<ChampionMasteriesResponse> {
    const httpParams = new HttpParams().set('summonerName', summonerName).set('serviceRegion', serviceRegion);

    return this.http.get<ChampionMasteriesResponse>(`${environment.lolotApiBaseUrl}/api/champion-masteries`, { params: httpParams });
  }
}
