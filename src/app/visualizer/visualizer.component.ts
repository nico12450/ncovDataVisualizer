import { Component, OnInit } from '@angular/core';
import data from "../../../resources/coronavirus.politologue.com-data-2020-04-04.json"
import { GlobalData } from '../global-data';
import { PaysData } from '../pays-data';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  globalData: GlobalData[] = data.GlobalData;
  paysData: PaysData[] = data.PaysData;

  chartType = 'line';
  chartData = this.getGlobalCasesDeathsHealings(true, true, true).y;
  chartLabels = this.getGlobalCasesDeathsHealings().x;

  constructor() {
  }

  ngOnInit(): void {
  }

  getGlobalCasesDeathsHealings(withCases: boolean = true, withDeaths: boolean = false, withHealings: boolean = false): {x: Number[], y: {data: Number[], label: string}[]}{

    let cases: {data: Number[], label: string} = {data: [], label: 'cases'};
    let deaths: {data: Number[], label: string} = {data: [], label: 'deaths'};
    let healings: {data: Number[], label: string} = {data: [], label: 'healings'};
    let indexList: Number[] = [];
    let i = 0;

    this.globalData.forEach(e => {
      cases.data.unshift(e.Infection);
      deaths.data.unshift(e.Deces);
      healings.data.unshift(e.Guerisons);
      indexList.push(i++);
    });
    
    let result : {x: Number[], y: {data: Number[], label: string}[]} = {x: indexList, y : []};

    if(withCases){
      result.y.push(cases);
    }

    if(withDeaths){
      result.y.push(deaths);
    }

    if(withHealings){
      result.y.push(healings);
    }

    return result;

  }

}
