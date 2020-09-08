import {Component, Input} from '@angular/core';
import {Hero} from '../common/models/hero';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    hero1: Hero;

    hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() {}

}
