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

  @Output() messageSent = new EventEmitter<void>();

  private _subscription: Subscription = new Subscription();

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message partagé ',
    });
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newContact = new Contact(form.value.message);
      this._subscription.add(
        this.contactService.postNewContact$(newContact).subscribe(() => {
          this.messageSent.emit();
          this.show();
          form.resetForm();
        })
      );
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
