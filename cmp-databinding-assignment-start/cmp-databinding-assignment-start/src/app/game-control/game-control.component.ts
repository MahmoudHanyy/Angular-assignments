import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  interval: number = 0
  intervalIncrement: ReturnType<typeof setInterval>
  @Output() gameStarted = new EventEmitter<{interval: number}>()
  @Output() gameStopped = new EventEmitter<{}>()

  startGame() {
    this.intervalIncrement = setInterval(() => {
      this.gameStarted.emit({'interval': this.interval})
      this.interval++ 
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalIncrement)
  }

  clearGame(){
    this.interval = 0
    this.stopGame()
    this.gameStopped.emit({})
  }
}
