import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { food } from '../../models/food';
import { sample } from 'rxjs';
import { sample_food, sample_tags } from 'src/data';
import { Tag } from '../../models/tags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private Http_: HttpClient) {}

  getAllFood(): food[] {
    return sample_food;
  }

  getAllFoodBySearch(serchTerm: string): food[] {
    return sample_food.filter((food) =>
      food.name.toLocaleLowerCase().includes(serchTerm.toLocaleLowerCase())
    );
  }
  getFoodById(id: any): food {
    return this.getAllFood().find((food) => food.id == id) ?? new food();
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): food[] {
    return tag === 'all'
      ? this.getAllFood()
      : this.getAllFood().filter((el) => el.tags?.includes(tag));
  }
}
