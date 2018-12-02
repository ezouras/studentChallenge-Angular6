import{Injectable} from '@angular/core';

@Injectable()
export class YearlyDataService{
  //private studentDataByYear:any= new Array();
  private studentYearlyOverview:any= new Array();
  private i:number;
  private gpaString:string;
  private allStudents;

  constructor(){
    for(this.i=2000;this.i<=2016;this.i++){
      let yearObj={year:this.i,students:[],gpa:0};
      this.studentYearlyOverview.push(yearObj);
    }
  }


  getYearlyData(allStudents: any){
        this.allStudents=allStudents;
        console.log(this.allStudents);
        this.setStudents();
        this.setGPA();
        return this.studentYearlyOverview;
    }

    setStudents(){
      for(let student of this.allStudents){
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
            let objForYear=this.studentYearlyOverview[arrNumb];
            let studentObj={};
            studentObj["name"]=student.Name;
            studentObj["gpa"]=student.GPARecord[counter];
            objForYear.students.push(studentObj);
            counter++;
          }
        }
      }

    setGPA(){
      for(let j=0;j<this.studentYearlyOverview.length;j++){
        let length=this.studentYearlyOverview[j].students.length;
        let total=0;
        for(let i=0;i<length;i++){
          let yearObj=this.studentYearlyOverview[j];
          let student=yearObj.students[i];
          //let studentGPA=student.gpa;
          total=total + student.gpa;
        }
        let averageGPA=total/length;
        this.round(2,averageGPA);
        this.studentYearlyOverview[j].gpa= this.gpaString;
      }
    }


    /* return rounded number */
    round(decimalPlaces,numberToRound){
      let number=1;
      for(let i=0;i<decimalPlaces;i++){
        number=number*10;
      }
      console.log(number)
      let gpaRound=Math.round(numberToRound * 100) / 100;
      //this.gpaString=parseFloat(gpaRound).toString();
      this.gpaString=String(gpaRound);
    }



}
