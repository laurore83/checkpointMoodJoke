import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '@shared/models/contact.class';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly _BASE_URL = `${environment.apiUrl}/contact`;
  private newMailSubject = new BehaviorSubject<boolean>(false);
  newMail$ = this.newMailSubject.asObservable();

  constructor(private http: HttpClient) {}

  getContactList$(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(`${this._BASE_URL}/get/all`)
      .pipe(catchError((error) => throwError(error)));
  }

  postNewContact$(newContact: Contact): Observable<Contact> {
    return this.http
      .post<Contact>(`${this._BASE_URL}/add`, newContact)
      .pipe(catchError((error) => throwError(error)));
  }
}
