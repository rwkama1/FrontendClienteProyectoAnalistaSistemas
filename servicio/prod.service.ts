import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Producto } from '../entidades/producto';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http, Response } from '@angular/http';


@Injectable()
export class ProdService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

      getlistarProductosConStock(): Observable<Producto[]>
    {
          return this._http.get(this.url + 'ListarProductosConStock')
              .map((res: Response) => <Producto[]>res.json());
    }
    buscarProductosporCriterio(criterio: string): Observable<Producto[]> {
        return this._http.get(this.url + 'BuscarProductosporCriterio?criterio=' + criterio)
            .map((res: Response) => <Producto[]>res.json());
    }
    getProducto(id: number): Observable<Producto> {
        return this._http.get(this.url + 'Producto?id=' + id)
            .map((res: Response) => <Producto>res.json());

    }
}