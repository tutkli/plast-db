import { HttpHeaders, HttpParams } from '@angular/common/http';

export type ResponseTypes = 'text' | 'json';

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  responseType?: ResponseTypes;
}

export interface Pairs {
  [key: string]: string;
}

export interface RequestOptionsArgs {
  headers?: Pairs;
  params?: Pairs;
  responseType?: ResponseTypes;
}
