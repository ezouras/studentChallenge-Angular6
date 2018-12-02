import{Injectable} from '@angular/core';

@Injectable()
export class YearlyDataService{
  private studentDataByYear:any= new Array();
  private i:number;
  constructor(){
    for(this.i=2000;this.i<=2016;this.i++){
      let yearObj={[this.i]:{students:[],gpa:0}};
      this.studentDataByYear.push(yearObj);
  }
  //console.log(this.studentDataByYear);

}
  getYearlyData(allStudents: any){
    for(let student of allStudents){
      let counter=0;
      //console.log("Thsi student is: ",student.Name);
        for(let i=student.StartYear;i<=student.EndYear;i++){
          //console.log("student year is ",i);
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
          //console.log(objForYear);
          //console.log(objForYear[i].students);
          //console.log(objForYear[i].gpa);
          let studentObj={};
          studentObj["name"]=student.Name;
          studentObj["gpa"]=student.GPARecord[counter];
          objForYear[i].students.push(studentObj);
          if(objForYear[i].students.length===1)
          {
            objForYear[i].gpa=student.GPARecord[counter];
          }
          else{
          let gpaForYear=(objForYear[i].gpa+student.GPARecord[counter])/2;
          objForYear[i].gpa=gpaForYear;
          }

          counter++;

        }
      }
      return this.studentDataByYear;
    }


    //  console.log(students);

}
