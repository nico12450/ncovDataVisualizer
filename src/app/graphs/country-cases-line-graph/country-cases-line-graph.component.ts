import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaysData } from 'src/app/pays-data';
import data from 'resources/actualData.json';

@Component({
  selector: 'app-country-cases-line-graph',
  templateUrl: './country-cases-line-graph.component.html',
  styleUrls: ['./country-cases-line-graph.component.css']
})
export class CountryCasesLineGraphComponent implements OnInit, OnChanges {

  paysData: PaysData[] = data.PaysData;

  @Input() pays = 'France';

  chartType = 'line';
  chartData;
  chartLabels;

  constructor() { }

  ngOnInit(): void {
    this.chartData = this.getGlobalCasesDeathsHealings().y;
    this.chartLabels = this.getGlobalCasesDeathsHealings().x;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chartData = this.getGlobalCasesDeathsHealings().y;
    this.chartLabels = this.getGlobalCasesDeathsHealings().x;
  }

  getGlobalCasesDeathsHealings(): {x: Number[], y: {data: Number[], label: string}[]}{
    
    let cases: {data: Number[], label: string} = {data: [], label: 'cases'};
    let deaths: {data: Number[], label: string} = {data: [], label: 'deaths'};
    let healings: {data: Number[], label: string} = {data: [], label: 'healings'};
    let indexList: Number[] = [];
    let i = 0;

    this.paysData.forEach(e => {

      if(e.Pays == this.pays){
        cases.data.unshift(e.Infection);
        deaths.data.unshift(e.Deces);
        healings.data.unshift(e.Guerisons);
        indexList.push(i++);
      }

    });
    
    let result : {x: Number[], y: {data: Number[], label: string}[]} = {x: indexList, y : []};

    result.y.push(cases);
    result.y.push(deaths);
    result.y.push(healings);

    return result;

  }

}
