import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchfood',
  templateUrl: './searchfood.page.html',
  styleUrls: ['./searchfood.page.scss'],
})
export class SearchfoodPage implements OnInit {

  items=[{
    name:'Bread & Dips',
    price:'$14.5',
    description: 'Charred ciabatta, chef’s dip selections',
    thumnailimage:'src=./../assets/img2.png'
  },
  {
    name:'Cherry tomato, basil pesto, Spanish onion, mozzarella, napolitana sauce',
    price:'$14.5',
    description: 'Ranch dipping sauce',
    thumnailimage:'src=./../assets/img3.png'
  },
  {
    name:'Bu!alo Chicken Wings',
    price:'$14.5',
    description: 'Charred ciabatta, chef’s dip selections',
    thumnailimage:'src=./../assets/img4.png'
  },

  ];
  itemsfoods=[{
      slideimage:'src=../../assets/veg2-.png',
      foodname:'SIDES'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'PIZZAS'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'BURGERS'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'DIMATINA'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'DIMATINA'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'DIMATINA'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'DIMATINA'
    },
    {
      slideimage:'src=../../assets/veg2-.png',
      foodname:'DIMATINA'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
