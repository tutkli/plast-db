import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anime } from '../../../core/models/anime/anime.model';
import { AnimeCardComponent } from '@shared-components/anime-card/anime-card.component';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';

@Component({
  selector: 'plast-anime-gallery',
  standalone: true,
  imports: [CommonModule, AnimeCardComponent, MaxItemsPipe],
  templateUrl: './anime-gallery.component.html',
  styleUrls: ['./anime-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeGalleryComponent implements OnInit {
  @Input() animes: Anime[] | null | undefined;
  @Input() maxItems = 25;
  placeHolderAnimes!: number[];

  ngOnInit(): void {
    this.placeHolderAnimes = new Array(this.maxItems);
  }
}
