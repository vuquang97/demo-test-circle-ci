import { Injectable, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Hero } from './heros';
import { listHero } from './mock-heroes';
import { MessagesService } from './messages.service';
// import { HttpClient } from '@angular/common/http';
// import * as dataJs from '../../users';

// let vla = require('../../users.json');

@Injectable({
  providedIn: 'root'
})

export class HeroService implements OnInit {

  // jsonData: any = [];

  getHeros(): Observable<Hero[]> {
    this.messagesService.add('fetch hero complete');
    return of(listHero);
  }

  getHeroById(id: any): Observable<Hero> {
    console.log(id)
    return of(listHero.find(el => el.id == id));
  }

  // getJsonData(): Observable<any> {
  //   // return this.http.get('../../users.json');
  // }

  constructor(
    public messagesService: MessagesService,
    // public http: HttpClient
  ) {}

  ngOnInit() {
    // this.getJsonData().subscribe(vl => this.jsonData.push(vl));
    // console.log(vla)
  }
}
