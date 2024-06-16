import { Injectable } from '@angular/core';
import { Quotation } from '../models/quotation.classe';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  quotation!: Quotation;
  quotations!: Quotation[];
}
