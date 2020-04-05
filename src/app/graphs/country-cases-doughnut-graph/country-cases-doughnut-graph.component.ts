import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PaysData } from 'src/app/pays-data';
import data from 'resources/actualData.json';

@Component({
  selector: 'app-country-cases-doughnut-graph',
  templateUrl: './country-cases-doughnut-graph.component.html',
  styleUrls: ['./country-cases-doughnut-graph.component.css']
})
export class CountryCasesDoughnutGraphComponent implements OnInit, OnChanges {

  paysData: PaysData[] = data.PaysData;

  @Input() pays = 'France';

  totalCases = this.filteredPaysData[0].Infection;
  totalDeaths = this.filteredPaysData[0].Deces;
  totalHealings = this.filteredPaysData[0].Guerisons;
  total = this.totalCases + this.totalDeaths + this.totalHealings;

  chartType = 'doughnut';
  chartData = [this.totalCases/this.total, this.totalDeaths/this.total, this.totalHealings/this.total];
  chartLabels = ['cases', 'deaths', 'healings'];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalCases = this.filteredPaysData[0].Infection;
    this.totalDeaths = this.filteredPaysData[0].Deces;
    this.totalHealings = this.filteredPaysData[0].Guerisons;
    this.total = this.totalCases + this.totalDeaths + this.totalHealings;

    this.chartData = [this.totalCases/this.total, this.totalDeaths/this.total, this.totalHealings/this.total];
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
