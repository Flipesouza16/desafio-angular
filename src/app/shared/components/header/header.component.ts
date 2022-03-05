import { Component } from '@angular/core';
import { ListPagesModel, ListTypePages } from '../../interfaces';
import { listPages } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public listTypePages = ListTypePages;
  public titlePage = 'Postagens';
  public pages: ListPagesModel = listPages;

  selectPage(page: string): void {
    this.titlePage = this.pages[page].name;
  }

}
