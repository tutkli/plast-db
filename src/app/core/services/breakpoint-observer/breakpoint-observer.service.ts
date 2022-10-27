import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  smallBreakpoint$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  /**
   * Checks the matching state of @media queries and updates view when it matches a small screen
   */
  init(): void {
    this.smallBreakpoint$ = this.breakpointObserver
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.WebPortrait,
      ])
      .pipe(map((result: BreakpointState): boolean => result.matches));
  }
}
