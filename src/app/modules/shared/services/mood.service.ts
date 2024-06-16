import { Injectable } from '@angular/core';
import { Mood } from '../models/mood.classe';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  Mood!: Mood;
  Moods!: Mood[];
}
