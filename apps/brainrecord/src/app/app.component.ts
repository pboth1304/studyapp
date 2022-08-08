import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flashcard } from './models';
import { FlashcardsService } from './services/flashcards.service';

@Component({
  selector: 'studyapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flashcards$: Observable<Flashcard[]> = this.flashcardService.flashcards$;

  constructor(private flashcardService: FlashcardsService) {}

  onFlashcardCreated(createdFlashcard: Flashcard): void {
    this.flashcardService.addFlashcard(createdFlashcard);
  }
}
