export class Contact {
  id?: number; // Rendre id optionnel
  contact_text: string;

  constructor(contact_text: string, id?: number) {
    this.contact_text = contact_text;
    if (id) this.id = id;
  }
}
