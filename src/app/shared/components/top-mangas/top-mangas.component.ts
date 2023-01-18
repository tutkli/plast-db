import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from '@tutkli/jikan-ts';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { AsyncPipe, NgForOf, NgIf, SlicePipe } from '@angular/common';
import { ResourceCardComponent } from '@shared-components/resource-card/resource-card.component';
import { TopService } from '@services/top.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'plast-top-mangas',
  standalone: true,
  imports: [SvgIconComponent, NgIf, AsyncPipe, ResourceCardComponent, NgForOf, RouterLink, SlicePipe],
  templateUrl: './top-mangas.component.html',
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
export class TopMangasComponent implements OnInit {
  @ViewChild('mangaScrollContainer') mangaScrollContainer: ElementRef<HTMLDivElement> | undefined;

  private topService = inject(TopService);

  topMangas$!: Observable<Manga[]>;
  placeholderCards = new Array(10);

  ngOnInit(): void {
    this.topMangas$ = this.topService.getTopMangas();
  }

  scrollMangas(direction: 'left' | 'right'): void {
    if (this.mangaScrollContainer === undefined) {
      return;
    }

    this.mangaScrollContainer.nativeElement.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  }
}
