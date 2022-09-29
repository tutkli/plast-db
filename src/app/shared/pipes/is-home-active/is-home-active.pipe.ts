import { Pipe, PipeTransform } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { AppRouteName } from '../../../core/const/routes.const';

@Pipe({
  name: 'isHomeActive',
  standalone: true,
})
export class IsHomeActivePipe implements PipeTransform {
  transform(value: NavigationStart | null): boolean {
    if (value === null) {
      return false;
    }
    return value.url.includes(`/${AppRouteName.HOME}`);
  }
}
