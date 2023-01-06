import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';
import { RouterLink } from '@angular/router';
import { Anime } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-anime-card',
  standalone: true,
  imports: [CommonModule, MaxItemsPipe, RouterLink],
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCardComponent {
  @Input() anime: Anime | undefined;
}
