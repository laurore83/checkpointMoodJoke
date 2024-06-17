export class Quotation {
  id: number;
  author: string;
  quotation_text: string;

  constructor(id: number, author: string, quotation_text: string) {
    this.id = id;
    this.author = author;
    this.quotation_text = quotation_text;
  }
}
