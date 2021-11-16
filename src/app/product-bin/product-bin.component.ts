import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";
import { faShoppingCart, faList, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Data} from "../data";

@Component({
  selector: 'app-product-bin',
  templateUrl: './product-bin.component.html',
  styleUrls: ['./product-bin.component.css']
})
export class ProductBinComponent implements OnInit {
  faTrashAlt=faTrashAlt;
  public data: Array<any> = [];

  sender(){//send data to service
    this.myService.myMethod(this.toBuyList)
  }

  public constructor(private myService: ListService) {
    let tmp = localStorage.getItem('toBuyList')
    if (tmp != null || tmp != undefined){
      tmp = JSON.parse(tmp);
      this.toBuyList=tmp;
    }


    this.myService.myMethod$.subscribe((data) => {
        this.data = data;
        console.log('Prod-List response')
        console.log(data)
      }
    );


  }
  toBuyList:any=[];

  finalList:any=[]
  getDataFromStorage(){//get data from LocalStorage
    let tmp = localStorage.getItem('toBuyList')
    if (tmp != null || tmp != undefined){
      tmp = JSON.parse(tmp);
      this.toBuyList=tmp;
    }
  }
  totalPrice:any=[]

  parseData(){
    this.finalList=[];
    for(let p of this.toBuyList){
      for(let i of Data){
        if (p.id === i.id){
          this.finalList.push({id:i.id, name:i.name, label:i.label, price: i.price, quantity:p.quantity})
        }
      }
    }
    console.log(this.finalList)
    this.totalPrice=this.counter();
  }

  tmpIndex:number=0;

findAndDelete(id:number){
    for (let i=0; i<this.toBuyList.length; ++i){
      if (id == this.toBuyList[i].id){
        this.deleteElem(i);
        this.sender();
        return
      }
    }
}
deleteElem(index:number){
  this.toBuyList.splice(index, 1);
  localStorage.setItem('toBuyList', JSON.stringify(this.toBuyList))
  this.parseData();
}


counter(){
  let quantity=0, totalPrice=0;
  for (let p of this.finalList){
    quantity+=p.quantity;
    totalPrice+=p.quantity*p.price;
  }
  console.log(totalPrice)
  return[quantity, totalPrice];
}
clearAll(){
  this.toBuyList = []
  localStorage.setItem('toBuyList', JSON.stringify(this.toBuyList))
  this.parseData();
  this.sender();
}


  ngOnInit() {
    this.getDataFromStorage()
    this.parseData();
  }
}
