import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Flashcard } from '../models';

@Component({
  selector: 'studyapp-flashcard-list-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './flashcard-list-item.component.html',
  styleUrls: ['./flashcard-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlashcardListItemComponent {
  @Input() position: number | undefined;
  @Input() flashcard: Flashcard | undefined;

  answerVisible = false;

  toggleCardShown(): void {
    this.answerVisible = !this.answerVisible;
  }
}
