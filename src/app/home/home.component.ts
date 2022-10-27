import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TopAnimesComponent } from '@shared-components/top-animes/top-animes.component';
import { AnimeGenresComponent } from '@shared-components/anime-genres/anime-genres.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'plast-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TopAnimesComponent, AnimeGenresComponent, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
