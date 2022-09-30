import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ServiceService } from '../service.service';
import { DataSource } from '@angular/cdk/collections';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  displayedColumns: string[] = ['No', 'Name','price', 'count','button'];
     
     @ViewChild(MatPaginator) private paginator !: MatPaginator; 
     dataSource: any =[];
  // dataSource = ELEMENT_DATA;
  

  constructor( private Service: ServiceService) { 
    
  }


  ngOnInit(): void {
    
    this.Service.GetProducts().subscribe(product=>{ this.dataSource = product;
    this.dataSource= new MatTableDataSource<any>(this.dataSource);
    
    this.dataSource.paginator = this.paginator;
  });
  


  }
  
  getrow(element:any){
    console.log(element);
  }
  
 
  applyFilter(event: Event) {
   
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
