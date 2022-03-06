import { AlbumService } from '@/app/services/album.service';
import { ListTypePages } from '@/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Album } from './interfaces/album';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {
  public listTypePages = ListTypePages;
  public albuns: Album[];

  constructor(private albumService: AlbumService) { }

  async ngOnInit() {
    const { body: albuns } = await this.albumService.getAlbums();
    this.albuns = albuns;
  }
}
