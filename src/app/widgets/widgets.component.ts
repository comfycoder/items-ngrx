import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { WidgetsService } from '../services/widgets.service';
import { WidgetsListComponent } from './widgets-list.component';
import { WidgetDetailsComponent } from './widget-details.component';
import { AppStore } from '../models/appstore.model';
import { Widget } from '../models/widget.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widgets',
  template: `
    <h4>Fix my inputs and outputs!</h4>
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details (saved)="saveWidget($event)"
        [widget]="selectedWidget | async"></widget-details>
      </div>
    </div>
  `,
  styles: [`
    .widgets {
      padding: 20px;
    }
  `],
  providers: [WidgetsService]
})
export class WidgetsComponent {

  widgets = [];
  selectedWidget: Observable<Widget>;

  constructor(private _widgetsService: WidgetsService,
    private _store: Store<AppStore>) {
    this.selectedWidget = _store.select(state => state.selectedWidget);

    _widgetsService.loadWidgets()
      .subscribe(
      widgets => this.widgets = widgets,
      error => console.error(error.json())
      );
  }

  selectWidget(widget) {
    this._store.dispatch({ type: 'SELECT_WIDGET', payload: widget });
  }

  saveWidget(widget) {
    console.log('widget', widget);
  }
}
