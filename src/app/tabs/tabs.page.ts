import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonTabs} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
	// @ViewChild(IonTabs, {static: false}) tabRef: IonTabs;
	activeTab: any = 2;

  constructor(public ngZone: NgZone) {
  }

    ngOnInit() {
    	let that = this;
	// this.ngZone.run(()=> that.tabRef.select('home'))
    }

tabSelect(tab){
	this.ngZone.run(()=> this.activeTab = tab)
	
	// console.log(tab)
}

getTabsClass(){
	if(this.activeTab == 2)
		return 'my-custom-tab-bar'
	else
		return 'default-tab-bar'
}

}
