import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { UserService } from '../../services/user/user.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.page.html',
  styleUrls: ['./phone-auth.page.scss'],
})
export class PhoneAuthPage implements OnInit {
callingCode: any;
codeSent: boolean = false;
phoneNumber: any = ""
recaptchaVerifier: any;
verificationId: any;
smsCode: any;
errorMessage: any;
waitingResponse: boolean = false;
checkVerifySMS: boolean = false;

    constructor(
        private userService: UserService,
    	private authService: AuthenticationService,
        private router: Router
        ) {}

  ngOnInit() {
  	// this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // onSignInSubmit();
  }
});

  	this.userService.getCallingCode().then(resp => {
  		console.log(resp);
  		this.callingCode = "+"+resp;
  	})
  }

  continue(){
  	this.waitingResponse = true;
  	this.authService.phoneAuth(this.callingCode + this.phoneNumber, this.recaptchaVerifier ).then(resp => {
  		console.log(resp);
      this.errorMessage = '';
  		this.waitingResponse = false;
  		this.codeSent = true;
  		this.verificationId = resp;
  		// this.callingCode = "+"+resp;
  	}, error => {
  		this.waitingResponse = false;
  		this.errorMessage = error;
  	})
  }

  verify(){
    this.waitingResponse = true;
  	console.log("verificationId ", this.verificationId)
  	console.log("smsCode ", this.smsCode)
  	this.authService.verifyPhoneAuth(this.verificationId, this.smsCode).then(resp => {
  		console.log(resp);
    // this.waitingResponse = false;
  		// this.callingCode = "+"+resp;
  	}, error => {
    this.waitingResponse = false;
      this.errorMessage = error.message;
      console.log(error.message);
    })
  }

}
