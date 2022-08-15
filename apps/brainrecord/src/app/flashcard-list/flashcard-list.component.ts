import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FlashcardType } from '../enums';
import { FlashcardListItemComponent } from '../flashcard-list-item/flashcard-list-item.component';
import { Flashcard } from '../models';

@Component({
  selector: 'studyapp-flashcard-list',
  standalone: true,
  imports: [CommonModule, FlashcardListItemComponent, MatIconModule],
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashcardListComponent {
  @Input() flashcards: Flashcard[] = [
    {
      answer: 'My answer',
      question: 'My question',
      type: FlashcardType.Text,
      hint: 'My hint',
    },
  ];
}
