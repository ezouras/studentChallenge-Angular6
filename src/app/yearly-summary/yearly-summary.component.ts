import { Component, OnInit } from '@angular/core';
import {StudentDataService } from '../student-services/studentdata.service';
import {Router} from '@angular/router';
import{Subscription} from "rxjs";
//import { Response } from '@angular/http';

@Component({
  selector: 'app-yearly-summary',
  templateUrl: './yearly-summary.component.html',
  styleUrls: ['./yearly-summary.component.less']
})
export class YearlySummaryComponent implements OnInit {
  private studentDataSub:Subscription;
  private studentData;

  constructor(private studentDataService: StudentDataService,
    private router: Router) {
    console.log("in constructor");
    this.studentDataService.getStudentData();
   }

  ngOnInit() {
      console.log("in ngInit");
      this.studentDataSub=this.studentDataService.getStudentUpdateListener()
      .subscribe((data:any)=>{
        //unction that gets claled when data is received.
        this.studentData=data;
        console.log("in yearly summary ",this.studentData);
      });
    }

  getYearDetails(year){
    //set email using params
    this.router.navigate(['/details'],{queryParams:{year:year.textContent}});
  }

  studentsLocal=[
    {
        "Id": 1,
        "Name": "Jack-local",
        "StartYear": 2013,
        "EndYear": 2016,
        "GPARecord": [3.4,2.1,1.2,3.6]
    },
    {
      "Id": 2,
      "Name": "Jill-local",
      "StartYear": 2010,
      "EndYear": 2013,
      "GPARecord": [3.3,2.3,1.1,3.7]
    }
];



}
