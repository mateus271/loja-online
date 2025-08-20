import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public searchValue: string = "";
  public itemsInCart: number = 0;
  public isBadgeHidden: boolean = true;

  public handleKeydown($event: Event) {
    setTimeout(() => {
      // this.shopService.changeSearchParam(($event.target as HTMLInputElement).value);
    }, 200)
  }
}
