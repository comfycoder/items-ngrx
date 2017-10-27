import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import './rxjs-extensions';

import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ConfigService } from './config.service';

export function configServiceFactory(configService: ConfigService): Function {
  return () => configService.load();
}

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { items } from './stores/items.store';
import { selectedItem } from './stores/selectedItem.store';
import { selectedWidget } from './stores/selectedWidget.store';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { GadgetService } from './services/gadget.service';

import { ItemsListComponent } from './items/items-list.component';
import { ItemDetailComponent } from './items/item-detail.component';
import { WidgetsListComponent } from './widgets/widgets-list.component';
import { WidgetDetailsComponent } from './widgets/widget-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    ServicesModule.forRoot(),
    SharedModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ items, selectedItem, selectedWidget }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    Title,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    },
    GadgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
