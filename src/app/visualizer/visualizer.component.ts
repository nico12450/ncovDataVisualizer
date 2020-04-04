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

  chartType = 'pie';
  chartData = [];
  chartLabels = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
