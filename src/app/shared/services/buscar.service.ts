import { Injectable } from "@angular/core";
import { ListItems } from "../interfaces/list-items";

@Injectable({
  providedIn: 'root',
})
export class BuscarService {
  public completeList: ListItems[] = [];

  setFullList(lista: any): void {
    this.completeList = lista;
  }

  resetFullList(): void {
    this.completeList = [];
  }

  checkIfIncludes(name: string, term: string): boolean {
    return name.toLowerCase().includes(term.toLowerCase());
  }

  searchOptions(termo = ''): ListItems[] {
    let filteredList: ListItems[] = [];
    if (!termo) filteredList = this.completeList;
    else {
      filteredList = this.completeList.filter((listItem) =>
        this.checkIfIncludes(listItem.title, termo)
      );
    }
    return filteredList;
  }

}
