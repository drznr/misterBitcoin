import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  @Input() contacts: Contact[];

  ngOnInit(): void {
  }

}
