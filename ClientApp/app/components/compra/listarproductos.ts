import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../../../entidades/producto';
import { ProdService } from '../../../../servicio/prod.service';
import { Http } from '@angular/http';



@Component({
    selector: 'listarproductos',
    templateUrl: './listarproductos.html'
})
export class ListarProductosComponent implements OnInit {
   
    public prodList: Producto[] | undefined;
    producto = {} as Producto;
    get criterio() { return ((<HTMLInputElement>document.getElementById("buscar")).value) };

    constructor(public http: Http, private _router: Router, private _prodservice: ProdService)
    {
        
    }
  
    ngOnInit()
    {
        this._prodservice.getlistarProductosConStock().subscribe(
            data => this.prodList = data
        )
           
    }
    seleccionarProduct(IdProduct:any) {
        this._prodservice.getProducto(IdProduct).subscribe(data => {
            this.producto = data;
            if (data) {
                localStorage.setItem('pr', JSON.stringify(this.producto));
                this._router.navigate(['/verproducto']);
            }

        });
    }
    buscarProducto() {
        this._prodservice.buscarProductosporCriterio(this.criterio).subscribe(
            data => this.prodList = data
        )
    }
}
