import { Component, signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tmdb } from '../../services/tmdb';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MovieDialog } from '../movie-dialog/movie-dialog';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  query = signal('');
  results = signal<any[]>([]);
  showNoResults = signal(false);
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private tmdb: Tmdb, private dialog: MatDialog) {}

  search() {
    if (this.query().trim().toLowerCase().normalize('NFD').replace(/[]\u0300-\u036f/g,'') !== '') {
      this.tmdb.searchMovies(this.query()).subscribe((data) => {
        this.results.set(data.results);
        this.showNoResults.set(data.results.length === 0);
      });
    }  else {
      this.results.set([]);
      this.showNoResults.set(false);
    }
  }

   openDialog(movie: any) {
    this.dialog.open(MovieDialog, {
      data: movie,
      width: '700px',
      panelClass: 'custom-dialog',
      height: '400px'
    });
  }
}
