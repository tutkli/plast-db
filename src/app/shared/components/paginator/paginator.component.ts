import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JikanPagination } from '@tutkli/jikan-ts';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MaxItemsPipe } from '@pipes/max-items.pipe';

@Component({
  selector: 'plast-paginator',
  standalone: true,
  imports: [CommonModule, MaxItemsPipe],
  templateUrl: './paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnChanges, ControlValueAccessor {
  @Input() pagination: JikanPagination | undefined | null;
  currentPage = 1;
  from: number | undefined;
  to: number | undefined;
  total: number | undefined;
  lastVisiblePage: number | undefined;
  onChange = (_: number) => {};
  onTouched = () => {};

  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('pagination') && changes['pagination'].currentValue) {
      this.from = (this.currentPage - 1) * changes['pagination'].currentValue.items?.per_page + 1;
      this.to =
        (this.currentPage - 1) * changes['pagination'].currentValue.items?.per_page +
        changes['pagination'].currentValue.items?.count;
      this.total = changes['pagination'].currentValue.items?.total;
      this.lastVisiblePage = changes['pagination'].currentValue.last_visible_page;
    }
  }

  emitChanges(nextPage: number): void {
    if (nextPage === this.currentPage || nextPage <= 0 || (this.lastVisiblePage && nextPage > this.lastVisiblePage)) {
      return;
    }
    this.currentPage = nextPage;
    this.onChange(this.currentPage);
    window.scrollTo(0, 0);
  }

  registerOnChange(fn: (_: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: number): void {
    this.currentPage = value;
  }
}
