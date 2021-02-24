import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto } from '../../../../entidades/producto';
import { ProdService } from '../../../../servicio/prod.service';
import { CompraService } from '../../../../servicio/compra.service';
import { Http } from '@angular/http';


@Component({
    selector: 'verproducto',
    templateUrl: './verproducto.html'
})
export class VerProductoComponent implements OnInit {

 
    verpForm: FormGroup;
 

    producto = JSON.parse(localStorage['pr']) as Producto;
    

    
    

    constructor(public http: Http, private _router: Router, private prodervice: ProdService, private compraservice: CompraService) {
        this.verpForm = new FormGroup
            (
            {
                IdProducto: new FormControl(),
                NomProd: new FormControl(),
                DescProd: new FormControl(),
                PrecioProd: new FormControl(),
                CatProd: new FormControl(),
                StockProd: new FormControl(),
              
               
                
            }
        );
        this.verpForm.patchValue
            (

            {
                    IdProducto: this.producto.IdProducto,
                    NomProd: this.producto.NomProd,
                    DescProd: this.producto.DescProd,
                    PrecioProd:"$"+this.producto.PrecioProd,
                    CatProd: this.producto.CatProd,
                    StockProd: this.producto.StockProd,
                 
                    
            }
            )

    }
    ngOnInit() {


    }
    registrarProducto()
    {        
        this._router.navigate(['/ingresarcantidad']);   
    }
   
   

}
