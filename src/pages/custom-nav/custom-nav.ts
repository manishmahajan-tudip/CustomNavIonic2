import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CustomNav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-custom-nav',
  templateUrl: 'custom-nav.html',
  inputs: ['component', 'showBack', 'showSearch', 'showLogo', 'title', 'showAdd', 'showTitle'],
  outputs: ['homeSearchClick', 'page1SearchClick', 'page2SearchClick', 'page3SearchClick', 'homeAddClick', 'page1AddClick', 'page2AddClick', 'page3AddClick']
})
export class CustomNavPage {

  component: string;
  homeSearchClick:EventEmitter<string> = new EventEmitter<string>();
  page1SearchClick:EventEmitter<string> = new EventEmitter<string>();
  page2SearchClick:EventEmitter<string> = new EventEmitter<string>();
  page3SearchClick:EventEmitter<string> = new EventEmitter<string>();
  homeAddClick:EventEmitter<string> = new EventEmitter<string>();
  page1AddClick:EventEmitter<string> = new EventEmitter<string>();
  page2AddClick:EventEmitter<string> = new EventEmitter<string>();
  page3AddClick:EventEmitter<string> = new EventEmitter<string>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomNavPage');
  }

  backAction() {
    this.navCtrl.pop();
  }

  searchAction() {
    switch (this.component) { 
      case'Home': 
        this.homeSearchClick.emit();
        break; 
      case'Page1': 
        this.page1SearchClick.emit();
        break; 
      case'Page2': 
        this.page2SearchClick.emit();
        break; 
      default: 
        this.page3SearchClick.emit();
    } 
  }

  addAction() {
    switch (this.component) { 
      case'Home': 
        this.homeAddClick.emit();
        break; 
      case'Page1': 
        this.page1AddClick.emit();
        break; 
      case'Page2': 
        this.page2AddClick.emit();
        break; 
      default: 
        this.page3AddClick.emit();
    } 
  }
}
