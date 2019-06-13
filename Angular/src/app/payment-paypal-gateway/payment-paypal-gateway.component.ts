import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-payment-paypal-gateway',
  templateUrl: './payment-paypal-gateway.component.html',
  styleUrls: ['./payment-paypal-gateway.component.css']
})
export class PaymentPaypalGatewayComponent implements OnInit, AfterViewChecked  {

  constructor() { }

  ngOnInit() {
  }

  addScript: boolean = false;
  finalAmount: number = 1;
  
  paypalConfig = {
    env: 'sandbox',
    client:{
      sandbox: 'AURu8r7iAHJaUZghAkNoeI-qqZuCnOOsNjEzbu28ct-U-0orFMNsyL7g7QBfQwVpceb4AipYpuYGYKK5',
      production: 'none'
    },
    commit: true,
    payment: (data, actions) =>{
      return actions.payment.create({
        payment:{
          transactions: [
            {
              amount: {total: this.finalAmount, currency: 'USD'}
            }
          ]
        }
      });
    },
    onAuthorize: (data, actions) =>{
      return actions.payment.execute().then((payment)=>{
        //Do something when payment is successful
      });
    }
  };

  ngAfterViewChecked(): void{
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
          paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
          
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject)=>{
      let scripttagElement = document.createElement('script');
      scripttagElement.src = "http://www.paypalobjects.com/api/checkout.js";
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}
