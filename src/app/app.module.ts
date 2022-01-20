import {Routes, RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {appRoutes} from "../routes";
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SectionSalesComponent} from './Sections/section-sales/section-sales.component';
import {SectionOrdersComponent} from './Sections/section-orders/section-orders.component';
import {SectionHealthComponent} from './Sections/section-health/section-health.component';
import {NgChartsModule} from "ng2-charts";
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
