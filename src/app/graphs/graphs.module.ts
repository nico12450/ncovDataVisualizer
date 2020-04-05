import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalCasesLineGraphComponent } from './global-cases-line-graph/global-cases-line-graph.component';
import { ChartsModule } from 'ng2-charts';
import { GlobalCasesDoughnutGraphComponent } from './global-cases-doughnut-graph/global-cases-doughnut-graph.component';
import { CountryCasesLineGraphComponent } from './country-cases-line-graph/country-cases-line-graph.component';
import { CountryCasesBarGraphComponent } from './country-cases-bar-graph/country-cases-bar-graph.component';



@NgModule({
  declarations: [GlobalCasesLineGraphComponent, GlobalCasesDoughnutGraphComponent, CountryCasesLineGraphComponent, CountryCasesBarGraphComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GlobalCasesLineGraphComponent,
    GlobalCasesDoughnutGraphComponent,
    CountryCasesLineGraphComponent,
    CountryCasesBarGraphComponent
  ]
})
export class GraphsModule { }
