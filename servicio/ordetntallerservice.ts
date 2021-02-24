import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Producto } from '../entidades/producto';
import { OrdenTaller } from '../entidades/ordentaller';
import { Http, RequestOptions, Headers,Response } from '@angular/http';



@Injectable()
export class OrdenTallerService {

    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

   
    IngresarProducto(id: number): Observable<Producto> {
        return this._http.get(this.url + 'OrdenTaller?id=' + id)
            .map((res: Response) => <Producto>res.json());
         ;

    }
    AgregarOrdenTaller(ot: OrdenTaller): Observable<OrdenTaller> {
      
        return this._http.post(this.url + 'OrdenTaller', ot, this.options)
            .map((res: Response) => <OrdenTaller>res.json());
          
    }
    listarOrdenTaller(): Observable<OrdenTaller[]> {
        return this._http.get(this.url + 'OrdenTaller')
            .map((res: Response) => <OrdenTaller[]>res.json())

    }
    SeleccionarOrdenTaller(idot: number): Observable<OrdenTaller> {
        return this._http.get(this.url + 'SeleccionarOrdenTaller?idot=' + idot)
            .map((res: Response) => <OrdenTaller>res.json())

    }
    CambiarEstadoOrdenTaller(precio: number, comentario: string): Observable<OrdenTaller> {
        return this._http.get(this.url + 'CambiarEstadoOrdenTaller?precio=' + precio + "&comentario=" + comentario)
            .map((res: Response) => <OrdenTaller>res.json())

    }
    RechazarOrdenTaller(comentario: string): Observable<OrdenTaller> {
        return this._http.get(this.url + 'RechazarOrdenTaller?comentario=' + comentario)
            .map((res: Response) => <OrdenTaller>res.json())

    }
    ListarOrdenTallerCriterio(algo: string): Observable<OrdenTaller[]> {
        return this._http.get(this.url + 'ListarOrdenTallerCriterio?algo=' + algo)
            .map((res: Response) => < OrdenTaller[]>res.json())

    }
    ListarOrdenTallerCliente(cedula: number): Observable<OrdenTaller[]> {
        return this._http.get(this.url + 'ListarOrdenTallerCliente?cedula=' + cedula)
            .map((res: Response) => <OrdenTaller[]>res.json())

    }
}
