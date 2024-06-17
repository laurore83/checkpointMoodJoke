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
  private readonly BASE_URL = `${environment.apiUrl}/mood`;
  constructor(private _httpClient: HttpClient) {}

  // getQuotationList$(): Observable<Quotation[]> {
  //   return this._httpClient
  //     .get<Quotation[]>(this._BASE_URL)
  //     .pipe(map((response: Quotation[]) => response));
  // }
  getQuotationsByMoodId$(moodId: number): Observable<Quotation[]> {
    return this._httpClient.get<Quotation[]>(
      `${this.BASE_URL}/${moodId}/quotations`
    );
  }
}
