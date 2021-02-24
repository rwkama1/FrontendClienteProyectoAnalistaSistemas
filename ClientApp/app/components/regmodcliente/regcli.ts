import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ClienteService } from '../../../../servicio/cliente.service';
import { Cliente } from '../../../../entidades/cliente';
import { Http } from '@angular/http';

@Component({
    selector: 'regcli',
    templateUrl: './regcli.html'
})
export class RegCliComponent implements OnInit {
    cliexist
    cliente = {} as Cliente;
    error = "";
   regcliForm: FormGroup | undefined;

    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get direccion() { return (<HTMLInputElement>document.getElementById("direccion")).value };
    get tel() { return ((<HTMLInputElement>document.getElementById("telefono")).value) };
    get contraseña() { return ((<HTMLInputElement>document.getElementById("pass")).value) };
    constructor(public http: Http, private _router: Router, private _cliservice: ClienteService) {
      
    }
    ngOnInit() {
      


    }
    registrarCliente() {
        this._cliservice.getCliente(this.cedula).subscribe(datacliente => {//
            this.cliexist = datacliente;
            if (datacliente) {
                alert("La cedula del cliente ya existe en el sistema")
            }
            if (datacliente==null)
            {


                this.cliente.CedulaCli = this.cedula;
                this.cliente.NomCli = this.nombre;
                this.cliente.DirCli = this.direccion;
                this.cliente.telCli = this.tel;
                this.cliente.PassCli = this.contraseña;

                this._cliservice.agregarCliente(this.cliente).subscribe(() => { }

                )
                alert("Su registro se completo con exito")
            }
           
        });
      
        }
    
}
