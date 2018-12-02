import{Injectable} from '@angular/core';

@Injectable()
export class YearlyDataService{
  private studentDataByYear:any= new Array();
  private i:number;

  constructor(){
    for(this.i=2000;this.i<=2016;this.i++){
      let yearObj={year:this.i,students:[],gpa:0};
      //let yearGPA={year:this.i,gpa:0};
      this.studentDataByYear.push(yearObj);
      //this.yearAndGPA.push(yearGPA);
      //console.log("new year obj is: ",yearObj)
  }

}
  getYearlyData(allStudents: any){
    for(let student of allStudents){
      let counter=0;
        for(let i=student.StartYear;i<=student.EndYear;i++){
          let yearString=i.toString();//2001
          let arrNumb;
          if(yearString.slice(2,3)==0)
          {
            arrNumb=parseInt(yearString.slice(3,4));
          }
          else{
            arrNumb=parseInt(yearString.slice(2,4));
          }
          let objForYear=this.studentDataByYear[arrNumb];
          let studentObj={};
          studentObj["name"]=student.Name;
          studentObj["gpa"]=student.GPARecord[counter];
          objForYear.students.push(studentObj);
          if(objForYear.students.length===1)
          {
            objForYear.gpa=student.GPARecord[counter];
          }
          else{
          let gpaForYear=(objForYear.gpa+student.GPARecord[counter])/2;
          objForYear.gpa=gpaForYear;
          }
          counter++;
        }
      }
      return this.studentDataByYear;
    }


}
