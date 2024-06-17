// card-mood.component.ts

import { Component, OnInit } from '@angular/core';
import { Mood } from '@shared/models/mood.classe';
import { MoodService } from '@shared/services/mood.service';

@Component({
  selector: 'app-card-mood',
  templateUrl: './card-mood.component.html',
  styleUrls: ['./card-mood.component.scss'],
})
export class CardMoodComponent implements OnInit {
  moods: Mood[] = [];
  loading: boolean = true;
  error: string | undefined;

  constructor(private moodService: MoodService) {}

  ngOnInit(): void {
    this.loadMoods();
  }

  loadMoods(): void {
    this.moodService.getMoodList$().subscribe(
      (moods) => {
        this.moods = moods;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error fetching moods';
        console.error('Error fetching moods', error);
        this.loading = false;
      }
    );
  }
}
