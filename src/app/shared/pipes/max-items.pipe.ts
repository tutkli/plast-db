import { NgIterable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxItems',
  standalone: true,
})
export class MaxItemsPipe implements PipeTransform {
  transform(items: NgIterable<any> | null | undefined, maxLength: number): NgIterable<any> | null | undefined {
    if (items === null || items === undefined) return;
    if (!Array.isArray(items)) return;
    if (items.length <= maxLength) return items;

    return items.slice(0, maxLength);
  }
}
