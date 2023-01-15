import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { first, Observable, switchMap } from 'rxjs';
import { Anime, AnimeCharacter } from '@tutkli/jikan-ts';
import { AnimeService } from '@services/anime.service';

@Component({
  selector: 'plast-anime-detail',
  standalone: true,
  imports: [NgForOf, NgIf, AsyncPipe, UpperCasePipe, DatePipe, NgClass],
  templateUrl: './anime-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimeDetailComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private animeService = inject(AnimeService);

  anime$!: Observable<Anime>;
  animeCharacters$!: Observable<AnimeCharacter[]>;

  ngOnInit(): void {
    this.anime$ = this.activatedRoute.url.pipe(
      first(),
      switchMap((data: UrlSegment[]): Observable<Anime> => {
        const malId = parseInt(data[0]?.path, 10);
        return this.animeService.getAnimeDetail(malId);
      })
    );

    this.animeCharacters$ = this.activatedRoute.url.pipe(
      first(),
      switchMap((data: UrlSegment[]): Observable<AnimeCharacter[]> => {
        const malId = parseInt(data[0]?.path, 10);
        return this.animeService.getAnimeCharacters(malId);
      })
    );
  }
}
