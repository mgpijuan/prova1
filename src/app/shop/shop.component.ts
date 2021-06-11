import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS } from '../data/mock-products';
import { CartProduct } from '../interfaces/cartProduct';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product?: Product[];
  products = PRODUCTS;
  cart: CartProduct[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  addCart(product: Product): void {
    //si no esta seleccionado, lo añades:
    //y si ya esta seleccionado, le sumas 1:
    let productCart = this.cart.find((elementCart) => elementCart.id === product.id);
    if (productCart === undefined) {
      let cartProductToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        discount: 0,
        totalPriceDiscount: 0,
      };
      this.cart.push(cartProductToAdd);
    } else {
      productCart.quantity += 1;
    }
    console.log(product);
  }
}

/* deleteProduct() {
  this.addCart.quantity === 0 ? null : this.quantity -=1
  this.addCart();
  console.log ('delateProduct')};
} */

