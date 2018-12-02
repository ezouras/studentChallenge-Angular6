import { Component, OnInit } from '@angular/core';
import {StudentDataService } from '../student-services/studentdata.service';

@Component({
  selector: 'app-table-banner',
  templateUrl: './table-banner.component.html',
  styleUrls: ['./table-banner.component.css']
})
export class TableBannerComponent implements OnInit {
  title="Yearly Overview of GPA";
  subtitle="In order to view student GPA for a given year,please click on the year in the table below.";

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.studentDataService.getBannerUpdateListener()
    .subscribe((data:any)=>{
      this.title=data.title;
      this.subtitle=data.subtitle;
    });
  }




}
