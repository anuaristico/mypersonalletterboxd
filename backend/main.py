from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
from models import WatchedMovie
from schemas import MovieReview
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from schemas import MovieReviewResponse

# Cria as tabelas no banco
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "http://127.0.0.1:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependência para obter sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/watched")
def add_watched_movie(movie: MovieReview, db: Session = Depends(get_db)):
    
    existing = db.query(WatchedMovie).filter(WatchedMovie.movie_id == movie.movie_id).first()

    if existing:
        db.delete(existing)
        db.commit()
    
    db_movie = WatchedMovie(
        movie_id= movie.movie_id,
        title=movie.title,
        poster_path=movie.poster_path,
        rating=movie.rating,
        comment=movie.comment,
        watched_at=movie.watched_at
    )
    db.add(db_movie)
    db.commit()
    db.refresh(db_movie)

@app.get("/watched", response_model=List[MovieReviewResponse])
def get_watched_movies(db: Session = Depends(get_db)):
    return db.query(WatchedMovie).order_by(WatchedMovie.watched_at.desc()).all()