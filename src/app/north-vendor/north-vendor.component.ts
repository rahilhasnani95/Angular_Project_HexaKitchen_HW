import { Component, OnInit } from '@angular/core';
import { NorthVendorService } from './north-vendor.service';

@Component({
  selector: 'app-north-vendor',
  templateUrl: './north-vendor.component.html',
  styleUrls: ['./north-vendor.component.css']
})
export class NorthVendorComponent implements OnInit {

  northVendors: NorthVendor[];
  errorMsg: any;
  editNorthItem: NorthVendor;

  constructor(public northVendorService: NorthVendorService) { }

  ngOnInit() {
    this.northVendorService.getNorthIndianItems().subscribe(
      data => this.northVendors = data,
      error => this.errorMsg = error
    );
  }

  // add(editNorthItem: NorthVendor){
  //   this.northVendorService.addNorthIndianItem(this.editNorthItem).subscribe(    
  //     northVendor => this.northVendors.push(northVendor),
  //     error => this.errorMsg = error
  //   );
  // }

  delete(northVendor: NorthVendor): void {
    this.northVendors = this.northVendors.filter(n => n !== northVendor);
    this.northVendorService.deleteNorthIndianItem(northVendor.id).subscribe();  
    alert("Menu Item: " + northVendor.name + " Deleted!");   
  }
  

  edit(northVendor: NorthVendor)
  {
    this.editNorthItem = northVendor;
  }

  update() {
    if (this.editNorthItem) {
      this.northVendorService.updateNorthIndianItem(this.editNorthItem).subscribe
        (editNorthItem => {
          const nr = editNorthItem ? this.northVendors.findIndex(n => n.id === editNorthItem.id) : -1;
          if (nr > -1) {
            this.northVendors[nr] = editNorthItem;
          }
        });
      this.editNorthItem = undefined;
    }
  }

  

  

}
