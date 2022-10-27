import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { BreakpointObserverService } from '@services/breakpoint-observer/breakpoint-observer.service';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { fadeInOnEnter } from '../../../../styles/animations';
import { ClickOutsideDirective } from '@directives/click-outside/click-outside.directive';

type DropdownMenu = 'menu' | 'search' | undefined;

@Component({
  selector: 'plast-navigation-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkWithHref,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ClickOutsideDirective,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [fadeInOnEnter],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  private _dropdownMenu: BehaviorSubject<DropdownMenu> = new BehaviorSubject<DropdownMenu>(undefined);
  dropdownMenu$: Observable<DropdownMenu> = this._dropdownMenu.asObservable().pipe(share());

  get smallBreakpoint$(): Observable<boolean> {
    return this.breakpointObserverService.smallBreakpoint$;
  }

  constructor(private breakpointObserverService: BreakpointObserverService) {}

  toggleDropdownMenu(value: DropdownMenu): void {
    this._dropdownMenu.next(value);
  }

  searchAnime(input: HTMLInputElement): void {
    console.log(`Searching for ${input.value}`);
    input.value = '';
  }
}
