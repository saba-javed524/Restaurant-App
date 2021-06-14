import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      .white-color {
        color: white;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  showDetail = false;
  serverCreationStatus = 'No server created yet.';
  theInput = '';
  username = '';
  serverCreated = false;
  details = '';
  serversList = [];
  log = [];

  ngOnInit(): void {}
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onServerCreation() {
    this.serverCreated = true;
    this.serversList.push(this.serverCreated);
    this.serverCreationStatus =
      'YES! Server was created. And, its name is ' + this.theInput;
  }
  onAddingInput(event: Event) {
    this.theInput = (<HTMLInputElement>event.target).value;
  }
  onAddingUserName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onClickReset() {
    this.username = '';
  }

  displayDetails() {
    this.details = 'This is my password : Tuna';
  }
  showDetails() {
    this.showDetail = !this.showDetail;
    this.log.push(this.log.length + 1);
  }
}
