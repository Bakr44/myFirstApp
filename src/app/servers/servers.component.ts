import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //         <app-server></app-server>
  //         <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServer: boolean = false;
  serverStatus: string = 'no Server crated'
  serverName = "Testserver";
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  // ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = 'server created Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
