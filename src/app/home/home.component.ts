import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TopAnimesComponent } from '../shared/components/top-animes/top-animes.component';
import { AnimeGenresComponent } from '../shared/components/anime-genres/anime-genres.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'plast-home',
  standalone: true,
  imports: [CommonModule, FlexModule, MatButtonModule, TopAnimesComponent, AnimeGenresComponent, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
