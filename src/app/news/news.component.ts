import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service: ServiceService) { }
  products:any[] = [];
  ngOnInit(): void {
    this.service.GetProducts().subscribe(product=>{this.products=product});
  }

}
