import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from "rxjs/ajax";

@Component({
  selector: 'app-rx-jsexample',
  templateUrl: './rx-jsexample.component.html',
  styleUrls: ['./rx-jsexample.component.css']
})
export class RxJSExampleComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
   //this.coldObservable();
    this.creationFunctions();
  }

  coldObservable() {
    const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');
    ajax$.subscribe(
      data => console.log('Sub 1:', data.response.first_name)
    );
    
    ajax$.subscribe(
      data => console.log('Sub 2:', data.response.first_name)
    );
    
    ajax$.subscribe(
      data => console.log('Sub 3:', data.response.first_name)
    );
  }

  creationFunctions() {
    of('Alice', 'Ben', 'Charlie').subscribe(value => console.log(value));
  }

}
