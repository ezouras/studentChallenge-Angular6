import { Component, OnInit } from '@angular/core';
import {StudentDataService } from '../student-services/studentdata.service';
import {Router} from '@angular/router';
//import{Subscription} from "rxjs";
//import { Response } from '@angular/http';

@Component({
  selector: 'app-yearly-summary',
  templateUrl: './yearly-summary.component.html',
  styleUrls: ['./yearly-summary.component.less']
})
export class YearlySummaryComponent implements OnInit {
  //private studentDataSub:Subscription;

  private yearlyData:any=new Array();
  private waiting:boolean =true;

  constructor(private studentDataService: StudentDataService,
    private router: Router) {
    this.studentDataService.getStudentData();
   }

  ngOnInit() {
      this.studentDataService.getStudentUpdateListener()
      .subscribe((data:any)=>{
        this.yearlyData=data;
        this.waiting=false;
      });
    }


  //Location.reload(true);

  getYearDetails(yearHTML){
    //set email using params
    let students;
    let year=parseInt(yearHTML.textContent);
    for(let yearObj of this.yearlyData){
      if(yearObj.year==year){
        students=yearObj.students;
      }
    }
    this.studentDataService.setStudentNameAndGPA(students)
    this.studentDataService.bannerUpdated.next(this.studentDataService.getBannerData(year));
    this.router.navigate(['/details'],{queryParams:{year:year}});
 }
}
