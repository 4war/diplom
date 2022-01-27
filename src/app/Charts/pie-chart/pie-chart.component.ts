import { Component, OnInit } from '@angular/core';

const PIE_CHART_SAMPLE_DATA: any[] = [
  {data: [250, 450, 120], label: 'When they come for me'}
]

const LINE_CHART_LABELS: any[] = ['Jan', 'Feb', 'Mar']

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData = PIE_CHART_SAMPLE_DATA
  public pieChartLabels: string[] = ['XYZ Logistics','Warframe','CyberFucker']
  public colors: any[]= [{
    backgroundColor: ['#26547c', '#ff6b6b','#ffd166']
  }]
  public pieChartType: any = 'pie'

  public lineChartData = PIE_CHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend: any = true;
  public lineChartType: any = 'pie';

  ngOnInit(): void {
  }

}
