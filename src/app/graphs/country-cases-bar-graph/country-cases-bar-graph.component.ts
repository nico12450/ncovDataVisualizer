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

  getGlobalCasesDeathsHealings(): {x: string[], y: {data: Number[], label: string}[]}{
    
    let cases: {data: Number[], label: string} = {data: [], label: 'cases'};
    let deaths: {data: Number[], label: string} = {data: [], label: 'deaths'};
    let healings: {data: Number[], label: string} = {data: [], label: 'healings'};
    let indexList: string[] = [];

    let data = this.filteredPaysData;

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
