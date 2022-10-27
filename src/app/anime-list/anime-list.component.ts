import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Anime } from '../core/models/anime/anime.model';
import { JikanService } from '@services/jikan/jikan.service';
import { AnimeCardComponent } from '@shared-components/anime-card/anime-card.component';

@Component({
  selector: 'plast-anime-list',
  standalone: true,
  imports: [CommonModule, AnimeCardComponent],
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
