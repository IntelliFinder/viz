import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { AppComponent }               from './app.component';
import { BarChartComponent }          from './bar-chart/bar-chart.component';
import { LineChartComponent }         from './line-chart/line-chart.component';
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '/bar-chart', component: BarChartComponent },
  { path: '/line-chart', component: LineChartComponent  }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
