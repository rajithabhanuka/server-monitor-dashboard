import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public dataJson: any;

  constructor(private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get<any>('https://webhook.site/3e362daa-2370-44fd-9f62-d5a264427143').subscribe(data => {
    this.dataJson = data;
  })  

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
