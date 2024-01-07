import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() appName: string;
  searchQuery: string;
  searchTerm = '';

  public faUser: IconDefinition = faUser;
  public faShoppingCart: IconDefinition = faShoppingCart;

  clearSearch() {
    this.searchQuery = '';
  }

  search() {
    // Add your search logic here
  }

  openAccount() {
    // Add your account logic here
  }

  openCart() {
    // Add your cart logic here
  }
}
