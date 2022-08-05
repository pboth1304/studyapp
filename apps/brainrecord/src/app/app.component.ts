import { Component } from '@angular/core';
import { Flashcard } from './models';

@Component({
  selector: 'studyapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flashcards: Flashcard[] = [];

  onFlashcardCreated(createdFlashcard: Flashcard): void {
    this.flashcards = [...this.flashcards, createdFlashcard];
  }
}
