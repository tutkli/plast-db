import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { first, Observable, switchMap } from 'rxjs';
import { JikanService } from '@services/jikan/jikan.service';
import { Anime, AnimeCharacter } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-anime-detail',
  standalone: true,
  imports: [NgForOf, NgIf, AsyncPipe, UpperCasePipe, DatePipe, NgClass],
  templateUrl: './anime-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimeDetailComponent implements OnInit {
  anime$!: Observable<Anime>;
  animeCharacters$!: Observable<AnimeCharacter[]>;

  constructor(private activatedRoute: ActivatedRoute, private jikanService: JikanService) {}

  ngOnInit(): void {
    this.anime$ = this.activatedRoute.url.pipe(
      first(),
      switchMap((data: UrlSegment[]): Observable<Anime> => {
        const malId = parseInt(data[0]?.path, 10);
        return this.jikanService.getAnimeDetail(malId);
      })
    );

    this.animeCharacters$ = this.activatedRoute.url.pipe(
      first(),
      switchMap((data: UrlSegment[]): Observable<AnimeCharacter[]> => {
        const malId = parseInt(data[0]?.path, 10);
        return this.jikanService.getAnimeCharacters(malId);
      })
    );
  }
}
