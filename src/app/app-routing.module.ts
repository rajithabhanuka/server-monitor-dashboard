import{NgModule}from'@angular/core';
import {Routes, RouterModule}from '@angular/router';
import {AppComponent}from './app.component';
import {TableViewComponent}from './table-view/table-view.component';
import {ChartComponent}from './chart/chart.component';

const routes: Routes = [
{path: 'more', component: TableViewComponent},
{path: 'chart', component: ChartComponent},
{path: '**', component: ChartComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
