import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit, OnDestroy {
  gotAllProducts() {
    this.router_.navigate(['allproducts']);
  }
  constructor(
    private router_: Router,
    private food_service: FoodService,
    private elementref: ElementRef
  ) {}

  ngOnDestroy(): void {
    window.scroll(0, 0);
  }

  gotoDetailPage(id: any) {
    if (id) {
      this.router_.navigateByUrl('/product-details/' + id);
    } else {
      alert('not able to find details');
    }
  }
  ngOnInit(): void {
    this.BannerCounterManupulation();
    this.getAllFoodFromService();
  }

  BannerCounterManupulation() {
    document.addEventListener('DOMContentLoaded', () => {
      function counter(id: any, start: any, end: any, duration: any) {
        let obj = document.getElementById(id) as HTMLElement;
        let current = start;
        let range = end - start;
        let incriment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {
          current += incriment;
          obj.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
      }
      counter('count1', 0, 1287, 3000);
      counter('count2', 100, 5786, 2000);
      counter('count3', 0, 1440, 3000);
      counter('count4', 0, 7100, 3000);
    });
  }

  foods: food[] = [];

  getAllFoodFromService() {
    this.foods = this.food_service.getAllFood();
  }
}
