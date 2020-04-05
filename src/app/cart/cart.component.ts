import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  total;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  onSubmit(customerData){
    //process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
    this.router.navigateByUrl('checkoutok');
  }

}