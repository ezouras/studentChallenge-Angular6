import{Injectable} from '@angular/core';
import {YearlyDataService } from './yearlydata.service';
import{Http,Response} from '@angular/http';
import {Subject} from 'rxjs';

@Injectable()

export class StudentDataService{
  private studentJSONData;
  private yearlyStudentData;
  private dataReceived=false;
  private bannerTitle;
  private bannerSubtitle;
  private studentsUpdated = new Subject<any>();
  bannerUpdated = new Subject<any>();
  private studentNameAndGPA;

  constructor(private http:Http,private yearlyDataService: YearlyDataService,){}

  getStudentUpdateListener(){
  return this.studentsUpdated.asObservable();
  }

  getBannerUpdateListener(){
    return this.bannerUpdated.asObservable();
  }

  getStudentData(){
      if(!this.dataReceived){
      this.http.get('http://apitest.sertifi.net/api/Students').subscribe(
          (response: Response)=>{
            this.studentJSONData=response.json();
            this.yearlyStudentData=this.yearlyDataService.getYearlyData(this.studentJSONData);
            this.studentsUpdated.next(this.yearlyStudentData);
            this.dataReceived=true;
          },
          (error)=>{
            console.log(error);
          }
      )}
    }


    setStudentNameAndGPA(year){
      for(let yearObj of this.yearlyStudentData){
        if(yearObj.year==year){
          this.studentNameAndGPA=yearObj.students;
        }
      }
    }

    getStudentNameAndGPA(){
      return this.studentNameAndGPA;
    }



  getBannerData(year){
    if(year){
      this.bannerTitle=`${year} Student GPA`;
      this.bannerSubtitle="";
    }
    else{
      this.bannerTitle="Yearly Overview of GPA";
      this.bannerSubtitle="In order to view student GPA for a given year,please click on the year in the table below.";

    }
    return {title:this.bannerTitle,subtitle:this.bannerSubtitle};
  }

}
