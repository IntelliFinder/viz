import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlunkerMaterialModule } from './material.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DataService } from './data-service/data-service.service';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PlunkerMaterialModule,
    routing,
    HttpModule,
  ],
  providers: [DataService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
