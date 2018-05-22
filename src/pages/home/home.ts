import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public plt: Platform) {


    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      let payload ={
        appId       : "<Your App Id>",
        appKey      : "<Your App Key>"
      };
if(window.fcWidget){
  window.fcWidget.init(payload);
}else{
  window.fcSettings = payload;

}
      ((window as any).Freshchat).init();
      // Platform now ready, execute any required native code
    });

    // document.addEventListener("deviceready", function(){
    //   // Initialize Freshchat with your AppId & AppKey from your portal https://web.Freshchat.com/settings/apisdk 
    //   window.Freshchat.init({
    //     appId       : "<Your App Id>",
    //     appKey      : "<Your App Key>"
    //   });
    // });

    document.addEventListener("deviceready", function(){
      console.log('im here')
      // Initialize Freshchat with your AppId & AppKey from your portal https://web.Freshchat.com/settings/apisdk 
      
    });
    

    


    

  }

}
