import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedMovies } from './watched-movies';

describe('WatchedMovies', () => {
  let component: WatchedMovies;
  let fixture: ComponentFixture<WatchedMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchedMovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchedMovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
