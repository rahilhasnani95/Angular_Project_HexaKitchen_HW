import { Component, OnInit } from '@angular/core';
import { Details } from './logging';
import { Router } from '@angular/router';
import { VendorDetailsComponent } from '../vendor-details/vendor-details.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {

  }
  ngOnInit() { }
  roles = ['Employee', 'Vendor', 'Admin'];

  model = new Details("", "", "");

  submitted = false;

  onSubmit() {

    //Admin
    if (this.model.username == "admin" && this.model.password == "admin" && this.model.role == "Admin") {
      this.router.navigate(['Admin']);
      this.submitted = true;
    }

    else if (this.model.username == "Amit" && this.model.password == "Amit" && this.model.role == "Vendor") {
      this.router.navigate(['NorthIndian']);
      this.submitted = true;
    }

    else if (this.model.username == "Ankita" && this.model.password == "Ankita" && this.model.role == "Vendor") {
      this.router.navigate(['IndoChinese']);
      this.submitted = true;
    }

    else if (this.model.username == "Rahil" && this.model.password == "Rahil" && this.model.role == "Vendor") {
      this.router.navigate(['SouthIndian']);
      this.submitted = true;
    }

    else if (this.model.username == "Emp1" && this.model.password == "Emp1" && this.model.role == "Employee") {
      this.router.navigate(['Employee']);
      this.submitted = true;
    }

    else if (this.model.username == "Emp2" && this.model.password == "Emp2" && this.model.role == "Employee"){
      this.router.navigate(['Employee']);
      this.submitted = true;
    }

    else {
      alert("Invalid User Name, Password or Role");
      this.router.navigate(['login']);
    }

  }
}
