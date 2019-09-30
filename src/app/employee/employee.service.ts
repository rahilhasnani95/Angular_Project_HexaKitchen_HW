import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient : HttpClient) { }

  getAllMenu() : Observable<EmployeeMenu[]>
  {
    let url = "./assets/data/EmployeeMenu.json"
    return this.httpClient.get<EmployeeMenu[]>(url);
  }

}
