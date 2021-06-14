import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
      .offline {
        color: blue;
      }
    `,
  ],
})
export class ServerComponent {
  serverIDOne: number;
  serverIDTwo: number;
  serverStatusOne = '';
  serverStatusTwo = '';

  constructor() {
    this.serverStatusOne = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverStatusTwo = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverIDOne = Math.random();
    this.serverIDTwo = Math.random();
  }

  getServerStatusOne() {
    return this.serverStatusOne;
  }
  getServerStatusTwo() {
    return this.serverStatusTwo;
  }
  getColorOne() {
    return this.serverStatusOne === 'online' ? 'green' : 'red';
  }
  getColorTwo() {
    return this.serverStatusTwo === 'online' ? 'green' : 'red';
  }
}
