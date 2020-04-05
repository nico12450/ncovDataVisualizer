import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PaysData } from 'src/app/pays-data';
import data from 'resources/actualData.json';

@Component({
  selector: 'app-country-cases-bar-graph',
  templateUrl: './country-cases-bar-graph.component.html',
  styleUrls: ['./country-cases-bar-graph.component.css']
})
export class CountryCasesBarGraphComponent implements OnInit, OnChanges {

  paysData: PaysData[] = data.PaysData;

  @Input() pays = 'France';

  chartType = 'bar';
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
    let filteredData = this.filteredPaysData;
    let previousCases = filteredData[filteredData.length - 1].Infection;
    let previousDeaths = filteredData[filteredData.length - 1].Deces;
    let previousHealings = filteredData[filteredData.length - 1].Guerisons;

    filteredData.forEach(e => {

      if(i > 0){

        cases.data.unshift(previousCases - e.Infection);
        deaths.data.unshift(previousDeaths - e.Deces);
        healings.data.unshift(previousHealings - e.Guerisons);

      }

      indexList.push(i++);

      previousCases = e.Infection;
      previousDeaths = e.Deces;
      previousHealings = e.Guerisons;

    });
    
    let result : {x: Number[], y: {data: Number[], label: string}[]} = {x: indexList, y : []};

    result.y.push(cases);
    result.y.push(deaths);
    result.y.push(healings);

    return result;

  }

  get filteredPaysData(): PaysData[]{

    let result = [];

    this.paysData.forEach(e => {

      if(e.Pays == this.pays){
        result.push(e);
      }

    });

    return result;

  }

}
