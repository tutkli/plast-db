import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Anime, Manga } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-resource-card',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './resource-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceCardComponent {
  @Input() link: string | undefined;
  @Input() resource: Anime | Manga | undefined;
}
