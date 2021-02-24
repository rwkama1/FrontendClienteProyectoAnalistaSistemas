import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../../../../entidades/mensaje';
import { Cliente } from '../../../../entidades/cliente';
import { MensajeService } from '../../../../servicio/mensaje.service';
import { Http } from '@angular/http';


@Component({
    selector: 'envmsj',
    templateUrl: './envmsj.html'
})
export class EnvMsjComponent implements OnInit {
    mensaje = {} as Mensaje;
  
  
    cliente = JSON.parse(localStorage['cliente']) as Cliente;

    get ComentarioMens() { return ((<HTMLInputElement>document.getElementById("ComentarioMens")).value) };
    
  
    constructor(public http: Http, private _router: Router, private _msjservice: MensajeService) {
        if (this.cliente == null) {
            this._router.navigate(['/logeo']);
        }
    }
    ngOnInit() {
      

    }
    enviarMensaje() {
     
            this.mensaje.ComentarioMens = this.ComentarioMens;
            this.mensaje.Clicom = this.cliente.CedulaCli
            this._msjservice.enviarMensaje(this.mensaje).subscribe(() => { }

        )
    
      

          alert("Su mensaje fue enviado,en breve le responderan....");
            
        }

}
