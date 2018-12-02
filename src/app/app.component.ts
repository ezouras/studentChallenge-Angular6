import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  landingUrl: string = "/";

    constructor(private location: PlatformLocation, private router: Router) {

        //redirect on back button.
        location.onPopState(() => {
            window.location.href = this.landingUrl;
        });

        //redirect on refresh button.
        if (window.location.pathname != "/") {
            this.router.navigate([this.landingUrl]);;
        }

    }
    

  }
