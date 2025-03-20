import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }
   
  getVehicles():Observable<any>{ 
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }

  getFiltervehicleDetails( term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term)
  }

  getSortvehicleDetails(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order)
  }

  deleteVehicledetails(id:any):Observable<any>{ 
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }
  getpaginationvehicleDetails(limit:any,page:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page)
  }
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
  }
}
