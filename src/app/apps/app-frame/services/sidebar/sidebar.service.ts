import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarState = new BehaviorSubject<boolean>(true);

  sidebarStateSub = this.sidebarState.asObservable();
  
  constructor() {}

  toggleSidebar(){
    const currentState = this.sidebarState.value;
    this.sidebarState.next(!currentState);
  }

  setSidebarState(state: boolean){
    this.sidebarState.next(state);
  }
}
