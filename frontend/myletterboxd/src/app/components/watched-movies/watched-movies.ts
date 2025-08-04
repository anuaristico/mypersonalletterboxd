import { Component, OnInit, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../services/review';

@Component({
  selector: 'app-watched-movies',
  imports: [CommonModule],
  templateUrl: './watched-movies.html',
  styleUrl: './watched-movies.css'
})
export class WatchedMovies implements OnInit{
  watchedMovies: any[] = [];

  constructor(
    private http: HttpClient, 
    private review: Review
  ) {}

  ngOnInit(): void {
    this.review.movies$.subscribe((data) => {
      this.watchedMovies = data;
    });
  }
}
