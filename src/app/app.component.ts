import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content = null;

  constructor () {
    setTimeout(function () {
      this.content = "<app-alert-component [message]='Rendered Dynamically'></app-alert-component>"
    }, 1000);
  }
}
