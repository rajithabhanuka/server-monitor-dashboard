import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  public dataJson: any;
  public fields: any = [];
  public fileSystem: any;
  public fileSystemLocal: any;
  public oracle: any;
  public oracleRw: any;
  public oracleRo: any;
  public ibmMq: any;
  public ibmMqRemote: any;
  public ibmMqLocal: any;
  public ldap: any;
  public hsm: any;
  public fileSystemRemote: any;

  public map1 = new Map<string, string>();

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    
    this.http.get<any>('https://webhook.site/3e362daa-2370-44fd-9f62-d5a264427143').subscribe(data => {
        // this.dataJson = data;

        this.fields  = Object.keys(data.details); 

        this.fileSystem = data.details["file-system"];
        this.fileSystemLocal = this.fileSystem.details["file-system-local"];
        this.fileSystemRemote = this.fileSystem.details["file-system-remote"];

        this.oracle = data.details["oracle"];
        this.oracleRw = this.oracle.details["oracle-rw"];
        this.oracleRo = this.oracle.details["oracle-ro"];

        this.ibmMq = data.details["ibm-mq"];
        this.ibmMqLocal = this.ibmMq.details["ibm-mq-local"];
        this.ibmMqRemote = this.ibmMq.details["ibm-mq-remote"];

        this.hsm = data.details["hsm"];

        this.ldap = data.details["ldap"];

      //   for (var key in data.details) {
      //     if (data.details.hasOwnProperty(key)) {
      //       this.map1.set(key, data.details[key]);
      //     }
      // }
    })
    
 

  }

}
