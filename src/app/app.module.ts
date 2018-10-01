import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSnackBarModule,
  MatTableModule,
  MatListModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

/* ngrx store */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './todo/store/todo.reducer';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todo: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5 // retain last 5 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
