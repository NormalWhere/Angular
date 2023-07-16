import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelCurrency } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApishootService {
  
  private Api = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
  constructor(private http:HttpClient) { }

  Currency():Observable<modelCurrency>{
    
    return this.http.get<modelCurrency>(this.Api);
  }
}
