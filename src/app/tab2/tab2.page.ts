import {Component, Input} from '@angular/core';
import {HEROES} from '../common/mocked/MockHeroes';
import {Hero} from '../common/models/hero';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  heroes = HEROES;
  selectedHero: Hero;


  @Input() hero: Hero;

  constructor(private router: Router) {}

  baseRoute = this.router.url;
}
