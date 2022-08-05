import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlashcardType } from '../enums';
import { Flashcard } from '../models';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add new flash card if form is invalid', () => {
    // given
    const formValues = { answer: '', hint: '', question: '' };
    const spy = jest.spyOn(component.flashcardCreated, 'emit');

    // when
    component.newFlashcardForm.setValue(formValues);
    component.addNewFlashcard();

    // then
    expect(spy).not.toHaveBeenCalled();
  });

  it('should emit event when new flashcard was created', () => {
    // given
    const question = 'My stunning question';
    const answer = 'My confusing answer';
    const hint = 'My explaining hint';
    const newFlashcard: Flashcard = {
      type: FlashcardType.Text,
      question,
      answer,
      hint,
    };
    const formValues = { answer, hint, question };
    const spy = jest.spyOn(component.flashcardCreated, 'emit');

    // when
    component.newFlashcardForm.setValue(formValues);
    component.addNewFlashcard();

    // then
    expect(spy).toHaveBeenCalledWith(newFlashcard);
  });

  it('should reset form on reset btn click', () => {
    // given
    const question = 'My stunning question';
    const answer = 'My confusing answer';
    const hint = 'My explaining hint';
    const formValues = { answer, hint, question };
    const resetBtn = fixture.debugElement.nativeElement.querySelector(
      'button[type="reset"]'
    );
    const submitBtn = fixture.debugElement.nativeElement.querySelector(
      'button[type="submit"]'
    );
    const submitBtnDisabledAttribute = submitBtn.getAttribute('disabled');

    // when
    component.newFlashcardForm.setValue(formValues);
    resetBtn.click();

    // then
    expect(submitBtnDisabledAttribute).toBeTruthy();
  });

  it('should set submit btn to disabled if form is invalid', () => {
    // given
    const question = '';
    const answer = '';
    const hint = '';
    const formValues = { answer, hint, question };
    const submitBtn = fixture.debugElement.nativeElement.querySelector(
      'button[type="submit"]'
    );
    const submitBtnDisabledAttribute = submitBtn.getAttribute('disabled');

    // when
    component.newFlashcardForm.setValue(formValues);

    // then
    expect(submitBtnDisabledAttribute).toBeTruthy();
  });
});
