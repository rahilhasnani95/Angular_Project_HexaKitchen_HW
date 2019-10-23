import { Component, OnInit } from '@angular/core';
import { VendorDetailsService } from './vendor-details.service';
import { compilePipeFromMetadata } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
 
   vendorDetails: VendorDetails[];
   errorMsg: any;
   editVendorDetails: VendorDetails;

  constructor(public vendorDetailsService: VendorDetailsService) { }

  ngOnInit() {
    this.vendorDetailsService.getVendorDetailsItems().subscribe(
      data => this.vendorDetails = data,
      error => this.errorMsg = error
    );
  }
  add(addForm: NgForm): void 
  {
    this.editVendorDetails = undefined;
    // name = name.trim();    
    if (!addForm.value.name) {
      return;
    }

    if (!addForm.value.cuisine) {
      return;
    }

    // The server will generate the id for this new North Indian Item
    // const newNorthItem: NorthVendor = { name, price } as NorthVendor;
    // this.northVendorService.addNorthIndianItem(newNorthItem)
    //   .subscribe(north => {this.northVendors.push(north), console.log(north)},
    //   error => this.errorMsg = error);
        
    this.vendorDetails.push(addForm.value);
    console.log(this.vendorDetails);
    alert("New Vendor: " + addForm.value.name + " Added!");  
    addForm.resetForm();
    
      
  }
  delete(vendorDetails: VendorDetails): void {
    if (confirm("Are you sure to delete" + vendorDetails.name + "?"))
    {
      this.vendorDetails = this.vendorDetails.filter(n => n !== vendorDetails);
      this.vendorDetailsService.deletetVendorDetailsItems(vendorDetails.name).subscribe();
      alert("Vendor:" + vendorDetails.name + " Deleted!");
    }
  }
  edit(vendorDetails: VendorDetails)
  {
    this.editVendorDetails = vendorDetails;
  }
  update()
  {
    if(this.editVendorDetails)
    {
      this.vendorDetailsService.updatetVendorDetailsItems(this.editVendorDetails).subscribe
      (editVendorDetails => {
        const nr = editVendorDetails ? this.vendorDetails.findIndex(n=> n.name === editVendorDetails.name) : -1;
        if(nr > -1){
          this.vendorDetails[nr] = editVendorDetails;
        }
      });
      this.editVendorDetails = undefined;
    }
  }

}
