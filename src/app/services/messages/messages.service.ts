import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import * as Rx from "rxjs";
import { map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'underscore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    currentUser: any = {};
    messages = new Rx.BehaviorSubject({});

    constructor(
        public http: HttpClient,
        public userService: UserService,
        public firestore: AngularFirestore
    ) {

        this.userService.currentUser
            .subscribe((user: any) => {
                this.currentUser = user;
            })

    }

    getMessages(id) {
        // return new Promise((resolve) => {
        this.firestore.collection('messages').doc(id).collection('chat', ref => ref.orderBy('order').limit(50)).valueChanges()
            .subscribe((messages: any = []) => {
                let messagesFire =
                    _.sortBy(messages.map(function(el) {
                        var o = Object.assign({}, el);
                        o['date'] = o['createdAt'].toDate().toISOString().slice(0, 10);
                        return o;
                    }), ['createdAt'], ['asc']);

                let grouped = _.mapObject(_.groupBy(messagesFire, 'date'),
                    clist => clist.map(res => _.omit(res, 'date')));
                console.log("this.grouped ", grouped);

                let keys = Object.keys(grouped);



                //     messages.forEach(function(message){
                //      message.date = message.createdAt.toDate().toISOString().slice(0, 10);
                //     })
                //     messages = _.sortBy(messages, 'order')

                //     console.log("messages ",messages)

                // var grouped = _.groupBy(messages, 'date');
                // let keys = Object.keys(grouped);

                this.messages.next({ messages: grouped, keys: keys })
                //  resolve({messages: grouped, keys: keys})
                // resolve(messages)

                // if (this.navCtrl.getActive().name == 'ChatPage')
                //     this.firestore.collection('userLastMessages').doc(this.sender.uid).collection('allchats').doc(id).update({ read: true })

                // this.loadingProvider.dismiss();
                // if (resp.length == 0)
                //     this.firstMessage = true

                // this.messageFired = true
                // this.scrollToBottom();
            })
        // })
    }

    messageSeen(cid) {
        this.firestore.collection('userLastMessages')
            .doc(this.currentUser.uid).collection('allchats')
            .doc(cid)
            .update({ read: true }).then(resp => {})
    }

    getAfsID() {
        return this.firestore.createId();
    }

    sendMsg(msgData, uid) {

        console.log("msgData ", msgData)

        let conversationId;
        const id = this.getAfsID();
        let t = new Date();
        let message = {
            body: msgData,
            sender: this.currentUser.uid,
            receiver: uid,
            createdAt: new Date(),
            order: -t.getTime()
        }

        let notifMessage = {
            app_id: "47e8fa75-a752-409a-8831-ed8892978107",
            headings: { "en": this.currentUser.name },
            contents: { "en": msgData },
            data: { "id": this.currentUser.uid, "name": this.currentUser.name },
            android_group: this.currentUser.uid,
            filters: [
                { "field": "tag", "key": "userID", "relation": "=", "value": uid }
            ]
        };

        this.sendNotification(notifMessage)
        this.userService.updateUserStatus(this.currentUser.uid, 'liked')

        if (this.currentUser.uid > uid)
            conversationId = this.currentUser.uid + uid
        else
            conversationId = uid + this.currentUser.uid

        this.firestore.collection('messages').doc(conversationId).collection('chat').doc(id).set(message)

        // this.afs.collection('userLastMessages').doc(this.currentUser.uid).collection('allchats').doc(this.conversationId).set({ id: this.conversationId, uid: this.user.uid, name: this.user.name, lastMessage: msgData, createdAt: new Date(), order: -t.getTime()  })

        this.firestore.collection('userLastMessages')
            .doc(uid).collection('allchats')
            .doc(conversationId)
            .set({
                id: conversationId,
                image: this.currentUser.photos[0],
                uid: this.currentUser.uid,
                name: this.currentUser.name,
                lastMessage: msgData,
                createdAt: new Date(),
                order: -t.getTime(),
                read: false
            })

    }

    sendNotification(data) {
        let headers = new HttpHeaders({
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic Y2JlZGYwNDYtYWRjZS00YjI2LWFhMjUtZmY3YjA0NjY0MmEw"
        });

        let httpOptions = {
            headers: headers
        }

        // let options = new RequestOptions({ headers: headers });

        this.http.post('https://onesignal.com/api/v1/notifications', data, httpOptions)
            .subscribe(resp => {
                console.log(resp);
            }, err => {
                console.log(err);
            })
    };


}