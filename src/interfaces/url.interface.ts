export interface ShortUrlResponse {
  id: string;
  longUrl: string;
  shortCode: string;
  createdAt: Date;
  updatedAt: Date;
  expirationDate: Date;
  userId: string;
}

export interface CreateShortUrlRequest {
  longUrl: string;
}
