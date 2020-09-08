import { Component, OnInit } from '@angular/core';
import { HeroProxyService} from '../common/service/heroProxy.service';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../common/models/hero';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  public selectedHero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroProxyService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.selectedHero = hero);
  }
}
