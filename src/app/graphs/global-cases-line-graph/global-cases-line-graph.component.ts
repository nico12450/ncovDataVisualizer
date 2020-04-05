import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import data from 'resources/actualData.json'
import { GlobalData } from 'src/app/global-data';
import { PaysData } from 'src/app/pays-data';

@Component({
  selector: 'app-global-cases-line-graph',
  templateUrl: './global-cases-line-graph.component.html',
  styleUrls: ['./global-cases-line-graph.component.css']
})
export class GlobalCasesLineGraphComponent implements OnInit, OnChanges {

  globalData: GlobalData[] = data.GlobalData;
  paysData: PaysData[] = data.PaysData;

  @Input() withCases: boolean;
  @Input() withDeaths: boolean;
  @Input() withHealings: boolean;

  chartType = 'line';
  chartData;
  chartLabels;

  constructor() {
  }

  ngOnInit(): void {
    this.chartData = this.getGlobalCasesDeathsHealings(this.withCases, this.withDeaths, this.withHealings).y;
    this.chartLabels = this.getGlobalCasesDeathsHealings().x;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chartData = this.getGlobalCasesDeathsHealings(this.withCases, this.withDeaths, this.withHealings).y;
  }

  getGlobalCasesDeathsHealings(withCases: boolean = true, withDeaths: boolean = false, withHealings: boolean = false): {x: string[], y: {data: Number[], label: string}[]}{
    
    let cases: {data: Number[], label: string} = {data: [], label: 'cases'};
    let deaths: {data: Number[], label: string} = {data: [], label: 'deaths'};
    let healings: {data: Number[], label: string} = {data: [], label: 'healings'};
    let indexList: string[] = [];
    // let i = 0;

    this.globalData.forEach(e => {
      cases.data.unshift(e.Infection);
      deaths.data.unshift(e.Deces);
      healings.data.unshift(e.Guerisons);
      // indexList.push(i++);
      indexList.push(new Date(e.Date).toLocaleDateString("fr-FR",{month: 'long', day: 'numeric'}));
    });

    indexList.reverse();
    
    let result : {x: string[], y: {data: Number[], label: string}[]} = {x: indexList, y : []};

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
