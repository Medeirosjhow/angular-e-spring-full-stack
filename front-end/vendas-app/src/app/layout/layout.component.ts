import * as jQuery from 'jquery';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements  AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    (($) => {
      "use strict";
      var path = window.location.href;
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(() => {
              if (this instanceof HTMLAnchorElement && this.href === path) {
                  $(this).addClass("active");
              }
          });

      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);

  }

}
