import { Component ,OnInit} from '@angular/core';
import { Album } from '../../models/album.model';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { album_photos } from '../../models/album_photos.model';
@Component({
  selector: 'app-album-photos',
  imports: [CommonModule,RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  data!: album_photos[]; 
  id!: number; 
  constructor(private apiService: ApiService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getAlbumPhotos(this.id).subscribe((response) => {
      this.data = response;
    });
     console.log(this.data);
  }
}