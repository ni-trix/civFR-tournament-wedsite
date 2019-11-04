import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-civFR-tournament-website';
  lang = 'fr';

  @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

  changeLang() {
    if (this.lang === 'fr') {
      this.lang = 'uk';
    } else {
      this.lang = 'fr';
    }
  }

}

