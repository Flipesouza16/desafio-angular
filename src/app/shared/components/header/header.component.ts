import { Component, HostListener, OnInit } from '@angular/core';
import { ListPagesModel, ListTypePages, PageModel } from '../../interfaces';
import { listPages } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public listTypePages = ListTypePages;
  public pages: ListPagesModel = listPages;
  public titlePage: string;
  public screenWidth: number = document.documentElement.clientWidth;

  ngOnInit(): void {
    this.titlePage = this.pages[this.listTypePages.postagens].name;
  }

  get listPages() {
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

  get isScreenSmall(): boolean {
    if(this.screenWidth < 450) return true;
    else return false;
  }

  @HostListener("window:resize", [])
  private onResize(): void {
    this.screenWidth = document.documentElement.clientWidth;
  }
}
