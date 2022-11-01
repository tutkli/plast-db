import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { first, Observable, switchMap } from 'rxjs';
import { JikanService } from '@services/jikan/jikan.service';
import { Anime } from '../core/models/anime/anime.model';
import { AnimeCharacter } from '../core/models/character.model';
import { BreakpointObserverService } from '@services/breakpoint-observer/breakpoint-observer.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'plast-anime-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeDetailComponent implements OnInit {
  anime$!: Observable<Anime>;
  animeCharacters$!: Observable<AnimeCharacter[]>;

  get smallBreakpoint$(): Observable<boolean> {
    return this.breakpointObserverService.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait,
      Breakpoints.WebPortrait,
    ]);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private jikanService: JikanService,
    private breakpointObserverService: BreakpointObserverService
  ) {}

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
