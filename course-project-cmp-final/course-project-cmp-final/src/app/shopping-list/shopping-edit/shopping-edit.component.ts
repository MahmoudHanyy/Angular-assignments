import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ngOnInit() {}

  @ViewChild('nameInput', {'static': false}) nameInputRef: ElementRef
  @ViewChild('amountInput', {'static': false}) amountInputRef: ElementRef
  @Output() elementAdded = new EventEmitter<Ingredient>()

  addElement() {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
    )
    this.elementAdded.emit(ingredient)
  }

}
