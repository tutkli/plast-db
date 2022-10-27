import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Anime } from '../core/models/anime/anime.model';
import { JikanService } from '@services/jikan/jikan.service';
import { AnimeGalleryComponent } from '@shared-components/anime-gallery/anime-gallery.component';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [CommonModule, AnimeGalleryComponent],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeListComponent implements OnInit {
  topAnimes$!: Observable<Anime[]>;

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.topAnimes$ = this.jikanService.getTopAnimes();
  }
}
