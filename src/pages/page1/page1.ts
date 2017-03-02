import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2Page } from '../../pages/page2/page2';

/*
  Generated class for the Page1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  goToPage2() {
    this.navCtrl.push(Page2Page);
  }

  searchAction() {
    console.log("Page1 Search Action");
  }

  addAction() {
    console.log("Page1 Add Action");    
  }
}
