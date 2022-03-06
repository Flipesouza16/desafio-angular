import { Component, OnInit } from "@angular/core";
import { ListTypePages } from "@/app/shared/interfaces";
import { Album } from "./interfaces";
import { BuscarService } from "@/app/shared/services";
import { AlbumService } from "./services";
import { UtilsService } from "@/app/shared/services/utils.service";

@Component({
  selector: "app-albuns",
  templateUrl: "./albuns.component.html",
  styleUrls: ["./albuns.component.scss"],
})
export class AlbunsComponent implements OnInit {
  public listTypePages = ListTypePages;
  public albuns: Album[];
  public isLoading = false;

  constructor(
    private albumService: AlbumService,
    private buscarService: BuscarService,
    private utilsService: UtilsService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getAlbuns();
  }

  async getAlbuns(): Promise<void> {
    this.isLoading = true;
    try {
      const { body: albuns } = await this.albumService.getAlbums();
      this.albuns = albuns;
      this.buscarService.setFullList(albuns);
    } catch (error) {
      console.error(error);
      this.utilsService.openSnackBar('Erro inesperado ao buscar por albuns', 'FECHAR');
    } finally {
      this.isLoading = false;
    }
  }

  searchedItem(term: string): void {
    this.albuns = this.buscarService.searchOptions(term) as Album[];
  }
}
