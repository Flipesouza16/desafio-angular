import { Postagem } from '@/app/components/postagens/interfaces/postagem';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() items: Postagem[];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.items) {
      this.items = changes.items.currentValue as Postagem[];
    }
  }

}
