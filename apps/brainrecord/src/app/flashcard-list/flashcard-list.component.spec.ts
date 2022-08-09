import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardListComponent } from './flashcard-list.component';

describe('FlashcardListComponent', () => {
  let component: FlashcardListComponent;
  let fixture: ComponentFixture<FlashcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display information if no flashcards are present', () => {
    // given
    fixture = TestBed.createComponent(FlashcardListComponent);
    component = fixture.componentInstance;
    component.flashcards = [];

    // when
    fixture.detectChanges();
    const noFlashcardsInfo: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector('#info-noFlashcards');

    //then
    expect(noFlashcardsInfo).not.toBeNull();
  });
});
