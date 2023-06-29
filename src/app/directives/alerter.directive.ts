import { Directive, HostListener } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Directive({
  selector: '[appAlerter]'
})
export class AlerterDirective {

  @HostListener('click') addPoint() {
    this.scoreService.addPoint();

  }
  constructor(
    private scoreService: ScoreService
  ) { }

}
