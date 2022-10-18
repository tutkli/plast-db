import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Anime } from '../../../core/models/anime/anime.model';
import { JikanService } from '@services/jikan/jikan.service';
import { FlexModule } from '@angular/flex-layout';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
import { MaxItemsPipe } from '@pipes/max-items/max-items.pipe';

@Component({
  selector: 'plast-top-animes',
  standalone: true,
  imports: [CommonModule, FlexModule, AnimeCardComponent, MaxItemsPipe],
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
