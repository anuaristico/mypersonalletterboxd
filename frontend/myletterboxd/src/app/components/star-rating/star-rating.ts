import { Component, Input, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRating {
  faStar = faStar;

  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  @Output() ratingChange = new EventEmitter<number>();

  setRating(value: number) {
    if (this.readonly) return;
    this.rating = value;
    this.ratingChange.emit(value);
  }
}
