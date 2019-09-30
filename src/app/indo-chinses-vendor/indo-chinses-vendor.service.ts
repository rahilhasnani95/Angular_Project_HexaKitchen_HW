import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndoChinsesVendorService {

  constructor(private httpClient: HttpClient) { }

  getIndoChinsesIndianItems(): Observable<IndoVendor[]>
  {
    let url = "./assets/data/IndoChinese.json";
    return this.httpClient.get<IndoVendor[]>(url);
  }
}
