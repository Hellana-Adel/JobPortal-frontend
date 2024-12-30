import { CommonService } from './../../../core/Services/common.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  isLoading: boolean;

  constructor(private router: Router,private translate: TranslateService,private commonservice:CommonService) {

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });


  }
  toggleSidebars(e:Event){

    if (window.matchMedia('(min-width: 992px)').matches) {

    } else if (window.matchMedia('(max-width: 991px)').matches) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-open');
    }
  }
  ngOnInit(): void {

 this.commonservice.convert(this.translate)
  }

}
