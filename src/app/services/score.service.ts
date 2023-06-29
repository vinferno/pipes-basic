import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  points = 0;

  constructor() { }

  addPoint() {
    this.points++;
  }
  removePoint(){
    this.points--;
  }
}
