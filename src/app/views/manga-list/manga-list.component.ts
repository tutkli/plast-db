import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MangaFilterService } from '@services/manga-filter.service';
import { Observable } from 'rxjs';
import { Manga } from '@tutkli/jikan-ts';
import { ResourceGalleryComponent } from '@shared-components/resource-gallery/resource-gallery.component';
import { MangaFilterComponent } from '@shared-components/manga-filter/manga-filter.component';

@Component({
  selector: 'plast-manga-list',
  standalone: true,
  imports: [ResourceGalleryComponent, MangaFilterComponent, AsyncPipe],
  templateUrl: './manga-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MangaListComponent implements OnInit {
  private mangaFilterService = inject(MangaFilterService);

  get mangas$(): Observable<Manga[]> {
    return this.mangaFilterService.mangas$;
  }

  ngOnInit(): void {
    this.mangaFilterService.form.reset();
  }
}
