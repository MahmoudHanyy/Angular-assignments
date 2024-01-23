import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonString: string = 'Show'
  isHidden: boolean = true
  clickLog = []
  paragraphBackgroundColor = 'white'

  onButtonClick(event: Event) {
    this.updateLog()
    this.toggleButton(event)
  }
  updateLog() {
    const now = new Date();
    this.clickLog.push({
      'buttonState': this.buttonString,
      'timestamp': now
    })
  }
  toggleButton(event: Event){
    this.isHidden = !this.isHidden
    this.buttonString = this.isHidden ? 'Show' : 'Hide'
  }
}
