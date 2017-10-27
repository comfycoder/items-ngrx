import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Welcome!'
    }
  },
  {
    path: 'items',
    component: ItemsComponent,
    data: {
      title: 'Items'
    }
  },
  {
    path: 'search',
    loadChildren: './search-flickr/search-flickr.module#SearchFlickrModule'
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
