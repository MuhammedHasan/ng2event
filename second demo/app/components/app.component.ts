import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    templateUrl: '/app/components/app.html',
})
export class AppComponent {
    tasks: Array<String>;
    newTask: String;

    constructor() {
        this.tasks = [];
    }

    addTask(task: String) {
        this.tasks.push(task);
        this.newTask = '';
    }

}
