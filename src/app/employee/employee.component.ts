import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeMenu : EmployeeMenu[];
  errorMsg : any;

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllMenu().subscribe(
      data => this.employeeMenu = data,
      error => this.errorMsg = error
    );
    }

}
