import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipes-basic';
  currentTime = new Date();
  constructor(
    cd: ChangeDetectorRef,
  ) {
    setInterval(() => {
      this.currentTime = new Date();
      cd.detectChanges();
    }, 1000);
  }

}
