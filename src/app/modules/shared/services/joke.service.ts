import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.classe';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  Joke!: Joke;
  Jokes!: Joke[];

  private readonly BASE_URL = `${environment.apiUrl}/mood`;
  constructor(private _httpClient: HttpClient) {}

  // getJokeList$(): Observable<Joke[]> {
  //   return this._httpClient
  //     .get<Joke[]>(this._BASE_URL)
  //     .pipe(map((response: Joke[]) => response));
  // }

  getJokesByMoodId$(moodId: number): Observable<Joke[]> {
    return this._httpClient.get<Joke[]>(`${this.BASE_URL}/${moodId}/jokes`);
  }
}
