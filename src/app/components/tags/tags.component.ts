import { Component } from '@angular/core';
import { Tag } from 'src/app/shared/models/tags';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  tags?: Tag[];

  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
