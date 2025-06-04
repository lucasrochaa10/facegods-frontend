import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from '../products/mock-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  selectedSize = 'M';
  quantity = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = PRODUCTS.find(p => p.id === id);
  }

  addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
      ...this.product,
      size: this.selectedSize,
      quantity: this.quantity
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido a la cesta');
  }
}
