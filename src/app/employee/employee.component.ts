import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeMenu } from './employeemenu';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeMenu : EmployeeMenu[];
  indoMenu : IndoVendor[];
  northMenu : NorthVendor[];
  southMenu : SouthVendor[];
  empProfile : EmployeeProfile[];
  errorMsg : any;
  list1: IndoVendor[] = [];
  list2: SouthVendor[] = [];
  list3: NorthVendor[] = [];

  list: EmployeeMenu[] = [];
  total: number = 0.0;
  empBalance : number = 50;
  amount : number;

  constructor(public employeeService : EmployeeService, public router: Router) { }

  ngOnInit() {
    this.employeeService.getIndoMenu().subscribe(
      data => this.indoMenu = data,
      error => this.errorMsg = error
    );

    this.employeeService.getSouthMenu().subscribe(
      data => this.southMenu = data,
      error => this.errorMsg = error
    );

    this.employeeService.getNorthMenu().subscribe(
      data => this.northMenu = data,
      error => this.errorMsg = error
    );
    }

    // viewMyProfile(id : number)
    // {
    //   this.employeeService.viewProfile(id).subscribe(
    //     data => this.empProfile = data,
    //     error => this.errorMsg = error
    //   )
    // }

    //add to order indo
    details1(indo: IndoVendor)
    {            
      if(this.list1.length == 0)
      {
        this.list1.push(indo);
        this.total += Math.round(indo.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list1)
        {
          if(indo.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list1.push(indo);
            this.total += Math.round(indo.price);  
          }
      }    
    }

    //add to order south
    details2(south: SouthVendor)
    {            
      if(this.list2.length == 0)
      {
        this.list2.push(south);
        this.total += Math.round(south.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list2)
        {
          if(south.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list2.push(south);
            this.total += Math.round(south.price);  
          }
      }    
    }

//add to order north
    details3(north: NorthVendor)
    {            
      if(this.list3.length == 0)
      {
        this.list3.push(north);
        this.total += Math.round(north.price);  
      }
      else
      {
        let flag = false;
        for(var l of this.list3)
        {
          if(north.id == l.id)
          {
            alert("Item " + l.name + " already present in cart");
            flag = true;
            break;
          }
        }
        if(flag == false)
          {
            this.list3.push(north);
            this.total += Math.round(north.price);  
          }
      }    
    }

    //delete 1 item from indo
    deleteItem1(indo : IndoVendor)
    {
      this.total -= Math.round(indo.price);
      this.list1 = this.list1.filter(l => l!== indo);
    }
    
    //delete 1 item from south
    deleteItem2(south : SouthVendor)
    {
      this.total -= Math.round(south.price);
      this.list2 = this.list2.filter(l => l!== south);
    }

    
    //delete 1 item from north
    deleteItem3(north : NorthVendor)
    {
      this.total -= Math.round(north.price);
      this.list3 = this.list3.filter(l => l!== north);
    }

    //add money to wallet
    addBalance()
    {
      if(this.amount < 0)
      {
        alert("Amount cannot be negative");
      }
      else if(!this.amount)
      {
        alert("amount cant be empty");
        return;
      }
      else
      {
        this.empBalance = this.empBalance + this.amount;
       //console.log(this.empBalance);
        alert("Your updated balance is : " +this.empBalance);
      }
    
    }

    //checkout and edit balance
    checkOut(l : EmployeeMenu[])
    {
      if(this.total > this.empBalance)
      {
        alert("Sorry ! You have insufficient balance to place this order")
      }
      else
      {
        alert("Thanks for you order | Your token number is 121 | " + "Total amount is " + this.total + " | Estimated time : 30 mins") ;
        this.empBalance = this.empBalance - this.total;
        alert("Balance left in your Wallet : " + this.empBalance);
        //window.history.go(0);
      }
    }


    
}
