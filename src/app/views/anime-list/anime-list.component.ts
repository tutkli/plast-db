import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { AnimeGalleryComponent } from '@shared-components/anime-gallery/anime-gallery.component';
import { Anime } from '@tutkli/jikan-ts';
import { AnimeService } from '@services/anime.service';
import { AnimeFilterComponent } from '@shared-components/anime-filter/anime-filter.component';
import { AnimeFilterService } from '@services/anime-filter.service';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [CommonModule, AnimeGalleryComponent, AnimeFilterComponent],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeListComponent implements OnInit, OnDestroy {
  private animeFilterService = inject(AnimeFilterService);
  private animeService = inject(AnimeService);
  private _onDestroy: Subject<void> = new Subject<void>();

  animes$: BehaviorSubject<Anime[]> = new BehaviorSubject<Anime[]>([]);

  ngOnInit(): void {
    this.animeFilterService.form.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe({
      next: async (params) => {
        const jikanResponse = await this.animeService.getAnimeSearch(params);
        this.animes$.next(jikanResponse.data);
      },
    });

    this.animeFilterService.form.reset();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
