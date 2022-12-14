import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { JikanService } from '@services/jikan/jikan.service';
import { AnimeGalleryComponent } from '@shared-components/anime-gallery/anime-gallery.component';
import { Anime } from '@tutkli/jikan-ts';

@Component({
  selector: 'plast-top-animes',
  standalone: true,
  imports: [CommonModule, AnimeGalleryComponent],
  templateUrl: './top-animes.component.html',
  styleUrls: ['./top-animes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimesComponent implements OnInit {
  topAnimes$!: Observable<Anime[]>;

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.topAnimes$ = this.jikanService.getTopAnimes();
  }
}
