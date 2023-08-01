import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CleanUtil } from '../util/clean.util';

export class RequestProvider {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(public httpClient: HttpClient) {}

  getAll<ReturnType>(url: string): Observable<ReturnType> {
    return this.httpClient.get<ReturnType>(this.baseUrl + url);
  }

  get<ReturnType, PayloadType>(url: string, payload?: PayloadType) {
    return this.httpClient.get<ReturnType>(
      this.baseUrl + url,
      payload
        ? {
            params: new HttpParams({ fromObject: payload as any }),
            observe: 'body',
          }
        : undefined
    );
  }

  post<ReturnType, PayloadType>(
    url: string,
    payload: PayloadType
  ): Observable<ReturnType> {
    return this.httpClient.post<ReturnType>(
      this.baseUrl + url,
      CleanUtil.removeEmpty(payload)
    );
  }

  put<ReturnType, PayloadType>(
    url: string,
    payload: PayloadType
  ): Observable<ReturnType> {
    return this.httpClient.put<ReturnType>(
      this.baseUrl + url,
      CleanUtil.removeEmpty(payload)
    );
  }

  remove(url: string, id: string): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + url + id);
  }
}
