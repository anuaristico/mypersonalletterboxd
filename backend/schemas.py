from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class MovieReview(BaseModel):
    movie_id: int
    title: str
    poster_path: Optional[str] = Field(None, alias='poster')
    rating: Optional[int] = None
    comment: Optional[str] = None
    watched_at: datetime = Field(..., alias='watchedAt')
    
class MovieReviewResponse(MovieReview):
    title: str
    poster_path: str | None = None
    rating: int | None = None
    comment: str | None = None
    watched_at: datetime
    
    class Config:
        orm_mode = True