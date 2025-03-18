import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

 constructor( private  _httpsClient:HttpClient ) { }

    geteMAILDetails():Observable<any>{ 
      return this._httpsClient.get("https://jsonplaceholder.typicode.com/todos") ;
    }
}
