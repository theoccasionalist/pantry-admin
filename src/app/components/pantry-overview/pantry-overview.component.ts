import { Component, OnInit } from '@angular/core';
import { PantryPanelService } from 'src/app/services/pantry-panel.service';

@Component({
  selector: 'app-pantry-overview',
  templateUrl: './pantry-overview.component.html',
  styleUrls: ['./pantry-overview.component.css']
})
export class PantryOverviewComponent implements OnInit {
  loading = true;
  productPanelOpenState = false;
  shopPanelOpenState = false;
  typePanelOpenState = false;

  constructor(public pantryPanelService: PantryPanelService) { }

  ngOnInit() {
    this.pantryPanelService.getPanelOpenStates().subscribe((panelOpenStates: Map<string, boolean>) => {
      this.productPanelOpenState = panelOpenStates.get('product');
      this.typePanelOpenState = panelOpenStates.get('type');
      this.shopPanelOpenState = panelOpenStates.get('shop');
      this.loading = false;
    });
  }
}
