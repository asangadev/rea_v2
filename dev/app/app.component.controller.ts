import {Component} from '@angular/core';
import {DataService} from "./data.service";
import {Injectable} from '@angular/core';


@Component({
    selector: 'lists',
    templateUrl:"templates/listings.html",
    providers: [DataService]
})


@Injectable()
export class AppController {

  results: Array<string>;
  selectedItems: Array<string>;
  selectCount: boolean = false;

  constructor (private _dataService: DataService) {

    this._dataService.getSaved()
     .subscribe(
        data => {
          this.selectedItems = data;
          console.log(data);
        },
        error => console.log(error)
     );

    this._dataService.getResults()
     .subscribe(
        data => {
          this.results = data;
          console.log(data);
        },
        error => console.log(error)
     );
    }


    onSelect(item) {
      this.selectCount = false;
      if(this.selectedItems.indexOf(item) == -1){
        this.selectedItems.push(item)
        console.log (this.selectedItems);
      }
    };

    onDelete(item) {
      if(this.selectedItems.length == 1){
          this.selectCount = true;
      }
      this.selectedItems.splice(this.selectedItems.indexOf(item),1);
      console.log (this.selectedItems);
    };

}
