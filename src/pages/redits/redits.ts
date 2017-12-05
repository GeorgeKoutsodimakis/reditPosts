import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReditService } from '../../app/services/redit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'redits',
  templateUrl: 'redits.html'
})
export class ReditsPage {
items:any;
category:any;
limit:any;

  constructor(public navCtrl: NavController,private reditService: ReditService) {
      this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.category,this.limit);
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

  getPosts(category,limit){
    this.reditService.getPosts(category,limit).subscribe(response =>{
      this.items = response.data.children;
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage,{item:item});
  }

  changeCategory(){
    this.getPosts(this.category,this.limit);

  }

}
