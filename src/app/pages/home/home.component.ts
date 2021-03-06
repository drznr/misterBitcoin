import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  btcRate: number;
  faBitcoin = faBitcoin;
  faCoins = faCoins;
  subsription: Subscription;
  movesSubsription: Subscription;
  latestMoves: Move[];

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.user = this.userService.getUser;
    this.subsription = this.bitcoinService.getRate(this.user.coins).subscribe((rate: number) => {
      this.btcRate = rate;
    });
    this.movesSubsription = this.userService.getUserMoves().subscribe(moves => {
      this.latestMoves = JSON.parse(JSON.stringify(moves)); 
    }) 
  }
  ngOnDestroy() {
    this.subsription.unsubscribe();
    this.movesSubsription.unsubscribe();
  }
  get userName() {
    const fname = this.user.name.split(' ')[0];
    return fname.charAt(0).toUpperCase() + fname.slice(1);
  }

}
