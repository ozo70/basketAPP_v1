import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../category/service/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories: Category[];
  selectedCategory: Category;

  getCategories(){
    this.categoryService.getCategories().subscribe(response => this.categories = response);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      console.log(category);
      console.log(this.selectedCategory.id)
    } else {
      this.selectedCategory == null;
    }
  }

  onSelectTest(category?: Category){
    console.log(this.selectedCategory);

  }

}
