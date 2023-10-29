import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnDestroy, OnInit {
  constructor(private router_: Router, private food_service: FoodService) {}

  foods: food[] = [];

  getAllFoodFromService() {
    this.foods = this.food_service.getAllFood();
  }

  ngOnInit(): void {
    this.getAllFoodFromService();
  }

  ngOnDestroy(): void {
    window.location.reload();
  }
  gotoDetailPage(id: any) {
    this.router_.navigateByUrl('/product-details/' + id);
  }
}
