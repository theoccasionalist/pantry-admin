import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('hello');
    this.dataService.updateShop();
    this.dataService.updateProducts();
    this.dataService.updateTypes();
  }

}
