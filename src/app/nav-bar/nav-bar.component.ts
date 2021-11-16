import { Component, OnInit} from '@angular/core';
import { faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons';
import {ListService} from "../list.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  faList = faList;
  faShoppingCart = faShoppingCart;

  public data: Array<any> = [];

  prodCounter(){
    let tmp=0;
    for(let p of this.data){
      tmp+=p.quantity;
    }
    return tmp;
  }

  numOfProducts:number=0

  constructor(private myService: ListService) {
    this.myService.myMethod$.subscribe((data) => {
        this.data = data;
        console.log('navBar response')
        console.log(data)
        this.numOfProducts=this.prodCounter();

      }
    );
  }

  ngOnInit() {

  }
}
