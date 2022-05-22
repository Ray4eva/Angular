import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../services/attendee.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  public products: any = []
  constructor(private _productService : AttendeeService) { }

  ngOnInit(): void {
    this._productService.getProducts()
    .subscribe(data => this.products = data)
  }

}
