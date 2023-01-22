import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ResourceGalleryComponent } from '@shared-components/resource-gallery/resource-gallery.component';
import { Anime } from '@tutkli/jikan-ts';
import { AnimeFilterComponent } from '@shared-components/anime-filter/anime-filter.component';
import { AnimeFilterService } from '@services/anime-filter.service';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [ResourceGalleryComponent, AnimeFilterComponent, AsyncPipe],
  templateUrl: './anime-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimeListComponent implements OnInit {
  private animeFilterService = inject(AnimeFilterService);

  get animes$(): Observable<Anime[]> {
    return this.animeFilterService.animes$;
  }

  ngOnInit(): void {
    this.animeFilterService.form.reset();
  }
}
