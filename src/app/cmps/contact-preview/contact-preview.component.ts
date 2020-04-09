import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.less']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact

  ngOnInit(): void {
  }

}
