import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, NavigationStart, Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './shared/components/navigation-bar/navigation-bar.component';
import { BehaviorSubject, filter } from 'rxjs';
import { FlexModule } from '@angular/flex-layout';
import { IsHomeActivePipe } from './shared/pipes/is-home-active/is-home-active.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, NavigationBarComponent, FlexModule, IsHomeActivePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  routerEvents: BehaviorSubject<NavigationStart | null> = new BehaviorSubject<NavigationStart | null>(null);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event: Event) => event instanceof NavigationStart)).subscribe({
      next: (event: Event): void => {
        if (event instanceof NavigationStart) this.routerEvents.next(event);
      },
    });
  }
}
