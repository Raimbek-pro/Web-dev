

import {Component, Input} from '@angular/core';
import { ProductDescription } from '../product-description';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() products: ProductDescription[] = [];
  shareOnWhatsApp(productLink: string) {
    const message = encodeURIComponent(`Check out this product: ${productLink}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  // Function to share on Telegram
  shareOnTelegram(productLink: string) {
    const message = encodeURIComponent(`Check out this product: ${productLink}`);
    const telegramUrl = `https://t.me/share/url?url=${productLink}&text=${message}`;
    window.open(telegramUrl, '_blank');
  }
  likeProduct(index: number) {
    this.products[index].likes = (this.products[index].likes || 0) + 1;
  }

  // Function to remove product
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
