import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  ngOnInit() {}
  @Input() recipe: Recipe
  @Output() itemSelected = new EventEmitter<Recipe>()
  
  onSelectItem() {
    this.itemSelected.emit(this.recipe)
  }

}
