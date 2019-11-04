import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-civFR-tournament-website';
  lang = 'fr';

  changeLang() {
    if (this.lang === 'fr') {
      this.lang = 'uk';
    } else {
      this.lang = 'fr';
    }
  }
}

