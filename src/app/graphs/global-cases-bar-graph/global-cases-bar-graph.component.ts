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

    let data = this.globalData;

    for(let i=0; i < data.length - 1; i++){

      cases.data.unshift(data[i].Infection - data[i+1].Infection);
      deaths.data.unshift(data[i].Deces - data[i+1].Deces);
      healings.data.unshift(data[i].Guerisons - data[i+1].Guerisons);

      indexList.push(new Date(data[i].Date).toLocaleDateString("fr-FR",{month: 'long', day: 'numeric'}));

    }

    cases.data.unshift(data[data.length - 1].Infection);
    deaths.data.unshift(data[data.length - 1].Deces);
    healings.data.unshift(data[data.length - 1].Guerisons);

    indexList.push(new Date(data[data.length - 1].Date).toLocaleDateString("fr-FR",{month: 'long', day: 'numeric'}));

    indexList.reverse();
    
    let result : {x: string[], y: {data: Number[], label: string}[]} = {x: indexList, y : []};

    result.y.push(cases);
    result.y.push(deaths);
    result.y.push(healings);

    return result;

  }

}
