import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tmdb {
  private apiKey = '61fb201c466006c7fe08cf891daca2ab';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }
}
