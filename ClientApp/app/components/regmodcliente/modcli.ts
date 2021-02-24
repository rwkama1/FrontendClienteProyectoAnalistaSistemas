import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../../../../entidades/cliente';
import { ClienteService } from '../../../../servicio/cliente.service';
import { Http } from '@angular/http';


@Component({
    selector: 'modcli',
    templateUrl: './modcli.html'
})
export class ModCliComponent implements OnInit {
    model: any = {};

    modcliForm: FormGroup;
    cli = {} as Cliente;
    error = "";
    cliente = JSON.parse(localStorage['cliente']) as Cliente;

    get cedula() { return parseInt((<HTMLInputElement>document.getElementById("cedula")).value) };
    get nombre() { return ((<HTMLInputElement>document.getElementById("nombre")).value) };
    get direccion() { return (<HTMLInputElement>document.getElementById("direccion")).value };
    get tel() { return ((<HTMLInputElement>document.getElementById("telefono")).value) };
    get contraseña() { return ((<HTMLInputElement>document.getElementById("contraseña")).value) };

    constructor(public http: Http, private _router: Router, private _clienservice: ClienteService) {
     
    }
    ngOnInit() {
        if (this.cliente == null) {   
                this._router.navigate(['/logeo']);
        }
        else {
            this.modcliForm = new FormGroup
                (
                {
                    cedula: new FormControl(),
                    nombre: new FormControl(),
                    direccion: new FormControl(),
                    telefono: new FormControl(),
                    contraseña: new FormControl(),
                }
                );
            this.modcliForm.patchValue
                (

                {
                    cedula: this.cliente.CedulaCli,
                    nombre: this.cliente.NomCli,
                    direccion: this.cliente.DirCli,
                    telefono: this.cliente.telCli,
                    contraseña: this.cliente.PassCli,

                }
                )

        }



    }
    modificarCliente() {
        var ans = confirm("¿Esta seguro que desea modificar tus datos?");
        if (ans) {
       
            this.cliente.CedulaCli = this.cedula;
            this.cliente.NomCli = this.nombre;
            this.cliente.DirCli = this.direccion;
            this.cliente.telCli = this.tel;
            this.cliente.PassCli = this.contraseña;

            this._clienservice.modificarCliente(this.cliente).subscribe(() => { }

            )
            alert("Datos Modificados");
        }
    }
    logout() {
        this._clienservice.logout().subscribe(data => {
            localStorage.removeItem('cliente');
            this._router.navigate(['/home']);
        });
    }

}
