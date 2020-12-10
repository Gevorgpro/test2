import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    segment: any = 'messages'
    user: any = {};
    allNearbyPosts: any = [];
    allPosts: any = [];
    post: any;
    currentUser: any = {};
    filteredPost: any;
    messages: any = [];
    messagesDB: any = [];
    realMessagesDB: any = [];
    blockedUsers: any = [];
    searchTerm: any;

  constructor(
        private statusBar: StatusBar,
        private userService: UserService,
        private router: Router
    ) {
        this.userService.currentUser
            .subscribe((user: any) => {
                this.user = user;
            })
     }

  ngOnInit() {
            this.messageData()
  }

    ionViewDidLoad() {


                // this.userProvider.getBlockedUsers().subscribe((data:any) => {
                //     let Posts = this.allPosts.filter(function(post){
                //         if(data.hasOwnProperty('disliked'))
                //         if (data.disliked.indexOf(post['userId']) == -1) return post;
                //     })

                //     that.allNearbyPosts = _.without(Posts, undefined)

                // })



    }

    messageData(){
        let that = this;
        this.userService.messages
        .subscribe((messages) => {
          this.messagesDB = messages;
          this.realMessagesDB = messages;
          console.log("messages ", messages)
        // this.userService.getBlockedUsers().subscribe((data:any) => {
        //     that.blockedUsers = data;
        //     that.realMessagesDB = _.map(messages, function(message) {
        //         if(data.hasOwnProperty('disliked'))
        //        if (data.disliked.indexOf(message['uid']) == -1) return message;
        //     });

        //     that.realMessagesDB = _.without(that.realMessagesDB, undefined)
        //     that.messagesDB = Array.from(that.realMessagesDB);

        // })
        })
    }



    getClass(post) {
        let index = post.likes.indexOf(this.user.uid)
        if (index >= 0) {
            return 'postLiked'
        } else {
            return 'postNotLiked'
        }
    }

    segmentChanged(ev) {
    }


    upgrade() {
         // let modal = this.modalCtrl.create(UpgradePage, {}, { cssClass: 'mymodal' });
         // modal.present();
    }


    getItems(ev) {
        let name = ev.target.value;
        this.messagesDB = this.realMessagesDB.filter(res => res.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
            if (name.length == 0)
            this.messagesDB = Array.from(this.realMessagesDB);
    }

    openChat(message) {
    this.router.navigateByUrl('/chat/' + '?cid=' + message.id + '&uid=' + message.uid + '&name=' + message.name);
    // const animationsOptions = {
    //   animation: 'ios-transition',
    //   duration: 600
    // }  
    //    if(this.blockedUsers.liked.indexOf(receiver.uid) > -1)
    //    receiver.liked = true;      

   //console.log("open chat ", receiver)
       // this.app.getRootNav().push(ChatPage, { user: receiver }, animationsOptions)
    }

    parseText(text) {
        if (text.length > 50)
            return text.substring(0, 99) + '...'
        else
            return text;
    }

    getBorder(message){
        if(message.read)
            return 'noBorder'
        else
            return 'border'
    }


    timeDifference(previous) {
        let d = new Date();
        let current = d.getTime();
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        let p = new Date(previous)
        previous = p.getTime();

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' secs';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' mins';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hrs';
        } else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + ' days';
        } else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ' months';
        } else {
            return Math.round(elapsed / msPerYear) + ' years';
        }
    }
}
