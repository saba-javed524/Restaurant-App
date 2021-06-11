import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created yet.';
  theInput = '';
  username = '';
  ngOnInit(): void {}
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onServerCreation() {
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
}
