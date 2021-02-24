import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../../../../entidades/cliente';
import { Producto } from '../../../../entidades/producto';
import { LineaCompra } from '../../../../entidades/lineacompra';
import { CompraService } from '../../../../servicio/compra.service';
import { Http } from '@angular/http';



@Component({
    selector: 'ingresarcantidad',
    templateUrl: './ingresarcantidad.html'
})
export class IngresarCantidadComponent implements OnInit {
  
    cliente = JSON.parse(localStorage['cliente']) as Cliente;
    producto = JSON.parse(localStorage['pr']) as Producto;
    linea = {} as LineaCompra;
    prodForm: FormGroup;
    
    
    get idprod() { return parseInt((<HTMLInputElement>document.getElementById("idprod")).value) };
    get nomprod() { return parseInt((<HTMLInputElement>document.getElementById("nomprod")).value) };
    get ingcantidad() { return parseInt((<HTMLInputElement>document.getElementById("ingcantidad")).value) };
    

    constructor(public http: Http,  private _router: Router, private _fcservice: CompraService) {
      
    }
    ngOnInit(): void {

        if (this.cliente == null) {
            this._router.navigate(['/logeo']);
        }
        else {

            this.prodForm = new FormGroup
                (
                {
                    idprod: new FormControl(),
                    nomprod: new FormControl(),

                }
                );
            this.prodForm.patchValue
                (

                {
                    idprod: this.producto.IdProducto,
                    nomprod: this.producto.NomProd,


                }
                )
        }
      
    }
    registrarProd() {

        if (this.ingcantidad > this.producto.StockProd) { alert("La cantidad ingresada es mayor al stock del producto") }
        if (this.ingcantidad < this.producto.StockProd) {
        this._fcservice.registrarLineaCompra(this.idprod, this.ingcantidad).subscribe(datafc => {
            this.linea = datafc;
            var ans = confirm("Producto registrado.....¿Desea registrar mas productos a la solicitud de compra?");
            if (ans) {
                this._router.navigate(['/listarproductos']);
            }
            if (!ans) {
                this._router.navigate(['/cerrarcompraa']);
            }
            })
        }
    }
    volver()
    {
            this._router.navigate(['/listarproductos']);
    }
   


}
