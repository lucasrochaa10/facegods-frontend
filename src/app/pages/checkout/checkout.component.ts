import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  nombre = '';
  direccion = '';
  cp = '';
  ciudad = '';
  provincia = '';
  telefono = '';
  email = '';
  tarjeta = '';
  expiracion = '';
  cvv = '';
  carrito: any[] = [];

  constructor(
    private router: Router,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    const carritoGuardado = localStorage.getItem('cart');
    this.carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }

  confirmarCompra() {
    if (!this.nombre || !this.direccion || !this.cp || !this.ciudad || !this.provincia ||
        !this.telefono || !this.email || !this.tarjeta || !this.expiracion || !this.cvv) {
      alert('Por favor, completa todos los campos antes de confirmar la compra.');
      return;
    }

    const pedido = {
      nombre: this.nombre,
      direccion: this.direccion,
      cp: this.cp,
      ciudad: this.ciudad,
      provincia: this.provincia,
      telefono: this.telefono,
      email: this.email,
      tarjeta: this.tarjeta,
      expiracion: this.expiracion,
      cvv: this.cvv,
      productos: this.carrito
    };

    this.pedidoService.enviarPedido(pedido).subscribe({
      next: (res: any) => {
        console.log('Pedido guardado', res);
        alert('¡Pedido confirmado!');
        localStorage.removeItem('cart');
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('Error al guardar el pedido', err);
        alert('Error al guardar el pedido');
      }
    });
  }
}
