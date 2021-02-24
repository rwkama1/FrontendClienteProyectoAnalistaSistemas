import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdenTallerService } from '../../../../servicio/ordetntallerservice';
import { OrdenTaller } from '../../../../entidades/ordentaller';
import { Http } from '@angular/http';


@Component({
    selector: 'verordentaller',
    templateUrl: './verordentaller.html'
})
export class VerOrdenTallerComponent implements OnInit {
    verot: FormGroup;

    ordentaller = JSON.parse(localStorage['ordenseleccionada']) as OrdenTaller;
  

    constructor(public http: Http, private _router: Router, private _fact: OrdenTallerService) {
    

        this.verot = new FormGroup
            (
            {

              
                idproducto: new FormControl(),
                cedulatecnico: new FormControl(),
                declaracioncliente: new FormControl(),
                cedulacliente: new FormControl(),
                fechaorden: new FormControl(),
                estadoorden: new FormControl(),
                precioot: new FormControl(),
                comentario: new FormControl(),               
            }
            );
        this.verot.patchValue
            (

            {
                    idproducto: this.ordentaller.ProductoOT,
                    cedulatecnico: this.ordentaller.TecnicoOT,
                    declaracioncliente: this.ordentaller.DeclaracionCOT,
                    cedulacliente: this.ordentaller.ClienteOT,
                    fechaorden: this.ordentaller.FechaOT,
                    estadoorden: this.ordentaller.EstadoOT,
                    precioot: "$" + this.ordentaller.PrecioOT,
                    comentario: this.ordentaller.ComentarioOT,
            }
            )
      
    }

   ngOnInit() {
      
    }
   
    volver()
    {
        this._router.navigate(['/listarordenestaller']);
    }

}
