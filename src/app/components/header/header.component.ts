import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitems';
import { RoutercontrolService } from 'src/app/shared/routercontrol.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  gotoProductDetails() {
    this.router_.navigate(['product-details']);
  }
  constructor(
    private router_: Router,
    private roureroulet_: RoutercontrolService,
    private cartservice: CartService
  ) {}

  ngOnDestroy(): void {
    // window.location.reload();
  }

  goToCkeoutPage() {
    this.closeCartTab();
    this.router_.navigate(['chekout']);
  }
  isloginClickMethod() {}

  ngOnInit(): void {
    this.getcartquantity();
  }
  ngAfterViewInit(): void {
    console.log('iam firedddddddd');
    this.closeBurgerMenuOnLinkClick();
  }
  // /  make navbarSticky///////////////////////////////////
  @HostListener('window:scroll', [])
  onWindowScroll(event: Event) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector('.nevigation-wrap')?.classList.add('onscroll');
    } else {
      document.querySelector('.nevigation-wrap')?.classList.remove('onscroll');
    }
  }

  // closeBurgerMenuOnLinkClick////////////////////////////////////

  closeBurgerMenuOnLinkClick() {
    let allnavLinks = document.querySelectorAll('.nav-itemall');
    let navBarCollapse = document.querySelector('.navbar-collapse.collapse');
    allnavLinks.forEach((e) =>
      e.addEventListener('click', (onclick) =>
        navBarCollapse?.classList.remove('show')
      )
    );
  }

  clickonuserprofile() {
    // this.roureroulet_.sendrouterOutletControl(true);
    // this.isloginClick = false;
  }

  cart!: Cart;
  // quantityx = 1;
  cartquantity = 0;

  getcart() {
    // this.cart = this.cartservice.getCart();
    this.cartservice.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
  getcartquantity() {
    // this.cart = this.cartservice.getCart();
    this.cartservice.getCartObservable().subscribe((cart) => {
      this.cartquantity = cart.totalCount;
    });
  }

  removeItem(item: CartItem) {
    this.cartservice.removeFromCart(item.food.id);
  }

  incrigeQuantity(quantity: any, el: CartItem) {
    // quantity++;
    // this.quantityx += quantity;
    ++quantity;
    this.changeQuantity(el, quantity);
  }

  decreseQuantity(quantity: any, el: CartItem) {
    if (quantity === 1) {
      return;
    }

    // this.quantityx -= quantity;
    --quantity;
    this.changeQuantity(el, quantity);
  }
  // quantyselect: any;

  changeQuantity(cartItem: CartItem, quantityInString: any) {
    this.cartservice.changeQuantity(cartItem.food.id, quantityInString);
  }

  ShowCartTab() {
    this.getcart();

    const carttab = document.querySelector('.cartTab') as HTMLElement;

    if (carttab.classList.contains('cartTabShow')) {
      carttab.classList.remove('cartTabShow');
    } else {
      carttab.classList.add('cartTabShow');
    }
  }

  closeCartTab() {
    const carttab = document.querySelector('.cartTab') as HTMLElement;

    if (carttab.classList.contains('cartTabShow')) {
      carttab.classList.remove('cartTabShow');
    } else {
      return;
    }
  }
}
