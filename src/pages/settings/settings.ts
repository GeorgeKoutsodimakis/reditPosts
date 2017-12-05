import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReditService } from '../../app/services/redit.service';
import { ReditsPage } from '../redits/redits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
category:any;
limit:any;

  constructor(public navCtrl: NavController,private reditService: ReditService) {
      this.getDefaults();
  }

  getDefaults(){
    if(localStorage.getItem('category') !=null){
      this.category = localStorage.getItem('category');
    }else{
      this.category = 'sports';
    }
    if(localStorage.getItem('limit') !=null){
      this.limit = localStorage.getItem('limit');
    }else{
      this.limit = 10;
    }

  }

  setDefaults(){
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    this.navCtrl.push(ReditsPage);
  }





}
