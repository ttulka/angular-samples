import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Book} from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  created = new EventEmitter<Book>();

  bookForm = this.fb.group({
    isbn: ['', [Validators.required, Validators.minLength(3)]],
    title: ['', Validators.required],
    description: ['']
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.invalid && control.dirty;
  }

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.hasError(errorCode);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };
    this.created.emit(newBook);
    this.bookForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }
}
