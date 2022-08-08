import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flashcard } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  private _flashcards$ = new BehaviorSubject<Flashcard[]>([]);
  get flashcards$(): Observable<Flashcard[]> {
    return this._flashcards$.asObservable();
  }

  addFlashcard(newFlashcard: Flashcard): void {
    this._flashcards$.next([...this._flashcards$.value, newFlashcard]);
  }
}
