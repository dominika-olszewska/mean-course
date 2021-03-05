import { ViewName } from './../../enums/view-name';
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class HeaderService {
  public currentView$: Observable<ViewName>;

  private currentViewSubject: Subject<ViewName> = new ReplaySubject();

  constructor() {
    this.currentView$ = this.currentViewSubject.asObservable();
  }

  public setCurrentViewName(name: ViewName): void {
    this.currentViewSubject.next(name);
  }

  public resetCurrentView(): void {
    this.currentViewSubject.next(null);
  }

}
