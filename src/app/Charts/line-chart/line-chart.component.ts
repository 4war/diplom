import {Component, OnInit} from '@angular/core';
import {LINE_CHART_COLORS} from "../../shared/chart.colors";

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
  {data: [12, 17, 36, 24, 33, 26], label: 'Image recognition'},
  {data: [52, 21, 56, 22, 40, 56], label: 'Forecasting'},
]

const LINE_CHART_LABELS: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() {
  }

  public lineChartData = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true,
    height: 100,
  };
  public lineChartLegend: any = true;
  public lineChartType: any = 'line';
  public lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }

}
