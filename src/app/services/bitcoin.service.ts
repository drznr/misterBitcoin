import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate(coins, currency = 'USD'): Observable<any> {
    return this.http.get(`https://blockchain.info/tobtc?currency=${currency}&value=${coins}`);
  }
  getMarketPrice(timespan = '3months'): Observable<any> {
    return this.http.get(`https://api.blockchain.info/charts/market-price?timespan=${timespan}&format=json&cors=true`);
  }
  getConfirmedTransactions(timespan = '3months'): Observable<any> {
    return this.http.get(`https://api.blockchain.info/charts/trade-volume?timespan=${timespan}&format=json&cors=true`);
  }
}
