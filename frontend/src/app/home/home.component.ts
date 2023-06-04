import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRecipesService } from '../get-recipes.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() mealsList: any[] = []

  
  constructor(private _route: ActivatedRoute, private _meals: GetRecipesService) { }

  ngOnInit(): void {
    this._meals.getMeals().pipe(
      ).subscribe(list => this.mealsList = list)
  }

  image = "../assets/italian-chicken.avif"
}
