import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { ResourceGalleryComponent } from '@shared-components/resource-gallery/resource-gallery.component';
import { Anime } from '@tutkli/jikan-ts';
import { AnimeService } from '@services/anime.service';
import { AnimeFilterComponent } from '@shared-components/anime-filter/anime-filter.component';
import { AnimeFilterService } from '@services/anime-filter.service';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [ResourceGalleryComponent, AnimeFilterComponent, AsyncPipe],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeListComponent implements OnInit, OnDestroy {
  private animeFilterService = inject(AnimeFilterService);
  private animeService = inject(AnimeService);
  private _onDestroy: Subject<void> = new Subject<void>();

  get animes$(): Observable<Anime[]> {
    return this.animeFilterService.animes$;
  }

  ngOnInit(): void {
    this.animeFilterService.form.reset();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
