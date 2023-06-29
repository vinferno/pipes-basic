import { Pipe, PipeTransform } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {

    const hour = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();
    // return `${(hour % 12 + '').padStart(2, '0') }:${(minutes + '').padStart(2, '0')}:${(seconds + '').padStart(2, '0')}`;
    return this.scoreService.points;
  }
  constructor(
    private scoreService: ScoreService
  ) { }

}
