import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AnimeFilterService {
  private formBuilder = inject(FormBuilder);

  readonly form: FormGroup = this.formBuilder.group({
    q: new FormControl<string>('', { nonNullable: true }),
    type: new FormControl<string | null>(null),
  });
}
