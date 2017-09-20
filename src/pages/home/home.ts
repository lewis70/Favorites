import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [
      {
        imgPath: "bfdogs.jpg",
        title: "These are my dogs.",
        desc: "This is Gypsy and Jema.",
        favorited: false
      },
      {
          imgPath: "dog.jpg",
          title: "This is my puppy.",
          desc: "This is Buddy.",
          favorited: false
      },
      {
          imgPath: "gsdog.jpg",
          title: "This is my puppy.",
          desc: "This is Max.",
          favorited: false
      }
  ]
  constructor(public navCtrl: NavController) {

  }

  clickFav(card) {
    let index = this.cards.indexOf(card);

    if(index > -1){
      if(card.favorited){
        this.cards[index].favorited = false;
      }else{
          this.cards[index].favorited = true;
      }
    }
  }

}
