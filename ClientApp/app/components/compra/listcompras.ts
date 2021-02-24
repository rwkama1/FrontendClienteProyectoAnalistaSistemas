import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../../entidades/cliente';
import { Http } from '@angular/http';
import { CompraService } from '../../../../servicio/compra.service';



@Component({
    selector: 'listcomprascli',
    templateUrl: './listcompras.html'
})
export class ListComprasClient implements OnInit {
    compraslist
    //mensaje = {} as Mensaje;
    cli = JSON.parse(localStorage['cliente']) as Cliente;
    get fecha1() { return ((<HTMLInputElement>document.getElementById("fecha1")).value) };
    get fecha2() { return ((<HTMLInputElement>document.getElementById("fecha2")).value) };
    constructor(public http: Http, private _router: Router, private compraservice: CompraService) {
        if (this.cli == null) {
            this._router.navigate(['/logeo']);
        }
    }

    ngOnInit() {

        this.compraservice.listcomprascli(this.cli.CedulaCli).subscribe(
            data => this.compraslist = data
        )
    } 
  
    buscarCompra() {
        this.compraservice.listcomprasclifecha(this.cli.CedulaCli,this.fecha1,this.fecha2).subscribe(
            data => this.compraslist = data
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
