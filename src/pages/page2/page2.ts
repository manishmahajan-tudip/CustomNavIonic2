import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3Page } from '../../pages/page3/page3';

/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  goToPage3() {
    this.navCtrl.push(Page3Page);
  }

  searchAction() {
    console.log("Page2 Search Action");
  }

  addAction() {
    console.log("Page2 Add Action");    
  }
}
