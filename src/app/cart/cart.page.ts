import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items=[{
    thumnailimage:'src=./../assets/img4.png',
    name:'Bread & Dips',
    description: '$14',
    pricevalue:'3'
  },
  {
    thumnailimage:'src=./../assets/img4.png',
    name:'Bu!alo Chicken Wings',
    description: '$45.5',
    pricevalue:'6'
  },
  {
    thumnailimage:'src=./../assets/img4.png',
    name:'Fried Chicken Burger',
    description: '$25',
    pricevalue:'2'
  },
  {
  thumnailimage:'src=./../assets/img4.png',
  name:'Fried Chicken Burger',
  description: '$22.3',
  pricevalue:'2'
},
];

totalprice=[{

  total:'Item Total',
  price:'$95',
},
  {
  total:'Delivery',
  price:'$10',
  },
  {
    total:'GST',
    price:'$12'
  },
];

  constructor() { }

  ngOnInit() {
  }

}
