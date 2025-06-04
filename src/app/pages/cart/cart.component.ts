import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  total = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
    this.total = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  vaciarCesta() {
    localStorage.removeItem('cart');
    this.cart = [];
    this.total = 0;
  }
}
