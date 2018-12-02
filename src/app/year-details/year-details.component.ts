import { Component, OnInit } from '@angular/core';
import {StudentDataService } from '../student-services/studentdata.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-Year-details',
  templateUrl: './year-details.component.html',
  styleUrls: ['./year-details.component.less']
})
export class YearDetailsComponent implements OnInit {
  year;
  detailData;
  students;

  constructor(//private router:Router,
              private studentDataService: StudentDataService,
              private currentRoute:ActivatedRoute,) { }

  ngOnInit() {
   this.year=this.currentRoute.snapshot.queryParams["year"];
   this.students=this.studentDataService.getStudentNameAndGPA();

   }

}
