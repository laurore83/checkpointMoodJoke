import { Injectable } from '@angular/core';
import { Mood } from '../models/mood.classe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  Mood!: Mood;
  Moods!: Mood[];

  constructor(private _httpClient: HttpClient) {}
}
