import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YearlySummaryComponent } from './yearly-summary/yearly-summary.component';
import { YearDetailsComponent } from './year-details/year-details.component';
import { StudentDataService } from './student-services/studentdata.service';
import {YearlyDataService} from './student-services/yearlydata.service';
import { TableBannerComponent } from './table-banner/table-banner.component';

const appRoutes: Routes = [
  {path: '',component:YearlySummaryComponent},
  {path:"details",component:YearDetailsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    YearlySummaryComponent,
    YearDetailsComponent,
    TableBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    StudentDataService,
    YearlyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
