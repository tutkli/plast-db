import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Anime } from '@tutkli/jikan-ts';
import { ResourceCardComponent } from '@shared-components/resource-card/resource-card.component';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { TopService } from '@services/top.service';

@Component({
  selector: 'plast-top-animes',
  standalone: true,
  imports: [ResourceCardComponent, MaxItemsPipe, SvgIconComponent, AsyncPipe, NgIf, NgForOf],
  templateUrl: './top-animes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimesComponent implements OnInit {
  @ViewChild('animeScrollContainer') animeScrollContainer: ElementRef<HTMLDivElement> | undefined;

  private topService = inject(TopService);

  topAnimes$!: Observable<Anime[]>;
  placeholderCards = new Array(10);

  ngOnInit(): void {
    this.topAnimes$ = this.topService.getTopAnimes();
  }

  scrollAnimes(direction: 'left' | 'right'): void {
    if (this.animeScrollContainer === undefined) {
      return;
    }

    this.animeScrollContainer.nativeElement.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  }
}
