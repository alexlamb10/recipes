import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRecipesService } from '../get-recipes.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent {
  meal$: BehaviorSubject<any> = new BehaviorSubject<any>([])
ingredient: any;

  constructor(private _route: ActivatedRoute, private _meals: GetRecipesService) { }
  id = this._route.snapshot.params['id'];

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this._meals.getRecipeById(id).pipe(
      ).subscribe(list => this.meal$.next(list));
        console.log(this.meal$)
    }
}
