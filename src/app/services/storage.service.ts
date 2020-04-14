import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store(key, value): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  load(key): User {
    return JSON.parse(localStorage.getItem(key));
  }
}