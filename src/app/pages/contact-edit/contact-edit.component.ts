import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = this.contactService.getNewContact();
  faArrowAltCircleLeft = faArrowAltCircleLeft;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.contactService.getContactById(params.id).subscribe(contact => {
          this.contact = JSON.parse(JSON.stringify(contact));
        });
      }
    });
  }

  saveContact(ev) {
    ev.preventDefault();
    const contactCopy = { ...this.contact };
    this.contactService.saveContact(contactCopy);
    this.router.navigate(['/contact']);
  }
  
  removeContact(id) {
    this.contactService.deleteContact(id);
    this.router.navigate(['/contact']);
  }

}
