import { Component, OnInit } from '@angular/core';
import { IndoChinsesVendorService } from './indo-chinses-vendor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-indo-chinses-vendor',
  templateUrl: './indo-chinses-vendor.component.html',
  styleUrls: ['./indo-chinses-vendor.component.css']
})
export class IndoChinsesVendorComponent implements OnInit {

  indoVendors: IndoVendor[];
  errorMsg: any;
  editIndoItem: IndoVendor;

  constructor(public indoVendorService: IndoChinsesVendorService) { }

  ngOnInit() {
    this.indoVendorService.getIndoChinsesIndianItems().subscribe(
      data => this.indoVendors = data,
      error => this.errorMsg = error
    );
  }

  add(addForm: NgForm): void {
    this.editIndoItem = undefined;
    // name = name.trim();    
    if (!addForm.value.name) {
      alert("Item Price can't be empty");
      return;
    }

    if (!addForm.value.price) {
      alert("Item Price can't be empty");
      return;
    }

    if (addForm.value.price < 0) {
      alert("Item Price can't be negative");
      return;
    }

    // The server will generate the id for this new North Indian Item
    // const newNorthItem: NorthVendor = { name, price } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);
        
    this.indoVendors.push(addForm.value);
    console.log(this.indoVendors);
    alert("Menu Item: " + addForm.value.name + " Added!");  
    addForm.resetForm();      
  }

  delete(indoVendor: IndoVendor): void {
    if(confirm("Are you sure to delete " + indoVendor.name +"?"))
    {
      this.indoVendors = this.indoVendors.filter(n => n !== indoVendor);
      this.indoVendorService.deleteIndoChinsesIndianItems(indoVendor.id).subscribe();  
      alert("Menu Item: " + indoVendor.name + " Deleted!");   
    }  
  }


  edit(indoVendor: IndoVendor)
  {
    this.editIndoItem = indoVendor;
  }

  update() {
    if (this.editIndoItem) {
      this.indoVendorService.updateIndoChinsesIndianItems(this.editIndoItem).subscribe
        (editIndoItem => {
          const nr = editIndoItem ? this.indoVendors.findIndex(n => n.id === editIndoItem.id) : -1;
          if (nr > -1) {
            this.indoVendors[nr] = editIndoItem;
          }
        });
      this.editIndoItem = undefined;
    }
  }


}
