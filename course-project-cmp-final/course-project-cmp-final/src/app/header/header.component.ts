import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() pageToggled = new EventEmitter<{page: string}>()

  togglePage(page: string) {
    this.pageToggled.emit({'page': page})
  }
}
