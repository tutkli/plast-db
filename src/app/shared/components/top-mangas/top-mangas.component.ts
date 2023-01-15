import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from '@tutkli/jikan-ts';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ResourceCardComponent } from '@shared-components/resource-card/resource-card.component';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';
import { TopService } from '@services/top.service';

@Component({
  selector: 'plast-top-mangas',
  standalone: true,
  imports: [SvgIconComponent, NgIf, AsyncPipe, ResourceCardComponent, MaxItemsPipe, NgForOf],
  templateUrl: './top-mangas.component.html',
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
