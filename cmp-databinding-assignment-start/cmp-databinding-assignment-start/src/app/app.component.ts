import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intervals: number[] = []

  onGameStarted(data: {interval: number}) {
    this.intervals.push(data.interval)
  }

  onGameStopped(data: {}) {
    this.intervals = []
  }

}
