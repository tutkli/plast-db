import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '@shared-components/text-input/text-input.component';
import { AnimeFilterService } from '@services/anime-filter.service';

@Component({
  selector: 'plast-anime-filter',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './anime-filter.component.html',
  styleUrls: ['./anime-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeFilterComponent {
  private animeFilterService = inject(AnimeFilterService);

  get form(): FormGroup {
    return this.animeFilterService.form;
  }
}
