import { Component, Input, SimpleChanges } from '@angular/core';
import { ListItems } from '../../interfaces/list-items';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() items: ListItems[] = [];

  public listItems: ListItems[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.items) {
      this.listItems = changes.items.currentValue;
    }
  }

}
