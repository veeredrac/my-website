import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { 
    
  }
   
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  getVehicles():Observable<any>{ 
    return this._httpClient.get(this.baseUrl)  
  }

  getVehicledetails(id:any):Observable<any>{ 
    return this._httpClient.get(this.baseUrl+"/"+id)
  }

  getFiltervehicleDetails( term:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term)
  }

  getSortvehicleDetails(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order)
  }

  deleteVehicledetails(id:any):Observable<any>{ 
    return this._httpClient.get(this.baseUrl+"/"+id)
  }
  getpaginationvehicleDetails(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page)
  }
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }

  updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id , data);
  }
}
