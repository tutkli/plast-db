import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { fadeInOnEnter } from '../../../../styles/animations';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'plast-navigation-bar',
  standalone: true,
  imports: [NgClass, AsyncPipe, RouterLink, SvgIconComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [fadeInOnEnter],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  private _dropdownMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dropdownMenu$: Observable<boolean> = this._dropdownMenu.asObservable().pipe(share());

  toggleDropdownMenu(): void {
    this._dropdownMenu.next(!this._dropdownMenu.getValue());
  }
}
