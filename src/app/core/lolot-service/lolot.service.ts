import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ChampionMasteriesResponse } from '../models/champion-masteries-response';

@Injectable()
export class LolotService {
  constructor(private http: HttpClient) { }

  getChampionMasteriesForSummoner(summonerName: string, serviceRegion: string): Observable<any> {
    const params = new HttpParams().set('summonerName', summonerName).set('serviceRegion', serviceRegion);

    return this.http.get<ChampionMasteriesResponse>(`${environment.lolotApiBaseUrl}/api/champion-masteries`, { params: params });
  }
}
