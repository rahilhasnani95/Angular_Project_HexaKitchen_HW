import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeMenu } from './employeemenu';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeMenu : EmployeeMenu[];

  constructor(public httpClient : HttpClient) { }

  // getAllMenu() : Observable<EmployeeMenu[]>
  // {
  //   let url = "./assets/data/EmployeeMenu.json"
  //   return this.httpClient.get<EmployeeMenu[]>(url);
  // }

  getIndoMenu() : Observable<IndoVendor[]>
  {
    let url = "./assets/data/IndoChinese.json"
    return this.httpClient.get<IndoVendor[]>(url);
  }

  getSouthMenu() : Observable<SouthVendor[]>
  {
    let url = "./assets/data/South.json"
    return this.httpClient.get<SouthVendor[]>(url);
  }

  getNorthMenu() : Observable<NorthVendor[]>
  {
    let url = "./assets/data/NorthIndian.json"
    return this.httpClient.get<NorthVendor[]>(url);
  }

  // viewProfile(id : number): Observable<EmployeeProfile[]>
  // {
  //   let url = "./assets/data/EmployeeProfile.json"
  //   const deleteUrl = `${url}/${id}`;     
  //   return this.httpClient.get<EmployeeProfile[]>(deleteUrl);
  // }




}
