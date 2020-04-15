import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Params } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  contactMoves: Move[];
  loggedUser: User;
  faEdit = faEdit;
  faArrowAltCircleLeft = faArrowAltCircleLeft;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.contactService.getContactById(params.id).subscribe(contact => {
        this.contact = JSON.parse(JSON.stringify(contact));
        this.userService.getContactMoves(params.id).subscribe(moves => {
          this.contactMoves = JSON.parse(JSON.stringify(moves));
        });
      })
    });
    this.loggedUser = this.userService.getUser;
  }

  doTransferCoins(moveData) {
    this.userService.addMove(moveData.contact, moveData.amount);
  }

}
