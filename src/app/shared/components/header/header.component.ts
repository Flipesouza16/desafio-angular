import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListPagesModel, PageModel } from '../../interfaces';
import { listPages } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title-slug') titleSlug: string;
  @Output('search') searchEvent = new EventEmitter<string>();

  public pages: ListPagesModel = listPages;
  public titlePage: string;
  public screenWidth: number = document.documentElement.clientWidth;
  public searchItem: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.titlePage = this.pages[this.titleSlug].name;
  }

  get listPages(): PageModel[]  {
    const listPageKeys = Object.keys(this.pages);
    let arrayPages: PageModel[] = [];

    listPageKeys.forEach(key => {
      arrayPages.push(this.pages[key]);
    })

    return arrayPages;
  }

  selectPage(page: string): void {
    this.router.navigate([page]);
  }

  searchOptions(): void {
    this.searchEvent.emit(this.searchItem);
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
