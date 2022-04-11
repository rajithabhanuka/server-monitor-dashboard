import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


    public pieChartLabels = ['S1N1', 'S1N2', 'S2N1', 'S2N2'];
    public pieChartData = [1, 1, 1, 1];
    public pieChartType = 'pie';
    public colors : Color[] = [
        {
          backgroundColor: [
            'red',
            'green',
            'red',
            'grey'
          ]
        }
      ];

    public chartClicked(e: any): void {
      this.router.navigate(['/more']);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }

}
