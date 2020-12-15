import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styles: []
})
export class AppComponent implements AfterViewInit {
 @ViewChild('productList')
 productList: ProductListComponent;

 ngAfterViewInit(): void {
   this.productList.products = [
     {
       name: 'ส้มโอ',
       price: 111
     },
     {
       name: 'แตงโม',
       price: 222
     },
     {
       name: 'มะพร้าวน้ำหอม',
       price: 333
     }
   ];
 }
 constructor() {}
}
