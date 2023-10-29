import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from 'src/app/shared/models/food';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  openalertmethod() {
    this.openalert = !this.openalert;
  }
  openalert = false;
  constructor(
    private router_: Router,
    private Activated_routes: ActivatedRoute,
    private food_service: FoodService,
    private cartService: CartService
  ) {}
  foods!: food;

  ngOnInit(): void {
    // window.scrollTo(0, 0);
    this.getIdFromRoutes();
  }

  gotoChekout() {
    this.router_.navigate(['chekout']);
  }

  getIdFromRoutes() {
    this.Activated_routes.params.subscribe((param) => {
      if (param['id']) {
        this.foods = this.food_service.getFoodById(param['id']);
      } else {
        alert('oops something went wrong');
        this.router_.navigate(['/']);
      }
    });
  }

  // imageSelect() {
  //   const imgs = Array.from(document.querySelectorAll('.img-select a'));
  //   const imgBtns = [...imgs];
  //   let imgId = 1;

  //   imgBtns.forEach((imgItem: any) => {
  //     imgItem.addEventListener('click', (event: any) => {
  //       event.preventDefault();
  //       imgId = imgItem.dataset.id;
  //       slideImag();
  //     });
  //   });

  //   let slideImag = () => {
  //     const displayWidth = document.querySelector(
  //       '.img-showcase img:first-child'
  //     ) as HTMLElement;
  //     const displayWidthClientwidth = displayWidth.clientWidth;

  //     const imgshowcase = document.querySelector(
  //       '.img-showcase'
  //     ) as HTMLElement;

  //     imgshowcase.style.transform = `translateX(${
  //       -(imgId - 1) * displayWidthClientwidth
  //     }px)`;
  //   };

  //   window.addEventListener('resize', slideImag);
  // }

  addToCart() {
    this.cartService.addToCart(this.foods);
    // this.router_.navigateByUrl('/cart-page');
  }
}
