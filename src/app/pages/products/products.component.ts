import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from './mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoria = params.get('nombre');

      // Mostrar todos los productos si la categoría no está definida o es "todos"
      if (!categoria || categoria === 'todos') {
        this.products = PRODUCTS;
      } else {
        this.products = PRODUCTS.filter(p => p.categoria === categoria);
      }
    });
  }
}
