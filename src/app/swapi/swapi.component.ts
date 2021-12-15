import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css'],
})
export class SwapiComponent implements OnInit {
  films: any;
  fi: any;
  charg = true ;

  openDetails = new EventEmitter<String>();
  constructor(private swapi: SwapiService) {}

  ngOnInit() {
    this.swapi.getData().subscribe((data: any) => {
      this.films = data.results;
      this.charg = false;
    });
  }

  onClick(fi: any) {
    console.log(fi);
    //this.films =fi;
    this.openDetails = fi;
  }
}
