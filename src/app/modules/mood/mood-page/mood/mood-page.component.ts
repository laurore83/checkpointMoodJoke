import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '@shared/services/contact.service';
import { Subscription } from 'rxjs';
import { Contact } from '@shared/models/contact.class';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mood-page',
  templateUrl: './mood-page.component.html',
  styleUrls: ['./mood-page.component.scss'],
  providers: [MessageService],
})
export class MoodPageComponent implements OnDestroy {
  value: string = '';
  contacts: Contact[] = [];
  visible: boolean = false;

  @Output() messageSent = new EventEmitter<void>();

  private _subscription: Subscription = new Subscription();

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  showDialog(): void {
    this.visible = true;
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message partagé ',
      life: 3000,
    });
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this._subscription.add(
      this.contactService.getContactList$().subscribe((contacts) => {
        this.contacts = contacts;
      })
    );
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newContact = new Contact(form.value.message);
      this._subscription.add(
        this.contactService.postNewContact$(newContact).subscribe(() => {
          this.messageSent.emit();
          this.show();
          form.resetForm();
          this.loadContacts();
          setTimeout(() => {
            this.visible = false;
          }, 1000);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
  getRandomStyle() {
    const sizes = ['1rem', '1.5rem', '2rem', '2.5rem', '3rem'];
    const colors = [
      '#ff5733', // Rouge vif
      '#ffbd33', // Jaune vif
      '#75ff33', // Vert vif
      '#33ff57', // Vert clair vif
      '#33ffbd', // Cyan vif
      '#3375ff', // Bleu vif
      '#5733ff', // Indigo vif
      '#bd33ff', // Violet vif
      '#ff33a6', // Rose vif
      '#ff338f', // Magenta vif
      '#33fff2', // Turquoise vif
      '#ffa533', // Orange vif
    ];

    const fonts = [
      'Arial, sans-serif',
      'Georgia, serif',
      'Tahoma, sans-serif',
      'Verdana, sans-serif',
      'Courier New, monospace',
    ];

    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    return {
      'font-size': randomSize,
      color: randomColor,
      'font-family': randomFont,
      position: 'absolute',
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    };
  }
}
