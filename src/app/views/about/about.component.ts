import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'plast-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
