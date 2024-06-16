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

  private readonly _BASE_URL = `${environment.apiUrl}/joke`;

  constructor(private _httpClient: HttpClient) {}

  getJokeList$(): Observable<Joke[]> {
    return this._httpClient
      .get<Joke[]>(this._BASE_URL)
      .pipe(map((response: Joke[]) => response));
  }

  getJokeById$(id: number): Observable<Joke> {
    return this._httpClient
      .get<Joke>(`${this._BASE_URL}/${id}`)
      .pipe(map((joke: Joke) => joke));
  }
}
