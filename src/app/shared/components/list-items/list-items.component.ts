import { Component, Input, SimpleChanges } from '@angular/core';
import { ListTypePages } from '../../interfaces';
import { ListItems } from '../../interfaces/list-items';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() items: ListItems[] = [];
  @Input('page-slug') pageSlug: string;

  public listaTypePages = ListTypePages;
  public listItems: ListItems[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.items) {
      this.listItems = changes.items.currentValue;
    }
  }

}
