import { Component, OnInit, Input } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent implements OnInit {
    @Input() message: any= {};
    @Input() allMessage: any= [];
    @Input() user: any;
    image: boolean = false; 

  constructor(
  	public events: Events
  	) { }

  ngOnInit() {}


  scrollToBottom(){
  	this.events.publish('scrollToBottom')
  }

getClass(message, user){
  let index = this.allMessage.indexOf(message);
  // let a = this.allMessage.filter(res => res.)
  //console.log('message ',message)
  if(message.sender == user)
  {
    if(this.allMessage[index+1])
    {
   if(this.allMessage[index].sender == this.allMessage[index+1].sender)
     return 'rightb'
   else
      return 'right' 
    }
    else
    {
      return 'right' 
    }
  }
  else
  {
    if(this.allMessage[index+1])
    {
   if(this.allMessage[index].receiver == this.allMessage[index+1].receiver)
     return 'leftb'
   else
      return 'left' 
    }
    else
    {
      return 'left' 
    }
  }
}

}

