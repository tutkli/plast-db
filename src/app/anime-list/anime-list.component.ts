import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Anime } from '../core/models/anime/anime.model';
import { JikanService } from '@services/jikan/jikan.service';
import { AnimeGalleryComponent } from '@shared-components/anime-gallery/anime-gallery.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [CommonModule, AnimeGalleryComponent],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeListComponent implements OnInit, OnDestroy {
  animes$!: Observable<Anime[]>;
  private _onDestroy: Subject<void> = new Subject<void>();

  constructor(private jikanService: JikanService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.animes$ = this.activatedRoute.queryParams.pipe(
      takeUntil(this._onDestroy),
      switchMap((params: Params): Observable<Anime[]> => {
        return this.jikanService.getAnimeSearch(params);
      })
    );
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
