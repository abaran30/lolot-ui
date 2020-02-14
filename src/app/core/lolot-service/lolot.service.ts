import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ChampionMasteriesResponse } from 'src/app/core/models/champion-masteries-response';

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
