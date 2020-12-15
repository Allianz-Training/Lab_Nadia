import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CountingComponent} from './counting/counting.component';
import { FormsModule } from '@angular/forms';
import { Lab4ComponentComponent } from './lab4-component/lab4-component.component';
import { NavberComponentComponent } from './home/navber-component/navber-component.component';
import { TopBannerComponentComponent } from './home/top-banner-component/top-banner-component.component';
import { CategoryMenuComponentComponent } from './home/category-menu-component/category-menu-component.component';
import { SearchBarComponentComponent } from './home/NavberComponent/search-bar-component/search-bar-component.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CountingComponent, Lab4ComponentComponent, NavberComponentComponent, TopBannerComponentComponent, CategoryMenuComponentComponent, SearchBarComponentComponent, ToDoListComponentComponent 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
