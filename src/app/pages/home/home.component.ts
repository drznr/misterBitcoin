import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user: User;
  BtcRate: number;
  faBitcoin = faBitcoin;
  faCoins = faCoins;

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.user = this.userService.getUser;
    this.BtcRate = await this.bitcoinService.getRate(this.user.coins);
  }

  get userName() {
    const fname = this.user.name.split(' ')[0];
    return fname.charAt(0).toUpperCase() + fname.slice(1);
  }

}
