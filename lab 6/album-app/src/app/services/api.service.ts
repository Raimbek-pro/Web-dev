import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../../models/album.model';
import { Observable } from 'rxjs';
import { album_photos } from '../../models/album_photos.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private baseUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}

  getData():Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl);
  }
  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`);
  }
  getAlbumPhotos(id: number): Observable<album_photos[]> {
    return this.http.get<album_photos[]>(`${this.baseUrl}/${id}/photos`).pipe(
      map((photos: album_photos[]) =>
        photos.map((photo: album_photos) => ({
          ...photo,
          thumbnailUrl: photo.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com'),
          title: photo.title // ✅ Adding alt text using the title field
        }))
      )
    );
  }
}