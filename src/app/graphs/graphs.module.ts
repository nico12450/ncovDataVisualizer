import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalCasesLineGraphComponent } from './global-cases-line-graph/global-cases-line-graph.component';
import { ChartsModule } from 'ng2-charts';
import { GlobalCasesDoughnutGraphComponent } from './global-cases-doughnut-graph/global-cases-doughnut-graph.component';
import { CountryCasesLineGraphComponent } from './country-cases-line-graph/country-cases-line-graph.component';
import { CountryCasesBarGraphComponent } from './country-cases-bar-graph/country-cases-bar-graph.component';
import { GlobalCasesBarGraphComponent } from './global-cases-bar-graph/global-cases-bar-graph.component';
import { CountryCasesDoughnutGraphComponent } from './country-cases-doughnut-graph/country-cases-doughnut-graph.component';



@NgModule({
  declarations: [GlobalCasesLineGraphComponent, GlobalCasesDoughnutGraphComponent, CountryCasesLineGraphComponent, CountryCasesBarGraphComponent, GlobalCasesBarGraphComponent, CountryCasesDoughnutGraphComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GlobalCasesLineGraphComponent,
    GlobalCasesBarGraphComponent,
    GlobalCasesDoughnutGraphComponent,
    CountryCasesLineGraphComponent,
    CountryCasesBarGraphComponent,
    CountryCasesDoughnutGraphComponent
  ]
})
export class GraphsModule { }
