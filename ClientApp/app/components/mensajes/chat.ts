import { Component, OnInit, NgZone } from '@angular/core';
import { ChatMessage } from '../../../../entidades/ChatMessage';
import { Cliente } from '../../../../entidades/cliente';
import { Tab } from '../../../../entidades/Tab';
import { SignalRService } from '../../../../servicio/chat';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { Router } from '@angular/router';


@Component({
    selector: 'chat',
    templateUrl: './chat.html',

})
export class ChatComponent implements OnInit {
    
    hubConnection: HubConnection;
    cliente = JSON.parse(localStorage['cliente']) as Cliente;
    get message(): any {
        return ((<HTMLInputElement>document.getElementById("message")).value);
    }
    set message(value: any) {
        ((<HTMLInputElement>document.getElementById("message")).value) = value;
    }

    nick
    
    messages: string[] = [];
    constructor(private _router: Router) {
      
    }
    ngOnInit() {
        

        if (!this.cliente) {
            this._router.navigate(['/logeo']);
        }
        else {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl("http://signalrr-001-site1.atempurl.com/chat")
            .build();

        this.hubConnection 
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));

        this.hubConnection.on('ReceiveMessage', (nick: string, receivedMessage: string) => {
            const text = ` ${nick} dice: ${receivedMessage}`;
            this.messages.push(text);

            });
        }
    }
    public sendMessage(): void {
        this.hubConnection
            .invoke('SendMessage', this.cliente.NomCli, this.message)
            .catch(err => console.error(err));
        this.message = "";
    }

}