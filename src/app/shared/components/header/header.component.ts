import { Component, HostListener } from '@angular/core';
import { ListPagesModel, ListTypePages, PageModel } from '../../interfaces';
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
  public screenWidth = document.documentElement.clientWidth;

  get getArrayPages() {
    const listPageKeys = Object.keys(this.pages);
    let arrayPages: PageModel[] = [];

    listPageKeys.forEach(key => {
      arrayPages.push(this.pages[key]);
    })

    return arrayPages;
  }

  selectPage(page: string): void {
    this.titlePage = this.pages[page].name;
  }

  get isScreenSmall() {
    if(this.screenWidth < 450) return true;
    else return false;
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.screenWidth = document.documentElement.clientWidth;
  }
}
