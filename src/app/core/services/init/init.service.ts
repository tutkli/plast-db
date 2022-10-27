import { Injectable } from '@angular/core';
import { BreakpointObserverService } from '@services/breakpoint-observer/breakpoint-observer.service';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(private breakpointObserverService: BreakpointObserverService) {}

  async initializeApp(): Promise<void> {
    return new Promise<void>((resolve): void => {
      this.breakpointObserverService.init();
      resolve();
    });
  }
}
