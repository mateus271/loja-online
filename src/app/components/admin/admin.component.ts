import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { StoreService } from '../../services/store.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  public productsArray: Product[] = [];
  public colunasTabela: string[] = ['nome', 'descricao', 'categoria', 'preco', 'excluir'];

  constructor(private storeService: StoreService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.storeService.getProducts().subscribe(products => {
      this.productsArray = products;
    });
  }

  public deleteProduct(productId: number, productName: string): void {
    const deleteProductDialog = this.matDialog.open(ConfirmationModalComponent, {
      width: '300px',
      height: '250px',
      data: {
        productId,
        productName
      }
    });

    deleteProductDialog.afterClosed().subscribe((confirmedDeletion: boolean) => {
      if (confirmedDeletion) {
        this.confirmProductExclusion(productId);
      }
    });
  }

  private confirmProductExclusion(productId: number) {
    this.storeService.deleteProduct(productId).subscribe({
      next: (deletedProduct) => {
        const deletedProductIndex = this.productsArray.findIndex(product => product.id === deletedProduct.id);
        this.productsArray.splice(deletedProductIndex, 1);
        this.table.renderRows();
      },
      error: (err) => {
        console.error("Erro ao deletar produto:", err);
      }
    });
  }
}
