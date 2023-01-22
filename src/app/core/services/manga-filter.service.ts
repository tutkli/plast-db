import { inject, Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { JikanPagination, Manga } from '@tutkli/jikan-ts';
import { MangaService } from '@services/manga.service';

@Injectable({ providedIn: 'root' })
export class MangaFilterService implements OnDestroy {
  private formBuilder = inject(FormBuilder);
  private mangaService = inject(MangaService);
  private _onDestroy: Subject<void> = new Subject<void>();

  private _mangas: BehaviorSubject<Manga[]> = new BehaviorSubject<Manga[]>([]);
  mangas$: Observable<Manga[]> = this._mangas.asObservable();

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
        const jikanResponse = await this.mangaService.getMangaSearch(params);
        this._mangas.next(jikanResponse.data);
        this._pagination.next(jikanResponse.pagination);
      },
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
