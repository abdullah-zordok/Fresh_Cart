import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../shared/services/orders/orders.service';
import { DatePipe } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-allorders',
  imports: [DatePipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit{
  userId:string='';
  data!:any[];
  isEmpty:boolean=true
  constructor(private _OrdersService:OrdersService){}
  
  ngOnInit(): void {
    this.getUserOrders();
    setTimeout(() => {
      this.getUserOrders(); 
    }, 500);
  }
  
  getUserOrders() {
   
    if(typeof localStorage != 'undefined'){
      const token = localStorage.getItem('userToken') || '';
    if (token) {
      const decoded: any = jwtDecode(token);
      this.userId = decoded.id;
    }
  
    this._OrdersService.getUserOrders(this.userId || '').subscribe({
      next: (res) => {
        this.isEmpty = false;
        this.data = res;
        console.log(this.data);
      },
    });
  }
  
  
  }
}
