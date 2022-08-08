import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlashcardType } from '../enums';
import { Flashcard } from '../models';

interface FlashcardForm {
  answer: FormControl<string>;
  question: FormControl<string>;
  hint: FormControl<string>;
}

@Component({
  selector: 'studyapp-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() flashcardCreated = new EventEmitter<Flashcard>();

  newFlashcardForm = new FormGroup<FlashcardForm>({
    question: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    answer: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    hint: new FormControl('', { nonNullable: true }),
  });

  addNewFlashcard(): void {
    const { answer, hint, question } = this.newFlashcardForm.value;

    if (this.newFlashcardForm.valid && answer && question) {
      const newFlashCard: Flashcard = {
        type: FlashcardType.Text,
        question,
        answer,
        hint,
      };

      this.flashcardCreated.emit(newFlashCard);
      this.newFlashcardForm.reset();
    }
  }
}
