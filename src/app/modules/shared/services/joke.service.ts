import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.classe';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  Joke!: Joke;
  Jokes!: Joke[];
}
