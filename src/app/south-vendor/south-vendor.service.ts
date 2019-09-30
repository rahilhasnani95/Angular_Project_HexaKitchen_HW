import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SouthVendorService {

  constructor(public httpClient : HttpClient) { 

  }

  getSouthItems(): Observable<SouthVendor[]>
  {
    let url = "./assets/data/South.json";
    return this.httpClient.get<SouthVendor[]>(url)
  }
}
