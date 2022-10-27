import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Anime } from '../../../core/models/anime/anime.model';
import { JikanService } from '@services/jikan/jikan.service';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';

@Component({
  selector: 'plast-top-animes',
  standalone: true,
  imports: [CommonModule, AnimeCardComponent, MaxItemsPipe],
  templateUrl: './top-animes.component.html',
  styleUrls: ['./top-animes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAnimesComponent implements OnInit {
  topAnimes$!: Observable<Anime[]>;
  placeHolderAnimes: number[] = new Array(5);

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.topAnimes$ = this.jikanService.getTopAnimes();
  }
}
