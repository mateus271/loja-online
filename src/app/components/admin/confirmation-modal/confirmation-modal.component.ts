import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../../shared/interfaces/product.interface';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-confirmation-modal',
  standalone: false,
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  public confirmedDelete: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { productId: number, productName: string }, private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    private storeService: StoreService, private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log("nome produto", this.data.productName);
  }

  closeByBtn(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.confirmedDelete = true;
    this.dialogRef.close(this.confirmedDelete);
    this.snackBar.open('Produto excluído!', 'Fechar', {
      duration: 3000,
    });
  }
}
