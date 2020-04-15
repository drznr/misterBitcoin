import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.less']
})
export class ContactPreviewComponent implements OnInit {
  faInfoCircle = faInfoCircle;

  constructor() { }

  @Input() contact: Contact

  ngOnInit(): void {
  }

}
