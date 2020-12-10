import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MessagesService } from '../../services/messages/messages.service';
import { ToastController, NavController, Platform, LoadingController, IonContent, IonInput } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    @ViewChild(IonContent, {static: false}) ionContent: IonContent;
    @ViewChild('myInput', { static: false }) myInput: IonInput;
    messages: any = [];
    // @ViewChild(Content) content: Content;
    // @ViewChild('chat_input') messageInput: TextInput;
    // @ViewChild('myInput') myInput: ElementRef;
    userId: string;
    receiver: any = {};
    message: any;
    user: any;
    sender: any = {};
    editorMsg: string = '';
    conversationId: any;
    imageURI: any;
    lastImage: any;
    messagesFire: any = [];
    firstMessage: boolean = false;
    messageFired: boolean = false;
    receiverPic: any;
    keys: any = []
    grouped: any = {}
    scrollHeight: any;
    chatBg: any = 'assets/imgs/chatbg.jpg'
    uid: any;
    name: any;

  constructor(
        private userService: UserService,
        private platform: Platform,
        private keyboard: Keyboard,
   	    private ngZone: NgZone,
        private messagesService: MessagesService
        ) { 
  	this.userService.currentUser.subscribe(user => {
  		this.user = user;
  	})

  }

  ngOnInit() {
        let cid = this.platform.getQueryParam("cid");
        this.uid = this.platform.getQueryParam("uid");
        this.name = this.platform.getQueryParam("name");

        this.messagesService.getMessages(cid);
        this.messagesService.messageSeen(cid);
        let that = this;
        this.messagesService.messages.subscribe((data:any) => {
        	this.grouped =data.messages
        	this.keys =data.keys

			this.ngZone.run(() => {
			  setTimeout(() => {
			    that.ionContent.scrollToBottom(300)
			  });
			}); 
        })
  }

    getDate(date) {
        let d = new Date(date)
        return d;
    }

    ionViewDidLoad(){
      // var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      // this.scrollHeight = element.scrollHeight;
    }

	  resize() {
	      // var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
	      // var scrollHeight = element.scrollHeight;
	      // element.style.height = scrollHeight + 'px';
	      // this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
	  }


    sendMsg() {
    	this.keyboard.show();
    	this.myInput.setFocus()
    	console.log("keyboard show")
        if (this.editorMsg.length != 0) {


            this.messagesService.sendMsg(this.editorMsg, this.uid)
            this.editorMsg = '';
            this.myInput.setFocus()
            this.ionContent.scrollToBottom(300);


           //  const id = this.firestore.createId();
           //  let t = new Date();
           //  let message = { body: this.editorMsg, sender: this.sender.uid, receiver: this.receiver.uid, createdAt: new Date(), order: -t.getTime() }

           //  let notifMessage = {
           //      app_id: "47e8fa75-a752-409a-8831-ed8892978107",
           //      headings: { "en": this.sender.name },
           //      contents: { "en": this.editorMsg },
           //      data: { "id": this.sender.uid, "name": this.sender.name },
           //      android_group: this.sender.uid,
           //      filters: [
           //          { "field": "tag", "key": "userID", "relation": "=", "value": this.receiver.uid }
           //      ]
           //  };

           //  this.sendNotification(notifMessage)

           //  this.firestore.collection('messages').doc(this.conversationId).collection('chat').doc(id).set(message)
           // // if (this.firstMessage == true) {

           //      this.firestore.collection('userLastMessages').doc(this.sender.uid).collection('allchats').doc(this.conversationId).update({ id: this.conversationId, uid: this.receiver.uid, name: this.receiver.name, lastMessage: this.editorMsg, createdAt: new Date(), order: -t.getTime()  })

           //      this.firestore.collection('userLastMessages').doc(this.receiver.uid).collection('allchats').doc(this.conversationId).set({ id: this.conversationId,  image: this.sender.photos[0], uid: this.sender.uid, name: this.sender.name, lastMessage: this.editorMsg, createdAt: new Date(), order: -t.getTime() , read: false })

           //      this.scrollToBottom();
           //  this.editorMsg = '';


           //    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
           //    element.style.height = this.scrollHeight + 'px';
           //    this.myInput['_elementRef'].nativeElement.style.height = this.scrollHeight + 'px';

           //    this.messageInput.setFocus();
        }
    }

    sendNotification(data) {
        // let headers = new Headers({
        //     "Content-Type": "application/json; charset=utf-8",
        //     "Authorization": "Basic ZDY1OWU4MzMtYTA3Ny00YTY0LTk2YTAtMmE0ZWEwMzQxMjZh"
        // });

        // let options = new RequestOptions({ headers: headers });

        // this.http.post('https://onesignal.com/api/v1/notifications', data, options)
        //     .subscribe(resp => {
        //         console.log(resp);
        //     }, err => {
        //         console.log(err);
        //     })
    };

    scrollToBottom() {
        // setTimeout(() => {
        //     if (this.content._scroll) {
        //         this.content.scrollToBottom(600);
        //     }
        // }, 40)
    }

    textChange() {
        // if (this.editorMsg.length != 0) {
        //     this.events.publish('typing')
        // }
    }

}
