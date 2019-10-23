import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from './employee-details.service';
import { compilePipeFromMetadata } from '@angular/compiler';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails: EmployeeDetails[];

  errorMsg: any;
  editEmployeeDetails: EmployeeDetails;

  constructor(public employeeDetailsServices: EmployeeDetailsService) { }
  
  ngOnInit()
   {
    this.employeeDetailsServices.getEmployeeDetailsItems().subscribe(
      data =>this.employeeDetails = data,
      error => this.errorMsg = error
    );
  }
  add(addForm: NgForm): void 
  {
    this.editEmployeeDetails = undefined;
    // name = name.trim();    
    if (!addForm.value.name) {
      alert("Employeed Name can't be negative");
      return;
    }

    if (!addForm.value.id) {
      alert("Employeed Id can't be empty");
      return;
    }

    if(addForm.value.id < 0)
    {
      alert("Employeed Id can't be negative");
      return;
    }
    

    // The server will generate the id for this new North Indian Item
    // const newNorthItem: NorthVendor = { name, price } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);
        
    this.employeeDetails.push(addForm.value);
    console.log(this.employeeDetails);
    alert("New Employee: " + addForm.value.name + " Added!");  
    addForm.resetForm();
    
      
  }
  delete(employeeDetails: EmployeeDetails): void
  {
    if(confirm("Are you sure to delete " + employeeDetails.name + "?"))
    {
    this.employeeDetails = this.employeeDetails.filter(n => n !== employeeDetails);
    this.employeeDetailsServices.deletetEmployeeDetailsItems(employeeDetails.name).subscribe();
    alert("Employee: "+ employeeDetails.name + " Deleted!");
    }
  }
  edit(employeeDetails: EmployeeDetails)
  {
    this.editEmployeeDetails = employeeDetails;
  }
  update()
  {
    if(this.editEmployeeDetails)
    {
      // if(!this.editEmployeeDetails.id)
      // {
      //   alert("Employeed Id can't be empty");
      //   return;
      // }

      // if(this.editEmployeeDetails.id < 0)
      // {
      //   alert("Employeed Id can't be negative");
      //   return;
      // }

      // if(!this.editEmployeeDetails.name)
      // {
      //   alert("Employeed Name can't be empty");
      //   return;
      // }
      
      this.employeeDetailsServices.updatetEmployeerDetailsItems(this.editEmployeeDetails).subscribe
      (editEmployeeDetails => {
        const nr = editEmployeeDetails ? this.employeeDetails.findIndex(n=> n.name === editEmployeeDetails.name) : -1;
        if(nr > -1){
          this.employeeDetails[nr] = editEmployeeDetails;
        }
      });
      this.editEmployeeDetails = undefined;
    }
  }

}

