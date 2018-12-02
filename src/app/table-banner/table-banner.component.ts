import { Component, OnInit } from '@angular/core';
import {StudentDataService } from '../student-services/studentdata.service';

@Component({
  selector: 'app-table-banner',
  templateUrl: './table-banner.component.html',
  styleUrls: ['./table-banner.component.css']
})
export class TableBannerComponent implements OnInit {
  title="I work!";
  subtitle;

  constructor(private studentDataService: StudentDataService) {


  }

  ngOnInit() {

    this.title=this.studentDataService.getBannerData().title;
    this.subtitle=this.studentDataService.getBannerData().subtitle;
  }

}
