import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NorthVendorService {

  constructor(private httpClient: HttpClient) { }

  getNorthIndianItems(): Observable<NorthVendor[]> {   
    let url ="./assets/data/NorthIndian.json";        
    return this.httpClient.get<NorthVendor[]>(url);    
  } 

  // addNorthIndianItem(northVendor: NorthVendor): Observable<NorthVendor> {
  //   let url ="./assets/data/NorthIndian.json";  
  //   return this.httpClient.post<NorthVendor>(url,northVendor);    
  // }

  
  deleteNorthIndianItem(id: number): Observable<{}> {
    let url ="./assets/data/NorthIndian.json";  
    const deleteUrl = `${url}/${id}`;     
    return this.httpClient.delete(deleteUrl);         
  }

  updateNorthIndianItem(northVendor: NorthVendor): Observable<NorthVendor> {
    let url ="./assets/data/NorthIndian.json";  
    return this.httpClient.put<NorthVendor>(url, northVendor);
  }


}
