import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { AnimeGalleryComponent } from '@shared-components/anime-gallery/anime-gallery.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Anime } from '@tutkli/jikan-ts';
import { AnimeService } from '@services/anime.service';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [CommonModule, AnimeGalleryComponent],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeListComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private animeService = inject(AnimeService);
  private _onDestroy: Subject<void> = new Subject<void>();

  animes$!: Observable<Anime[]>;

  ngOnInit(): void {
    this.animes$ = this.activatedRoute.queryParams.pipe(
      takeUntil(this._onDestroy),
      switchMap((params: Params): Observable<Anime[]> => {
        return this.animeService.getAnimeSearch(params);
      })
    );
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
