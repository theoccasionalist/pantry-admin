import { Component, OnInit, OnDestroy } from '@angular/core';
import { PantryPanelService } from 'src/app/services/pantry-panel.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-pantry-overview',
  templateUrl: './pantry-overview.component.html',
  styleUrls: ['./pantry-overview.component.css']
})
export class PantryOverviewComponent implements OnInit, OnDestroy {
  loading = true;
  productPanelOpenState = false;
  shopPanelOpenState = false;
  subscription = new Subscription();
  typePanelOpenState = false;

  constructor(public pantryPanelService: PantryPanelService) { }

  ngOnInit() {
    this.subscription.add(
      this.pantryPanelService.getPanelOpenStates().subscribe((panelOpenStates) => {
        this.productPanelOpenState = panelOpenStates.get('product');
        this.typePanelOpenState = panelOpenStates.get('type');
        this.shopPanelOpenState = panelOpenStates.get('shop');
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
