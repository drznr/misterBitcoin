import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.less']
})
export class ContactAppComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  subscription: Subscription;
  filterBy = { term: '' };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = JSON.parse(JSON.stringify(contacts)); 
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFilterHandler(filterBy) {
    this.filterBy = filterBy;
    this.contactService.loadContacts(this.filterBy);
  }

}
