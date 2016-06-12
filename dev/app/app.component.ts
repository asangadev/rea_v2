import {Component} from '@angular/core';
import {BaseRequestOptions, Http, HTTP_PROVIDERS} from '@angular/http';
//import {DataService} from "./data.service";
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/basic.html',
  //  providers: [DataService]
})

export class AppComponent {
	private rea: string = 'loaging the REA app...';
  private reatest: string = 'test';
}
