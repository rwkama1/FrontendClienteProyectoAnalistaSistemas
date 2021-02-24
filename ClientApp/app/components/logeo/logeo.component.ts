import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../../../servicio/cliente.service';
import { Cliente } from '../../../../entidades/cliente';
import { Http } from '@angular/http';

@Component({
    selector: 'logeo',
    templateUrl: './logeo.component.html'
})
export class LogeoComponent implements OnInit {

    model: any = {};

    titulo: string = "Logeo";
     error: string = "";


    get cedula() {  return parseInt ((<HTMLInputElement>document.getElementById("cedula")).value) };
    get pass() { return ((<HTMLInputElement>document.getElementById("pass")).value) };


    cliente = {} as Cliente;
   
    //private usuariol: Usuario ;


    constructor(public http: Http, private _router: Router, private _clientservice :ClienteService) {

    }
    ngOnInit() {

    }

    logeo() {
        this.metodologiar(this.cedula, this.pass)

    }
    metodologiar(cedula: number, pass: string) {//

        this._clientservice.getLogin(cedula, pass).subscribe(datacliente => {//
            this.cliente = datacliente;
            if (datacliente) {
                localStorage.setItem('cliente', JSON.stringify(this.cliente));
                this._router.navigate(['/modcli']);
            }
            if (datacliente == null) {

                alert("Cedula o contraseña incorrectas");

            }
        });
       }
}