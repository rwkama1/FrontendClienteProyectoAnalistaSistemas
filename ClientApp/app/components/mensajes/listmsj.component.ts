import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../../entidades/cliente';
import { MensajeService } from '../../../../servicio/mensaje.service';
import { Mensaje } from '../../../../entidades/mensaje';
import { Http } from '@angular/http';



@Component({
    selector: 'listmsj',
    templateUrl: './listmsj.component.html'
})
export class ListmsjComponent implements OnInit {
    public msjList: Mensaje[] | undefined;
    //mensaje = {} as Mensaje;
    cli = JSON.parse(localStorage['cliente']) as Cliente;
    constructor(public http: Http, private _router: Router, private _msjservice: MensajeService) {
        if (this.cli == null) {
            this._router.navigate(['/logeo']);
        }
    }

    ngOnInit() {
      
       this._msjservice.getMensajesClientes(this.cli.CedulaCli).subscribe(
           data => this.msjList = data
        )
    } 
    //seleccionarMensaje(IdMensaje)
    //{
    //    this._msjservice.getMensaje(IdMensaje).subscribe(data => {
    //        this.mensaje = data;
    //        if (data) {
    //            localStorage.setItem('mensaje', JSON.stringify(this.mensaje));
    //            this._router.navigate(['/respmsj']);
    //        }
           
    //    });
    //}


}
