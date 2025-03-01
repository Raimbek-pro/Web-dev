import { Component ,OnInit} from '@angular/core';
import { Album } from '../../models/album.model';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-albums',
  imports: [CommonModule,RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  data:Album[] =[];
 constructor(private apiService: ApiService){}
 ngOnInit(){
  this.apiService.getData().subscribe((response:Album[])=>{
    this.data = response;
   
    for( let i=0;i<this.data.length;i++){
      
      console.log(this.data[i].title);
    }
    

  })
 }
 deleteAlbum(index: number) {
  this.data.splice(index, 1); // Remove album from array
}
}
