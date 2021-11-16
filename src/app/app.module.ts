import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductBinComponent } from './product-bin/product-bin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes:Routes = [
  {path: '', component: NavBarComponent, children:[
      {path: 'list', component: ProductListComponent},
      {path: 'storage', component: ProductBinComponent},
      {path: '**', component: NotFoundComponent},

    ]},


]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductBinComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
