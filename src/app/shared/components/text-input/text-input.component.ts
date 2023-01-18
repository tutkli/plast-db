import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';

@Component({
  selector: 'plast-text-input',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, FormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = 'Search...';
  @Input() action: string | undefined;
  @Input() icon: SvgIcons | undefined;

  inputValue = '';
  onChange = (_: string) => {};
  onTouched = () => {};

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  emitChanges(): void {
    this.onChange(this.inputValue);
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.inputValue = value;
  }
}
