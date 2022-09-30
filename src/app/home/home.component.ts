import { Component, OnInit } from '@angular/core';
import { AaplService } from '../aapl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private fakestore:AaplService) { }
  categories:any[] = [];
  
  ngOnInit(): void {
    this.fakestore.GetCategories().subscribe(category=> this.categories = category );
  }

}
