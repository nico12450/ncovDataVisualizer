import { Component, OnInit } from '@angular/core';
import data from 'resources/actualData.json'
import { PaysData } from '../pays-data';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  paysData: PaysData[] = data.PaysData;
  paysList: string[] = [];

  withCases = true;
  withDeaths = true;
  withHealings = true;

  pays = 'France';

  constructor() {
  }

  ngOnInit(): void {

    this.paysData.forEach(e => {
      if(!this.paysList.includes(e.Pays)){
        this.paysList.push(e.Pays);
      }
    })

    console.log(this.paysList);
    

  }

  switchWithCases(){
    this.withCases = !this.withCases;
  }

  switchWithDeaths(){
    this.withDeaths = !this.withDeaths;
  }

  switchWithHealings(){
    this.withHealings = !this.withHealings;
  }

}
