import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf, SlicePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Anime } from '@tutkli/jikan-ts';
import { ResourceCardComponent } from '@shared-components/resource-card/resource-card.component';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { TopService } from '@services/top.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'plast-top-animes',
  standalone: true,
  imports: [ResourceCardComponent, SvgIconComponent, AsyncPipe, NgIf, NgForOf, RouterLink, SlicePipe],
  templateUrl: './top-animes.component.html',
  styles: [
    `
      ::-webkit-scrollbar {
        height: 5px;
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #d9d9d9;
      }

      ::-webkit-scrollbar-thumb {
        background: #4338ca;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #4338cacc;
      }
    `,
  ],
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
