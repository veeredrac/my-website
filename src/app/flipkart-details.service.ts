import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartDetailsService {

  constructor( private  _httpsClient:HttpClient ) { }

    getflpkartDetails():Observable<any>{ 
      return this._httpsClient.get("https://fakestoreapi.com/products")
    }
  
}
