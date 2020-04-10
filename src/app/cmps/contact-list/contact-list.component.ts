import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  faPlusCircle = faPlusCircle;

  constructor() { }

  @Input() contacts: Contact[];

  ngOnInit(): void {
  }

}
