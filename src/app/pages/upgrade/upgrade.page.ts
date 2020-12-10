import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { PurchaseService } from '../../services/purchase/purchase.service';
import { IonSlides, Events, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.page.html',
  styleUrls: ['./upgrade.page.scss'],
})
export class UpgradePage implements OnInit {
  productId: any = 'basic_plan';
  products: any = [{
currency: "USD",
description: "Find Date Pro 12 months plan",
price: "$89.00",
priceAsDecimal: 89,
productId: "plan18_23_12m",
title: "Find Date Pro 12 months plan (Find Date - Dating app)"
  },{
currency: "USD",
description: "Find Date Pro 3 months plan",
price: "$24.00",
priceAsDecimal: 25,
productId: "plan18_23_3m",
title: "Find Date Pro 3 months plan (Find Date - Dating app)"
  },{
currency: "USD",
description: "Find Date Pro 1 month plan",
price: "$9.00",
priceAsDecimal: 9,
productId: "plan18_23_1m",
title: "Find Date Pro 1 month plan (Find Date - Dating app)"
  }];
  product: any = {};
  activePlan: any = "plan18_23_3m";
  plans: any = [12,3,1]

  constructor(
        public userService: UserService,
        public purchaseService: PurchaseService,
        public modalController: ModalController
        ) { }

  ngOnInit() {
    let that = this;
    // this.purchaseService.getProducts()
    // .then( products => {
    //   console.log(products)
    //   that.products = products;
    //  // that.product = products[0];
    // })
    // .catch( err => {
    //   console.log(err)
    // })
  }

  getPlanPrice(){
    let product = this.products.filter(res => res.productId == this.activePlan)[0];
    return product.price
  }

  onClickOutside(event:Object) {
    if(event && event['value'] === true && event['target'].className == 'ion-page show-page') {
    //  console.log('clicked outside ',event);
     // this.viewCtrl.dismiss({success: false});
     this.modalController.dismiss();
    } else {
    //  console.log('clicked inside ',event);
    }
  }

  close(){
     this.modalController.dismiss();
  }

  upgrade() {
  	this.purchaseService.subscribeMembership(this.activePlan)
  }

  selectPlan(plan){
    console.log(plan);
    this.activePlan = plan
  }

  checkActive(p){
    return p == this.activePlan;
  }
}

