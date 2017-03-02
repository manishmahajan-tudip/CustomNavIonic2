import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  searchAction() {
    console.log("Page3 Search Action");
  }

  addAction() {
    console.log("Page3 Add Action");    
  }
}
