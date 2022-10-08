import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-vouchers',
  templateUrl: './apply-vouchers.page.html',
  styleUrls: ['./apply-vouchers.page.scss'],
})
export class ApplyVouchersPage implements OnInit {
  items=[{
    name:'Senior Citizen: 10.0 % ',
    description: 'Brief description about o!er and its terms'
  },
  {
    name:'Sta! Discount: 25.0 % ',
    description: 'Charred ciabatta, chef’s dip selections',
    thumnailimage:'src=./../assets/img4.png',
  },

];
  constructor() { }

  ngOnInit() {
  }

}
