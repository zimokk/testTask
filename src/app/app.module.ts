import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AgmCoreModule} from "@agm/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DragulaModule} from "ng2-dragula/index";

import { AppComponent } from './app.component';

import {routes} from "./app.routes";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopManagingComponent } from './dashboard/shop-managing/shop-managing.component';
import {ShopService} from "./shared/shop-service.service";
import {ProductService} from "./shared/product-service.service";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShopManagingComponent,
    DetailsComponent
  ],
  imports: [
    DragulaModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8AVrqCt2vReKEf3CRA-xY-zjuB4VaHA8'
    })
  ],
  providers: [ShopService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
