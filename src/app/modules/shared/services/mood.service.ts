// mood.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Mood } from '../models/mood.classe';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private readonly _BASE_URL = `${environment.apiUrl}/mood`;

  constructor(private _httpClient: HttpClient) {}

  getMoodList$(): Observable<Mood[]> {
    return this._httpClient.get<Mood[]>(`${this._BASE_URL}/get/all`);
  }

  getMoodById$(id: number): Observable<Mood> {
    return this._httpClient.get<Mood>(`${this._BASE_URL}/${id}`);
  }
}
