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
        })
      );
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
