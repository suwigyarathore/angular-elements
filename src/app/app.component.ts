import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content = null;

  constructor (injector: Injector, domSan: DomSanitizer) {
    const DynamicAlertComponent = createCustomElement(AlertComponentComponent, { injector })
    customElements.define('my-dynamic-component', DynamicAlertComponent);
    setTimeout(() => {
      this.content = domSan.bypassSecurityTrustHtml("<my-dynamic-component [message]=\"'Rendered Dynamically'\"></my-dynamic-component>");
    }, 1000);
  }
}
