export class Quotation {
  id: number;
  quotation_author: string;
  quotation_text: string;

  constructor(id: number, quotation_author: string, quotation_text: string) {
    this.id = id;
    this.quotation_author = quotation_author;
    this.quotation_text = quotation_text;
  }
}
