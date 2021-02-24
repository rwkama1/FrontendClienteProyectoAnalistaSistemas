import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Cliente } from '../entidades/cliente';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';


@Injectable()
export class ClienteService {
    url = 'http://www.acarlosbackendd.somee.com/api/';
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers });
    constructor(private _http: Http) { }

    modificarCliente(cli: Cliente): Observable<Cliente> {
        return this._http.put(this.url + 'Cliente', cli, this.options)
            .map((res: Response) => res.json())
    }
    logout() {
        return this._http.head(this.url +'Cliente');
    }
   
    agregarCliente(cli: Cliente) {
        return this._http.post(this.url + 'Cliente', cli, this.options
        ).map((res: Response) => res.json())
    }
    getLogin(cedula: number, pass: string): Observable<Cliente> {
        return this._http.get(this.url + 'Cliente?cedula=' + cedula + '&pass=' + pass)
            .map((res: Response) => <Cliente>res.json())

    }
    getCliente(cedula: number): Observable<Cliente> {
        return this._http.get(this.url + 'Cliente?cedula=' + cedula)
            .map((res: Response) => <Cliente>res.json())

    }
    
}