import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountDetailsService {
 
 
  constructor(private  _httpsClient:HttpClient){}
  getBankDetails():Observable<any>{ 
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

 

  getUpdateBankDetails(id:any,data:any):Observable<any>{ 
    return this._httpsClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id, data)
  }

  getviewBankDetails(id:any):Observable<any>{ 
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
  }
  getfilterBankDetails(term:any):Observable<any>{
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
  }

  getsortBankDetails(column:any,order:any):Observable<any>{ 
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
  }

  getpaginationBankDetails(limit:any,page:any):Observable<any>{ 
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page)
  }


  getdeleteBankDetails(id:any):Observable<any>{ 
    return this._httpsClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
  }
  createBankAccount(data:any):Observable<any>{
    return this._httpsClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)

  } 
  

}
