import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutercontrolService {
  constructor() {}
  private routerouletControl = new BehaviorSubject<any>(true);
  cast = this.routerouletControl.asObservable();

  sendrouterOutletControl(setvalue: any) {
    this.routerouletControl.next(setvalue);
  }
}
