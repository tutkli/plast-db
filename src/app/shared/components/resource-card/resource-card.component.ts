import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';
import { RouterLink } from '@angular/router';
import { Anime, Manga } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-resource-card',
  standalone: true,
  imports: [CommonModule, MaxItemsPipe, RouterLink],
  templateUrl: './resource-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceCardComponent {
  @Input() link: string | undefined;
  @Input() resource: Anime | Manga | undefined;
}
