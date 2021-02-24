import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



import { Compra } from '../entidades/compra';
import { Observable } from 'rxjs/Observable';
import { LineaCompra } from '../entidades/lineacompra';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Venta } from '../entidades/venta';



@Injectable()
export class CompraService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

    iniciarCompra() {
        return this._http.head(this.url + 'Compra');
    }
    registrarLineaCompra(id: number, cantidad: number): Observable<LineaCompra> {
        return this._http.post(this.url + 'Compra?id=' + id + '&cantidad=' + cantidad, this.options) 
            .map((res: Response) => <LineaCompra> res.json())
    }
    listcomprascli(cedula: number): Observable<Compra[]> {
        return this._http.get(this.url + 'Compra?cedula=' + cedula )
            .map((res: Response) => <Compra[]>res.json())
    }
    listventacli(cedula: number): Observable<Venta[]> {
        return this._http.get(this.url + 'VentaWeb/ListarVentasClientes?cedula=' + cedula)
            .map((res: Response) => <Venta[]>res.json())
    }
    listcomprasclifecha(cedula: number, fecha1: string, fecha2: string): Observable<Compra[]> {
        return this._http.get(this.url + 'Compra?cedula=' + cedula + '&fecha1=' + fecha1 +'&fecha2='+fecha2)
            .map((res: Response) => <Compra[]>res.json())
    }
    cerrarCompra(formaentrega: string, metodopago: string,cliente:number): Observable<Compra> {
        return this._http.post(this.url + 'Compra?formaentrega=' + formaentrega + '&metodopago=' + metodopago + '&cliente=' + cliente,this.options)
            .map((res: Response) => <Compra>res.json())
    }
    getVenta(id: number): Observable<Venta> {
        return this._http.get(this.url + 'VentaPersonal?id=' + id)
            .map((res: Response) => <Venta>res.json())

    }
    
}