import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate(coins, currency = 'USD') {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=${currency}&value=${coins}`);
    return res.data;
  }
  async getMarketPrice(timespan = '3months') {
    const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${timespan}&format=json&cors=true`);
    return res.data;
  }
  async getConfirmedTransactions(timespan = '3months') {
    const res = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=${timespan}&format=json&cors=true`);
    return res.data;
  }
}
