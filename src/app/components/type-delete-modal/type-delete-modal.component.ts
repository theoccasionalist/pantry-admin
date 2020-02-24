import { Component, OnInit, Inject } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/models/type.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-type-delete-modal',
  templateUrl: './type-delete-modal.component.html',
  styleUrls: ['./type-delete-modal.component.css']
})
export class TypeDeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TypeDeleteModalComponent>, @Inject (MAT_DIALOG_DATA) public type: Type,
              private dataService: DataService, private router: Router, private snackBar: MatSnackBar,
              private typeService: TypeService) { }

  ngOnInit() {}

  private deleteType() {
    this.typeService.deleteType(this.type._id).subscribe((response: any) => this.showResponseStatus(response.status));
  }

  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  onProceedClick() {
    this.deleteType();
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  private showResponseStatus(status: number) {
    if (status === 200) {
      this.snackBar.open(`${this.type.typeName} successfully deleted.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
    } else {
      this.snackBar.open(`${this.type.typeName} failed to delete.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
    }
    this.dataService.updateTypes();
    this.dataService.updateShop();
    this.dataService.updateProducts();
  }
}
