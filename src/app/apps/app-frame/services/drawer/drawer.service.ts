import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private drawerOpenSub = new BehaviorSubject<boolean>(false);
  private drawerPortalSub = new BehaviorSubject<ComponentType<any> | null>(
    null,
  );
  private drawerWidthSub = new BehaviorSubject<string>('fit-content');

  drawerOpenObservable() {
    return this.drawerOpenSub.asObservable();
  }

  setDrawerOpenState(state: boolean) {
    this.drawerOpenSub.next(state);
  }

  drawerPortalObservable() {
    return this.drawerPortalSub.asObservable();
  }

  setDrawerPortal(component: ComponentType<any> | null) {
    this.drawerPortalSub.next(component);
  }

  drawerWidthObservable() {
    return this.drawerWidthSub.asObservable();
  }

  setDrawerWidth(width: string) {
    this.drawerWidthSub.next(width);
  }

  toggleDrawer() {
    const open = this.drawerOpenSub.getValue();
    if (open) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  openDrawer() {
    this.drawerOpenSub.next(true);
  }

  closeDrawer() {
    this.drawerOpenSub.next(false);
  }
}
