import { Component ,OnInit} from '@angular/core';
import { Album } from '../../models/album.model';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-album-detail',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album; 
  id!: number; 
  constructor(private apiService: ApiService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getAlbumById(this.id).subscribe((response) => {
      this.album = response;
  
    });
    console.log("fergvews");
      console.error("test");
    
  }

  changeTitle(){
    console.log(1); 
  }
}
