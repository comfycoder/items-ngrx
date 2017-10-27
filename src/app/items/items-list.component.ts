import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../models/item.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'items-list',
  template: `
  <div *ngFor="let item of items" (click)="selected.emit(item)"
    class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{item.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{item.description}}
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(item); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
  `
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
