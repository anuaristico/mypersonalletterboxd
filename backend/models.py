from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
from datetime import datetime

class WatchedMovie(Base):
    __tablename__ = "watched_movies"

    id = Column(Integer, primary_key=True, index=True)
    movie_id = Column(Integer, index=True, unique=True)
    title = Column(String, nullable=False)
    poster_path = Column(String, nullable=True)
    rating = Column(Float, nullable=True)
    comment = Column(String, nullable=True)
    watched_at = Column(DateTime, default=datetime.utcnow)