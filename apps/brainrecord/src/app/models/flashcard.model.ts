import { FlashcardType } from '../enums';

export interface Flashcard {
  type: FlashcardType;
  question: string;
  answer: string;
  hint?: string;
}
