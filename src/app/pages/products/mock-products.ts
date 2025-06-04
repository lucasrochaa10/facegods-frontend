export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categoria: string; // ✅ propiedad clave para el filtro por categoría
}

// Lista simulada de productos
export const PRODUCTS: Product[] = [
  // Sudaderas
  { id: 's1', name: 'Sudadera panther', image: 'assets/sudadera1.jpg', price: 59.99, categoria: 'sudaderas' },
  { id: 's2', name: 'Sudadera blue', image: 'assets/sudadera2.jpg', price: 59.99, categoria: 'sudaderas' },
  { id: 's3', name: 'Sudadera Lilas', image: 'assets/sudadera3.jpg', price: 59.99, categoria: 'sudaderas' },
  { id: 's4', name: 'Sudadera Grisiento', image: 'assets/sudadera4.jpg', price: 59.99, categoria: 'sudaderas' },
  { id: 's5', name: 'Sudadera Verdelke', image: 'assets/sudadera5.jpg', price: 59.99, categoria: 'sudaderas' },

  // Camisetas
  { id: 'c1', name: 'BLEUTEQUE TEE', image: 'assets/camiseta1.jpg', price: 39.99, categoria: 'camisetas' },
  { id: 'c2', name: 'SAMBATECA TEE', image: 'assets/camiseta2.jpg', price: 39.99, categoria: 'camisetas' },
  { id: 'c3', name: 'ICE CUBE TEE WHITE', image: 'assets/camiseta3.jpg', price: 39.99, categoria: 'camisetas' },
  { id: 'c4', name: 'ICE CUBE TEE BLUE', image: 'assets/camiseta4.jpg', price: 39.99, categoria: 'camisetas' },
  { id: 'c5', name: 'ICE CUBE TEE DARK GREY', image: 'assets/camiseta5.jpg', price: 39.99, categoria: 'camisetas' },

  // Prendas de Punto
  { id: 'p1', name: 'BIG STAKE KNITTED SWEATER BLACK', image: 'assets/prendadepunto1.jpg', price: 75.00, categoria: 'punto' },
  { id: 'p2', name: 'SUNRISE KNITTED SWEATER', image: 'assets/prendadepunto2.jpg', price: 85.00, categoria: 'punto' },
  { id: 'p3', name: 'NIGHTFALL KNITTED SWEATER', image: 'assets/prendadepunto3.jpg', price: 85.00, categoria: 'punto' },
  { id: 'p4', name: 'nighfly', image: 'assets/prendadepunto4.jpg', price: 69.99, categoria: 'punto' },
  { id: 'p5', name: 'nighfoll', image: 'assets/prendadepunto5.jpg', price: 69.99, categoria: 'punto' },

  // Accesorios
  { id: 'a1', name: 'GODS CAP NAVY', image: 'assets/accesorio1.jpg', price: 35.00, categoria: 'accesorios' },
  { id: 'a2', name: 'PREMIUM LEATHER BAG BLACK', image: 'assets/accesorio2.jpg', price: 100.00, categoria: 'accesorios' },
  { id: 'a3', name: 'FG PINS 4 PACK', image: 'assets/accesorio3.jpg', price: 12.00, categoria: 'accesorios' },
  { id: 'a4', name: 'LOGO SOCKS', image: 'assets/accesorio4.jpg', price: 14.00, categoria: 'accesorios' },
  { id: 'a5', name: 'CRETA BLUE', image: 'assets/accesorio5.jpg', price: 30.00, categoria: 'accesorios' },

  // Pantalones
  { id: 'pt1', name: 'DENIM JORTS BLUE', image: 'assets/pantalones1.jpg', price: 65.00, categoria: 'pantalones' },
  { id: 'pt2', name: 'FAKEGODS DENIM SHORTS NAVY', image: 'assets/pantalones2.jpg', price: 65.00, categoria: 'pantalones' },
  { id: 'pt3', name: 'FAKEGODS DENIM SHORTS BLUE', image: 'assets/pantalones3.jpg', price: 65.00, categoria: 'pantalones' },
  { id: 'pt4', name: 'MONOGRAM SHORTS BLUE', image: 'assets/pantalones4.jpg', price: 55.00, categoria: 'pantalones' },
  { id: 'pt5', name: 'MONOGRAM SHORTS NAVY', image: 'assets/pantalones5.jpg', price: 55.00, categoria: 'pantalones' },
];
