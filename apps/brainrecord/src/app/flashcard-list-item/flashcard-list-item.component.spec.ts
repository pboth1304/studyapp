import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardListItemComponent } from './flashcard-list-item.component';

describe('FlashcardListItemComponent', () => {
  let component: FlashcardListItemComponent;
  let fixture: ComponentFixture<FlashcardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show answer', () => {
    // given
    component.answerVisible = false;

    // when
    component.toggleCardShown();

    // then
    expect(component.answerVisible).toBeTruthy();
  });

  it('should show question', () => {
    // given
    component.answerVisible = true;

    // when
    component.toggleCardShown();

    // then
    expect(component.answerVisible).toBeFalsy();
  });
});
