import { inject, Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { AnimeService } from '@services/anime.service';
import { Anime, JikanPagination } from '@tutkli/jikan-ts';

@Injectable({ providedIn: 'root' })
export class AnimeFilterService implements OnDestroy {
  private formBuilder = inject(FormBuilder);
  private animeService = inject(AnimeService);
  private _onDestroy: Subject<void> = new Subject<void>();

  private _animes: BehaviorSubject<Anime[]> = new BehaviorSubject<Anime[]>([]);
  animes$: Observable<Anime[]> = this._animes.asObservable();

  private _pagination: BehaviorSubject<JikanPagination | undefined> = new BehaviorSubject<JikanPagination | undefined>(
    undefined
  );
  pagination$: Observable<JikanPagination | undefined> = this._pagination.asObservable();

  readonly form: FormGroup = this.formBuilder.group({
    q: new FormControl<string>('', { nonNullable: true }),
    page: new FormControl<number>(1, { nonNullable: true }),
  });

  constructor() {
    this.form.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe({
      next: async (params) => {
        const jikanResponse = await this.animeService.getAnimeSearch(params);
        this._animes.next(jikanResponse.data);
        this._pagination.next(jikanResponse.pagination);
      },
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
