import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDescription } from './product-description';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductsComponent],
  template:`
    <main>
      <header class="brand-name">
        
      </header>
      <section class="content">
        <app-products [products]="products"></app-products> <!-- Pass products to child -->
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi';
  baseUrl="https://resources.cdn-kaspi.kz/img/m/p"
  products: ProductDescription [] = [
    {
      id: 0,
      name: 'Macbook pro 14',
      description: '13 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3q_IPJgyaTW7irwht2sgwomfcwcNX8F2y1g&s`,
      rating: '3 stars',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 1,
      name: 'Macbook pro 13',
      description: '14 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74nioicpi59XtCYn7DgWSFH_vZ9ypaSULTuWJB6CEmn5e5nQvqUXa3Z5OSpF6OqD-MyY&usqp=CAU`,
      rating: '4 stars',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcr3-117948964/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 2,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 3,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    }
    ,
    {
      id: 4,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 5,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 6,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 7,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 8,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    },
    {
      id: 9,
      name: 'Macbook air',
      description: '12 inches',
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4TJD_TB9bh9ahS3vnYxIUihSu_29uluxLQ&s`,
      rating: '2 starts',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-18-gb-ssd-512-gb-macos-mrx33-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gbraid=0AAAAAC7-v7juvd9qygojyPpTTvDJZ7eoE&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6_krQldpVDqXUlyMzw6CcWkdlRS9_WnwghlbyZdCNPEuis_cwTXfBoC4XcQAvD_BwE'
    }
  ];

}
