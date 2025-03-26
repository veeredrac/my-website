import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private _httpsClinet:HttpClient){}
login(data:any):Observable<any>{
  return this._httpsClinet.post("https://reqres.in/api/login",data);
}

}
