import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenTaller } from '../../../../entidades/ordentaller';
import { Cliente } from '../../../../entidades/cliente';
import { OrdenTallerService } from '../../../../servicio/ordetntallerservice';
import { Http } from '@angular/http';


@Component({
    selector: 'listarordenestaller',
    templateUrl: './listarordenestaller.html'
})
export class ListarOrdenTallerComponent implements OnInit {

    ordenList: OrdenTaller[]
    ordentaller: OrdenTaller
    cliente = JSON.parse(localStorage['cliente']) as Cliente;

    constructor(public http: Http, private _router: Router,private  _otservice: OrdenTallerService) {
       
    }

    ngOnInit() {
        if (this.cliente == null) {
            this._router.navigate(['/logeo']);
        }
        else {
        this._otservice.ListarOrdenTallerCliente(this.cliente.CedulaCli).subscribe(
            data => this.ordenList = data
        )
        }
    }
    seleccionarOrdenTaller(IdOrden: any) {
        this._otservice.SeleccionarOrdenTaller(IdOrden).subscribe(data => {
            this.ordentaller = data;
            if (data) {
                localStorage.setItem('ordenseleccionada', JSON.stringify(this.ordentaller));       
                this._router.navigate(['/verordentaller']);
            }

        });
    }
}
