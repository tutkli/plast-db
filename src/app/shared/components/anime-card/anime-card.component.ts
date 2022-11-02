import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anime } from '../../../core/models/anime/anime.model';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'plast-anime-card',
  standalone: true,
  imports: [CommonModule, MaxItemsPipe, RouterLinkWithHref],
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCardComponent {
  @Input() anime: Anime | undefined;
}
