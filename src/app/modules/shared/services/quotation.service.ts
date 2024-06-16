import { Injectable } from '@angular/core';
import { Quotation } from '../models/quotation.classe';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  quotation!: Quotation;
  quotations!: Quotation[];
  private readonly _BASE_URL = `${environment.apiUrl}/joke`;

  constructor(private _httpClient: HttpClient) {}

  getQuotationList$(): Observable<Quotation[]> {
    return this._httpClient
      .get<Quotation[]>(this._BASE_URL)
      .pipe(map((response: Quotation[]) => response));
  }

  getQuotationById$(id: number): Observable<Quotation> {
    return this._httpClient
      .get<Quotation>(`${this._BASE_URL}/${id}`)
      .pipe(map((Quotation: Quotation) => Quotation));
  }
}
