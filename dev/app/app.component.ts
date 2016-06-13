import {Component} from '@angular/core';
import {AppController} from './app.component.controller';

@Component({
    selector: 'my-app',
    template:"<lists></lists>",
    directives: [AppController]
})

export class AppComponent {}
