import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke } from '@shared/models/joke.classe';
import { Mood } from '@shared/models/mood.classe';
import { Quotation } from '@shared/models/quotation.classe';
import { JokeService } from '@shared/services/joke.service';
import { MoodService } from '@shared/services/mood.service';
import { QuotationService } from '@shared/services/quotation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-details-mood',
  templateUrl: './card-details-mood.component.html',
  styleUrls: ['./card-details-mood.component.scss'],
})
export class CardDetailsMoodComponent implements OnInit, OnDestroy {
  mood!: Mood;
  quotation!: Quotation; // Change to hold a single quotation
  joke!: Joke;
  displayQuotation: boolean = true;
  audioPlayer: HTMLAudioElement = new Audio(); // Audio player
  musicSubscription: Subscription | undefined;
  isMusicPlaying: boolean = false;

  constructor(
    private moodService: MoodService,
    private quotationService: QuotationService,
    private jokeService: JokeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.loadMood(id);
        this.loadQuotations(id);
        this.loadJokes(id);
      }
    });
  }

  ngOnDestroy(): void {
    // Arrêter la lecture et nettoyer les ressources
    this.audioPlayer.pause();
    this.audioPlayer.src = '';
    this.audioPlayer.load(); // Charger le fichier audio

    if (this.musicSubscription) {
      this.musicSubscription.unsubscribe();
    }
  }

  loadMood(id: number): void {
    this.moodService.getMoodById$(id).subscribe(
      (mood) => {
        this.mood = mood;
        // Charger la musique lorsque le mood est chargé
        if (mood.mood_song) {
          this.loadMusic(mood.mood_song);
        }
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
      this.displayQuotation = true;
      this.loadQuotations(this.mood.id);
    }
  }

  loadJokes(moodId: number): void {
    this.jokeService.getJokesByMoodId$(moodId).subscribe(
      (jokes) => {
        // Select a random joke
        const randomIndex = Math.floor(Math.random() * jokes.length);
        this.joke = jokes[randomIndex];
      },
      (error) => {
        console.error('Error fetching jokes', error);
      }
    );
  }

  loadAnotherRandomJoke(): void {
    if (this.mood) {
      this.displayQuotation = false;
      this.loadJokes(this.mood.id);
    }
  }

  loadMusic(musicLink: string): void {
    // Arrêter la musique actuelle
    this.audioPlayer.pause();
    this.audioPlayer.src = '';
    this.audioPlayer.load(); // Charger le fichier audio

    // Charger et jouer la nouvelle musique
    this.audioPlayer.src = musicLink;
    this.audioPlayer.load(); // Charger le fichier audio

    // S'assurer que le chargement est terminé avant de jouer
    this.audioPlayer.oncanplaythrough = () => {};
  }

  playOrStopSong(): void {
    if (this.isMusicPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play();
    }
    this.isMusicPlaying = !this.isMusicPlaying;
  }

  getButtonLabel(): string {
    return this.displayQuotation ? 'A joke' : 'One more';
  }

  getButtonLabelbis(): string {
    return this.displayQuotation ? 'One more' : 'Quotation';
  }

  getButtonLabelSong(): string {
    return this.isMusicPlaying ? 'Stop' : 'A song';
  }

  toggleDisplay(): void {
    this.displayQuotation = !this.displayQuotation;
  }
}
