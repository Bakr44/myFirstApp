import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId: number = 10;
    serverName: string = 'Blue';
    serverStatus: string = 'offLine';


    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'onfline' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }

    getServerName(): string {
        return this.serverName
    }

}