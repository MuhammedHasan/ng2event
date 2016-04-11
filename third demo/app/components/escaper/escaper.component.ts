import {Component} from 'angular2/core';
import {EscaperService} from '../../services/escaper.service';
@Component({
    selector: 'escaper',
    template: `
    <div class="escaper"
      [style.top]="y+'px'"
      [style.left]="x+'px'"
      [style.background-color]="color"
      (mouseover)="runaway()"></div>
    `,
    styleUrls: ['app/components/escaper/escaper.css']
})
export class EscaperComponent {
    x: Number;
    y: Number;
    color: String;
    constructor(private es: EscaperService) {
        this.x = this.es.randomWidth();
        this.y = this.es.randomHight();
        this.color = this.es.generateColor();
    }

    runaway() {
        this.x = this.es.randomWidth();
        this.y = this.es.randomHight();
    }
}
