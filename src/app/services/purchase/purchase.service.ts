import { Injectable } from '@angular/core';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { UserService } from '../../services/user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, Events } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';

@Injectable({
    providedIn: 'root'
})
export class PurchaseService {
    productId: string;
    user: any = {};

    constructor(
        public http: HttpClient,
        public userService: UserService,
        public events: Events,
        public iap: InAppPurchase2,
        public inAppPurchase: InAppPurchase
    ) {
        this.userService.currentUser
            .subscribe((user: any) => {
                this.user = user;
            })
    }

    initialize(){
        let that = this;
        this.iap.when("my_subcription").updated((product: IAPProduct) => {
              console.log("my subscription product ",product)
          if (product.owned)
          {
              console.log("my subscription yes")
              that.userService.updateCurrentUser({subscription: true})
          }
          else
          {
              console.log("my subscription no")
              that.userService.updateCurrentUser({subscription: false})
          }
        });

        // let that = this;
        // nested promises, oh my!

        this.inAppPurchase.restorePurchases()
            .then(receipt => {
                //console.log('encoded', receipt)
                return receipt
            })
            .then(receiptData => {
                console.log('receiptData ', receiptData)

                if (receiptData.length == 0) {
                    that.userService.updateCurrentUser({ subscription: false })
                } else {
                    let receipt = receiptData.filter(function(receipt) {
                        return receipt.productId = 'basic_plan'
                    })
                    ////console.log('receipt ', receipt)
                    let userReceipt = JSON.parse(receipt[0].receipt)
                    ////console.log('receipt data obj ', JSON.parse(receipt[0].receipt))
                    if (userReceipt.purchaseState == 0)
                        that.userService.updateCurrentUser({ subscription: true })
                }
            })
            .catch(err => {
            })


    }

    getProducts() {

        //console.log('getProducts---------------------------');

        // plan18_23_12m
        // plan18_23_3m
        // plan18_23_1m
        // After platform ready
        // this.iap.verbosity = this.iap.DEBUG;
        this.iap.register({
            id: "plan18_23_1m",
            type: this.iap.PAID_SUBSCRIPTION,
        });
        this.iap.register({
            id: "plan18_23_3m",
            type: this.iap.PAID_SUBSCRIPTION,
        });
        this.iap.register({
            id: "plan18_23_12m",
            type: this.iap.PAID_SUBSCRIPTION,
        });

        // Register event handlers for the specific product
        this.iap.when("subscription").registered((product: IAPProduct) => {
            //console.log('Registered: ' + JSON.stringify(product));
        });

        // Updated
        this.iap.when("subscription").updated((product: IAPProduct) => {
            //console.log('Updated' + JSON.stringify(product));
        });

        // User closed the native purchase dialog
        this.iap.when("subscription").cancelled((product) => {
            //console.error('Purchase was Cancelled');
        });

        // Track all iap errors
        this.iap.error((err) => {
            //console.error('iap Error ' + JSON.stringify(err));
        });

        // Run some code only when the iap is ready to be used
        this.iap.ready(() => {
            //console.log('Store is ready');
            //console.log('Products: ' + JSON.stringify(this.iap.products));
            // //console.log(JSON.stringify(this.iap.get("plan18_23_1m")));
        });

        // Refresh the status of in-app products
        this.iap.refresh();


        //   this.iap.register({
        //     id: "plan18_23_12m",
        //     type: this.iap.NON_RENEWING_SUBSCRIPTION,
        //   });

        // this.iap.when("plan18_23_12m").registered( (product: IAPProduct) => {
        //   //console.log('Registered: ' + JSON.stringify(product));
        // });

        //   this.iap.when("plan18_23_12m")
        //     .approved(p => p.verify())

        //   this.iap.when("plan18_23_12m")
        //     .verified(p => p.finish());

        //   this.iap.refresh();

        // retthis.iap
        //   .getProducts(['plan18_23_12m', 'plan18_23_3m', 'plan18_23_1m'])
        //   .then(function (products) {
        //      //console.log(products)
        //       //Products are loaded
        //       //Try making the purchase in here to test if it works
        //      // this.iap.buy('com.yourapp.prod1').then(this.iap)
        //   })
        //   .catch(function (err) {
        //     //console.log(err);
        //   });


        // return this.iap.getProducts(['plan18_23_12m', 'plan18_23_3m', 'plan18_23_1m'])
    }

    // create the subscription
    subscribeMembership(id) {
        this.iap.order(id).then(result => {
                //console.log("successful subscription!")
                this.events.publish('subscription:successful')
                this.userService.updateCurrentUser({ subscription: true })
                //console.log(result)
                // subscribed! do something...
            })
            .catch(err => {
                //console.log(err)
            })

        // let that = this;
        // //console.log(id)

        // this.iap.subscribe(id).then(result => {

        //         //console.log("successful subscription!")
        //         this.events.publish('subscription:successful')
        //         that.userService.updateCurrentUser({ subscription: true })
        //         //console.log(result)
        //         // subscribed! do something...
        //     })
        //     .catch(err => {
        //         //console.log(err)
        //     })
    }

    // restore in app purchase (required)
    restoreMembership(id) {
        // this.productId = id;
        // this.iap.restorePurchases().then(result => {

        //         // loop through purchases to find the one we are looking for
        //         for (var i = 0; i < result.length; ++i) {
        //             // TODO: check result[i].state for cancelled or refunded
        //             if (result[i].productId == this.productId) {
        //                 ////console.log( 'Purchase found! Do something...', result )
        //                 return;
        //             }
        //         }
        //     })
        //     .catch(err => {
        //         ////console.log(err)
        //     })
    }

    // check if membership is still active. Don't call this every app open, it requires iTunes login.
    checkStatus() {
        // let that = this;
        // // nested promises, oh my!

        // this.iap.restorePurchases()
        //     .then(receipt => {
        //         ////console.log('encoded', receipt)
        //         return receipt
        //     })
        //     .then(receiptData => {
        //         ////console.log('receiptData ', receiptData)

        //         if (receiptData.length == 0) {
        //             that.userService.updateCurrentUser({ subscription: false })
        //         } else {
        //             let receipt = receiptData.filter(function(receipt) {
        //                 return receipt.productId = 'basic_plan'
        //             })
        //             ////console.log('receipt ', receipt)
        //             let userReceipt = JSON.parse(receipt[0].receipt)
        //             ////console.log('receipt data obj ', JSON.parse(receipt[0].receipt))
        //             if (userReceipt.purchaseState == 0)
        //                 that.userService.updateCurrentUser({ subscription: true })
        //         }
        //     })
        //     .catch(err => {
        //     })
        // first, ask Apple for the receipt. We get back an encrypted string.
    }

    validateReceipt(receiptData) {

        // return new Promise( (resolve ) => {

        //   let headers = new Headers({ 'Content-Type': 'application/json' });
        //   let options = new RequestOptions({ headers: headers });

        //   let data = {
        //     'password': 'XXXXXXXXXXXXXXXXXXX', // the shared secret key for your in app purchase https://stackoverflow.com/questions/5022296/generate-shared-secret-key-in-itunes-connect-for-in-app-purchase
        //     'receipt-data': receiptData
        //   }

        //   this.http.post( 'https://buy.itunes.apple.com/verifyReceipt', data, options )
        //       .subscribe(response => {

        //         let receipt = JSON.parse(response['_body']).receipt
        //         resolve(receipt)
        //         // purchases can be found at receipt.in_app <Array>
        //         // will need to loop through them and get most recent, then work with expiration date
        //       },
        //       error => {
        //         // probably a bad url or 404
        //         ////console.log(error);
        //       })

        // })

    }

    sendReceiptToServer(receipt) {

        // return new Promise( (resolve ) => {

        //     ////console.log( 'sendReceiptToServer', receipt )

        //     let url = 'https://mysite.com/wp-json/app/membership-status' // url to the PHP file or endpoint, see code below
        //     let data = {
        //       receipt: JSON.stringify( receipt )
        //     }

        //     let headers = new Headers({ 'Content-Type': 'application/json' });
        //     let options = new RequestOptions({ headers: headers });

        //     this.http.post( url, data, options )
        //       .subscribe(response => {

        //         ////console.log('server response', response)
        //         // This is the end of the road. We resolve with the server response so we know if the subscription is active or not.
        //         resolve( response['_body'] );

        //       },
        //       error => {
        //         resolve(false)
        //         // probably a bad url or 404
        //         ////console.log(error);
        //       })

        // })

    }
}