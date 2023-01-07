import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopAnimesComponent } from '@shared-components/top-animes/top-animes.component';
import { TopMangasComponent } from '@shared-components/top-mangas/top-mangas.component';

@Component({
  selector: 'plast-home',
  standalone: true,
  imports: [TopAnimesComponent, TopMangasComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly backgroundImage =
    'url("https://i.blogs.es/10a197/captura-de-pantalla-2021-11-01-a-las-11.30.23/1366_2000.webp")';
}
