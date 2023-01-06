import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { BreakpointObserverService } from '@services/breakpoint-observer/breakpoint-observer.service';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { fadeInOnEnter } from '../../../../styles/animations';
import { ClickOutsideDirective } from '@directives/click-outside/click-outside.directive';
import { AnimeRouteName } from '@routes/anime.routes';

type DropdownMenu = 'menu' | 'search' | undefined;

@Component({
  selector: 'plast-navigation-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, MatIconModule, MatButtonModule, ClickOutsideDirective],
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

  constructor(private breakpointObserverService: BreakpointObserverService, private router: Router) {}

  toggleDropdownMenu(value: DropdownMenu): void {
    this._dropdownMenu.next(value);
  }

  searchAnime(input: HTMLInputElement): void {
    this.router
      .navigate([`${AnimeRouteName.ANIME}/${AnimeRouteName.LIST}`], {
        queryParams: { q: input.value },
        queryParamsHandling: 'merge',
      })
      .then((): void => {
        this.toggleDropdownMenu(undefined);
        input.value = '';
      });
  }
}
