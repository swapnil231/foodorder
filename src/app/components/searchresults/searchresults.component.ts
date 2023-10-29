import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss'],
})
export class SearchresultsComponent implements OnInit {
  gotoHomepage() {
    this.router_.navigate(['/']);
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private food_service: FoodService,
    private router_: Router
  ) {}

  ngOnInit(): void {
    this.getSerchTerm();
  }
  foods: food[] = [];
  noresultfound = false;

  getSerchTerm() {
    this.activeRoute.params.subscribe((params) => {
      if (params['serchTerm']) {
        this.foods = this.food_service.getAllFoodBySearch(params['serchTerm']);
      }
      if (params['tag']) {
        this.foods = this.food_service.getAllFoodsByTag(params['tag']);
      }

      if (this.foods.length == 0) {
        this.noresultfound = true;
      }
    });
  }

  gotoDetailPage() {
    this.router_.navigate(['product-details']);
  }
  gotAllProducts() {
    this.router_.navigate(['allproducts']);
  }
}
