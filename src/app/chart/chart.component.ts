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

  public dataJsonS1N1: any;
  public dataJsonS1N2: any;
  public dataJsonS2N1: any;
  public dataJsonS2N2: any;

  public pieChartLabels = ['S1N1', 'S1N2', 'S2N1', 'S2N2'];
  public pieChartData = [1, 1, 1, 1];
  public pieChartType = 'pie';
  public colors: Color[];

  constructor(private router: Router,
    private http: HttpClient) {
  }

  ngOnInit() {

    var S1N1Colour: string;
    let S1N2Colour: string;
    let S2N1Colour: string;
    let S2N2Colour: string;

    this.http.get<any>('https://webhook.site/3e362daa-2370-44fd-9f62-d5a264427143').subscribe(data => {
      this.dataJsonS1N1 = data;
      S1N1Colour = this.getColour(data.status);
    })

    this.http.get<any>('https://webhook.site/3e362daa-2370-44fd-9f62-d5a264427143').subscribe(data => {
      this.dataJsonS1N2 = data;
      S1N2Colour = this.getColour(data.status);
    })

    this.http.get<any>('https://webhook.site/3e362daa-2370-44fd-9f62-d5a264427143').subscribe(data => {
      this.dataJsonS2N1 = data;
      S2N1Colour = this.getColour(data.status);
    })

    this.http.get<any>('https://webhook.site/3e362daa-2370-44fd-9f62-d5a264427143').subscribe(data => {
      this.dataJsonS2N2 = data;
      S2N2Colour = this.getColour(data.status);
       this.colors = this.setColour(S1N1Colour, S1N2Colour, S2N1Colour, S2N2Colour);
    })

  }

  public chartClicked(e: any): void {
    this.router.navigate(['/more']);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public getColour(status: string) {

    let finalColour: string;

    if (status == 'up') {
      finalColour = 'Green';
    } else if (status == 'down') {
      finalColour = 'Red';
    } else if (status == 'unknown') {
      finalColour = 'Grey';
    } else if (status == 'prtial') {
      finalColour = 'yellow';
    } else if (status == 'out_of_service') {
      finalColour = 'pink';
    }

    return finalColour;

  }

  public setColour(
    S1N1Colour: string,
    S1N2Colour: string,
    S2N1Colour: string,
    S2N2Colour: string) {

    return [
      {
        backgroundColor: [
          S1N1Colour,
          S1N2Colour,
          S2N1Colour,
          S2N2Colour
        ]
      }
    ];
  }

}


