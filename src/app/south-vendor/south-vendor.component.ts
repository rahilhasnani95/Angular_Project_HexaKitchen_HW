import { Component, OnInit } from '@angular/core';
import { SouthVendorService } from './south-vendor.service';

@Component({
  selector: 'app-south-vendor',
  templateUrl: './south-vendor.component.html',
  styleUrls: ['./south-vendor.component.css']
})
export class SouthVendorComponent implements OnInit {

  southVendors: SouthVendor[];
  errorMsg : any;
  editSouthItem: SouthVendor;

  constructor(public southService : SouthVendorService) { }

  ngOnInit() {
    this.southService.getSouthItems().subscribe(
      data => this.southVendors = data,
      error => this.errorMsg = error
    );
  }

  
}
