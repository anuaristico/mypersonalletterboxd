import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from "./components/search-bar/search-bar";
import { WatchedMovies } from "./components/watched-movies/watched-movies";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, WatchedMovies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Personal Letterboxd');

}
