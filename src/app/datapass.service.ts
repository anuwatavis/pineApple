import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatapassService {
  users;
  userData = [
    { name: 'Anuwat', lastname: 'Sukthong', age: 20 },
    { name: 'Peter', lastname: 'Parker', age: 21 },
    { name: 'Harry', lastname: 'Potter', age: 22 },
  ];
  constructor() {}
}
