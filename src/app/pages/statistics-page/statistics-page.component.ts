import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.less']
})
export class StatisticsPageComponent implements OnInit {
  marketPriceData: any = {
    type: 'LineChart',
    columnNames: ['', 'USD'],
    title: '',
    data: [],
    options: {
      hAxis: {
        title: ''
      },
      vAxis: {
        title: ''
      }
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
      hAxis: {
        title: ''
      },
      vAxis: {
        title: ''
      },
      colors:["#32CD32", "#00FF00", "#228B22", "#008000"]
    },
    width: 550,
    height: 400
  };

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    const [ marketDataRes, confirmedTransactionsRes ] = await Promise.all([
      this.bitcoinService.getMarketPrice(),
      this.bitcoinService.getConfirmedTransactions()
    ]);
    this.marketPriceData.title = marketDataRes.name;
    this.marketPriceData.options.hAxis.title = marketDataRes.description;
    this.marketPriceData.data = marketDataRes.values.map(val=> [new Date(val.x), val.y]);
    
    this.confirmedTransactionsData.title = confirmedTransactionsRes.name;
    this.confirmedTransactionsData.options.hAxis.title = confirmedTransactionsRes.description;
    this.confirmedTransactionsData.data = confirmedTransactionsRes.values.map(val=> [new Date(val.x), val.y]);
  }

}
