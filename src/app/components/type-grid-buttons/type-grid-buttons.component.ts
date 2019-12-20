import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TypeDeleteModalComponent } from '../type-delete-modal/type-delete-modal.component';

@Component({
  selector: 'app-type-grid-buttons',
  templateUrl: './type-grid-buttons.component.html',
  styleUrls: ['./type-grid-buttons.component.css']
})
export class TypeGridButtonsComponent implements OnInit {
  data: any;
  params: any;

  constructor(private dialog: MatDialog, private router: Router) { }

  agInit(params) {
    this.data =  params.data;
  }

  ngOnInit() {}

  onDeleteClick() {
    this.dialog.open(TypeDeleteModalComponent, {
      data: this.data,
      disableClose: true,
      panelClass: ['delete-dialog-container'],
      width: '34rem'
    });
  }

  onEditClick() {
    this.router.navigate(['/type', this.data._id]);
  }
}
