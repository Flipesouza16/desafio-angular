import { Component, Input, SimpleChanges } from '@angular/core';
import { ListTypePages } from '../../interfaces';
import { ListItems } from '../../interfaces/list-items';
import { listPages } from '../../utils';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() items: ListItems[] = [];
  @Input('page-slug') pageSlug: string;
  @Input() isLoading: string;

  public listTypePages = ListTypePages;
  public listItems: ListItems[] = [];
  public pages = listPages;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.items) {
      this.listItems = changes.items.currentValue;
    }
  }

}
