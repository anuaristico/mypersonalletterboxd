import { Component, Inject, signal  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StarRating } from "../star-rating/star-rating";
import { Review } from '../../services/review';

@Component({
  selector: 'app-movie-dialog',
  imports: [CommonModule, MatDialogModule, FormsModule, StarRating],
  templateUrl: './movie-dialog.html',
  styleUrl: './movie-dialog.css'
})
export class MovieDialog {

  comment = signal('');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MovieDialog>,
    private review: Review
  ) {}

  rating = 0;

  onRatingSelected(value: number) {
    this.rating = value;
  }

  submitReview() {
    const review = {
      movie_id: this.data.id,
      title: this.data.title,
      poster: this.data.poster_path,
      rating: this.rating,
      comment: this.comment(),
      watchedAt: new Date().toISOString()
    };

     this.review.submitReview(review).subscribe({
      next: () => {
        this.review.refreshMovies();
        this.dialogRef.close(); 
      },
      error: (err) => {
        console.error('Erro ao enviar review:', err);
      }
    });
  }

  cancelReview() {
    this.dialogRef.close(); // fecha o dialog sem enviar dados
  }
}
