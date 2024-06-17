import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mood } from '@shared/models/mood.classe';
import { Quotation } from '@shared/models/quotation.classe';
import { MoodService } from '@shared/services/mood.service';
import { QuotationService } from '@shared/services/quotation.service';

@Component({
  selector: 'app-card-details-mood',
  templateUrl: './card-details-mood.component.html',
  styleUrls: ['./card-details-mood.component.scss'],
})
export class CardDetailsMoodComponent implements OnInit {
  mood!: Mood;
  quotation!: Quotation; // Change to hold a single quotation

  constructor(
    private moodService: MoodService,
    private quotationService: QuotationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.loadMood(id);
        this.loadQuotations(id);
      }
    });
  }

  loadMood(id: number): void {
    this.moodService.getMoodById$(id).subscribe(
      (mood) => {
        this.mood = mood;
      },
      (error) => {
        console.error('Error fetching mood', error);
      }
    );
  }

  loadQuotations(moodId: number): void {
    this.quotationService.getQuotationsByMoodId$(moodId).subscribe(
      (quotations) => {
        // Select a random quotation
        const randomIndex = Math.floor(Math.random() * quotations.length);
        this.quotation = quotations[randomIndex];
      },
      (error) => {
        console.error('Error fetching quotations', error);
      }
    );
  }
  loadAnotherRandomQuotation(): void {
    if (this.mood) {
      this.loadQuotations(this.mood.id);
    }
  }
}
