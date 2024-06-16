import { Injectable } from '@angular/core';
import { Mood } from '../models/mood.classe';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  Mood!: Mood;
  Moods!: Mood[];
  private readonly _BASE_URL = `${environment.apiUrl}/mood`;

  constructor(private _httpClient: HttpClient) {}

  getMoodList$(): Observable<Mood[]> {
    return this._httpClient
      .get<Mood[]>(this._BASE_URL)
      .pipe(map((response: Mood[]) => response));
  }

  getMoodById$(id: number): Observable<Mood> {
    return this._httpClient
      .get<Mood>(`${this._BASE_URL}/${id}`)
      .pipe(map((Mood: Mood) => Mood));
  }
}
