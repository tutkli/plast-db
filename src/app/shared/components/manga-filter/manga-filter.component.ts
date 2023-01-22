import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MangaFilterService } from '@services/manga-filter.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { JikanPagination } from '@tutkli/jikan-ts';
import { TextInputComponent } from '@shared-components/text-input/text-input.component';
import { PaginatorComponent } from '@shared-components/paginator/paginator.component';

@Component({
  selector: 'plast-manga-filter',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent, PaginatorComponent, AsyncPipe],
  templateUrl: './manga-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MangaFilterComponent {
  private mangaFilterService = inject(MangaFilterService);

  get form(): FormGroup {
    return this.mangaFilterService.form;
  }

  get pagination$(): Observable<JikanPagination | undefined> {
    return this.mangaFilterService.pagination$;
  }
}
