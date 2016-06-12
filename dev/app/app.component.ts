import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{rea}}</h1>'
})

export class AppComponent {
	private rea: string = 'loaging the REA app...';
}
