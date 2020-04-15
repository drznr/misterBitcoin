import { Component, OnInit, OnDestroy } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { zip, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.less']
})
export class StatisticsPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  marketPriceData: any = {
    type: 'LineChart',
    columnNames: ['', 'USD'],
    title: '',
    data: [],
    options: {
      titleTextStyle: {
        color: '#ff6600',
        fontSize: 24
      },
      hAxis: {
        title: '',
        titleTextStyle: {color: '#ff6600'},
        textStyle:{color: '#ff6600'}
      },
      vAxis: {
        title: '',
        textStyle:{color: '#ff6600'}
      },
      backgroundColor: { fill:'transparent' },
      colors:["#ff6600", "#ff781f", "#ff8b3d", "#ff9d5c"]
    },
    width: 550,
    height: 400
  };
  confirmedTransactionsData: any = {
    type: 'LineChart',
    columnNames: ['', 'USD'],
    title: '',
    data: [],
    options: {
      titleTextStyle: {
        color: '#32CD32',
        fontSize: 24
      },
      hAxis: {
        title: '',
        titleTextStyle: {color: '#32CD32'},
        textStyle:{color: '#32CD32'}
      },
      vAxis: {
        title: '',
        textStyle:{color: '#32CD32'}
      },
      backgroundColor: { fill:'transparent' },
      colors:["#32CD32", "#00FF00", "#228B22", "#008000"]
    },
    width: 550,
    height: 400
  };

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    const source$ = zip(this.bitcoinService.getMarketPrice(), this.bitcoinService.getConfirmedTransactions());
    
    this.subscription = source$.subscribe(([marketDataRes, confirmedTransactionsRes]) => {
      this.marketPriceData.title = marketDataRes.name;
      this.marketPriceData.options.hAxis.title = marketDataRes.description;
      this.marketPriceData.data = marketDataRes.values.map(val=> [new Date(val.x), val.y]);

      this.confirmedTransactionsData.title = confirmedTransactionsRes.name;
      this.confirmedTransactionsData.options.hAxis.title = confirmedTransactionsRes.description;
      this.confirmedTransactionsData.data = confirmedTransactionsRes.values.map(val=> [new Date(val.x), val.y]);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
