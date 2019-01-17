import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {BookRatingService} from '../shared/book-rating.service';
import {By} from '@angular/platform-browser';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  const ratingMock = {
    rateUp: () => {
    }
  };

  beforeEach(async(() => {
    spyOn(ratingMock, 'rateUp');

    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [{
        // don't take the book rating service from the DI container
        provide: BookRatingService,
        useValue: ratingMock
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {
      isbn: '000',
      title: 'Test Book',
      description: 'test',
      rating: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should forward the rateUp to the book rating service', () => {
    component.rateUp();
    expect(ratingMock.rateUp).toHaveBeenCalledTimes(1);
  });

  it('should forward the rateUp to the book rating service when the button is clicked', () => {
    const rateUpButton = fixture.debugElement
      .query(By.css('[rateUpButton]'))
      .nativeElement as HTMLButtonElement;

    rateUpButton.click();
    expect(ratingMock.rateUp).toHaveBeenCalledTimes(1);
  });
});
