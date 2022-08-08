import { TestBed } from '@angular/core/testing';
import { FlashcardType } from '../enums';
import { Flashcard } from '../models';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { FlashcardsService } from './flashcards.service';

describe('FlashcardsService', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new flashcard', () => {
    // given
    const newFlashcard: Flashcard = {
      type: FlashcardType.Text,
      answer: 'My answer',
      question: 'My question',
    };
    const flashcardsSpy = subscribeSpyTo(service.flashcards$);

    // when
    service.addFlashcard(newFlashcard);

    expect(flashcardsSpy.getLastValue()).toHaveLength(1);
    expect(flashcardsSpy.getLastValue()?.[0]).toEqual(newFlashcard);
  });
});
