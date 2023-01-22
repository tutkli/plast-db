import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MangaService } from '@services/manga.service';
import { first, Observable, switchMap } from 'rxjs';
import { CommonCharacter, Manga } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-manga-detail',
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgIf, UpperCasePipe, NgClass, DatePipe],
  templateUrl: './manga-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MangaDetailComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private mangaService = inject(MangaService);

  manga$!: Observable<Manga>;
  mangaCharacters$!: Observable<CommonCharacter[]>;

  ngOnInit(): void {
    this.manga$ = this.activatedRoute.url.pipe(
      first(),
      switchMap((data: UrlSegment[]): Observable<Manga> => {
        const malId = parseInt(data[0]?.path, 10);
        return this.mangaService.getMangaDetail(malId);
      })
    );

    this.mangaCharacters$ = this.activatedRoute.url.pipe(
      first(),
      switchMap((data: UrlSegment[]): Observable<CommonCharacter[]> => {
        const malId = parseInt(data[0]?.path, 10);
        return this.mangaService.getMangaCharacters(malId);
      })
    );
  }
}
