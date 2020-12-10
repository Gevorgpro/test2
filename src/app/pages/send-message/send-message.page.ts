import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, IonInput } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.page.html',
  styleUrls: ['./send-message.page.scss'],
})
export class SendMessagePage implements OnInit {
    // @ViewChild('myInput') messageInput: TextInput;
    @ViewChild('myInput', { static: false }) myInput: IonInput;
	editorMsg:any = '';
    user: any = {};

  constructor(
        public userService: UserService,
        public modalController: ModalController
        ) { }

  ngOnInit() {
        this.userService.currentUser
            .subscribe((user: any) => {
                this.user = user;
            })

	let that = this;
        setTimeout(() => {
 //   that.messageInput['_native'].nativeElement.focus();
 //   that.myInput['_native'].nativeElement.focus();
    that.myInput.setFocus()
        }, 1000)
            
  }

  // close(){
  // 	this.modalController.dismiss();
  // }

  textChange() {
    console.log('ionViewDidLoad IceBreakerPage');
  }

  send(){
    this.userService.updateCurrentUser({starPoints: this.user.starPoints - 1})
  	this.modalController.dismiss({status: true, message: this.editorMsg});
  }

  close(){
  	// this.viewCtrl.dismiss({status: false});
  	this.modalController.dismiss({status: false});
  }

}
