import { Component, OnInit } from '@angular/core';
import { GlobalData } from 'src/app/global-data';
import data from 'resources/actualData.json'

@Component({
  selector: 'app-global-cases-bar-graph',
  templateUrl: './global-cases-bar-graph.component.html',
  styleUrls: ['./global-cases-bar-graph.component.css']
})
export class GlobalCasesBarGraphComponent implements OnInit {

  globalData: GlobalData[] = data.GlobalData;

  chartType = 'bar';
  chartData;
  chartLabels;

  constructor() { }

  ngOnInit(): void {
    this.chartData = this.getGlobalCasesDeathsHealings().y;
    this.chartLabels = this.getGlobalCasesDeathsHealings().x;
  }

  getGlobalCasesDeathsHealings(): {x: string[], y: {data: Number[], label: string}[]}{
    
    let cases: {data: Number[], label: string} = {data: [], label: 'cases'};
    let deaths: {data: Number[], label: string} = {data: [], label: 'deaths'};
    let healings: {data: Number[], label: string} = {data: [], label: 'healings'};
    let indexList: string[] = [];

    this.globalData.forEach(e => {

      cases.data.unshift(e.Infection);
      deaths.data.unshift(e.Deces);
      healings.data.unshift(e.Guerisons);
      indexList.push(new Date(e.Date).toLocaleDateString("fr-FR",{month: 'long', day: 'numeric'}));

    });

    indexList.reverse();
    
    let result : {x: string[], y: {data: Number[], label: string}[]} = {x: indexList, y : []};

    result.y.push(cases);
    result.y.push(deaths);
    result.y.push(healings);

    return result;

  }

}
