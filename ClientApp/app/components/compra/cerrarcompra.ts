import { Component, Inject, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';



import { FormGroup, FormControl } from '@angular/forms';


import { CompraService } from '../../../../servicio/compra.service';
import { Compra } from '../../../../entidades/compra';
import { Cliente } from '../../../../entidades/cliente';
import { Http } from '@angular/http';



@Component({
    selector: 'cerrarcompraa',
    templateUrl: './cerrarcompraa.html'
})
export class CerrarCompraaComponent implements OnInit {
    cerrarForm
    fc 
   
    clienteLOG = JSON.parse(localStorage['cliente']) as Cliente;
 
    cedula = this.clienteLOG.CedulaCli;
    get metodopago() { return ((<HTMLInputElement>document.getElementById("metodopago")).value) };
    get cliente() { return parseInt((<HTMLInputElement>document.getElementById("clientecedula")).value) };
    get formaentrega() { return ((<HTMLInputElement>document.getElementById("formaentrega")).value) };
    constructor(public http: Http, private _router: Router, private _fact: CompraService) {
      
    }

   ngOnInit() {
       this.cerrarForm = new FormGroup
           (
           {
               clientecedula: new FormControl(),
             

           }
           );
       this.cerrarForm.patchValue
           (

           {
                   clientecedula: this.cedula,
                  

           }
           )
    }
    cerrarcompra()
    {
        this._fact.cerrarCompra(this.formaentrega, this.metodopago,this.cliente).subscribe(datafc => {
            this.fc = datafc;
            localStorage.setItem('Compra', JSON.stringify(this.fc));
            if (datafc) {
                this._router.navigate(['/vercompraa']);
            }
        });
    }
    volver()
    {
        this._router.navigate(['/listarproductos']);
    }
    

}
