import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpOptions, Pairs, RequestOptionsArgs } from '../../models/http/http.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  serverRequest(method: string, endpoint: string, options: RequestOptionsArgs): Observable<any> {
    return this.httpClient.request(method, endpoint, this.toHttpOptions(options));
  }

  toHttpOptions(options: RequestOptionsArgs): HttpOptions {
    return {
      headers: this.toHttpHeaders(options.headers),
      params: this.toHttpParams(options.params),
      responseType: options.responseType ? options.responseType : 'json',
    };
  }

  private toHttpParams(pairs: Pairs | undefined): HttpParams {
    if (pairs === undefined) return new HttpParams();

    return this.toTruthyPairs(pairs).reduce(
      (params: HttpParams, key: string) => params.set(key, pairs[key]),
      new HttpParams()
    );
  }

  private toHttpHeaders(pairs: Pairs | undefined): HttpHeaders {
    if (pairs === undefined) return new HttpHeaders();

    return this.toTruthyPairs(pairs).reduce(
      (params: HttpHeaders, key: string) => params.set(key, pairs[key]),
      new HttpHeaders()
    );
  }

  private toTruthyPairs(pairs: Pairs): string[] {
    return Object.getOwnPropertyNames(pairs).filter((key: string) => {
      const v = pairs[key];
      return v !== null && v !== undefined;
    });
  }
}
