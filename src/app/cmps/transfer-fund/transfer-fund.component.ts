import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.less']
})
export class TransferFundComponent implements OnInit {
  amout: number = 0;
  @Input() contact: Contact;
  @Input() maxAmout: number;
  @Output() doTransferCoins = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onTransferCoins(ev: Event): void {
    ev.preventDefault();
    this.doTransferCoins.emit({amount: this.amout, contact: this.contact});
    this.amout = 0;
  }

}
