import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { Sorter2Pipe } from './pipe/sorter2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductsComponent,
    ProductListComponent,
    CustomerListComponent,
    EditCustomerComponent,
    SorterPipe,
    Sorter2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
