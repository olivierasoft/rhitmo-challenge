import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from '../interfaces/city.interface';
import { IUf } from '../interfaces/uf.interface';
import { RequestProvider } from './request,provider';

@Injectable({
  providedIn: 'root',
})
export class IbgeProvider extends RequestProvider {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = 'https://servicodados.ibge.gov.br/api/v1/';
  }

  getUf(): Observable<IUf[]> {
    return this.get<IUf[], null>('localidades/estados')
  }

  getCities(uf: string): Observable<ICity[]> {
    return this.get<ICity[], null>(`localidades/estados/${uf}/municipios`)
  }
}
