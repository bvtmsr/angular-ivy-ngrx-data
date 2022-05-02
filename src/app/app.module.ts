import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { callReducer } from './store/photos.reducer';
console.log('sdsdsds');
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      photos: callReducer,
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
