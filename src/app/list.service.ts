import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data: Array<any>) {
      console.log('service response:');
      console.log(data); // У нас есть данные! Давайте вернем их, чтобы подписчики могли его использовать!
    // тут мы можем делать что-нибудь с данными
    this.myMethodSubject.next(data);
  }
}
