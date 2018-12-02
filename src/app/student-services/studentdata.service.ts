import{Injectable} from '@angular/core';
import {YearlyDataService } from './yearlydata.service';
import{Http,Response} from '@angular/http';
import {Subject} from 'rxjs';

@Injectable()

export class StudentDataService{
  private studentJSONData;
  private yearlyData;
  private dataReceived=false;
  private year="1081"
  private bannerTitle;
  private bannerSubTitle;
  private studentsUpdated = new Subject<any>();

  constructor(private http:Http,private yearlyDataService: YearlyDataService,){}

  getStudentUpdateListener(){
  //use the same subject. if your dealing with posts - use the new subject created
  //here everytien.
  return this.studentsUpdated.asObservable();
}
    getStudentData(){
      if(!this.dataReceived){
      this.http.get('http://apitest.sertifi.net/api/Students').subscribe(
          (response: Response)=>{
            this.studentJSONData=response.json();
            //console.log(this.studentJSONData);
            this.yearlyData=this.yearlyDataService.getYearlyData(this.studentJSONData);
            console.log(this.yearlyData);
            //this.studentsUpdated.next(this.studentData);
            this.dataReceived=true;
            this.setBannerData(true);

          },
          (error)=>{
            console.log(error);
          }
      )}
    }



  getBannerData(){
    return {title:this.bannerTitle,subtitle:this.bannerSubTitle};

  }


  setBannerData(isOverview){
    switch(isOverview) {
        case true: {
          console.log("setting yearly overview banner");
          this.bannerTitle="Average GPA By Year";
          this.bannerSubTitle="Click on a year to get student GPA";
          break;
        }
    default: {
        console.log("setting year detail banner");
        this.bannerTitle=`${this.year} Student GPA`;
        this.bannerSubTitle="Click on a year to get student GPA";
      break;
   }
 }}

}
