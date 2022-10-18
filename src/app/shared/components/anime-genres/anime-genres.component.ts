import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JikanService } from '@services/jikan/jikan.service';
import { Observable } from 'rxjs';
import { Genre } from '../../../core/models/genre/genre.model';
import { GenreCardComponent } from '../genre-card/genre-card.component';
import { FlexModule } from '@angular/flex-layout';

@Component({
  selector: 'plast-anime-genres',
  standalone: true,
  imports: [CommonModule, GenreCardComponent, FlexModule],
  templateUrl: './anime-genres.component.html',
  styleUrls: ['./anime-genres.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeGenresComponent implements OnInit {
  genres$!: Observable<Genre[]>;

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.genres$ = this.jikanService.getAnimeGenres();
  }
}
