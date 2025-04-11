import { Component, OnInit } from '@angular/core';
import { brand } from '../../../shared/interfaces/brands';
import { BrandsService } from '../../../shared/services/brands/brands.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-brands',
  imports: [UpperCasePipe],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{
brandsList!:brand[];

constructor(private _BrandsService:BrandsService){}

ngOnInit(): void {
this.getAllBrands();
}

getAllBrands(){
this._BrandsService.getAllBrands().subscribe({
  next: (res) => {
    this.brandsList = res.data
    console.log(this.brandsList);
  }
})
}
}
