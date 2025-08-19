import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public searchValue: string = "";
  public itemsInCart: number = 0;
  public isBadgeHidden: boolean = true;

  public handleKeydown($event: Event) {
    setTimeout(() => {
      // this.shopService.changeSearchParam(($event.target as HTMLInputElement).value);
    }, 200)
  }
}
