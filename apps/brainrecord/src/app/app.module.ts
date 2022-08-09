import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormComponent,
    FlashcardListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
