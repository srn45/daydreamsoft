import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  constructor(private service: ServiceService) { }
  products:any[] = [];
  ngOnInit(): void {
    this.service.GetProducts().subscribe(product=>{this.products=product});
  }

}
