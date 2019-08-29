import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model'
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'biryani',
      imageUrl: 'https://recipes.timesofindia.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
      ingredients:['potato', 'meat', 'spices', 'raita'],
    },
    {
      id: 'r2',
      title: 'Sandwich',
      imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Cobb-Salad-Club-Sandwich_EXPS_THAM19_233459_B11_09_2b.jpg',
      ingredients: ['bread', 'chickenspread'],
    }
  ];
  
  constructor() { }
  getAllRecipes(){
    return [...this.recipes] 
  }
  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe=>{
      return recipe.id===recipeId
    })}
  }
  deleteRecipe(recipeId:string){
      this.recipes = this.recipes.filter(recipe=>{
        return recipe.id!==recipeId
      })
  }
}
