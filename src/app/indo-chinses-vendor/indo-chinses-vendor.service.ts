import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndoChinsesVendorService {

  constructor(private httpClient: HttpClient) { }

  getIndoChinsesIndianItems(): Observable<IndoVendor[]> {
    let url = "./assets/data/IndoChinese.json";
    return this.httpClient.get<IndoVendor[]>(url);
  }

  deleteIndoChinsesIndianItems(id: number): Observable<{}> {
    let url = "./assets/data/IndoChinese.json";
    const deleteUrl = `${url}/${id}`;
    return this.httpClient.delete(deleteUrl);
  }

  updateIndoChinsesIndianItems(indoVendor: IndoVendor): Observable<IndoVendor>
  {
    let url = "./assets/data/IndoChinese.json";
    return this.httpClient.put<IndoVendor>(url, indoVendor);

  }
}