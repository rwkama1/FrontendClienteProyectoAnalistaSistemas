import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../../entidades/cliente';
import { Http } from '@angular/http';
import { CompraService } from '../../../../servicio/compra.service';



@Component({
    selector: 'listventasc',
    templateUrl: './listarventas.html'
})
export class ListarVentasCliComponent implements OnInit {
    compraslist
    //mensaje = {} as Mensaje;
    venta
    cli = JSON.parse(localStorage['cliente']) as Cliente;
 
    constructor(public http: Http, private _router: Router, private compraservice: CompraService) {
        if (this.cli == null) {
            this._router.navigate(['/logeo']);
        }
    }

    ngOnInit() {

        this.compraservice.listventacli(this.cli.CedulaCli).subscribe(
            data => this.compraslist = data
        )
    } 
    seleccionarV(IdV: any) {
        this.compraservice.getVenta(IdV).subscribe(data => {
            this.venta = data;
            if (data) {
                localStorage.setItem('clienteVE', JSON.stringify(this.venta));
                this._router.navigate(['/vercliventa']);
            }

        });
    }
  
    //buscarCompra() {
    //    this.compraservice.listcomprasclifecha(this.cli.CedulaCli,this.fecha1,this.fecha2).subscribe(
    //        data => this.compraslist = data
    //    )
    //}
 


}
