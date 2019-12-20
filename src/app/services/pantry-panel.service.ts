import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PantryPanelService {
  panelOpenStates = new Map <string, boolean>([
    ['product', false],
    ['type', false],
    ['shop', false]
  ]);

  private panelOpenSource = new BehaviorSubject(this.panelOpenStates);
  currentPanelOpen = this.panelOpenSource.asObservable();

  constructor() { }

  getPanelOpenStates(): Observable<Map<string, boolean>> {
    return this.currentPanelOpen;
  }

  setPanelOpenStates(panel: string, state: boolean) {
    this.panelOpenStates.set(panel, state);
    this.panelOpenSource.next(this.panelOpenStates);
  }
}
