import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://www.swr.de/wissen/1713267907601%2Carmutsfolge-viele-familien-koennen-sich-gesundes-essen-nicht-mehr-leisten-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
