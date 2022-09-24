import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
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
    this.ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
      next: value => console.log(value),
      complete: () => console.log('Complete')
    });

    // Another way to write code
    // const names$ =new Observable<string>(subscriber => {
    //   subscriber.next('Alice');
    //   subscriber.next('Ben');
    //   subscriber.next('Charlie');
    //   subscriber.complete()
    // });
    // names$.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Completed')

    // });


  }
  ourOwnOf(...args:string[]): Observable<string> {
    return new Observable<string>(subscriber => {
      for(let i=0; i< args.length; i++) {
        subscriber.next(args[i]);
      }
      subscriber.complete();

    })
  }

}
