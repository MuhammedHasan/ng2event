import {Component} from 'angular2/core';
import {EscaperComponent} from './escaper/escaper.component';

@Component({
    selector: 'app',
    template: `
      <escaper *ngFor="#i of repeat"></escaper>
    `,
    directives: [EscaperComponent]
})
export class AppComponent {
    repeat = new Array<Number>(1000);
}
