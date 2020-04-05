import { Component, OnInit } from '@angular/core';
import data from 'resources/actualData.json'
import { GlobalData } from 'src/app/global-data';
import { PaysData } from 'src/app/pays-data';

@Component({
  selector: 'app-global-cases-doughnut-graph',
  templateUrl: './global-cases-doughnut-graph.component.html',
  styleUrls: ['./global-cases-doughnut-graph.component.css']
})
export class GlobalCasesDoughnutGraphComponent implements OnInit {

  globalData: GlobalData[] = data.GlobalData;
  paysData: PaysData[] = data.PaysData;

  totalCases = this.globalData[0].Infection;
  totalDeaths = this.globalData[0].Deces;
  totalHealings = this.globalData[0].Guerisons;
  total = this.totalCases + this.totalDeaths + this.totalHealings;

  chartType = 'doughnut';
  chartData = [this.totalCases/this.total, this.totalDeaths/this.total, this.totalHealings/this.total];
  chartLabels = ['cases', 'deaths', 'healings'];

  constructor() { }

  ngOnInit(): void {
    
  }

}
