import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleProject';
  nextState='animated';
  animateSquare(state) {
    this.nextState = state;
  }
}
