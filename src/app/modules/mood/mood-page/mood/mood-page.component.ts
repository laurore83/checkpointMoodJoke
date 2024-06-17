import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '@shared/services/contact.service';
import { Subscription } from 'rxjs';
import { Contact } from '@shared/models/contact.class';

@Component({
  selector: 'app-mood-page',
  templateUrl: './mood-page.component.html',
  styleUrls: ['./mood-page.component.scss'],
})
export class MoodPageComponent implements OnDestroy {
  value: string = '';

  @Output() messageSent = new EventEmitter<void>();

  private _subscription: Subscription = new Subscription();

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newContact = new Contact(form.value.message);
      this._subscription.add(
        this.contactService.postNewContact$(newContact).subscribe(() => {
          this.messageSent.emit();
          form.resetForm();
        })
      );
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
