import { Injectable } from "@angular/core";
import { ListItems } from "../shared/interfaces/list-items";

@Injectable({
  providedIn: 'root',
})
export class BuscarService {
  public completeList = [];

  setFullList(lista: any): void {
    this.completeList = lista;
  }

  resetFullList() {
    this.completeList = []
  }

  checkIfIncludes(name: string, term: string) {
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
