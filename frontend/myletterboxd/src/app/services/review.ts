import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject  } from 'rxjs';

export interface MovieReview {
  movie_id: number;
  title: string;
  poster: string;
  rating: number;
  comment: string;
  watchedAt: string;
}

@Injectable({
  providedIn: 'root'
})


export class Review {
  private apiUrl = 'http://localhost:8000/watched';
  private moviesSubject = new BehaviorSubject<any[]>([]);
  public movies$ = this.moviesSubject.asObservable();

  reviewSubmitted = new Subject<void>();

  constructor(private http: HttpClient) {
    this.loadMovies();
    console.log('✅ Serviço Review INICIADO.'); // Log 1
  }

  submitReview(review: MovieReview): Observable<any> {
    return this.http.post(this.apiUrl, review);
  }

  loadMovies() {
    this.http.get<any[]>(this.apiUrl).subscribe((movies) => {
      this.moviesSubject.next(
        movies.sort((a, b) => new Date(b.watchedAt).getTime() - new Date(a.watchedAt).getTime())
      );
    });
  }

  refreshMovies() {
    this.loadMovies();
  }
}
